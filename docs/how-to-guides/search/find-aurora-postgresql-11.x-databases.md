---
sidebar_label: Find Amazon Aurora PostgreSQL 11.x Databases
---

# How to Find Amazon Aurora PostgreSQL 11.x Databases

[Amazon has announced that the end of support for Aurora PostgreSQL 11.x is January 31, 2024](https://repost.aws/questions/QUqTaY2mfcTSWoioVXmxSQdQ/announcement-amazon-aurora-postgre-sql-11-x-end-of-support-is-january-31-2024).

Resoto's search makes it easy to find all Aurora PostgreSQL 11.x databases in your cloud accounts.

## Prerequisites

This guide assumes that you have already [installed](../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS cloud resources](../../reference/configuration/cloudprovider/aws.md).

## Directions

Execute the following search in [Resoto Shell](../../reference/components/shell.md) to list all expired resources:

```bash
> search is(aws_rds_cluster) and db_type=aurora-postgresql and db_version~11
```

:::note

This search finds all resources that have an `expires` property that is less than the current time. Resoto automatically expands `@utc@` to the current date and time. See `help placeholders` for more information on placeholder strings.

:::

## Related How-To Guides

- [How to Clean Up Expired Resources](../cleanup/clean-up-expired-resources.md)

## Further Reading

- [Search](../../reference/search/index.md)
- [Command-Line Interface](../../reference/cli/index.md)
