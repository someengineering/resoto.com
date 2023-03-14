---
sidebar_label: Find AWS IAM MFA not enabled for all users that have a console password
---

# How to Find AWS IAM multi-factor authentication (MFA) not enabled for all users that have a console password

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

## Problem

Password policies are used to enforce password complexity requirements. IAM password policies can be used to ensure password are comprised of different character sets. It is recommended that the password policy prevents at least password reuse of 24 or greater.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **high**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS cloud resources](../../../getting-started/configure-resoto/aws.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_iam_user) and password_enabled==true and mfa_active==false
   # highlight-start
   ​kind=aws_iam_user, ..., region=resoto-poweruser
   ​kind=aws_iam_user, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_iam_user) and password_enabled==true and mfa_active==false | dump
   # highlight-start
   ​reported:
   ​  id: /aws/iam/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_iam_user
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_iam_user` resources](../../../reference/data-models/aws/index.md#aws_iam_user).

3. Fix detected issues by following the remediation steps:

   - Enable MFA for users account.
   - MFA is a simple best practice that adds an extra layer of protection on top of your user name and password.
   - Recommended to use hardware keys over virtual MFA.

   :::note

   Please refer to the [AWS IAM documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_enable_virtual.html) for details.

   :::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
- [`aws_iam_user` Resource Data Model](../../../reference/data-models/aws/index.md#aws_iam_user)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_enable_virtual.html)
