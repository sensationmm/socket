# variables.tf

variable "availability_zone_names" {
  type    = list(string)
  default = ["eu-west-1a", "eu-west-1b"]
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

variable "az_count" {
  description = "Number of AZs to cover in a given region"
  default     = "2"
}

variable "c_and_c_ami" {
  description = "Linux image for base C&C server"
  default     = "ami-0ce71448843cb18a1" #eu-west-1
}

variable "app_port" {
  description = "C and C server"
  default     = "3000"
}

variable "environment" {
  description = "environment for codepipeline"
  default     = "develop"
}
