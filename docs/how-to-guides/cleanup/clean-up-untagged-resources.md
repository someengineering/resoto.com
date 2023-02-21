---
sidebar_label: Clean Up Untagged Resources
sidebar_position: 2
---

# How to Clean Up Untagged Resources

Resource tags are an essential tool in finding and tracking an organization's cloud resources, but tags are only useful if they are applied consistently.

Resoto's `cleanup_untagged` plugin can enforce tagging policies by automatically cleaning up resources that do not have required tags (e.g., `owner` and `expiration`).

## Prerequisites

This guide assumes that you have already [installed](../../getting-started/install-resoto/index.md) and configured Resoto to [collect your cloud resources](../../getting-started/configure-cloud-provider-access/index.md).

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

   When cleanup is enabled, marked resources will be deleted as a part of the [cloud data sync](docs/concepts/cloud-data-sync/index.md), which runs each hour by default.

   :::tip

   Set `cleanup_dry_run` to `true` to simulate cleanup without actually deleting resources.

   :::

3. Update the `plugin_cleanup_untagged` section with the desired target AWS account IDs and setting the `enabled` property to `true`:

   ```yaml title="cleanup_untagged plugin configuration"
   plugin_cleanup_untagged:
     # Enable plugin?
   # highlight-next-line
     enabled: true
     # Configuration for the plugin
     config:
       accounts:
   # highlight-start
         aws:
           '068564737731':
             name: 'playground'
             age: '1d'
           '575584959047':
             name: 'eng-sre'
         example:
           Example Account:
             name: 'Example Account'
   # highlight-end
       default:
         age: '2h'
       kinds:
         - 'aws_ec2_instance'
         - 'aws_ec2_volume'
         - 'aws_vpc'
         - 'aws_cloudformation_stack'
         - 'aws_elb'
         - 'aws_alb'
         - 'aws_alb_target_group'
         - 'aws_eks_cluster'
         - 'aws_eks_nodegroup'
         - 'example_instance'
         - 'example_network'
       tags:
         - 'owner'
         - 'expiration'
   ```

   :::info

   The `cleanup_untagged` plugin configuration has the following subsections:

   - `default` specifies the default age of a resource before mandatory tags are enforced. For example, if `age` is set to `2h`, there is a 2-hour grace period to add the required tags after resource creation.
   - `tags` lists tags that **must** exist on every resource [kind](../../reference/data-models/index.md#kinds) listed in the `kinds` subsection.
   - `kinds` lists [kinds](../../reference/data-models/index.md#kinds) for which tags listed in `tags` **must** exist.
   - `accounts` contains a dictionary of cloud and account IDs for which tags will be enforced. For each account, a name is defined and the age defined in `default` can optionally be overridden.

   :::

The plugin will now run each time Resoto emits the `post_cleanup_plan` event. The `post_cleanup_plan` event is a part of the [cloud data sync](docs/concepts/cloud-data-sync/index.md) and emitted after resource planning is complete but before the cleanup is performed.

Each time the `cleanup_untagged` plugin runs, resources for which the specified tag requirements are not met will be flagged for removal during the next cleanup run.

## Related How-To Guides

- [How to Find Untagged Resources](../search/find-untagged-resources.md)

## Further Reading

- [`cleanup_untagged` Plugin](../../reference/components/plugins/cleanup_untagged.md)
- [Resource Tagging](../../concepts/resource-management/tagging.md)
- [Resource Cleanup](../../concepts/resource-management/cleanup.md)
- [Configuration](../../reference/configuration/index.md)
- [Cloud Data Sync](docs/concepts/cloud-data-sync/index.md)
- [Command-Line Interface](../../reference/cli/index.md)
