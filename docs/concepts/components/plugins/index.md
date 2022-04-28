# Plugins

```mdx-code-block
import { useCurrentSidebarCategory } from '@docusaurus/theme-common';
import DocCardList from '@theme/DocCardList';
```

Plugins can be used to perform actions whenever something happens within Resoto. Cleanup plugins for instance exist for automated cleanup that is more complex than what a simple CLI search can do. Plugins are loaded by [Resoto Worker](../worker.md) and often come with their own configuration. Enable or configure them using the `config edit resoto.worker` command.

- [Protect Snowflakes](protect_snowflakes.md) Protects important resources.
- [Tag Validator](tagvalidator.md) Validates resources to contain mandatory tags.
- [Cleanup Expired](cleanup_expired.md) Cleanup expired resources.
- [Cleanup Untagged](cleanup_untagged.md) Cleanup untagged resources.
- [Cleanup AWS Alarms](cleanup_aws_alarms.md) Cleanup orphaned AWS CloudWatch instance alarms.
- [Cleanup AWS Load Balancers](cleanup_aws_loadbalancers.md) Cleanup orphaned AWS ELBs, ALBs and ALB target groups.
- [Cleanup AWS VPCs](cleanup_aws_vpcs.md) Flag dependencies of AWS VPCs marked for cleanup to be cleaned up as well.
- [Cleanup Volumes](cleanup_volumes.md) Cleanup unused storage volumes.

<DocCardList items={useCurrentSidebarCategory().items}/>
