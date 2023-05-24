---
sidebar_label: Find AWS Accounts Missing IAM Support Roles
---

# How to Find AWS Accounts Missing IAM Support Roles

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

AWS provides a support center that can be used for incident notification and response, as well as technical support and customer services. Create an IAM Role to allow authorized users to manage incidents with AWS Support.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **medium**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS resources](../../../how-to-guides/data-sources/collect-aws-resource-data.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_account) with(empty, -[0:2]-> is(aws_iam_role) and name=AWSServiceRoleForSupport and role_assume_role_policy_document.Statement[*].{Effect=Allow and Principal.Service=support.amazonaws.com and Action="sts:AssumeRole"})
   # highlight-start
   ​kind=aws_account, ..., region=resoto-poweruser
   ​kind=aws_account, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_account) with(empty, -[0:2]-> is(aws_iam_role) and name=AWSServiceRoleForSupport and role_assume_role_policy_document.Statement[*].{Effect=Allow and Principal.Service=support.amazonaws.com and Action="sts:AssumeRole"}) | dump
   # highlight-start
   ​reported:
   ​  id: /aws/iam/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_account
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_account` resources](../../../reference/unified-data-model/aws.md#aws_account).

## Remediation

- Create an IAM role for managing incidents with AWS.

:::note

Please refer to the [AWS IAM documentation](https://docs.aws.amazon.com/awssupport/latest/user/using-service-linked-roles-sup.html) for details.

:::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
- [`aws_account` Resource Data Model](../../../reference/unified-data-model/aws.md#aws_account)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary" aria-hidden="true">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary" aria-hidden="true">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](https://docs.aws.amazon.com/awssupport/latest/user/using-service-linked-roles-sup.html)
