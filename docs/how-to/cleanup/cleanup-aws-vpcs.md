---
sidebar_label: AWS VPCs
sidebar_custom_props:
  tags: [AWS, cleanup, VPC]
---

# Clean up AWS VPCs

## Prerequisites

This guide assumes that you have already [installed](../../getting-started/install-resoto/index.md) and configured Resoto for [cleanup](../../getting-started/clean-resources.md).

## Introduction

When flagging AWS VPCs for cleanup - for instance by [tagging them for automatic expiration](cleanup-expired-resources.md) - you can enable the `cleanup_aws_vpcs` plugin to automatically flag dependant network resources as well.

If enabled, the following dependant resources are automatically marked for cleanup when a VPC is being deleted:

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

### Enabling and configuring the `cleanup_aws_vpcs` plugin

In [Resoto Shell](../../concepts/components/shell.md) execute

```
> config edit resoto.worker
```

and find the following section

```yaml
plugin_cleanup_aws_vpcs:
  # Dictionary of key cloud with list of account IDs for which the plugin should be active as value
  config:
    aws:
      - '1234567'
      - '567890'
  # Enable plugin?
  enabled: true
```

The plugin runs automatically every time Resoto emits the `post_cleanup_plan` event. This event is part of the `collect_and_cleanup` [workflow](../../concepts/automation/workflow.md) and is emitted after Resoto has finished planing of resource cleanup and before cleanup is performed. Execute `workflow show collect_and_cleanup` to list the steps that make up the `collect_and_cleanup` workflow.
