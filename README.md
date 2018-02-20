# AWS tools

Command line tools for [AWS](https://aws.amazon.com/).

## Create an instance from an image

Launch an Instance from an AMI.

You can find your AMI ID
[here](https://console.aws.amazon.com/ec2/v2/home?Images).

`node create-instance.js [AMI ID]`

Returns this object...

```
{
  "Groups": [],
  "Instances": [
    {
      "AmiLaunchIndex": 0,
      "ImageId": "ami-f5a3b98f",
      "InstanceId": "i-0709d867bca803377",
      "InstanceType": "t2.micro",
      "LaunchTime": "2018-02-20T22:47:34.000Z",
      "Monitoring": {
        "State": "disabled"
      },
      "Placement": {
        "AvailabilityZone": "us-east-1b",
        "GroupName": "",
        "Tenancy": "default"
      },
      "PrivateDnsName": "ip-172-31-25-252.ec2.internal",
      "PrivateIpAddress": "172.31.25.252",
      "ProductCodes": [],
      "PublicDnsName": "",
      "State": {
        "Code": 0,
        "Name": "pending"
      },
      "StateTransitionReason": "",
      "SubnetId": "subnet-2d908266",
      "VpcId": "vpc-3e4d8f45",
      "Architecture": "x86_64",
      "BlockDeviceMappings": [],
      "ClientToken": "",
      "EbsOptimized": false,
      "Hypervisor": "xen",
      "ElasticGpuAssociations": [],
      "NetworkInterfaces": [
        {
          "Attachment": {
            "AttachTime": "2018-02-20T22:47:34.000Z",
            "AttachmentId": "eni-attach-6d599764",
            "DeleteOnTermination": true,
            "DeviceIndex": 0,
            "Status": "attaching"
          },
          "Description": "",
          "Groups": [
            {
              "GroupName": "default",
              "GroupId": "sg-97ffdbe0"
            }
          ],
          "Ipv6Addresses": [],
          "MacAddress": "0a:20:6b:22:d2:38",
          "NetworkInterfaceId": "eni-63fdb99e",
          "OwnerId": "306277995826",
          "PrivateDnsName": "ip-172-31-25-252.ec2.internal",
          "PrivateIpAddress": "172.31.25.252",
          "PrivateIpAddresses": [
            {
              "Primary": true,
              "PrivateDnsName": "ip-172-31-25-252.ec2.internal",
              "PrivateIpAddress": "172.31.25.252"
            }
          ],
          "SourceDestCheck": true,
          "Status": "in-use",
          "SubnetId": "subnet-2d908266",
          "VpcId": "vpc-3e4d8f45"
        }
      ],
      "RootDeviceName": "/dev/sda1",
      "RootDeviceType": "ebs",
      "SecurityGroups": [
        {
          "GroupName": "default",
          "GroupId": "sg-97ffdbe0"
        }
      ],
      "SourceDestCheck": true,
      "StateReason": {
        "Code": "pending",
        "Message": "pending"
      },
      "Tags": [],
      "VirtualizationType": "hvm"
    }
  ],
  "OwnerId": "306277995826",
  "ReservationId": "r-0124c9e7453b7d951"
}
```
