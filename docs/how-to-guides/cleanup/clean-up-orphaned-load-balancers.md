---
sidebar_label: Clean Up Orphaned Load Balancers
sidebar_custom_props:
  tags: [AWS, ELB, ALB]
---

# How to Clean Up Orphaned Load Balancers

When compute instances are removed, their load balancers are sometimes left behind. Resoto can find and delete these orphaned load balancers.

## Prerequisites

This guide assumes that you have already [installed](../../getting-started/install-resoto/index.md), configured Resoto to [collect your cloud resources](../../getting-started/configure-cloud-provider-access/index.md), and [enabled cleanup](../../getting-started/clean-resources.md).

## Directions

The `cleanup_aws_alarms` plugin is configured via the `resoto.worker` configuration.

1. Execute the following command in [Resoto Shell](../../concepts/components/shell.md) to open the relevant configuration for editing:

   ```bash
   > config edit resoto.worker
   ```

2. Update the following section, setting the `enabled` property to `true`:

   ```yaml title="cleanup_aws_loadbalancers plugin configuration"
   plugin_cleanup_aws_loadbalancers:
     # Enable plugin?
     enabled: true
     # Minimum age of unused load balancers to cleanup
     min_age: 7d
   ```

   :::note

   The above plugin configuration cleans up ELBs, ALBs, and ALB target groups older than the minimum age with no attached backends. Items tagged with `expiration: never` will not be flagged for cleanup.

   :::

The plugin will now run each time Resoto emits the `post_cleanup_plan` event. The `post_cleanup_plan` event is a part of the `collect_and_cleanup` [workflow](../../concepts/automation/workflow.md) and emitted after resource planning is complete but before the cleanup is performed.

## Further Reading

- [Configuration](../../reference/configuration/index.md)
- [`cleanup_aws_loadbalancers` Plugin](../../concepts/components/plugins/cleanup_aws_loadbalancers.md)
- [Workflow](../../concepts/automation/job.md)
