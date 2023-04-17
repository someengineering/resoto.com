---
sidebar_label: Find Unused AWS IAM Access Keys for Users with Configured Passwords
---

# How to Find Unused AWS IAM Access Keys for Users with Configured Passwords

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

The AWS Console defaults to creating access keys during user setup, resulting in the unnecessary generation of access keys.

In addition to unnecessary credentials, it also generates unnecessary management work in auditing and rotating these keys.

Requiring that additional steps be taken by the user after their profile has been created will give a stronger indication of intent that **(a)** access keys are necessary for their work and **(b)** established keys are actually used.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **medium**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS cloud resources](../../../reference/configuration/cloudprovider/aws.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_iam_access_key) and access_key_status=="Active" and access_key_last_used.last_used==null and /ancestors.aws_iam_user.reported.password_enabled==true
   # highlight-start
   ​kind=aws_iam_access_key, ..., region=resoto-poweruser
   ​kind=aws_iam_access_key, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_iam_access_key) and access_key_status=="Active" and access_key_last_used.last_used==null and /ancestors.aws_iam_user.reported.password_enabled==true | dump
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

- Delete all matching access keys that have been reported.
- Ensure to uncheck the setting that creates access keys by default during the initial user setup.

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
