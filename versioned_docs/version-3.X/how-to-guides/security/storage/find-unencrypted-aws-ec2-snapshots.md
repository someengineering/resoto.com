---
sidebar_label: Find Unencrypted AWS EC2 Snapshots
---

# How to Find Unencrypted or Public AWS EC2 Snapshots

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

When you share a snapshot, you are giving others access to all the data on the snapshot. Share snapshots only with people with whom you want to share all of your snapshot data.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **medium**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS resources](../../../how-to-guides/data-sources/collect-aws-resource-data.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_ec2_snapshot) and encrypted=false
   # highlight-start
   ​kind=aws_ec2_snapshot, ..., region=resoto-poweruser
   ​kind=aws_ec2_snapshot, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_ec2_snapshot) and encrypted=false | dump
   # highlight-start
   ​reported:
   ​  id: /aws/ec2/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_ec2_snapshot
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_ec2_snapshot` resources](../../../reference/data-models/aws.md#aws_ec2_snapshot).

## Remediation

Enable encryption of snapshots.

:::note

Please refer to the [AWS EC2 documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modifying-snapshot-permissions.html) for details.

:::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
- [`aws_ec2_snapshot` Resource Data Model](../../../reference/data-models/aws.md#aws_ec2_snapshot)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary" aria-hidden="true">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary" aria-hidden="true">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modifying-snapshot-permissions.html)
