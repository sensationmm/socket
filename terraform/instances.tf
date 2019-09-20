#Todo - internet gateway 50/50
#Todo - implement fargate cluster on gatsby image (this will break future migration)

resource "aws_s3_bucket" "DA_Gatsby" {
  bucket = "da-gatsby"
  acl    = "private"
}

resource "aws_instance" "da_gatsby" {
  ami           = var.docker_ami #eu-west-1
  instance_type = "t2.micro"
  key_name = "DAGatsby"

  network_interface {
    network_interface_id = "${aws_network_interface.Somo_Sandbox_Nodejs.id}"
    device_index         = 0
  }

  tags = {
    Name = "DA Gatsby Server"
  }
}
