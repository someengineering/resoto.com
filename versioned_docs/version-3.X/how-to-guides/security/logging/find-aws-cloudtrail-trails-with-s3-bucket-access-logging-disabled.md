---
sidebar_label: Find AWS CloudTrail Trails with S3 Bucket Access Logging Disabled
---

# How to Find AWS CloudTrail Trails with S3 Bucket Access Logging Disabled

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

Server access logs can assist you in security and access audits, help you learn about your customer base, and understand your Amazon S3 bill.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **medium**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS cloud resources](../../../getting-started/configure-resoto/aws.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_cloud_trail) --> is(aws_s3_bucket) and bucket_logging.target_bucket==null
   # highlight-start
   ​kind=aws_cloud_trail, ..., region=resoto-poweruser
   ​kind=aws_cloud_trail, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_cloud_trail) --> is(aws_s3_bucket) and bucket_logging.target_bucket==null | dump
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

- Ensure that S3 buckets have logging enabled. CloudTrail data events can also be used in place of S3 bucket logging. If that is the case, results may include false positives.

:::note

Please refer to the [AWS CloudTrail documentation](https://docs.aws.amazon.com/AmazonS3/latest/dev/security-best-practices.html) for details.

:::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
- [`aws_cloud_trail` Resource Data Model](../../../reference/data-models/aws/index.md#aws_cloud_trail)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](https://docs.aws.amazon.com/AmazonS3/latest/dev/security-best-practices.html)
