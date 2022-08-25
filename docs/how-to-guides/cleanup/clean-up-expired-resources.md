---
sidebar_label: Clean Up Expired Resources
sidebar_custom_props:
  tags: [AWS, GCP, DigitalOcean, Kubernetes]
---

# How to Clean Up Expired Resources

A resource can be tagged with an [expiration](../../concepts/resource-management/expiration.md) tag that instructs Resoto to clean it up at a defined time. This can serve as a safety net for when a CI job fails or the IaC tool aborts halfway through its run, or even as the primary means of managing resource lifecycles.

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

3. Finally, update the `plugin_cleanup_expired` section, setting the `enabled` property to `true`:

   ```yaml title="cleanup_expired plugin configuration"
   plugin_cleanup_expired:
     # Enable plugin?
     enabled: true
   ```

The plugin will now run each time Resoto emits the `post_cleanup_plan` event. The `post_cleanup_plan` event is a part of the `collect_and_cleanup` [workflow](../../concepts/automation/workflow.md) and emitted after resource planning is complete but before the cleanup is performed.

## Related How-To Guides

- [How to Find Expired Resources](../search/find-expired-resources.md)

## Further Reading

- [`cleanup_expired` Plugin](../../concepts/components/plugins/cleanup_expired.md)
- [Resource Expiration](../../concepts/resource-management/expiration.md)
- [Configuration](../../reference/configuration/index.md)
- [Workflow](../../concepts/automation/job.md)
- [Command-Line Interface](../../reference/cli/index.md)
