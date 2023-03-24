---
sidebar_label: Find AWS KMS Keys Without Rotation Enabled
---

# How to Find AWS KMS Keys Without Rotation Enabled

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

Cryptographic best practices discourage extensive reuse of encryption keys. Consequently, AWS KMS keys should be rotated to prevent usage of compromised keys.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **medium**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS cloud resources](../../../getting-started/configure-resoto/aws.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_kms_key) and kms_key_manager==CUSTOMER and access_key_status=Enabled and kms_key_rotation_enabled=false
   # highlight-start
   ​kind=aws_kms_key, ..., region=resoto-poweruser
   ​kind=aws_kms_key, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_kms_key) and kms_key_manager==CUSTOMER and access_key_status=Enabled and kms_key_rotation_enabled=false | dump
   # highlight-start
   ​reported:
   ​  id: /aws/kms/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_kms_key
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_kms_key` resources](../../../reference/data-models/aws/index.md#aws_kms_key).

## Remediation

- For each AWS KMS key, ensure that the **Rotate this key every year** setting is enabled.

:::note

Please refer to the [AWS KMS documentation](https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html) for details.

:::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
- [`aws_kms_key` Resource Data Model](../../../reference/data-models/aws/index.md#aws_kms_key)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html)
