---
sidebar_label: Clean Up AWS CloudWatch Alarms
---

# How to Clean Up AWS CloudWatch Alarms

When deleting EC2 instances, [CloudWatch](https://aws.amazon.com/cloudwatch) alarms are sometimes left behind.

Resoto's `cleanup_aws_alarms` plugin can find and delete these orphaned alarms.

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

3. Update the `plugin_cleanup_aws_alarms` section with the desired target cloud account IDs and setting the `enabled` property to `true`:

   ```yaml title="cleanup_aws_alarms plugin configuration"
   plugin_cleanup_aws_alarms:
     # Dictionary of key cloud with list of account IDs for which the plugin should be active as value
     config:
       aws:
   # highlight-start
         - '1234567'
         - '567890'
   # highlight-end
     # Enable plugin?
   # highlight-next-line
     enabled: true
   ```

The plugin will now run each time Resoto emits the `post_cleanup_plan` [event](../../reference/events/index.md). The `post_cleanup_plan` event is emitted in the [`cleanup` phase](../../reference/workflows/index.md#cleanup) of the [`collect_and_cleanup` workflow](../../reference/workflows/index.md#collect_and_cleanup-workflow).

Each time the `cleanup_aws_alarms` plugin runs, orphaned CloudWatch alarms will be flagged for removal during the next cleanup run.

## Further Reading

- [`cleanup_aws_alarms` Plugin](../../reference/components/plugins/cleanup_aws_alarms.md)
- [Resource Cleanup](../../concepts/resource-management/cleanup.md)
- [Cloud Data Sync](../../concepts/cloud-data-sync/index.md)
- [Configuration](../../reference/configuration/index.md)
- [Command-Line Interface](../../reference/cli/index.md)
