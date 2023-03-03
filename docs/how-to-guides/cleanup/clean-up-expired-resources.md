---
sidebar_label: Clean Up Expired Resources
sidebar_position: 1
---

# How to Clean Up Expired Resources

A resource can be tagged with an [expiration](../../concepts/resource-management/expiration.md) tag that instructs Resoto to clean it up after it has reached a certain age. This can serve as a safety net for when a CI job fails or the IaC tool aborts halfway through its run, or even as the primary means of managing resource lifecycles.

Resoto's `cleanup_expired` plugin can find and delete expired resources.

## Prerequisites

This guide assumes that you have already [installed](../../getting-started/install-resoto/index.md) and configured Resoto to [collect your cloud resources](../../getting-started/configure-resoto/index.md).

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

3. Update the `plugin_cleanup_expired` section, setting the `enabled` property to `true`:

   ```yaml title="cleanup_expired plugin configuration"
   plugin_cleanup_expired:
     # Enable plugin?
   # highlight-next-line
     enabled: true
   ```

The plugin will now run each time Resoto emits the `post_cleanup_plan` [event](../../reference/events/index.md). The `post_cleanup_plan` event is emitted in the [`cleanup` phase](../../reference/workflows/index.md#cleanup) of the [`collect_and_cleanup` workflow](../../reference/workflows/index.md#collect_and_cleanup-workflow).

Each time the `cleanup_expired` plugin runs, expired resources will be flagged for removal during the next cleanup run.

:::info

A resource's expiration time can be defined either with an [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) timestamp or time delta:

| Tag Name                            | Description                                                                  | Example                     |
| ----------------------------------- | ---------------------------------------------------------------------------- | --------------------------- |
| `resoto:expires`                    | [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) timestamp | `2022-09-21T10:40:11+00:00` |
| `resoto:expiration` or `expiration` | Time delta from resource creation time                                       | `24h`                       |

Please see the [Resource Expiration](../../concepts/resource-management/expiration.md) for more information about expiration tags.

:::

:::tip

If you would like to apply expiration tags to existing resources, [How to Find Untagged Resources](../search/find-untagged-resources.md) describes how to find untagged resources.

[How to Clean Up Untagged Resources](./clean-up-untagged-resources.md) describes how to clean up untagged resources, which can be helpful in enforcing tagging policies.

:::

## Related How-To Guides

- [How to Find Expired Resources](../search/find-expired-resources.md)

## Further Reading

- [`cleanup_expired` Plugin](../../reference/components/plugins/cleanup_expired.md)
- [Resource Expiration](../../concepts/resource-management/expiration.md)
- [Resource Cleanup](../../concepts/resource-management/cleanup.md)
- [Cloud Data Sync](../../concepts/cloud-data-sync/index.md)
- [Configuration](../../reference/configuration/index.md)
- [Command-Line Interface](../../reference/cli/index.md)
