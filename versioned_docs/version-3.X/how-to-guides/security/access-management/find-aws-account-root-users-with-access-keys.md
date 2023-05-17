---
sidebar_label: Find AWS Account Root Users with Access Keys
---

# How to Find AWS Account Root Users with Access Keys

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

The root user is the most privileged user in an AWS account. AWS access Keys provide programmatic access to a given AWS account.

**It is recommended that all access keys associated with the root user be removed.**

Removing access keys associated with the root user limits vectors by which the account can be compromised. Removing the root access keys encourages the creation and use of role based accounts that are least privileged.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **critical**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS resources](../../../how-to-guides/data-sources/collect-aws-resource-data.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_root_user) with(any, --> is(access_key))
   # highlight-start
   ​kind=aws_root_user, ..., region=resoto-poweruser
   ​kind=aws_root_user, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_root_user) with(any, --> is(access_key)) | dump
   # highlight-start
   ​reported:
   ​  id: /aws/iam/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_root_user
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_root_user` resources](../../../reference/data-models/aws/index.md#aws_root_user).

## Remediation

- Create a credential report.
- Find all access_key_1_active and access_key_2_active fields that are set to True.
- Delete the related access keys.

:::note

Please refer to the [AWS IAM documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html) for details.

:::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
- [`aws_root_user` Resource Data Model](../../../reference/data-models/aws/index.md#aws_root_user)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary" aria-hidden="true">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary" aria-hidden="true">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html)
