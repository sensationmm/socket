# --- load balancer ---
resource "aws_alb" "apollo" {
  name            = "apollo-load-balancer"
  subnets         = var.private_subnet_ids
  security_groups = [var.somo_webteam]
}

resource "aws_alb_target_group" "app" {
  name        = "apollo-target-group"
  port        = var.app_port
  protocol    = "HTTP"
  vpc_id      = var.vpc_id
  target_type = "ip"

  health_check {
    healthy_threshold   = "3"
    interval            = "30"
    protocol            = "HTTP"
    matcher             = "200"
    timeout             = "3"
    path                = "/"
    unhealthy_threshold = "2"
  }
}

resource "aws_alb_listener" "front_end" {
  load_balancer_arn = aws_alb.apollo.id
  port              = var.app_port
  protocol          = "HTTP"

  default_action {
    target_group_arn = aws_alb_target_group.app.id
    type             = "forward"
  }
}

# --- ECS Definition ---
resource "aws_appautoscaling_target" "target" {
  service_namespace  = "ecs"
  resource_id        = "service/${aws_ecs_cluster.apollo_ecs_cluster.name}/${aws_ecs_service.apollo_service.name}"
  scalable_dimension = "ecs:service:DesiredCount"
  role_arn           = aws_iam_role.ecs_auto_scale_role.arn
  min_capacity       = 1
  max_capacity       = 3
}

# Automatically scale capacity up by one
resource "aws_appautoscaling_policy" "up" {
  name               = "apollo_scale_up"
  service_namespace  = "ecs"
  resource_id        = "service/${aws_ecs_cluster.apollo_ecs_cluster.name}/${aws_ecs_service.apollo_service.name}"
  scalable_dimension = "ecs:service:DesiredCount"

  step_scaling_policy_configuration {
    adjustment_type         = "ChangeInCapacity"
    cooldown                = 60
    metric_aggregation_type = "Maximum"

    step_adjustment {
      metric_interval_lower_bound = 0
      scaling_adjustment          = 1
    }
  }

  depends_on = [aws_appautoscaling_target.target]
}

# Automatically scale capacity down by one
resource "aws_appautoscaling_policy" "down" {
  name               = "apollo_scale_down"
  service_namespace  = "ecs"
  resource_id        = "service/${aws_ecs_cluster.apollo_ecs_cluster.name}/${aws_ecs_service.apollo_service.name}"
  scalable_dimension = "ecs:service:DesiredCount"

  step_scaling_policy_configuration {
    adjustment_type         = "ChangeInCapacity"
    cooldown                = 60
    metric_aggregation_type = "Maximum"

    step_adjustment {
      metric_interval_lower_bound = 0
      scaling_adjustment          = -1
    }
  }

  depends_on = [aws_appautoscaling_target.target]
}

# CloudWatch scale down
resource "aws_cloudwatch_metric_alarm" "service_cpu_high" {
  alarm_name          = "apollo_cpu_utilization_high"
  comparison_operator = "GreaterThanOrEqualToThreshold"
  evaluation_periods  = "2"
  metric_name         = "CPUUtilization"
  namespace           = "AWS/ECS"
  period              = "60"
  statistic           = "Average"
  threshold           = "95"

  dimensions = {
    ClusterName = aws_ecs_cluster.apollo_ecs_cluster.name
    ServiceName = aws_ecs_service.apollo_service.name
  }

  alarm_actions = [aws_appautoscaling_policy.up.arn]
}

# CloudWatch scale down
resource "aws_cloudwatch_metric_alarm" "service_cpu_low" {
  alarm_name          = "apollo_cpu_utilization_low"
  comparison_operator = "LessThanOrEqualToThreshold"
  evaluation_periods  = "2"
  metric_name         = "CPUUtilization"
  namespace           = "AWS/ECS"
  period              = "60"
  statistic           = "Average"
  threshold           = "30"

  dimensions = {
    ClusterName = aws_ecs_cluster.apollo_ecs_cluster.name
    ServiceName = aws_ecs_service.apollo_service.name
  }

  alarm_actions = [aws_appautoscaling_policy.down.arn]
}

resource "aws_ecs_cluster" "apollo_ecs_cluster" {
  name = "apollo-ecs-cluster"
}

data "template_file" "apollo_app" {
  template = file("./templates/ecs/apollo_app.json.tpl")
  vars = {
    host_port      = 8080
    app_image      = var.app_image
    app_port       = var.app_port
    fargate_cpu    = var.fargate_cpu
    fargate_memory = var.fargate_memory
    aws_region     = var.aws_region
  }
}

resource "aws_ecs_task_definition" "app" {
  family                   = "apollo-app-task"
  execution_role_arn       = aws_iam_role.ecs_task_execution_role.arn
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = var.fargate_cpu
  memory                   = var.fargate_memory
  container_definitions    = data.template_file.apollo_app.rendered
}

resource "aws_ecs_service" "apollo_service" {
  name                = "apollo-service"
  cluster             = aws_ecs_cluster.apollo_ecs_cluster.id
  task_definition     = aws_ecs_task_definition.app.arn
  desired_count       = var.app_count
  launch_type         = "FARGATE"

  network_configuration {
    security_groups   = [var.somo_webteam]
    subnets           = var.private_subnet_ids
    assign_public_ip  = true
  }

  load_balancer {
    target_group_arn  = aws_alb_target_group.app.id
    container_name    = "apollo-app"
    container_port    = var.app_port
  }

  depends_on = [aws_alb_listener.front_end, aws_iam_role_policy_attachment.ecs_task_execution_role]
}

# --- logs ---
#Set up CloudWatch group and log stream and retain logs for 30 days
resource "aws_cloudwatch_log_group" "apollo_log_group" {
 name              = "/ecs/apollo-app"
 retention_in_days = 30

 tags = {
   Name = "apollo-log-group"
 }
}

resource "aws_cloudwatch_log_stream" "apollo_log_stream" {
 name           = "apollo-log-stream"
 log_group_name = aws_cloudwatch_log_group.apollo_log_group.name
}

# --- ECS task execution role data ---
data "aws_iam_policy_document" "ecs_task_execution_role" {
  version = "2012-10-17"
  statement {
    sid = ""
    effect = "Allow"
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["ecs-tasks.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "ecs_task_execution_role" {
  name                = var.ecs_task_execution_role_name
  assume_role_policy  = data.aws_iam_policy_document.ecs_task_execution_role.json
}

resource "aws_iam_role_policy_attachment" "ecs_task_execution_role" {
  role                = aws_iam_role.ecs_task_execution_role.name
  policy_arn          = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

data "aws_iam_policy_document" "ecs_auto_scale_role" {
  version = "2012-10-17"
  statement {
    effect = "Allow"
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["application-autoscaling.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "ecs_auto_scale_role" {
  name               = var.ecs_auto_scale_role_name
  assume_role_policy = data.aws_iam_policy_document.ecs_auto_scale_role.json
}

resource "aws_iam_role_policy_attachment" "ecs_auto_scale_role" {
  role       = aws_iam_role.ecs_auto_scale_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonEC2ContainerServiceAutoscaleRole"
}
