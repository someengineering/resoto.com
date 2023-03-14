---
sidebar_label: Find AWS EFS without Encryption At Rest
---

# How to Find AWS EFS without Encryption At Rest

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

## Problem

EFS should be encrypted at rest to prevent exposure of sensitive data to bad actors.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **medium**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS cloud resources](../../../getting-started/configure-resoto/aws.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_efs_file_system) and volume_encrypted==false
   # highlight-start
   ​kind=aws_efs_file_system, ..., region=resoto-poweruser
   ​kind=aws_efs_file_system, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_efs_file_system) and volume_encrypted==false | dump
   # highlight-start
   ​reported:
   ​  id: /aws/efs/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_efs_file_system
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_efs_file_system` resources](../../../reference/data-models/aws/index.md#aws_efs_file_system).

3. Fix detected issues by following the remediation steps:

   - Enable encryption at rest for EFS file systems.
   - Encryption at rest can only be enabled during the file system creation.

   :::note

   Please refer to the [AWS EFS documentation](https://docs.aws.amazon.com/efs/latest/ug/encryption-at-rest.html) for details.

   :::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
- [`aws_efs_file_system` Resource Data Model](../../../reference/data-models/aws/index.md#aws_efs_file_system)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](https://docs.aws.amazon.com/efs/latest/ug/encryption-at-rest.html)
