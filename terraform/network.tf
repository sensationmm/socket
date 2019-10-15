# network.tf

# Create var.az_count private subnets, each in a different AZ
resource "aws_subnet" "da_vpc_subnet" {
  count             = var.az_count
  cidr_block        = cidrsubnet(aws_vpc.da_vpc.cidr_block, 8, count.index)
  availability_zone = data.aws_availability_zones.available.names[count.index]

  vpc_id            = aws_vpc.da_vpc.id
  tags = {
    Name = "da_vpc_private_subnet"
  }
}

# Create var.az_count public subnets, each in a different AZ
resource "aws_subnet" "public" {
  count                   = var.az_count
  cidr_block              = cidrsubnet(aws_vpc.da_vpc.cidr_block, 8, var.az_count + count.index)
  availability_zone       = data.aws_availability_zones.available.names[count.index]

  vpc_id                  = aws_vpc.da_vpc.id
  map_public_ip_on_launch = true
  tags = {
    Name = "da_vpc_public_subnet"
  }
}

resource "aws_nat_gateway" "gw" {
  count         = var.az_count
  subnet_id     = element(aws_subnet.public.*.id, count.index)
  allocation_id = element(aws_eip.da_elastic_ip.*.id, count.index)
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
  subnet_id      = element(aws_subnet.da_vpc_subnet.*.id, count.index)
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

resource "aws_egress_only_internet_gateway" "da_egress_gateway" {
  vpc_id = aws_vpc.da_vpc.id
}


# Route the public subnet traffic through the IGW
resource "aws_route" "internet_access" {
  route_table_id         = aws_vpc.da_vpc.main_route_table_id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.vpc_gw.id
}

resource "aws_network_interface" "da_gatsby_primary_network_interface" {
  count  = var.az_count
  subnet_id       = element(aws_subnet.da_vpc_subnet.*.id, count.index)

  security_groups = [aws_security_group.somo_webteam.id]

  tags = {
    Name = "da_gatsby_network_interface"
  }
}


resource "aws_network_interface" "da_c_and_c_primary_network_interface" {
  count  = var.az_count
  subnet_id       = element(aws_subnet.da_vpc_subnet.*.id, count.index)

  security_groups = [aws_security_group.somo_webteam.id]

  tags = {
    Name = "da_c_and_c_network_interface"
  }
}

#Elastic IP for NAT Gateway - for each private subnet to get internet connectivity
resource "aws_eip" "da_elastic_ip" {
  vpc = true
  count      = var.az_count
  depends_on                = [aws_internet_gateway.vpc_gw]
}
