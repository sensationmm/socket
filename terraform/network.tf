# network.tf

# Create var.az_count private subnets, each in a different AZ
resource "aws_subnet" "private" {
  count             = var.az_count
  cidr_block        = cidrsubnet(aws_vpc.main.cidr_block, 8, count.index)
  availability_zone = data.aws_availability_zones.available.names[count.index]
  vpc_id            = aws_vpc.main.id
}

# Create var.az_count public subnets, each in a different AZ
resource "aws_subnet" "public" {
  count                   = var.az_count
  cidr_block              = cidrsubnet(aws_vpc.main.cidr_block, 8, var.az_count + count.index)
  availability_zone       = data.aws_availability_zones.available.names[count.index]
  vpc_id                  = aws_vpc.main.id
  map_public_ip_on_launch = true
}

resource "aws_nat_gateway" "gw" {
  count         = var.az_count
  subnet_id     = element(aws_subnet.public.*.id, count.index)
  allocation_id = element(aws_eip.gw.*.id, count.index)
}

# Create a new route table for the private subnets, make it route non-local traffic through the NAT gateway to the internet
resource "aws_route_table" "private" {
  count  = var.az_count
  vpc_id = aws_vpc.da_vpc.id

  route {
    cidr_block     = "0.0.0.0/0"
    nat_gateway_id = element(aws_nat_gateway.gw.*.id, count.index)
  }
}

# Explicitly associate the newly created route tables to the private subnets (so they don't default to the main route table)
resource "aws_route_table_association" "private" {
  count          = var.az_count
  subnet_id      = element(aws_subnet.private.*.id, count.index)
  route_table_id = element(aws_route_table.private.*.id, count.index)
}

# Fetch AZs in the current region
data "aws_availability_zones" "available" {
}

resource "aws_vpc" "da_vpc" {
  cidr_block = "10.0.0.0/16"

  tags = {
    Name = "da_vpc"
  }
}

# Internet Gateway for the public subnet
resource "aws_internet_gateway" "vpc_gw" {
  vpc_id = aws_vpc.da_vpc.id
}


# Route the public subnet traffic through the IGW
resource "aws_route" "internet_access" {
  route_table_id         = aws_vpc.da_vpc.main_route_table_id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.vpc_gw.id
}

resource "aws_subnet" "da_vpc_subnet" {
  vpc_id            = "${aws_vpc.da_vpc.id}"
  cidr_block        = "10.0.0.0/24"
  availability_zone = "eu-west-1a"

  tags = {
    Name = "da_vpc_subnet"
  }
}

resource "aws_network_interface" "da_apollo_network_interface" {
  subnet_id   = "${aws_subnet.da_vpc_subnet.id}"
  private_ips = ["10.0.0.110"]
  security_groups = ["${aws_security_group.somo_webteam.id}"]

  tags = {
    Name = "da_apollo_network_interface"
  }
}
resource "aws_network_interface" "da_gatsby_primary_network_interface" {
  subnet_id   = "${aws_subnet.da_vpc_subnet.id}"
  private_ips = ["10.0.0.100"]
  security_groups = ["${aws_security_group.somo_webteam.id}"]

  tags = {
    Name = "da_gatsby_network_interface"
  }
}

#Elastic IP for NAT Gateway - for each private subnet to get internet connectivity
resource "aws_eip" "da_elastic_ip" {
  vpc = true
  count      = var.az_count
  depends_on                = ["aws_internet_gateway.vpc_gw"]
}