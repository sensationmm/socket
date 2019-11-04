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
