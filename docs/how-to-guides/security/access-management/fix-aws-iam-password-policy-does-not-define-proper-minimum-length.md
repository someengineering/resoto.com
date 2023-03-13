---
sidebar_label: Fix AWS IAM password policy does not define proper minimum length
---

# How to Fix AWS IAM password policy does not define proper minimum length

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

Password policies are used to enforce password complexity requirements. IAM password policies can be used to ensure password are comprised of different character sets. It is recommended that the password policy require minimum length of 14 or greater.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **medium**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS cloud resources](../../../getting-started/configure-resoto/aws.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_account) and minimum_password_length<14
   # highlight-start
   ​kind=aws_account, ..., region=resoto-poweruser
   ​kind=aws_account, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_account) and minimum_password_length<14 | dump
   # highlight-start
   ​reported:
   ​  id: /aws/iam/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_account
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_account` resources](../../../reference/data-models/aws/index.md#aws_account).

3. Fix detected issues by following the remediation steps:

   - Ensure "Minimum password length" is checked under "Password Policy".
   - Ensure the configured password length is 14 or higher.

   :::note

   Please refer to the [AWS IAM documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_account-policy.html) for details.

   :::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
- [`aws_account` Resource Data Model](../../../reference/data-models/aws/index.md#aws_account)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_account-policy.html)
