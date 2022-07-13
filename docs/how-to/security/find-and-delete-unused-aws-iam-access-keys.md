---
sidebar_label: Find and Delete Unused AWS IAM Access Keys
sidebar_custom_props:
  tags: [AWS, IAM]
---

# How to Find and Delete Unused AWS IAM Access Keys

## Introduction

IAM access keys are long-term AWS credentials, and it is best practice to remove keys that are no longer in use. Removing unused keys enhances the security and reduces your exposure to risk.

With Resoto, it is easy to find and delete AWS IAM access keys that have not been used for a defined period of time.

## Prerequisites

This guide assumes that you have already [installed](../../getting-started/install-resoto/index.md) and configured Resoto to [collect AWS resources](../../getting-started/configure-cloud-provider-access/aws.md).

## Finding Unused Access Keys

The following query will return the number of access keys that have not been used within the last 90 days, grouped by user:

```bash
> search is(access_key) and last_access > 90days <-- is(user) | count name
# highlight-start
​ccm-sa: 1
​nancy: 1
​db-runner: 3
​packer-ami: 9
​test-max: 12
​jenkins: 1
​ci: 2
​total matched: 26
​total unmatched: 0
# highlight-end
```

It is also possible to exclude specific users' keys from these results. Below is the same query, modified to only return keys not belonging to users `jenkins` and `ci`:

```bash
> search is(access_key) and last_access > 90days <-- is(user) and name not in [jenkins, ci] | count name
# highlight-start
​ccm-sa: 1
​nancy: 1
​db-runner: 3
​packer-ami: 9
​test-max: 12
​total matched: 26
​total unmatched: 0
# highlight-end
```

## Automating Deletion of Unused Access Keys

We can use the above query to automate deletion of unused access keys by creating a [job](/docs/concepts/automation/job):

```bash
> jobs add --id clean_outdated_access_keys --wait-for-event post_collect
  'search is(access_key) and last_access > 90days and
  /ancestors.user.reported.name not in [jenkins, ci] | clean'
# highlight-next-line
​Job clean_outdated_access_keys added.
```
