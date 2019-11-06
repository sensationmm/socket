# provider.tf
provider "aws" {
  shared_credentials_file = "./.shared_credentials"
  profile                 = "TerraformDA"
  region                  = var.aws_region
}

resource "aws_dynamodb_table" "terraform-state-lock-dynamo" {
  name = "terraform-state-lock-dynamo"
  hash_key = "LockID"
  read_capacity = 20
  write_capacity = 20

  attribute {
    name = "LockID"
    type = "S"
  }
}

module "environment" {
  source = "./modules/environment"

  private_subnet_ids = aws_subnet.da_vpc_subnet.*.id
  vpc_id = aws_vpc.da_vpc.id
  public_subnet_ids = aws_subnet.public.*.id
  environment  = var.environment
  aws_region  = var.aws_region
  availability_zone_names = var.availability_zone_names
  az_count = var.az_count
  somo_webteam = aws_security_group.somo_webteam.id
}
