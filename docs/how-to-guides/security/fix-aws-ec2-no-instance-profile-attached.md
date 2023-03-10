---
sidebar_label: Fix AWS EC2 IAM instance roles not used for AWS resource access from instances
---

# How to Fix AWS EC2 IAM instance roles not used for AWS resource access from instances

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

AWS access from within AWS instances can be done by either encoding AWS keys into AWS API calls or by assigning the instance to a role which has an appropriate permissions policy for the required access. AWS IAM roles reduce the risks associated with sharing and rotating credentials that can be used outside of AWS itself. If credentials are compromised, they can be used from outside of the AWS account.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **medium**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS cloud resources](../../getting-started/configure-resoto/aws.md).

## Directions

1. Execute the following [`search` command](../../reference/cli/search-commands/search.md) in [Resoto Shell](../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_ec2_instance) and instance_iam_instance_profile=null
   # highlight-start
   ​kind=aws_ec2_instance, ..., region=resoto-poweruser
   ​kind=aws_ec2_instance, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_ec2_instance) and instance_iam_instance_profile=null | dump
   # highlight-start
   ​reported:
   ​  id: /aws/ec2/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_ec2_instance
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_ec2_instance` resources](../../reference/data-models/aws/index.md#aws_ec2_instance).

3. Fix detected issues by following the remediation steps:

   Create an IAM instance role and attach it to the corresponding EC2 instance.

   :::note

   Please refer to the [AWS EC2 documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html) for details.

   :::

## Further Reading

- [Search](../../reference/search/index.md)
- [Command-Line Interface](../../reference/cli/index.md)
- [`aws_ec2_instance` Resource Data Model](../../reference/data-models/aws/index.md#aws_ec2_instance)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html)
