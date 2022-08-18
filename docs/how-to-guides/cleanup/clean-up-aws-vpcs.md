---
sidebar_label: Clean Up AWS VPCs
sidebar_custom_props:
  tags: [AWS, VPC]
---

# How to Clean Up AWS VPCs

The `cleanup_aws_vpcs` plugin automatically flags dependent network resources for cleanup when a VPC is deleted. These resources include:

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

This guide assumes that you have already [installed](../../getting-started/install-resoto/index.md), configured Resoto to [collect your cloud resources](../../getting-started/configure-cloud-provider-access/index.md), and [enabled cleanup](../../getting-started/clean-resources.md).

## Directions

The `cleanup_aws_vpcs` plugin is configured via the `resoto.worker` configuration.

1. Execute the following command in [Resoto Shell](../../concepts/components/shell.md) to open the relevant configuration for editing:

   ```bash
   > config edit resoto.worker
   ```

2. Update the following section with the desired target cloud account IDs and setting the `enabled` property to `true`:

   ```yaml title="cleanup_aws_vpcs plugin configuration"
   plugin_cleanup_aws_vpcs:
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
- [`cleanup_aws_vpcs` Plugin](../../concepts/components/plugins/cleanup_aws_vpcs.md)
- [Workflow](../../concepts/automation/job.md)
