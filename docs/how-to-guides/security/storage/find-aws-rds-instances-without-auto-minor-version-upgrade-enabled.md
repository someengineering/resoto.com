---
sidebar_label: Find AWS RDS Instances Without Auto Minor Version Upgrade Enabled
---

# How to Find AWS RDS Instances Without Auto Minor Version Upgrade Enabled

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

Auto Minor Version Upgrade is a feature that you can enable to have your database automatically upgraded when a new minor database engine version is available. Minor version upgrades often patch security vulnerabilities and fix bugs and therefore should be applied.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **low**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS cloud resources](../../../getting-started/configure-resoto/aws.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_rds_instance) and rds_auto_minor_version_upgrade==false
   # highlight-start
   ​kind=aws_rds_instance, ..., region=resoto-poweruser
   ​kind=aws_rds_instance, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_rds_instance) and rds_auto_minor_version_upgrade==false | dump
   # highlight-start
   ​reported:
   ​  id: /aws/rds/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_rds_instance
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_rds_instance` resources](../../../reference/data-models/aws/index.md#aws_rds_instance).

## Remediation

Enable auto minor version upgrade for all databases and environments that are matched by the search.

:::note

Please refer to the [AWS RDS documentation](https://aws.amazon.com/blogs/database/best-practices-for-upgrading-amazon-rds-to-major-and-minor-versions-of-postgresql) for details.

:::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
- [`aws_rds_instance` Resource Data Model](../../../reference/data-models/aws/index.md#aws_rds_instance)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](https://aws.amazon.com/blogs/database/best-practices-for-upgrading-amazon-rds-to-major-and-minor-versions-of-postgresql)
