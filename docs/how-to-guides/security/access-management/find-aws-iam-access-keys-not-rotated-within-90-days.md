---
sidebar_label: Find AWS IAM Access Keys Not Rotated Within 90 Days
---

# How to Find AWS IAM Access Keys Not Rotated Within 90 Days

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

Access keys consist of an access key ID and secret access key which are used to sign programmatic requests that you make to AWS.

AWS users need their own access keys to make programmatic calls to AWS from:

- the AWS Command Line Interface (AWS CLI),
- Tools for Windows PowerShell,
- the AWS SDKs,
- or direct HTTP calls using the APIs for individual AWS services.

It is recommended that all access keys be regularly rotated.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **medium**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS cloud resources](../../../getting-started/configure-resoto/aws.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_iam_access_key) and access_key_last_used.last_rotated<-90d
   # highlight-start
   ​kind=aws_iam_access_key, ..., region=resoto-poweruser
   ​kind=aws_iam_access_key, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_iam_access_key) and access_key_last_used.last_rotated<-90d | dump
   # highlight-start
   ​reported:
   ​  id: /aws/iam/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_iam_access_key
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_iam_access_key` resources](../../../reference/data-models/aws/index.md#aws_iam_access_key).

## Remediation

- Remove all listed access keys.

:::note

Please refer to the [AWS IAM documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html) for details.

:::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
- [`aws_iam_access_key` Resource Data Model](../../../reference/data-models/aws/index.md#aws_iam_access_key)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html)
