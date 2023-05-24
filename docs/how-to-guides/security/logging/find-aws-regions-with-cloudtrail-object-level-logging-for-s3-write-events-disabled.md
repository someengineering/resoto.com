---
sidebar_label: Find AWS Regions Where CloudTrail Object-Level Logging for S3 Write Events Is Disabled
---

# How to Find AWS Regions Where CloudTrail Object-Level Logging for S3 Write Events Is Disabled

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

If logs are not enabled, monitoring of service use and threat analysis is not possible.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **low**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS resources](../../../how-to-guides/data-sources/collect-aws-resource-data.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_region) with(empty, --> is(aws_cloud_trail) and trail_has_custom_event_selectors=true and trail_event_selectors[*].field_selectors.eventCategory.equals[*]=Data and trail_event_selectors[*].field_selectors.`resources.type`.equals[*]=AWS::S3::Object and trail_event_selectors[*].field_selectors.readOnly.equals[*]!="false")
   # highlight-start
   ​kind=aws_region, ..., region=resoto-poweruser
   ​kind=aws_region, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_region) with(empty, --> is(aws_cloud_trail) and trail_has_custom_event_selectors=true and trail_event_selectors[*].field_selectors.eventCategory.equals[*]=Data and trail_event_selectors[*].field_selectors.`resources.type`.equals[*]=AWS::S3::Object and trail_event_selectors[*].field_selectors.readOnly.equals[*]!="false") | dump
   # highlight-start
   ​reported:
   ​  id: /aws/cloudtrail/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_region
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_region` resources](../../../reference/data-models/aws.md#aws_region).

## Remediation

- Enable logs.
- Create an S3 lifecycle policy.
- Define use cases, metrics and automated responses where applicable.

:::note

Please refer to the [AWS CloudTrail documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/enable-cloudtrail-logging-for-s3.html) for details.

:::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
- [`aws_region` Resource Data Model](../../../reference/data-models/aws.md#aws_region)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary" aria-hidden="true">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary" aria-hidden="true">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](https://docs.aws.amazon.com/AmazonS3/latest/userguide/enable-cloudtrail-logging-for-s3.html)
