---
sidebar_label: Orphaned CloudWatch alarms
sidebar_custom_props:
  tags: [AWS, cleanup, cloudwatch]
---

# Clean up orphaned CloudWatch alarms

## Prerequisites

This guide assumes that you have already [installed](../../getting-started/install-resoto/index.md) and configured Resoto for [cleanup](../../getting-started/clean-resources.md).

## Introduction

When deleting EC2 instances sometimes CloudWatch alarms are left behind. This search finds orphaned alarms and deletes them.

## Cleaning up manually

This search finds AWS CloudWatch instance alarms that have no instances associated with them and marks them for cleanup.

```
> search is(aws_cloudwatch_alarm) and dimensions[*].Name = InstanceId with(empty, <-- is(aws_ec2_instance)) | clean
```

:::note

The `clean` command flags a resource for clean up. Cleanup is performed whenever the `collect_and_cleanup` [workflow](../../concepts/automation/workflow.md) runs. It can also be manually triggered using the `workflow run cleanup` command.

:::

### Automating cleanup using jobs

Resoto can automatically clean up orphaned load balancers by turning the above search into a [job](../../concepts/automation/job.md).

```
> jobs add --id cleanup-orphaned-cloudwatch-alarms --wait-for-event cleanup_plan 'search is(aws_cloudwatch_alarm) and dimensions[*].Name = InstanceId with(empty, <-- is(aws_ec2_instance)) | clean'
```

Now our command runs automatically every time Resoto emits the `cleanup_plan` event. This event is part of the `collect_and_cleanup` [workflow](../../concepts/automation/workflow.md) and is emitted after Resoto has finished collecting cloud provider resources and before cleanup is performed. Execute `workflow show collect_and_cleanup` to list the steps that make up the `collect_and_cleanup` workflow.

## Cleaning up AWS load balancers via the plugin

For more convenient configuration Resoto comes with a plugin that performs the above search. It allows to provide a list of accounts in which to perform the cleanup.

### Enabling and configuring the `cleanup_aws_alarms` plugin

In [Resoto Shell](../../concepts/components/shell.md) execute

```
> config edit resoto.worker
```

and find the following section

```yaml
plugin_cleanup_aws_alarms:
  # Dictionary of key cloud with list of account IDs for which the plugin should be active as value
  config:
    aws:
      - '1234567'
      - '567890'
  # Enable plugin?
  enabled: true
```
