# Requirements

* set up an account area for you project in AWS console
* set up 2 keypairs
  * DAGatsby
  * DAApollo
* set up .shared_credentials file in the following format:
> [Terraform]
> aws_access_key_id=x
> aws_secret_access_key=x

* set up S3 bucket with name matching in terraform.tf e.g: bucket    = "da-terraform-remote-state-bucket"

# Run

>initial set up will require using the -lock=false parameter until the database responsible for storing lock info is created.
`terraform init
terraform plan
terraform apply`
