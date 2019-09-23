# variables.tf
#insecure Todo - Figure out correct cidr security ip range
#Todo - select ami

variable "availability_zone_names" {
  type    = list(string)
  default = ["eu-west-1a"]
}

#insecure Todo - Figure out correct ip range
variable "our_cidr_block" {
  type    = list(string)
  default = ["0.0.0.0/0"]
}

variable "aws_region" {
  description = "The AWS region things are created in"
  default     = "eu-west-1"
}

variable "ecs_task_execution_role_name" {
  description = "ECS task execution role name"
  default = "myEcsTaskExecutionRole"
}

variable "ecs_auto_scale_role_name" {
  description = "ECS auto scale role Name"
  default = "myEcsAutoScaleRole"
}

variable "az_count" {
  description = "Number of AZs to cover in a given region"
  default     = "2"
}

variable "app_image" {
  description = "Docker image to run in the ECS cluster"
  default     = "gmod/apollo:latest"
}

variable "app_count" {
  description = "Number of docker containers to run"
  default     = 3
}

variable "app_port" {
  description = "Port exposed by the docker image to redirect traffic to"
  default     = 8080
}
variable "docker_ami" {
  description = "image for base docker server"
  default     = "select ami" #eu-west-1
}

variable "health_check_path" {
  default = "/"
}

variable "fargate_cpu" {
  description = "Fargate instance CPU units to provision (1 vCPU = 1024 CPU units)"
  default     = "256"
}

variable "fargate_memory" {
  description = "Fargate instance memory to provision (in MiB)"
  default     = "1024"
}
