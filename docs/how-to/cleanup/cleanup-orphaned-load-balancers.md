---
sidebar_label: Orphaned load balancers
sidebar_custom_props:
  tags: [AWS]
---

# Clean up orphaned load balancers

## Prerequisites

This guide assumes that you have already [installed](../../getting-started/installation/index.md) and configured Resoto for [cleanup](../../concepts/cleanup.md).

## Introduction

Sometimes when compute instances are removed their load balancers are left behind.

## Cleaning up manually

This search finds orphaned ALBs as well as their target groups and flags them for cleanup, if they are more than a week old and have no target groups attached, or only target groups of type `instance` with no instances or only instances in a terminated state.

```
> search is(aws_alb) and age > 7d and backends==[] with(empty, <-- is(aws_alb_target_group) and target_type = instance and age > 7d with(empty, <-- is(aws_ec2_instance) and instance_status != terminated)) <-[0:1]- is(aws_alb_target_group) or is(aws_alb) | clean
```

:::note

The `clean` command flags a resource for clean up. Cleanup is performed whenever the `collect_and_cleanup` [workflow](../../concepts/automation/workflow.md) runs. It can also be manually triggered using the `workflow run cleanup` command.

:::

### Automating cleanup using jobs

Resoto can automatically clean up orphaned load balancers by turning the above search into a [job](../../concepts/automation/job.md).

```
> jobs add --id cleanup-albs --wait-for-event cleanup_plan 'search is(aws_alb) and age > 7d and backends==[] with(empty, <-- is(aws_alb_target_group) and target_type = instance and age > 7d with(empty, <-- is(aws_ec2_instance) and instance_status != terminated)) <-[0:1]- is(aws_alb_target_group) or is(aws_alb) | clean'
```

Now our command runs automatically every time Resoto emits the `cleanup_plan` event. This event is part of the `collect_and_cleanup` [workflow](../../concepts/automation/workflow.md) and is emitted after Resoto has finished collecting cloud provider resources and before cleanup is performed. Execute `workflow show collect_and_cleanup` to list the steps that make up the `collect_and_cleanup` workflow.

## Cleaning up AWS load balancers via the plugin

### Enabling and configuring the `cleanup_aws_loadbalancers` plugin

In [Resoto Shell](../../concepts/components/shell.md) execute

```
> config edit resoto.worker
```

and find the following section

```yaml
plugin_cleanup_aws_loadbalancers:
  # Enable plugin?
  enabled: true
  # Minimum age of unused load balancers to cleanup
  min_age: 7d
```

From now on ELBs, ALBs and ALB target groups older than 7 days with no attached backends will be automatically cleaned up, unless it has a tag `expiration: never`.
