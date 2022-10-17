# `aws`

The `aws` command executes an operation on an AWS resource. The command allows the same services and operations as the AWS CLI.

See the list of available [AWS services](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/index.html#available-services) with respective operations.

There are two modes of operation:

1. Use a search and then pipe the result of the search into the aws command. Every resource matched by the search will invoke this command. You can use templating parameter to define the exact invocation arguments.
2. Call the aws command directly without passing any resource to interact with AWS directly.

## Usage

```bash
aws  [--account] [--role] [--profile] [--region] [service] [operation] [operation_args]
```

### Options

| Parameter   | Description                  | Required? | Default Value          |
| ----------- | ---------------------------- | --------- | ---------------------- |
| `--account` | Override the account to use. | ❌        | The configured account |
| `--role`    | Override the role to use.    | ❌        | The configured role    |
| `--profile` | Override the profile to use. | ❌        | The configured profile |

### Parameters

| Parameter        | Description                                    | Required? | Default Value |
| ---------------- | ---------------------------------------------- | --------- | ------------- |
| `service`        | The name of the AWS service.                   | ✅️       | N/A           |
| `operation`      | The operation to perform on the AWS service.   | ✅        | N/A           |
| `operation_args` | Additional arguments passed to this operation. | ❌        | N/A           |

## Examples

```bash title="Get the calling identity for the configured access"
​# Get the current caller identity
> aws sts get-caller-identity
​UserId: AIDA42373XXXXXXXXXXXX
​Account: '882374444444'
​Arn: arn:aws:iam::882374444444:user/matthias
```

```bash title="Call describe-volume-attribute for all EC2 volumes"
​# Search for all ec2 volumes and then call describe-volume-attribute on each volume.
​# Note the {id} parameter: the aws command is invoked for any volume and replaces the id parameter with the volume id.
> search is(aws_ec2_volume) | aws ec2 describe-volume-attribute --volume-id {id} --attribute autoEnableIO
​volume AutoEnableIO:
​  Value: false
​  VolumeId: vol-009b0a28d2754927e
```

```bash title="Stop running EC2 instances with name test"
​# Search for all running ec2 instances with the term test in the name and stop it.
​# Note the {id} parameter: the aws command is invoked for any instance and replaces the id parameter with the instance id.
> search is(aws_ec2_instance) and instance_status=running and name~test | aws ec2 stop-instances --instance-ids {id}
​StoppingInstances:
​  - InstanceId: i-1234567890abcdef0
​    CurrentState:
​      Code: 64
​      Name: stopping
​    PreviousState:
​      Code: 16
​      Name: running
```

```bash title="Start stopped EC2 instances with name test"
​# Search for all stopped ec2 instances with the term test in the name and start it.
​# Note the {id} parameter: the aws command is invoked for any instance and replaces the id parameter with the instance id.
> search is(aws_ec2_instance) and instance_status=stopped and name~test | aws ec2 start-instances --instance-ids {id}
​StartingInstances:
​  - InstanceId: i-1234567890abcdef0
​    CurrentState:
​      Code: 0
​      Name: pending
​    PreviousState:
​      Code: 80
​      Name: stopped
```
