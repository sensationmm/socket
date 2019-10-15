
resource "aws_security_group" "somo_webteam" {
  vpc_id            = "${aws_vpc.da_vpc.id}"
  tags = {
    Name = "Somo_WebTeam"
  }
}

#Ingress
resource "aws_security_group_rule" "allow_http" {
  type              = "ingress"
  description       = "HTTP in"
  from_port         = 80
  to_port           = 80
  protocol          = "tcp"
  cidr_blocks       = var.our_cidr_block
  security_group_id = "${aws_security_group.somo_webteam.id}"
}

resource "aws_security_group_rule" "allow_ssh" {
  type              = "ingress"
  description       = "SSH in"
  from_port         = 22
  to_port           = 22
  protocol          = "tcp"
  cidr_blocks       = var.our_cidr_block
  security_group_id = "${aws_security_group.somo_webteam.id}"
}

resource "aws_security_group_rule" "allow_CNC" {
  type              = "ingress"
  description       = "CNC port in"
  from_port         = 3000
  to_port           = 3000
  protocol          = "tcp"
  cidr_blocks       = var.our_cidr_block
  security_group_id = "${aws_security_group.somo_webteam.id}"
}

resource "aws_security_group_rule" "allow_https" {
  type              = "ingress"
  description       = "HTTPS in"
  from_port         = 443
  to_port           = 443
  protocol          = "tcp"
  cidr_blocks       = var.our_cidr_block
  security_group_id = "${aws_security_group.somo_webteam.id}"
}

resource "aws_security_group_rule" "allow_app_port_in" {
  type              = "ingress"
  description       = "app port in"
  from_port         = var.app_port
  to_port           = var.app_port
  protocol          = "tcp"
  cidr_blocks       = var.our_cidr_block
  security_group_id = "${aws_security_group.somo_webteam.id}"
}

#Egress
resource "aws_security_group_rule" "allow_http_out" {
  type              = "egress"
  description       = "HTTP out"
  from_port         = 80
  to_port           = 80
  protocol          = "tcp"
  cidr_blocks       = var.our_cidr_block
  security_group_id = "${aws_security_group.somo_webteam.id}"
}

resource "aws_security_group_rule" "allow_https_out" {
  type              = "egress"
  description       = "HTTPS out"
  from_port         = 433
  to_port           = 433
  protocol          = "tcp"
  cidr_blocks       = var.our_cidr_block
  security_group_id = "${aws_security_group.somo_webteam.id}"
}

resource "aws_security_group_rule" "allow_app_port_out" {
  type              = "egress"
  description       = "app port out"
  from_port         = var.app_port
  to_port           = var.app_port
  protocol          = "tcp"
  cidr_blocks       = var.our_cidr_block
  security_group_id = "${aws_security_group.somo_webteam.id}"
}
resource "aws_security_group_rule" "allow_CNC_out" {
  type              = "egress"
  description       = "CNC port out"
  from_port         = 3000
  to_port           = 3000
  protocol          = "tcp"
  cidr_blocks       = var.our_cidr_block
  security_group_id = "${aws_security_group.somo_webteam.id}"
}
