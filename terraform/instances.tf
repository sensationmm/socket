#Todo - internet gateway 50/50
#Todo - implement fargate cluster on gatsby image

resource "aws_instance" "da_gatsby" {
  count  = var.az_count
  ami           = var.gatsby_ami #eu-west-1
  instance_type = "t2.micro"
  key_name = "DAGatsby"

  network_interface {
    network_interface_id = element(aws_network_interface.da_gatsby_primary_network_interface.*.id, count.index)
    device_index         = 0
  }

  tags = {
    Name = "DA Gatsby Server"
  }
}

resource "aws_instance" "da_c_and_c" {
  count  = var.az_count
  ami           = var.c_and_c_ami #eu-west-1 this linux image is fine
  instance_type = "t2.micro"
  key_name = "DAC&C"

  network_interface {
    network_interface_id = element(aws_network_interface.da_c_and_c_primary_network_interface.*.id, count.index)
    device_index         = 0
  }

  tags = {
    Name = "DA C&C Server"
  }
}
