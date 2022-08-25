---
sidebar_label: Clean Up Orphaned Load Balancers
sidebar_custom_props:
  tags: [AWS, ELB, ALB]
---

# How to Clean Up Orphaned Load Balancers

When compute instances are removed, their load balancers are sometimes left behind. Resoto can find and delete these orphaned load balancers.

## Prerequisites

This guide assumes that you have already [installed](../../getting-started/install-resoto/index.md) and configured Resoto to [collect your cloud resources](../../getting-started/configure-cloud-provider-access/index.md).

## Directions

1. Execute the following command in [Resoto Shell](../../concepts/components/shell.md) to open the [Resoto Worker](../../concepts/components/worker.md) configuration for editing:

   ```bash
   > config edit resoto.worker
   ```

2. Enable cleanup by modifying the `resotoworker` section of the configuration as follows:

   ```yaml
   resotoworker:
   # highlight-start
     # Enable cleanup of resources
     cleanup: true
     # Do not actually cleanup resources, just create log messages
     cleanup_dry_run: false
   # highlight-end
     # How many cleanup threads to run in parallel
     cleanup_pool_size: 16
   ```

   When cleanup is enabled, marked resources will be deleted as a part of the `collect_and_cleanup` [workflow](../../concepts/automation/workflow.md), which runs each hour by default.

   :::tip

   Set `cleanup_dry_run` to `true` to simulate cleanup without actually deleting resources.

   :::

3. Finally, update the `plugin_cleanup_aws_loadbalancers` section, setting the `enabled` property to `true`:

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

- [`cleanup_aws_loadbalancers` Plugin](../../concepts/components/plugins/cleanup_aws_loadbalancers.md)
- [Configuration](../../reference/configuration/index.md)
- [Workflow](../../concepts/automation/job.md)
- [Command-Line Interface](../../reference/cli/index.md)
