---
sidebar_label: Find AWS CloudTrail Trails Not Encrypted with KMS Keys
---

# How to Find AWS CloudTrail Trails Not Encrypted with KMS Keys

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

By default, the log files delivered by CloudTrail to your bucket are encrypted by Amazon server-side encryption with Amazon S3-managed encryption keys (SSE-S3). To provide a security layer that is directly manageable, you can instead use server-side encryption with AWS KMS–managed keys (SSE-KMS) for your CloudTrail log files.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **medium**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS cloud resources](../../../reference/configuration/cloudprovider/aws.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_cloud_trail) and trail_kms_key_id==null
   # highlight-start
   ​kind=aws_cloud_trail, ..., region=resoto-poweruser
   ​kind=aws_cloud_trail, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_cloud_trail) and trail_kms_key_id==null | dump
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

- Create and manage the CMK encryption keys.
- Use a single CMK to encrypt and decrypt log files for multiple accounts across all regions.
- Control who can use your key for encrypting and decrypting CloudTrail log files.
- Assign permissions for the key to the users.

:::note

Please refer to the [AWS CloudTrail documentation](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/encrypting-cloudtrail-log-files-with-aws-kms.html) for details.

:::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
- [`aws_cloud_trail` Resource Data Model](../../../reference/data-models/aws/index.md#aws_cloud_trail)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/encrypting-cloudtrail-log-files-with-aws-kms.html)
