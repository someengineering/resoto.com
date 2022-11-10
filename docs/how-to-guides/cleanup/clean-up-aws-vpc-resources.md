---
sidebar_label: Clean Up AWS VPC Resources
---

# How to Clean Up AWS VPC Resources

When deleting AWS VPCs, dependent network resources are sometimes left behind.

Resoto's `cleanup_aws_vpcs` plugin can find and delete these orphaned resources, which include:

- AWS VPC Peering Connections
- AWS EC2 Network ACLs
- AWS EC2 Network Interfaces
- AWS ELB
- AWS ALB
- AWS ALB Target Groups
- AWS EC2 Subnets
- AWS EC2 Security Groups
- AWS EC2 Internet Gateways
- AWS EC2 NAT Gateways
- AWS EC2 Route Tables

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
     # Enable cleanup of resources
   # highlight-next-line
     cleanup: true
     # Do not actually cleanup resources, just create log messages
   # highlight-next-line
     cleanup_dry_run: false
     # How many cleanup threads to run in parallel
     cleanup_pool_size: 16
   ```

   When cleanup is enabled, marked resources will be deleted as a part of the `collect_and_cleanup` [workflow](../../concepts/automation/workflow.md), which runs each hour by default.

   :::tip

   Set `cleanup_dry_run` to `true` to simulate cleanup without actually deleting resources.

   :::

3. Update the `plugin_cleanup_aws_vpcs` section with the desired target cloud account IDs and setting the `enabled` property to `true`:

   ```yaml title="cleanup_aws_vpcs plugin configuration"
   plugin_cleanup_aws_vpcs:
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

The plugin will now run each time Resoto emits the `post_cleanup_plan` event. The `post_cleanup_plan` event is a part of the `collect_and_cleanup` [workflow](../../concepts/automation/workflow.md) and emitted after resource planning is complete but before the cleanup is performed.

Each time the `cleanup_aws_vpcs` plugin runs, network resources associated with VPCs that have been deleted or marked for [cleanup](../../concepts/resource-management/cleanup.md) will also be flagged for removal during the next cleanup run.

## Further Reading

- [`cleanup_aws_vpcs` Plugin](../../concepts/components/plugins/cleanup_aws_vpcs.md)
- [Resource Cleanup](../../concepts/resource-management/cleanup.md)
- [Configuration](../../reference/configuration/index.md)
- [Workflow](../../concepts/automation/workflow.md)
- [Command-Line Interface](../../reference/cli/index.md)
