# provider.tf
provider "aws" {
  shared_credentials_file = "./.shared_credentials"
  profile                 = "TerraformDA"
  region                  = var.aws_region
}
