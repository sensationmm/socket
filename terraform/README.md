# Requirements
- set up an account area for you project in AWS console
- set up 2 keypairs
  - DAGatsby
  - DAApollo
- set up .shared_credentials file in the following format:

  > [Terraform]
  > aws_access_key_id=x
  > aws_secret_access_key=x

- set up S3 bucket with name matching in terraform.tf e.g: bucket = "da-terraform-remote-state-bucket"
- provide this S3 bucket with a policy similar to this:
  `{ "Version": "2012-10-17", "Id": "Policy1569934262834", "Statement": [ { "Sid": "Stmt1569934259833", "Effect": "Allow", "Principal": { "AWS": [ "arn:aws:iam::824986930889:user/Terraform", "arn:aws:iam::824986930889:root", "arn:aws:iam::824986930889:role/OrganizationAccountAccessRole" ] }, "Action": "s3:*", "Resource": [ "arn:aws:s3:::da-terraform-remote-state-bucket", "arn:aws:s3:::da-terraform-remote-state-bucket/*" ] } ] }`
- Replace the principal account IDs with your own. Replace the "Terraform" user with the user of your terraform environment

# Run

> initial set up will require using the -lock=false parameter until the database responsible for storing lock info is created.
> `terraform init terraform plan terraform apply`

# Destroy
- on destruction the remaining components may not be removed:
  - S3 buckets with content
  - dynamoDB Databases
  - IAM roles
