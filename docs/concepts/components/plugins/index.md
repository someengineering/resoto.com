# Components

```mdx-code-block
import { useCurrentSidebarCategory } from '@docusaurus/theme-common';
import DocCardList from '@theme/DocCardList';
```

- [Protect Snowflakes](protect_snowflakes.md) Protects important resources.
- [Tag Validator](tagvalidator.md) Validates resources to contain mandatory tags.
- [Cleanup Expired](cleanup_expired.md) Cleanup expired resources.
- [Cleanup Untagged](cleanup_untagged.md) Cleanup untagged resources.
- [Cleanup AWS Alarms](cleanup_aws_alarms.md) Cleanup orphaned AWS CloudWatch instance alarms.
- [Cleanup AWS Load Balancers](cleanup_aws_loadbalancers.md) Cleanup orphaned AWS ELBs, ALBs and ALB target groups.
- [Cleanup AWS VPCs](cleanup_aws_vpcs.md) Flag dependencies of AWS VPCs marked for cleanup to be cleaned up as well.
- [Cleanup Volumes](cleanup_volumes.md) Cleanup unused storage volumes.

<DocCardList items={useCurrentSidebarCategory().items}/>
