---
sidebar_label: Find AWS CloudTrail Trails with Logging Disabled
---

# How to Find AWS CloudTrail Trails with Logging Disabled

Sending AWS CloudTrail events to CloudWatch Logs facilitates real-time and historic activity logging based on user, API, resource, and IP address, and makes it possible to establish alarms and notifications for anomalous or sensitive account activity.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **low**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS resources](../../../how-to-guides/data-sources/collect-aws-resource-data.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_cloud_trail) and trail_status.is_logging==false
   # highlight-start
   ​kind=aws_cloud_trail, ..., region=resoto-poweruser
   ​kind=aws_cloud_trail, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_cloud_trail) and trail_status.is_logging==false | dump
   # highlight-start
   ​reported:
   ​  id: /aws/cloudtrail/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_cloud_trail
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_cloud_trail` resources](../../../reference/unified-data-model/aws.md#aws_cloud_trail).

## Remediation

- Validate that the trails in CloudTrail has an ARN set in the `CloudWatchLogsLogGroupArn` property.

:::note

Please refer to the [AWS CloudTrail documentation](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/send-cloudtrail-events-to-cloudwatch-logs.html) for details.

:::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
- [`aws_cloud_trail` Resource Data Model](../../../reference/unified-data-model/aws.md#aws_cloud_trail)

## External Links

- [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/send-cloudtrail-events-to-cloudwatch-logs.html)
