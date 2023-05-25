---
sidebar_label: Find AWS CloudTrail Trails with Public S3 Buckets
---

# How to Find AWS CloudTrail Trails with Public S3 Buckets

Allowing public access to CloudTrail log content may aid an adversary in identifying weaknesses in the affected accounts use or configuration.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **critical**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS resources](../../../how-to-guides/data-sources/collect-aws-resource-data.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_cloud_trail) and trail_status.is_logging==true --> is(aws_s3_bucket) and bucket_public_access_block_configuration.{block_public_acls!=true or ignore_public_acls!=true or block_public_policy!=true or restrict_public_buckets!=true} or bucket_acl.grants[*].{permission in [READ, READ_ACP] and grantee.uri=="http://acs.amazonaws.com/groups/global/AllUsers"}
   # highlight-start
   ​kind=aws_cloud_trail, ..., region=resoto-poweruser
   ​kind=aws_cloud_trail, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_cloud_trail) and trail_status.is_logging==true --> is(aws_s3_bucket) and bucket_public_access_block_configuration.{block_public_acls!=true or ignore_public_acls!=true or block_public_policy!=true or restrict_public_buckets!=true} or bucket_acl.grants[*].{permission in [READ, READ_ACP] and grantee.uri=="http://acs.amazonaws.com/groups/global/AllUsers"} | dump
   # highlight-start
   ​reported:
   ​  id: /aws/cloudtrail/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_cloud_trail
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_cloud_trail` resources](../../../reference/unified-data-model/aws.md#aws_cloud_trail).

## Remediation

- Analyze Bucket policy to validate appropriate permissions.
- Ensure the AllUsers principal is not granted privileges.
- Ensure the AuthenticatedUsers principal is not granted privileges.

:::note

Please refer to the [AWS CloudTrail documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html) for details.

:::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
- [`aws_cloud_trail` Resource Data Model](../../../reference/unified-data-model/aws.md#aws_cloud_trail)

## External Links

- [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html)
