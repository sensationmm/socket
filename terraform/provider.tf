# provider.tf
provider "aws" {
  shared_credentials_file = "./.shared_credentials"
  profile                 = "Terraform"
  region                  = var.aws_region
}
