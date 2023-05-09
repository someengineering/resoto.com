---
sidebar_label: Clean Up AWS IAM Access Keys
---

# How to Clean Up AWS IAM Access Keys

IAM access keys are long-term AWS credentials, and it is best practice to remove keys that are no longer in use. Removing unused keys enhances the security and reduces your exposure to risk.

With Resoto, it is easy to find and delete AWS IAM access keys that have not been used for a defined period of time.

## Prerequisites

This guide assumes that you have already [installed](../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS resources](../../how-to-guides/data-sources/collect-aws-resource-data.md).

## Directions

1. Execute the following command in [Resoto Shell](../../reference/components/shell.md) to open the [Resoto Worker](../../reference/components/worker.md) configuration for editing:

   ```bash
   > config edit resoto.worker
   ```

2. Enable cleanup by modifying the `resotoworker` section of the configuration as follows:

   ```yaml
   resotoworker:
     # Enable cleanup of resources
   # highlight-next-line
     cleanup: true
     # Do not actually cleanup resources, just create log messages
   # highlight-next-line
     cleanup_dry_run: false
     # How many cleanup threads to run in parallel
     cleanup_pool_size: 16
   ```

   When cleanup is enabled, marked resources will be deleted as a part of the [`collect_and_cleanup` workflow](../../reference/workflows/index.md#collect_and_cleanup-workflow), which runs each hour by default.

   :::tip

   Set `cleanup_dry_run` to `true` to simulate cleanup without actually deleting resources.

   :::

3. Execute the following search in [Resoto Shell](../../reference/components/shell.md) to find the number of access keys that have not been used within the last 90 days, grouped by user:

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

   It is also possible to exclude specific users' keys from these results. Below is the same search, modified to only return keys not belonging to users `jenkins` and `ci`:

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

4. Now that we've defined the search for unused IAM access keys, simply pipe the result of the search query to the [`clean` command](../../reference/cli/action-commands/clean.md) instead of the [`count` command](../../reference/cli/search-commands/count.md):

   ```bash
   > search is(access_key) and last_access > 90days and /ancestors.user.reported.name not in [jenkins, ci] | clean
   ```

   :::note

   The [`clean` command](../../reference/cli/action-commands/clean.md) flags a resource for cleanup.

   Cleanup is performed whenever the [`collect_and_cleanup` workflow](../../reference/workflows/index.md#collect_and_cleanup-workflow) runs.

   The workflow runs every hour by default, but can also be manually triggered using the `workflow run cleanup` command.

   :::

5. Automate flagging unused access keys for cleanup by creating a [job](../../concepts/automation/index.md#jobs):

   ```bash
   > jobs add --id clean_outdated_access_keys --wait-for-event post_collect 'search is(access_key) and last_access > 90days and /ancestors.user.reported.name not in [jenkins, ci] | clean'
   # highlight-next-line
   ​Job clean_outdated_access_keys added.
   ```

The job will now run each time Resoto emits the `post_cleanup_plan` [event](../../reference/events/index.md). The `post_cleanup_plan` event is emitted in the [`cleanup` phase](../../reference/workflows/index.md#cleanup) of the [`collect_and_cleanup` workflow](../../reference/workflows/index.md#collect_and_cleanup-workflow).

Each time the job runs, unused IAM access keys will be flagged for removal during the next cleanup run.

## Further Reading

- [Resource Cleanup](../../concepts/resource-management/cleanup.md)
- [Cloud Data Sync](../../concepts/cloud-data-sync/index.md)
- [Automation](../../concepts/automation/index.md)
- [Search](../../reference/search/index.md)
- [Command-Line Interface](../../reference/cli/index.md)
