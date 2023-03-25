---
sidebar_label: Find AWS API Gateways Without WAF ACLs
---

# How to Find AWS API Gateways Without WAF ACLs

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

Access control lists (ACLs) reduce the attack surface and minimize the risk of service abuse for internet-reachable services.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **medium**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS cloud resources](../../../getting-started/configure-resoto/aws.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_api_gateway_stage) and stage_web_acl_arn==null
   # highlight-start
   ​kind=aws_api_gateway_stage, ..., region=resoto-poweruser
   ​kind=aws_api_gateway_stage, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_api_gateway_stage) and stage_web_acl_arn==null | dump
   # highlight-start
   ​reported:
   ​  id: /aws/apigateway/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_api_gateway_stage
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_api_gateway_stage` resources](../../../reference/data-models/aws/index.md#aws_api_gateway_stage).

## Remediation

Use AWS WAF to protect your API Gateway API from common web exploits. SQL injection and cross-site scripting (XSS) attacks can affect API availability and performance, compromise security, or consume excessive resources.

:::note

Please refer to the [AWS API Gateway documentation](https://docs.aws.amazon.com/apigateway/latest/developerguide/security-monitoring.html) for details.

:::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
- [`aws_api_gateway_stage` Resource Data Model](../../../reference/data-models/aws/index.md#aws_api_gateway_stage)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](https://docs.aws.amazon.com/apigateway/latest/developerguide/security-monitoring.html)
