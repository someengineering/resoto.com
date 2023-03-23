---
sidebar_label: Find AWS IAM Users with Multiple Active Access Keys
---

# How to Find AWS IAM Users with Multiple Active Access Keys

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

Access keys can be lost or stolen, and multiple access keys are not required.

As such, it is recommended to remove all unused access keys and to ensure that only one active access key exists for each user.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **medium**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS cloud resources](../../../getting-started/configure-resoto/aws.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_iam_user) {access_keys[]: --> is(access_key)} access_keys[0].reported.access_key_status=="Active" and access_keys[1].reported.access_key_status=="Active"
   # highlight-start
   ​kind=aws_iam_user, ..., region=resoto-poweruser
   ​kind=aws_iam_user, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_iam_user) {access_keys[]: --> is(access_key)} access_keys[0].reported.access_key_status=="Active" and access_keys[1].reported.access_key_status=="Active" | dump
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

   - Remove the second active access key and only use one.
   - Avoid using long-lived access keys altogether.

   :::note

   Please refer to the [AWS IAM documentation](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccessKeys.html) for details.

   :::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
- [`aws_iam_user` Resource Data Model](../../../reference/data-models/aws/index.md#aws_iam_user)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccessKeys.html)
