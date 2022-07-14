---
sidebar_label: Unused EBS volumes
sidebar_custom_props:
  tags: [AWS, EBS, EC2]
---

# Clean up unused AWS EBS storage volumes

## Introduction

Sometimes when EC2 instances are removed their storage volumes are left behind. This search finds unused storage volumes and deletes them.

## Prerequisites

This guide assumes that you have already [installed](../../getting-started/install-resoto/index.md) and configured Resoto for [cleanup](../../getting-started/clean-resources.md).

## Cleaning up

Find all EBS volumes in a list of accounts, that are currently unmounted, older than 30 days and had no I/O in the past 7 days.

```
> search is(aws_ec2_volume) and /ancestors.account.reported.name in [eng-jenkins,eng-development] and volume_status = available and age > 30d and last_access > 7d | clean
```

:::note

The `clean` command flags a resource for clean up. Cleanup is performed whenever the `collect_and_cleanup` [workflow](../../concepts/automation/workflow.md) runs. It can also be manually triggered using the `workflow run cleanup` command.

:::

### Automating cleanup using jobs

Resoto can automatically clean up volumes that had no I/O in the past 30 days by turning the above search into a [job](../../concepts/automation/job.md).

In [Resoto Shell](../../concepts/components/shell.md) execute

```
> jobs add --id cleanup-unused-volumes --wait-for-event cleanup_plan 'search is(aws_ec2_volume) and /ancestors.account.reported.name in [eng-jenkins,eng-development] and volume_status = available and age > 30d and last_access > 7d | clean'
```

Now our command runs automatically every time Resoto emits the `cleanup_plan` event. This event is part of the `collect_and_cleanup` [workflow](../../concepts/automation/workflow.md) and is emitted after Resoto has finished collecting cloud provider resources and before cleanup is performed. Execute `workflow show collect_and_cleanup` to list the steps that make up the `collect_and_cleanup` workflow.
