---
sidebar_label: Find AWS Lambda Functions with Obsolete Runtimes
---

# How to Find AWS Lambda Functions with Obsolete Runtimes

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

If you have functions running on a runtime that will be deprecated in the next 60 days, Lambda notifies you by email that you should prepare by migrating your function to a supported runtime.

In some cases, such as security issues that require a backwards-incompatible update, or software that does not support a long-term support (LTS) schedule, advance notice might not be possible.

After a runtime is deprecated, Lambda might retire it completely at any time by disabling invocation. Deprecated runtimes are not eligible for security updates or technical support.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **medium**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS resources](../../../how-to-guides/data-sources/collect-aws-resource-data.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_lambda_function) and function_runtime in [python3.6, python2.7, dotnetcore2.1, ruby2.5, nodejs10.x, nodejs8.10, nodejs4.3, nodejs6.10, dotnetcore1.0, dotnetcore2.0, nodejs4.3-edge, nodejs]
   # highlight-start
   ​kind=aws_lambda_function, ..., region=resoto-poweruser
   ​kind=aws_lambda_function, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_lambda_function) and function_runtime in [python3.6, python2.7, dotnetcore2.1, ruby2.5, nodejs10.x, nodejs8.10, nodejs4.3, nodejs6.10, dotnetcore1.0, dotnetcore2.0, nodejs4.3-edge, nodejs] | dump
   # highlight-start
   ​reported:
   ​  id: /aws/lambda/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_lambda_function
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_lambda_function` resources](../../../reference/data-models/aws/index.md#aws_lambda_function).

## Remediation

- Migrating your deprecated functions to a supported runtime.
- Testing new runtimes as they are made available.
- Rolling out new runtimes in production as soon as possible.

:::note

Please refer to the [AWS Lambda documentation](https://docs.aws.amazon.com/lambda/latest/dg/runtime-support-policy.html) for details.

:::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
- [`aws_lambda_function` Resource Data Model](../../../reference/data-models/aws/index.md#aws_lambda_function)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Lambda Documentation <span class="badge badge--secondary">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](https://docs.aws.amazon.com/lambda/latest/dg/runtime-support-policy.html)
