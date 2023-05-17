---
sidebar_label: Find AWS EC2 Network ACLs Allowing All IPv4 Inbound Traffic
---

# How to Find AWS EC2 Network ACLs Allowing All IPv4 Inbound Traffic

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

Even having a perimeter firewall, having security groups open allows any user or malware with vpc access to scan for well known and sensitive ports and gain access to instance.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **high**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS resources](../../../how-to-guides/data-sources/collect-aws-resource-data.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_ec2_network_acl) and acl_entries[*].{(egress=false and cidr_block="0.0.0.0/0" and rule_action=allow and protocol=-1) } | jq --no-rewrite  'if (( [.reported.acl_entries[]? | contains({egress:false, cidr_block:"0.0.0.0/0", protocol:"-1", rule_action:"deny"}) ] | any | not ) or ((.reported.acl_entries | sort_by(.rule_number) | .[]? | select(.egress==false) | select(.protocol=="-1") |select(.cidr_block=="0.0.0.0/0") | select(.rule_action=="allow") | .rule_number) < (.reported.acl_entries | sort_by(.rule_number) | .[]? | select(.egress==false) | select(.protocol=="-1") | select(.cidr_block=="0.0.0.0/0") | select(.rule_action=="deny") | .rule_number ))) then [.] else [] end' | flatten
   # highlight-start
   ​kind=aws_ec2_network_acl, ..., region=resoto-poweruser
   ​kind=aws_ec2_network_acl, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_ec2_network_acl) and acl_entries[*].{(egress=false and cidr_block="0.0.0.0/0" and rule_action=allow and protocol=-1) } | jq --no-rewrite  'if (( [.reported.acl_entries[]? | contains({egress:false, cidr_block:"0.0.0.0/0", protocol:"-1", rule_action:"deny"}) ] | any | not ) or ((.reported.acl_entries | sort_by(.rule_number) | .[]? | select(.egress==false) | select(.protocol=="-1") |select(.cidr_block=="0.0.0.0/0") | select(.rule_action=="allow") | .rule_number) < (.reported.acl_entries | sort_by(.rule_number) | .[]? | select(.egress==false) | select(.protocol=="-1") | select(.cidr_block=="0.0.0.0/0") | select(.rule_action=="deny") | .rule_number ))) then [.] else [] end' | flatten | dump
   # highlight-start
   ​reported:
   ​  id: /aws/ec2/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_ec2_network_acl
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_ec2_network_acl` resources](../../../reference/data-models/aws/index.md#aws_ec2_network_acl).

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
- [`aws_ec2_network_acl` Resource Data Model](../../../reference/data-models/aws/index.md#aws_ec2_network_acl)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary" aria-hidden="true">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary" aria-hidden="true">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html)
