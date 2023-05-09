---
sidebar_label: Find AWS EC2 Security Groups Allowing All Inbound Traffic on Default PostgreSQL Ports
---

# How to Find AWS EC2 Security Groups Allowing All Inbound Traffic on Default PostgreSQL Ports

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

If security groups are not properly configured, the attack surface is increased.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **high**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS resources](../../../how-to-guides/data-sources/collect-aws-resource-data.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_ec2_security_group) and group_ip_permissions[*].{(ip_protocol=-1 or (from_port>=5432 and to_port<=5432 and ip_protocol=tcp)) and (ip_ranges[*].cidr_ip="0.0.0.0/0" or ipv6_ranges[*].cidr_ipv6="::/0")}
   # highlight-start
   ​kind=aws_ec2_security_group, ..., region=resoto-poweruser
   ​kind=aws_ec2_security_group, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_ec2_security_group) and group_ip_permissions[*].{(ip_protocol=-1 or (from_port>=5432 and to_port<=5432 and ip_protocol=tcp)) and (ip_ranges[*].cidr_ip="0.0.0.0/0" or ipv6_ranges[*].cidr_ipv6="::/0")} | dump
   # highlight-start
   ​reported:
   ​  id: /aws/ec2/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_ec2_security_group
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_ec2_security_group` resources](../../../reference/data-models/aws/index.md#aws_ec2_security_group).

## Remediation

- Apply Zero Trust approach.
- Implement a process to scan and remediate unrestricted or overly permissive network ACLs.
- Recommended best practices is to narrow the definition for the minimum ports required.

:::note

Please refer to the [AWS EC2 documentation](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html) for details.

:::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
- [`aws_ec2_security_group` Resource Data Model](../../../reference/data-models/aws/index.md#aws_ec2_security_group)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html)
