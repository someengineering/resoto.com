---
sidebar_label: Find AWS Regions Without AWS Config Enabled
---

# How to Find AWS Regions Without AWS Config Enabled

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

The AWS configuration item history captured by AWS Config enables security analysis, resource change tracking and compliance auditing.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **medium**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS resources](../../../how-to-guides/data-sources/collect-aws-resource-data.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_region) with(empty, --> is(aws_config_recorder) and recorder_status.recording=true and recorder_group.all_supported=true and recorder_status.last_status=SUCCESS)
   # highlight-start
   ​kind=aws_region, ..., region=resoto-poweruser
   ​kind=aws_region, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_region) with(empty, --> is(aws_config_recorder) and recorder_status.recording=true and recorder_group.all_supported=true and recorder_status.last_status=SUCCESS) | dump
   # highlight-start
   ​reported:
   ​  id: /aws/config/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_region
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_region` resources](../../../reference/data-models/aws/index.md#aws_region).

## Remediation

- Enable AWS Config in all regions.

:::note

Please refer to the [AWS Config documentation](https://aws.amazon.com/blogs/mt/aws-config-best-practices) for details.

:::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
- [`aws_region` Resource Data Model](../../../reference/data-models/aws/index.md#aws_region)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](https://aws.amazon.com/blogs/mt/aws-config-best-practices)
