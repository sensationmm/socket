resource "aws_s3_bucket" "codepipeline_bucket" {
  bucket = "da-codepipeline-bucket"
  acl    = "private"
  cors_rule {
          allowed_headers = [
              "Authorization",
              "Content-Length",
            ]
          allowed_methods = ["GET"]
          allowed_origins = ["*"]
          expose_headers  = []
          max_age_seconds = 3000
        }

        versioning {
            enabled    = false
            mfa_delete = false
        }

      website {
        error_document = "error.html"
        index_document = "index.html"
      }
}

resource "aws_iam_role" "codepipeline_role" {
  name = "da-codepipeline-role"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "codepipeline.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF
}

resource "aws_iam_role_policy" "codepipeline_policy" {
  name = "codepipeline_policy"
  role = "${aws_iam_role.codepipeline_role.id}"

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect":"Allow",
      "Action": [
        "s3:GetObject",
        "s3:GetObjectVersion",
        "s3:GetBucketVersioning",
        "s3:PutObject"
      ],
      "Resource": [
        "${aws_s3_bucket.codepipeline_bucket.arn}",
        "${aws_s3_bucket.codepipeline_bucket.arn}/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "codebuild:BatchGetBuilds",
        "codebuild:StartBuild"
      ],
      "Resource": "*"
    }
  ]
}
EOF
}
