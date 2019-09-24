#storage.tf
#TODO - add dynamo DB for guest list/subscribers
resource "aws_s3_bucket" "da_gatsby_bucket" {
  bucket = "da-gatsby-bucket"
  acl    = "private"
}

resource "aws_s3_bucket" "da_apollo_bucket" {
  bucket = "da-apollo-bucket"
  acl    = "private"
}

resource "aws_dynamodb_table" "da_guest_list" {
  name = "da-guest-list"
  hash_key = "LockID"
  read_capacity = 20
  write_capacity = 20

  attribute {
    name = "LockID"
    type = "S"
  }
}
