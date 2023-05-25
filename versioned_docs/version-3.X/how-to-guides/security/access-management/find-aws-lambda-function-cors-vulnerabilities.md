---
sidebar_label: Find AWS Lambda Function CORS Vulnerabilities
---

# How to Find AWS Lambda Function CORS Vulnerabilities

Publicly accessible services could expose sensitive data to bad actors.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **medium**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS resources](../../../how-to-guides/data-sources/collect-aws-resource-data.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_lambda_function) and function_url_config.cors.allow_origins ~ "*"
   # highlight-start
   ​kind=aws_lambda_function, ..., region=resoto-poweruser
   ​kind=aws_lambda_function, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_lambda_function) and function_url_config.cors.allow_origins ~ "*" | dump
   # highlight-start
   ​reported:
   ​  id: /aws/lambda/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_lambda_function
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_lambda_function` resources](../../../reference/unified-data-model/aws.md#aws_lambda_function).

## Remediation

- Grant usage permissions on a per-resource basis, applying least privilege principle.

:::note

Please refer to the [AWS Lambda documentation](https://docs.aws.amazon.com/secretsmanager/latest/userguide/lambda-functions.html) for details.

:::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
- [`aws_lambda_function` Resource Data Model](../../../reference/unified-data-model/aws.md#aws_lambda_function)

## External Links

- [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation](https://docs.aws.amazon.com/secretsmanager/latest/userguide/lambda-functions.html)
