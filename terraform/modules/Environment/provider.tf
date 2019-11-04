# provider.tf
provider "aws" {
  shared_credentials_file = "./.shared_credentials"
  profile                 = "TerraformDA"
  region                  = var.aws_region
}

module "apollo" {
  source = "./modules/apollo"

  ecs_task_execution_role_name = "myEcsTaskExecutionRole"
  ecs_auto_scale_role_name = "myEcsAutoScaleRole"
  app_image = "gmod/apollo:latest"
  app_count = 1
  app_port = 8888
  fargate_cpu = 256
  fargate_memory = 1024

  #passed down

  private_subnet_ids = var.private_subnet_ids
  vpc_id = var.vpc_id
  public_subnet_ids =  var.public_subnet_ids
  environment  = var.environment
  aws_region  = var.aws_region
  availability_zone_names = var.availability_zone_names
  az_count = var.az_count
  somo_webteam = var.somo_webteam
}

module "gatsby" {
  source = "./modules/gatsby"
  git_location = "https://github.com/SomoGlobal/pureda-mono.git"

  #passed down
  private_subnet_ids = var.private_subnet_ids
  vpc_id = var.vpc_id
  public_subnet_id =  var.public_subnet_ids
  environment  = var.environment
  aws_region  = var.aws_region
  availability_zone_names = var.availability_zone_names
  az_count = var.az_count
}


#resource "aws_dynamodb_table" "terraform-state-lock-dynamo" {
#  name = "terraform-state-lock-dynamo"
#  hash_key = "LockID"
#  read_capacity = 20
#  write_capacity = 20
#
#  attribute {
#    name = "LockID"
#    type = "S"
#  }
#}
