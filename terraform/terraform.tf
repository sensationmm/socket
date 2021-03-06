terraform {
 backend "s3" {
 encrypt   = true
 bucket    = "da-terraform-remote-state-bucket"
 dynamodb_table = "terraform-state-lock-dynamo"
 key       = "terraform.tfstate"
 }
 
  required_version = ">= 0.12"
}
