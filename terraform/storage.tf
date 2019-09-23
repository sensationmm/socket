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
