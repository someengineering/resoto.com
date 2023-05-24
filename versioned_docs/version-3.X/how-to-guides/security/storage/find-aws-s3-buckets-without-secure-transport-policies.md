---
sidebar_label: Find AWS S3 Buckets Without Secure Transport Policies
---

# How to Find AWS S3 Buckets Without Secure Transport Policies

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

If HTTPS is not enforced on the bucket policy, communication between clients and S3 buckets can use unencrypted HTTP. As a result, sensitive information could be transmitted in clear text over the network or internet.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **medium**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS resources](../../../how-to-guides/data-sources/collect-aws-resource-data.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_s3_bucket) and not bucket_policy.Statement[*].{Effect=Deny and (Action=s3:PutObject or Action="s3:*" or Action="*") and Condition.Bool.`aws:SecureTransport`== "false" }
   # highlight-start
   ​kind=aws_s3_bucket, ..., region=resoto-poweruser
   ​kind=aws_s3_bucket, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_s3_bucket) and not bucket_policy.Statement[*].{Effect=Deny and (Action=s3:PutObject or Action="s3:*" or Action="*") and Condition.Bool.`aws:SecureTransport`== "false" } | dump
   # highlight-start
   ​reported:
   ​  id: /aws/s3/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_s3_bucket
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_s3_bucket` resources](../../../reference/unified-data-model/aws.md#aws_s3_bucket).

## Remediation

- Enable encryption in transit for all matching S3 buckets.

:::note

Please refer to the [AWS S3 documentation](https://aws.amazon.com/premiumsupport/knowledge-center/s3-bucket-policy-for-config-rule) for details.

:::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
- [`aws_s3_bucket` Resource Data Model](../../../reference/unified-data-model/aws.md#aws_s3_bucket)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary" aria-hidden="true">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary" aria-hidden="true">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](https://aws.amazon.com/premiumsupport/knowledge-center/s3-bucket-policy-for-config-rule)
