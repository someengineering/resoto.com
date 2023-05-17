---
sidebar_label: Find AWS CloudTrail Trails Missing Alarms for Network Gateway Changes
---

# How to Find AWS CloudTrail Trails Missing Alarms for Network Gateway Changes

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

Monitoring unauthorized API calls will help reveal application errors and may reduce time to detect malicious activity.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **medium**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS resources](../../../how-to-guides/data-sources/collect-aws-resource-data.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_cloud_trail) and trail_is_multi_region_trail=true and trail_status.is_logging=true with(empty, --> is(aws_cloudwatch_log_group) with(any, --> is(aws_cloudwatch_metric_filter) and filter_pattern~"\s*\$\.eventName\s*=\s*CreateCustomerGateway.+\$\.eventName\s*=\s*DeleteCustomerGateway.+\$\.eventName\s*=\s*AttachInternetGateway.+\$\.eventName\s*=\s*CreateInternetGateway.+\$\.eventName\s*=\s*DeleteInternetGateway.+\$\.eventName\s*=\s*DetachInternetGateway"))
   # highlight-start
   ​kind=aws_cloud_trail, ..., region=resoto-poweruser
   ​kind=aws_cloud_trail, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_cloud_trail) and trail_is_multi_region_trail=true and trail_status.is_logging=true with(empty, --> is(aws_cloudwatch_log_group) with(any, --> is(aws_cloudwatch_metric_filter) and filter_pattern~"\s*\$\.eventName\s*=\s*CreateCustomerGateway.+\$\.eventName\s*=\s*DeleteCustomerGateway.+\$\.eventName\s*=\s*AttachInternetGateway.+\$\.eventName\s*=\s*CreateInternetGateway.+\$\.eventName\s*=\s*DeleteInternetGateway.+\$\.eventName\s*=\s*DetachInternetGateway")) | dump
   # highlight-start
   ​reported:
   ​  id: /aws/cloudtrail/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_cloud_trail
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_cloud_trail` resources](../../../reference/data-models/aws/index.md#aws_cloud_trail).

## Remediation

It is recommended that a metric filter and alarm be established for Network Gateway Changes.

:::note

Please refer to the [AWS CloudTrail documentation](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudwatch-alarms-for-cloudtrail.html) for details.

:::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
- [`aws_cloud_trail` Resource Data Model](../../../reference/data-models/aws/index.md#aws_cloud_trail)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary" aria-hidden="true">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary" aria-hidden="true">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudwatch-alarms-for-cloudtrail.html)
