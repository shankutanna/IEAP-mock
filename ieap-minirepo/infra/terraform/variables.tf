variable "aws_region" {
  type    = string
  default = "us-east-1"
}
variable "ami_id" {
  type = string
  default = "ami-0c94855ba95c71c99" # replace with a valid AMI in your region
}
variable "instance_type" {
  type = string
  default = "t3.micro"
}
variable "subnet_id" {
  type = string
  default = ""
}
