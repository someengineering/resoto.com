---
sidebar_label: Detect Use of AWS Account Root User Credentials
---

# How to Detect Use of AWS Account Root User Credentials

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

The root account has unrestricted access to all resources in the AWS account. It is highly recommended that the use of this account be avoided.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **critical**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS resources](../../../how-to-guides/data-sources/collect-aws-resource-data.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_root_user) {access_keys[]: --> is(access_key)} password_last_used>{{last_access_younger_than.ago}} or access_keys[*].reported.access_key_last_used.last_used>{{last_access_younger_than.ago}}
   # highlight-start
   ​kind=aws_root_user, ..., region=resoto-poweruser
   ​kind=aws_root_user, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_root_user) {access_keys[]: --> is(access_key)} password_last_used>{{last_access_younger_than.ago}} or access_keys[*].reported.access_key_last_used.last_used>{{last_access_younger_than.ago}} | dump
   # highlight-start
   ​reported:
   ​  id: /aws/iam/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_root_user
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_root_user` resources](../../../reference/unified-data-model/aws.md#aws_root_user).

## Remediation

- Ensure IAM policies are attached only to groups or roles.

:::note

Please refer to the [AWS IAM documentation](http://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html) for details.

:::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
- [`aws_root_user` Resource Data Model](../../../reference/unified-data-model/aws.md#aws_root_user)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary" aria-hidden="true">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary" aria-hidden="true">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](http://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)
