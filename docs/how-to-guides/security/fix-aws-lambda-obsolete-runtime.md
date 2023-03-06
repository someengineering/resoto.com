---
sidebar_label: Fix AWS Lambda functions with an obsolete runtime
---

# How to fix AWS Lambda functions with an obsolete runtime

Resoto builds a cloud asset inventory by collecting resource metadata from cloud providers. This inventory is used to detect security and compliance issues.

## Security Considerations

This check is part of the [CIS Amazon Web Services Benchmarks](https://www.cisecurity.org/benchmark/amazon_web_services) and is rated with severity **medium**.

#### Risk

If you have functions running on a runtime that will be deprecated in the next 60 days, Lambda notifies you by email that you should prepare by migrating your function to a supported runtime. In some cases, such as security issues that require a backwards-incompatible update, or software that does not support a long-term support (LTS) schedule, advance notice might not be possible. After a runtime is deprecated, Lambda might retire it completely at any time by disabling invocation. Deprecated runtimes are not eligible for security updates or technical support. The following search command will find [`aws_lambda_function` resources](../../reference/data-models/aws/index.md#aws_lambda_function) that are not compliant. It is recommended to adapt the configuration of matching resource to be compliant.

#### Remediation

Test new runtimes as they are made available. Implement them in production as soon as possible. See [provider specific documentation](https://docs.aws.amazon.com/lambda/latest/dg/runtime-support-policy.html) for more details.

## Prerequisites

This guide assumes that you have already [installed](../../getting-started/install-resoto/index.md) and configured Resoto to [collect your cloud resources](../../getting-started/configure-resoto/index.md). The following command can be executed either from the [Resoto Shell](../../reference/components/shell.md) or from the Resoto WebUI.

## Directions

1. Execute the [`search` command](../../reference/cli/search-commands/search.md) in [Resoto Shell](../../reference/components/shell.md) or WebUI:
   ```bash
   > search is(aws_lambda_function) and function_runtime in [python3.6, python2.7, dotnetcore2.1, ruby2.5, nodejs10.x, nodejs8.10, nodejs4.3, nodejs6.10, dotnetcore1.0, dotnetcore2.0, nodejs4.3-edge, nodejs]
   # highlight-start
   ​kind=aws_lambda_function, ..., region=resoto-poweruser
   ​kind=aws_lambda_function, ..., account=poweruser-team
   # highlight-end
   ```
2. To view resource details, pipe the previous command into the [`dump` command](../../reference/cli/format-commands/dump.md):
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
3. Migrate your deprecated functions to a supported runtime. Test new runtimes as they are made available. Implement them in production as soon as possible. See [provider specific documentation](https://docs.aws.amazon.com/lambda/latest/dg/runtime-support-policy.html) for more details.

## Further Reading

- [Search](../../reference/search/index.md)
- [Command-Line Interface](../../reference/cli/index.md)
- [Data Model for `aws_lambda_function`](../../reference/data-models/aws/index.md#aws_lambda_function)
- [CIS Amazon Web Services Benchmarks](https://www.cisecurity.org/benchmark/amazon_web_services)
- [Provider specific documentation](https://docs.aws.amazon.com/lambda/latest/dg/runtime-support-policy.html)
