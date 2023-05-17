---
sidebar_label: Find Expired AWS IAM Server Certificates
---

# How to Find Expired AWS IAM Server Certificates

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

Removing expired SSL/TLS certificates eliminates the risk that an invalid certificate will be deployed accidentally to a resource such as AWS Elastic Load Balancer (ELB), which can damage the credibility of the application/website behind the ELB.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **critical**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS resources](../../../how-to-guides/data-sources/collect-aws-resource-data.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_iam_server_certificate) and expires<{{certificate_expiration.from_now}}
   # highlight-start
   ​kind=aws_iam_server_certificate, ..., region=resoto-poweruser
   ​kind=aws_iam_server_certificate, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_iam_server_certificate) and expires<{{certificate_expiration.from_now}} | dump
   # highlight-start
   ​reported:
   ​  id: /aws/iam/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_iam_server_certificate
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_iam_server_certificate` resources](../../../reference/data-models/aws/index.md#aws_iam_server_certificate).

## Remediation

- Delete the expired certificates.
- Deleting the certificate could have implications for your application if you are using an expired server certificate with Elastic Load Balancing, CloudFront, etc.
- One has to make configurations at respective services to ensure there is no interruption in application functionality.

:::note

Please refer to the [AWS IAM documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html) for details.

:::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
- [`aws_iam_server_certificate` Resource Data Model](../../../reference/data-models/aws/index.md#aws_iam_server_certificate)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary" aria-hidden="true">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary" aria-hidden="true">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html)
