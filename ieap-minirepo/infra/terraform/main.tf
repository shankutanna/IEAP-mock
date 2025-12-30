# Terraform example skeleton (AWS) - modify variables and provider as needed.
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  required_version = ">= 1.4.0"
}

provider "aws" {
  region = var.aws_region
}

resource "aws_vpc" "ieap_vpc" {
  cidr_block = "10.0.0.0/16"
  tags = { Name = "ieap-vpc" }
}

# Example EC2 for Jenkins (not required for Minikube practice)
resource "aws_instance" "jenkins" {
  ami           = var.ami_id
  instance_type = var.instance_type
  subnet_id     = var.subnet_id
  tags = { Name = "jenkins-server" }
}
