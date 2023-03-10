---
sidebar_label: Fix AWS RDS Public Accessible Instances
---

# How to Fix AWS RDS Public Accessible Instances

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

Publicly accessible databases could expose sensitive data to bad actors.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **critical**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS cloud resources](../../getting-started/configure-resoto/aws.md).

## Directions

1. Execute the following [`search` command](../../reference/cli/search-commands/search.md) in [Resoto Shell](../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_rds_instance) and db_publicly_accessible==true
   # highlight-start
   ​kind=aws_rds_instance, ..., region=resoto-poweruser
   ​kind=aws_rds_instance, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_rds_instance) and db_publicly_accessible==true | dump
   # highlight-start
   ​reported:
   ​  id: /aws/rds/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_rds_instance
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_rds_instance` resources](../../reference/data-models/aws/index.md#aws_rds_instance).

3. Fix detected issues by following the remediation steps:

   - Do not allow public access.

   :::note

   Please refer to the [AWS RDS documentation](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_RDS_Configuring.html) for details.

   :::

## Further Reading

- [Search](../../reference/search/index.md)
- [Command-Line Interface](../../reference/cli/index.md)
- [`aws_rds_instance` Resource Data Model](../../reference/data-models/aws/index.md#aws_rds_instance)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_RDS_Configuring.html)
