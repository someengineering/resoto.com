---
sidebar_label: Find Unencrypted AWS RDS Storage Volumes
---

# How to Find Unencrypted AWS RDS Storage Volumes

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

If not enabled sensitive information at rest is not protected.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **medium**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS resources](../../../how-to-guides/data-sources/collect-aws-resource-data.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_rds_instance) and volume_encrypted==false
   # highlight-start
   ​kind=aws_rds_instance, ..., region=resoto-poweruser
   ​kind=aws_rds_instance, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_rds_instance) and volume_encrypted==false | dump
   # highlight-start
   ​reported:
   ​  id: /aws/rds/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_rds_instance
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_rds_instance` resources](../../../reference/data-models/aws.md#aws_rds_instance).

## Remediation

- Enable Encryption for all matching instances.

:::note

Please refer to the [AWS RDS documentation](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html) for details.

:::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
- [`aws_rds_instance` Resource Data Model](../../../reference/data-models/aws.md#aws_rds_instance)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary" aria-hidden="true">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary" aria-hidden="true">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html)
