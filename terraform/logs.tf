# logs.tf

# Set up CloudWatch group and log stream and retain logs for 30 days
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
