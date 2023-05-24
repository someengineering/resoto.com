---
sidebar_label: Find Unencrypted AWS EC2 Volumes
---

# How to Find Unencrypted AWS EC2 Volumes

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

Data encryption at rest prevents data visibility in the event of its unauthorized access or theft.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **medium**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS resources](../../../how-to-guides/data-sources/collect-aws-resource-data.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_ec2_volume) and volume_encrypted=false
   # highlight-start
   ​kind=aws_ec2_volume, ..., region=resoto-poweruser
   ​kind=aws_ec2_volume, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_ec2_volume) and volume_encrypted=false | dump
   # highlight-start
   ​reported:
   ​  id: /aws/ec2/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_ec2_volume
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_ec2_volume` resources](../../../reference/data-models/aws.md#aws_ec2_volume).

## Remediation

- Encrypt all EBS volumes.
- Enable Encryption by default.
- You can configure your AWS account to enforce the encryption of the new EBS volumes and snapshot copies that you create. For example, Amazon EBS encrypts the EBS volumes created when you launch an instance and the snapshots that you copy from an unencrypted snapshot.

:::note

Please refer to the [AWS EC2 documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html) for details.

:::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
- [`aws_ec2_volume` Resource Data Model](../../../reference/data-models/aws.md#aws_ec2_volume)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary" aria-hidden="true">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary" aria-hidden="true">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html)
