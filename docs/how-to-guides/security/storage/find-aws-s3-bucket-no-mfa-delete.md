---
sidebar_label: Find AWS S3 bucket MFA Delete is not enabled
---

# How to Find AWS S3 bucket MFA Delete is not enabled

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

Your security credentials are compromised or unauthorized access is granted.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **medium**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS cloud resources](../../../getting-started/configure-resoto/aws.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_s3_bucket) and bucket_mfa_delete=false
   # highlight-start
   ​kind=aws_s3_bucket, ..., region=resoto-poweruser
   ​kind=aws_s3_bucket, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_s3_bucket) and bucket_mfa_delete=false | dump
   # highlight-start
   ​reported:
   ​  id: /aws/s3/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_s3_bucket
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_s3_bucket` resources](../../../reference/data-models/aws/index.md#aws_s3_bucket).

## Remediation

- Add MFA delete to an S3 bucket.
- It requires additional authentication when you change the version state of your bucket, or you delete and object version adding another layer of security in the event your security credentials are compromised or unauthorized access is granted.

:::note

Please refer to the [AWS S3 documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiFactorAuthenticationDelete.html) for details.

:::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
- [`aws_s3_bucket` Resource Data Model](../../../reference/data-models/aws/index.md#aws_s3_bucket)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiFactorAuthenticationDelete.html)
