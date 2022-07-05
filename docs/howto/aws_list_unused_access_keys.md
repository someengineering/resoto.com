---
sidebar_label: AWS IAM access keys
---

# List all users with unused access keys

## Tags

- AWS
- IAM
- Security

## Problem Description

Find IAM users that have access keys that they are not using any longer. Keys that are not used are usually not required. A smaller number of keys reduces the attack vector and should be preferred. Following this guide will improve your security.

## Provided Solution

Find and delete IAM access keys that have not been used for a period of time.

## Steps to follow

List all users with access keys that have not been used for a specific period of time. The following query will give you the list of users together with the number of access keys that have not been used in the last 90 days. If you know users where this is expected, you can define a whitelist of users, which will be ignored. This example uses a period of 90 days to mark an access key as unused and whitelists `jenkins` and `ci`.

```shell title="List users with unused access keys older than a certain age"
> search is(access_key) and last_access > 90days <-- is(user) and
  name not in [jenkins, ci] | count name
​ccm-sa: 1
​nancy: 1
​db-runner: 3
​packer-ami: 9
​test-max: 12
​total matched: 26
​total unmatched: 0
```

Above result shows a list of users you can inform to fix this issue. One automated way would be to delete such access keys directly. This can be achieved by creating a [job](/docs/concepts/automation/job) that deletes the access keys. The job will run continuously once a fresh snapshot has been collected. This way you can be sure, that there will be no access keys left in the system that are not used.

```shell title="Delete access keys that are not used since 90 days"
> jobs add --id clean_outdated_access_keys --wait-for-event post_collect
  'search is(access_key) and last_access > 90days and
  /ancestors.user.reported.name not in [jenkins, ci] | clean'
​Job clean_outdated_access_keys added.
```
