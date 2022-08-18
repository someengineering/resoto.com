---
sidebar_label: Clean Up Unused AWS EBS Volumes
sidebar_custom_props:
  tags: [AWS, EBS, EC2]
---

# How to Clean Up Unused AWS EBS Volumes

When EC2 instances are removed, their storage volumes are sometimes left behind. Resoto can find and delete these unused storage volumes.

## Prerequisites

This guide assumes that you have already [installed](../../getting-started/install-resoto/index.md), configured Resoto to [collect your cloud resources](../../getting-started/configure-cloud-provider-access/index.md), and [enabled cleanup](../../getting-started/clean-resources.md).

## Directions

1. Execute the following search in [Resoto Shell](../../concepts/components/shell.md) to list all unused EBS volumes:

   ```bash
   > search is(ebs_volume) and not /ancestors.instance
   ```

2. Refine the search criteria to only include unmounted volumes older than 30 days that have not been accessed in the last 7 days, in specific accounts:

   ```bash
   > search is(aws_ec2_volume) and /ancestors.account.reported.name in [eng-jenkins,eng-development] and volume_status = available and age > 30d and last_access > 7d
   ```

3. Now that we've defined the search for unused EBS volumes, we will simply pipe the result of the search query to the [`clean` command](../../reference/cli/clean.md):

   ```bash
   > search is(aws_ec2_volume) and /ancestors.account.reported.name in [eng-jenkins,eng-development] and volume_status = available and age > 30d and last_access > 7d | clean
   ```

   :::note

   The `clean` command flags a resource for clean up. Cleanup is performed whenever the `collect_and_cleanup` [workflow](../../concepts/automation/workflow.md) runs. It can also be manually triggered using the `workflow run cleanup` command.

   :::

4. Finally, we want to automate flagging unused EBS volumes for cleanup. We can accomplish this by creating a [job](/docs/concepts/automation/job):

   ```bash
   > jobs add --id cleanup-unused-volumes --wait-for-event cleanup_plan 'search is(aws_ec2_volume) and /ancestors.account.reported.name in [eng-jenkins,eng-development] and volume_status = available and age > 30d and last_access > 7d | clean'
   ```

The job will now run each time Resoto emits the `cleanup_plan` event. The `cleanup_plan` event is a part of the `collect_and_cleanup` [workflow](../../concepts/automation/workflow.md) and emitted after resource collection is complete but before the cleanup is performed.

## Further Reading

- [Search](../../concepts/search/index.md)
- [Job](../../concepts/automation/job.md)
- [Workflow](../../concepts/automation/job.md)
- [Command-Line Interface](../../reference/cli/index.md)
