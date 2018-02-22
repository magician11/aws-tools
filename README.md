# AWS tools

Command line tools for [AWS](https://aws.amazon.com/).

## Installation

* Clone this repository: `git clone https://github.com/magician11/aws-tools.git`
* Enter that directory: `cd aws-tools`
* Install the packages: `yarn` or `npm install`

Then create a `config.json` file at the root of this directory with the
following structure...

```
{
  "accessKeyId": "your access key ID",
  "secretAccessKey": "your secret access key",
  "region": "us-east-1"
}
```

To get your keys, setup a user
[here](https://console.aws.amazon.com/iam/home#/users).

You can find a list of all the region slugs
[here](https://docs.aws.amazon.com/general/latest/gr/rande.html#apigateway_region).

## Command line tools

The commands that can be run from the command line.

### Create an instance from an image

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

### Terminate an Instance

To get the Instance ID
[click here](https://console.aws.amazon.com/ec2/v2/home#Instances).

`node terminate-instance.js [Instance ID]`

Returns...

```
{
  "TerminatingInstances": [
    {
      "CurrentState": {
        "Code": 32,
        "Name": "shutting-down"
      },
      "InstanceId": "i-0581658d868e6f6de",
      "PreviousState": {
        "Code": 16,
        "Name": "running"
      }
    }
  ]
}
```

### Create then terminate an instance (then repeat)

This is a helper command tool that creates an instance from an AMI, then keeps
it alive for a user specified period of time in minutes, and then terminates
that instance.

The final parameter will repeat this "creation, wait and termination of an
instance" after a user specified period of time in minutes.

`node create-then-terminate-instance.js [AMI ID] [minutes to keep instance
alive] [minutes before repeating]`

Output to the terminal will look something like this...

```
~/code/aws-tools(master) » node create-then-terminate-instance.js ami-f5a3b98f 8 120

Created a new Instance with ID i-0786130ad946a02ff from AMI with ID ami-f5a3b98f on Thu Feb 22 2018 13:09:20 GMT+1300 (NZDT)
Keeping this Instance alive for 8 minutes...
Instance with ID i-0786130ad946a02ff has been set for termination on Thu Feb 22 2018 13:17:24 GMT+1300 (NZDT)
Waiting 120 minutes before repeating this cycle.
```
