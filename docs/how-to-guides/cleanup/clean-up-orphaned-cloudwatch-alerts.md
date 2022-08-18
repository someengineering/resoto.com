---
sidebar_label: Clean Up Orphaned CloudWatch Alarms
sidebar_custom_props:
  tags: [AWS, CloudWatch]
---

# How to Clean Up Orphaned CloudWatch Alarms

When deleting EC2 instances, [CloudWatch](https://aws.amazon.com/cloudwatch) alarms are sometimes left behind. Resoto can find and delete these orphaned alarms.

## Prerequisites

This guide assumes that you have already [installed](../../getting-started/install-resoto/index.md), configured Resoto to [collect your cloud resources](../../getting-started/configure-cloud-provider-access/index.md), and [enabled cleanup](../../getting-started/clean-resources.md).

## Directions

The `cleanup_aws_alarms` plugin is configured via the `resoto.worker` configuration.

1. Execute the following command in [Resoto Shell](../../concepts/components/shell.md) to open the relevant configuration for editing:

   ```bash
   > config edit resoto.worker
   ```

2. Update the following section with the desired target cloud account IDs and setting the `enabled` property to `true`:

   ```yaml title="cleanup_aws_alarms plugin configuration"
   plugin_cleanup_aws_alarms:
     # Dictionary of key cloud with list of account IDs for which the plugin should be active as value
     config:
       aws:
         - '1234567'
         - '567890'
     # Enable plugin?
     enabled: true
     # Dictionary of key cloud with list of account IDs for which the plugin should be active as value
     config:
       aws:
         - '1234567'
         - '567890'
     # Enable plugin?
     enabled: true
   ```

The plugin will now run each time Resoto emits the `post_cleanup_plan` event. The `post_cleanup_plan` event is a part of the `collect_and_cleanup` [workflow](../../concepts/automation/workflow.md) and emitted after resource planning is complete but before the cleanup is performed.

## Further Reading

- [Configuration](../../reference/configuration/index.md)
- [`cleanup_aws_alarms` Plugin](../../concepts/components/plugins/cleanup_aws_alarms.md)
- [Workflow](../../concepts/automation/job.md)
