---
sidebar_label: Clean Up Untagged Resources
sidebar_custom_props:
  tags: [AWS, GCP, DigitalOcean, Kubernetes]
---

# How to Clean Up Untagged Resources

Resource tags are an essential tool in finding and tracking an organization's cloud resources, but tags are only useful if they are applied consistently. Resoto can enforce tagging policies by automatically cleaning up resources that do not have the required tags (e.g., `owner` and `expiration`).

## Prerequisites

This guide assumes that you have already [installed](../../getting-started/install-resoto/index.md), configured Resoto to [collect your cloud resources](../../getting-started/configure-cloud-provider-access/index.md), and [enabled cleanup](../../getting-started/clean-resources.md).

## Directions

The `cleanup_untagged` plugin is configured via the `resoto.worker` configuration.

1. Execute the following command in [Resoto Shell](../../concepts/components/shell.md) to open the relevant configuration for editing:

   ```bash
   > config edit resoto.worker
   ```

2. Update the following section with the desired target AWS account IDs and setting the `enabled` property to `true`:

   ```yaml title="cleanup_untagged plugin configuration"
   plugin_cleanup_untagged:
     # Enable plugin?
     enabled: true
     # Configuration for the plugin
     config:
       accounts:
         aws:
           '068564737731':
             name: 'playground'
             age: '1d'
           '575584959047':
             name: 'eng-sre'
         example:
           Example Account:
             name: 'Example Account'
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

The plugin will now run each time Resoto emits the `post_cleanup_plan` event. The `post_cleanup_plan` event is a part of the `collect_and_cleanup` [workflow](../../concepts/automation/workflow.md) and emitted after resource planning is complete but before the cleanup is performed.

## Related How-To Guides

- [How to Find Untagged Resources](../search/find-untagged-resources.md)

## Further Reading

- [Resource Tagging](../../concepts/resource-management/tagging.md)
- [Configuration](../../reference/configuration/index.md)
- [`cleanup_untagged` Plugin](../../concepts/components/plugins/cleanup_untagged.md)
- [Workflow](../../concepts/automation/job.md)
