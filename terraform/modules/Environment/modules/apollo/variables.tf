#------------------ECS controls---------------

variable "ecs_task_execution_role_name" {
  description = "ECS task execution role name"
  default = "myEcsTaskExecutionRole"
}

variable "ecs_auto_scale_role_name" {
  description = "ECS auto scale role Name"
  default = "myEcsAutoScaleRole"
}

variable "app_image" {
  description = "Docker image to run in the ECS cluster"
  default     = "gmod/apollo:latest"
}

variable "app_count" {
  description = "Number of apollo nodes to run"
  default     = 1
}

variable "app_port" {
  description = "Port exposed by apollo to redirect traffic to"
  default     = 4000
}

variable "fargate_cpu" {
  description = "Fargate instance CPU units to provision (1 vCPU = 1024 CPU units)"
  default     = 256
}

variable "fargate_memory" {
  description = "Fargate instance memory to provision (in MiB)"
  default     = 1024
}

#------------------Environment---------------

variable "environment" {
  description = "environment for codepipeline"
  default     = "develop"
}

variable "vpc_id" {
  description = "vpc for deployment"
  default     = "vpc-123"
}

variable "private_subnet_ids" {
  description = "subnet for ECS"
  type    = list(string)
  default     = ["subnet123","subnet123"]
}

variable "public_subnet_ids" {
  description = "subnet for Loadbalancer"
  type    = list(string)
  default     = ["subnet123","subnet123"]
}

variable "aws_region" {
  description = "The AWS region things are created in"
  default     = "eu-west-1"
}

variable "availability_zone_names" {
  type    = list(string)
  default = ["eu-west-1a", "eu-west-1b"]
}

variable "az_count" {
  description = "Number of AZs to cover in a given region"
  default     = 2
}

variable "somo_webteam" {
description = "security team id"
default     = "sg123"
}
