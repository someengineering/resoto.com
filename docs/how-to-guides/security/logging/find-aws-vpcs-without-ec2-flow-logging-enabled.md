---
sidebar_label: Find AWS VPCs Without EC2 Flow Logging Enabled
---

# How to Find AWS VPCs Without EC2 Flow Logging Enabled

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

VPC Flow Logs provide visibility into network traffic that traverses the VPC and can be used to detect anomalous traffic or insight during security workflows.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **medium**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS resources](../../../how-to-guides/data-sources/collect-aws-resource-data.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_vpc) with(empty, --> is(aws_ec2_flow_log))
   # highlight-start
   ​kind=aws_vpc, ..., region=resoto-poweruser
   ​kind=aws_vpc, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_vpc) with(empty, --> is(aws_ec2_flow_log)) | dump
   # highlight-start
   ​reported:
   ​  id: /aws/ec2/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_vpc
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_vpc` resources](../../../reference/data-models/aws/index.md#aws_vpc).

## Remediation

Enable Flow Logs for packet Rejects of your VPCs.

:::note

Please refer to the [AWS EC2 documentation](http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/flow-logs.html) for details.

:::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
- [`aws_vpc` Resource Data Model](../../../reference/data-models/aws/index.md#aws_vpc)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary" aria-hidden="true">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary" aria-hidden="true">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/flow-logs.html)
