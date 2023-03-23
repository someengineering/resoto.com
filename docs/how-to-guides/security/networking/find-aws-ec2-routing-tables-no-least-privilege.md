---
sidebar_label: Find AWS EC2 Routing Tables for VPC peering are not least access
---

# How to Find AWS EC2 Routing Tables for VPC peering are not least access

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

Being highly selective in peering routing tables is a very effective way of minimizing the impact of breach as resources outside of these routes are inaccessible to the peered VPC.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **medium**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS cloud resources](../../../getting-started/configure-resoto/aws.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_vpc_peering_connection) {/vpc: <-- is(aws_vpc), /route_tables[]: <-- is(aws_vpc) --> is(aws_ec2_route_table)} | jq --no-rewrite 'if [.route_tables[]?.reported.route_table_routes[]? | select(.origin!="CreateRouteTable") | (.destination_cidr_block=="0.0.0.0/0") or (.destination_cidr_block==.reported.connection_accepter_vpc_info.cidr_block) or (.destination_cidr_block==.reported.connection_requester_vpc_info.cidr_block)] | any then [.vpc] else [] end' | flatten
   # highlight-start
   ​kind=aws_vpc, ..., region=resoto-poweruser
   ​kind=aws_vpc, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_vpc_peering_connection) {/vpc: <-- is(aws_vpc), /route_tables[]: <-- is(aws_vpc) --> is(aws_ec2_route_table)} | jq --no-rewrite 'if [.route_tables[]?.reported.route_table_routes[]? | select(.origin!="CreateRouteTable") | (.destination_cidr_block=="0.0.0.0/0") or (.destination_cidr_block==.reported.connection_accepter_vpc_info.cidr_block) or (.destination_cidr_block==.reported.connection_requester_vpc_info.cidr_block)] | any then [.vpc] else [] end' | flatten | dump
   # highlight-start
   ​reported:
   ​  id: /aws/ec2/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_vpc
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_vpc` resources](../../../reference/data-models/aws/index.md#aws_vpc).

3. Fix detected issues by following the remediation steps:

   Review routing tables of peered VPCs for whether they route all subnets of each VPC and whether that is necessary to accomplish the intended purposes for peering the VPCs.

   :::note

   Please refer to the [AWS EC2 documentation](https://docs.aws.amazon.com/vpc/latest/peering/peering-configurations-partial-access.html) for details.

   :::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
- [`aws_vpc` Resource Data Model](../../../reference/data-models/aws/index.md#aws_vpc)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](https://docs.aws.amazon.com/vpc/latest/peering/peering-configurations-partial-access.html)
