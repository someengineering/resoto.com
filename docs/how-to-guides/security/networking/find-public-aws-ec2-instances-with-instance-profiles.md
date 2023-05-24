---
sidebar_label: Find Public AWS EC2 Instances with Instance Profiles
---

# How to Find Public AWS EC2 Instances with Instance Profiles

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

Exposing an EC2 directly to internet increases the attack surface and therefore the risk of compromise.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **medium**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS resources](../../../how-to-guides/data-sources/collect-aws-resource-data.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_ec2_instance) and instance_public_ip_address!=null and instance_iam_instance_profile!=null
   # highlight-start
   ​kind=aws_ec2_instance, ..., region=resoto-poweruser
   ​kind=aws_ec2_instance, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_ec2_instance) and instance_public_ip_address!=null and instance_iam_instance_profile!=null | dump
   # highlight-start
   ​reported:
   ​  id: /aws/ec2/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_ec2_instance
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_ec2_instance` resources](../../../reference/data-models/aws.md#aws_ec2_instance).

## Remediation

- Do not expose EC2 instances with Instance Profiles directly to the internet.
- Use a firewall or API Gateway.

:::note

Please refer to the [AWS EC2 documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html) for details.

:::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
- [`aws_ec2_instance` Resource Data Model](../../../reference/data-models/aws.md#aws_ec2_instance)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary" aria-hidden="true">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary" aria-hidden="true">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html)
