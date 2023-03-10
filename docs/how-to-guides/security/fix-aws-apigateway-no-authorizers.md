---
sidebar_label: Fix AWS API Gateway with no Authorizers
---

# How to Fix AWS API Gateway with no Authorizers

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

If no authorizer is defined, anyone can use the service.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **medium**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS cloud resources](../../getting-started/configure-resoto/aws.md).

## Directions

1. Execute the following [`search` command](../../reference/cli/search-commands/search.md) in [Resoto Shell](../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_api_gateway_rest_api) with(empty, --> is(aws_api_gateway_authorizer))
   # highlight-start
   ​kind=aws_api_gateway_rest_api, ..., region=resoto-poweruser
   ​kind=aws_api_gateway_rest_api, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_api_gateway_rest_api) with(empty, --> is(aws_api_gateway_authorizer)) | dump
   # highlight-start
   ​reported:
   ​  id: /aws/apigateway/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_api_gateway_rest_api
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_api_gateway_rest_api` resources](../../reference/data-models/aws/index.md#aws_api_gateway_rest_api).

3. Fix detected issues by following the remediation steps:

   Add a Cognito pool or attach a Lambda function to control access to your API.

   :::note

   Please refer to the [AWS API Gateway documentation](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html) for details.

   :::

## Further Reading

- [Search](../../reference/search/index.md)
- [Command-Line Interface](../../reference/cli/index.md)
- [`aws_api_gateway_rest_api` Resource Data Model](../../reference/data-models/aws/index.md#aws_api_gateway_rest_api)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html)
