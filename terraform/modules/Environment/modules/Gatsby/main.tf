#cloudfront.tf

resource "aws_cloudfront_origin_access_identity" "origin_access_identity" {
  comment = "PuredaOAI"
}

locals {
  s3_origin_id = aws_cloudfront_origin_access_identity.origin_access_identity.id
}

resource "aws_cloudfront_distribution" "gatsby_distribution" {
  origin {
    domain_name = aws_s3_bucket.da_gatsby_bucket.bucket_regional_domain_name
    origin_id   = local.s3_origin_id
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "Some comment"
  default_root_object = "index.html"



  #aliases = ["pureda.com", "pureda.socket.com"]

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "allow-all"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  # Cache behavior with precedence 0
  ordered_cache_behavior {
    path_pattern     = "/content/immutable/*"
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD", "OPTIONS"]
    target_origin_id = local.s3_origin_id

    forwarded_values {
      query_string = false
      headers      = ["Origin"]

      cookies {
        forward = "none"
      }
    }

    min_ttl                = 0
    default_ttl            = 86400
    max_ttl                = 31536000
    compress               = true
    viewer_protocol_policy = "redirect-to-https"
  }

  # Cache behavior with precedence 1
  ordered_cache_behavior {
    path_pattern     = "/content/*"
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
    compress               = true
    viewer_protocol_policy = "redirect-to-https"
  }

  price_class = "PriceClass_200"

  restrictions {
    geo_restriction {
      restriction_type = "whitelist"
      locations        = ["US", "CA", "GB", "DE"]
    }
  }

  tags = {
    Environment = var.environment
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}

resource "aws_s3_bucket" "da_gatsby_bucket" {
  bucket = "da-gatsby-bucket"
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
        error_document = "404.html"
        index_document = "index.html"
      }

      policy = <<POLICY
{
"Version": "2012-10-17",
"Id": "Policy1569934262834",
"Statement": [
    {
        "Sid": "Stmt1569934259833",
        "Effect": "Allow",
        "Principal": {
            "AWS": [
                "arn:aws:iam::824986930889:root",
                "arn:aws:iam::824986930889:role/service-role/codebuild-pureda-mono-service-role",
                "arn:aws:iam::824986930889:role/service-role/codebuild-Pure-DA-Mono-service-role"
            ]
        },
        "Action": "s3:*",
        "Resource": [
            "arn:aws:s3:::da-gatsby-bucket",
            "arn:aws:s3:::da-gatsby-bucket/*"
        ]
    }
]
}
POLICY
}

resource "aws_iam_role" "codepipeline_role" {
  name = "da-codepipeline-deployment-role"

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
  role = aws_iam_role.codepipeline_role.id

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
        "${aws_s3_bucket.da_gatsby_bucket.arn}",
        "${aws_s3_bucket.da_gatsby_bucket.arn}/*"
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

resource "aws_codebuild_project" "da_gatsby_codebuild" {
  name          = "pureda-mono-develop-build"
  description   = "codebuild project to create gatsby static html"
  service_role  = "arn:aws:iam::824986930889:role/service-role/codebuild-pureda-mono-service-role"

  artifacts {
    type = "NO_ARTIFACTS"
  }

  environment {
    compute_type                = "BUILD_GENERAL1_SMALL"
    image                       = "aws/codebuild/amazonlinux2-x86_64-standard:1.0"
    type                        = "LINUX_CONTAINER"
    image_pull_credentials_type = "CODEBUILD"

    environment_variable {
      name  = "environment"
      value = var.environment
    }
    environment_variable {
      name  = "S3Bucket"
      value = "s3://da-codepipeline-bucket"
    }
    environment_variable {
      name  = "SiteBucket"
      value = "s3://da-gatsby-bucket"
    }
  }

  logs_config {
    cloudwatch_logs {
      group_name = "log-group"
      stream_name = "log-stream"
    }
  }

  source {
    type            = "GITHUB"
    location        = var.git_location
    git_clone_depth = 1
    buildspec       = "codepipeline/buildspec-develop.yml"
  }

  tags = {
    Environment = "Gatsby build develop"
  }
}
