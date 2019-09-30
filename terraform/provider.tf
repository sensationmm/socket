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
