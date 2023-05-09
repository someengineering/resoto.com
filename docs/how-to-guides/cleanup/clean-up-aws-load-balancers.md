---
sidebar_label: Clean Up AWS Load Balancers
---

# How to Clean Up AWS Load Balancers

When compute instances are removed, their load balancers are sometimes left behind.

Resoto's `cleanup_aws_loadbalancers` plugin can find and delete these orphaned load balancers.

## Prerequisites

This guide assumes that you have already [installed](../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS resources](../../how-to-guides/data-sources/collect-aws-resource-data.md).

## Directions

1. Execute the following command in [Resoto Shell](../../reference/components/shell.md) to open the [Resoto Worker](../../reference/components/worker.md) configuration for editing:

   ```bash
   > config edit resoto.worker
   ```

2. Enable cleanup by modifying the `resotoworker` section of the configuration as follows:

   ```yaml
   resotoworker:
     # Enable cleanup of resources
   # highlight-next-line
     cleanup: true
     # Do not actually cleanup resources, just create log messages
   # highlight-next-line
     cleanup_dry_run: false
     # How many cleanup threads to run in parallel
     cleanup_pool_size: 16
   ```

   When cleanup is enabled, marked resources will be deleted as a part of the [`collect_and_cleanup` workflow](../../reference/workflows/index.md#collect_and_cleanup-workflow), which runs each hour by default.

   :::tip

   Set `cleanup_dry_run` to `true` to simulate cleanup without actually deleting resources.

   :::

3. Update the `plugin_cleanup_aws_loadbalancers` section, setting the `enabled` property to `true`:

   ```yaml title="cleanup_aws_loadbalancers plugin configuration"
   plugin_cleanup_aws_loadbalancers:
     # Enable plugin?
   # highlight-next-line
     enabled: true
     # Minimum age of unused load balancers to cleanup
     min_age: 7d
   ```

   :::note

   The above plugin configuration cleans up ELBs, ALBs, and ALB target groups older than the minimum age with no attached backends. Items tagged with `expiration: never` will not be flagged for cleanup.

   :::

The plugin will now run each time Resoto emits the `post_cleanup_plan` [event](../../reference/events/index.md). The `post_cleanup_plan` event is emitted in the [`cleanup` phase](../../reference/workflows/index.md#cleanup) of the [`collect_and_cleanup` workflow](../../reference/workflows/index.md#collect_and_cleanup-workflow).

Each time the `cleanup_aws_loadbalancers` plugin runs, orphaned load balancers will be flagged for removal during the next cleanup run.

## Further Reading

- [`cleanup_aws_loadbalancers` Plugin](../../reference/components/plugins/cleanup_aws_loadbalancers.md)
- [Resource Cleanup](../../concepts/resource-management/cleanup.md)
- [Cloud Data Sync](../../concepts/cloud-data-sync/index.md)
- [Configuration](../../reference/configuration/index.md)
- [Command-Line Interface](../../reference/cli/index.md)
