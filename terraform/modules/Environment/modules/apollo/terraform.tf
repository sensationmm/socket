terraform {
 backend "s3" {
 encrypt   = true
 bucket    = "da-terraform-remote-state-bucket"
 dynamodb_table = "terraform-state-lock-dynamo"
 region    = "eu-west-1"
 key       = "terraform.tfstate"
 }
}
