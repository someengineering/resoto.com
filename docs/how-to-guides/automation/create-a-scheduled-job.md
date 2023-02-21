---
sidebar_label: Create a Scheduled Job
---

# How to Create a Scheduled Job

[Jobs](docs/concepts/automation/index.md) allow you to define automations in Resoto and can be triggered on a regular schedule.

## Prerequisites

This guide assumes that you have already [installed](../../getting-started/install-resoto/index.md) Resoto.

## Directions

1. Define the action you would like to automate. For example, let's say we want to send Discord alerts listing deprecated RDS instances:

   ```bash
   > search is(aws_rds_instance) and db_type=aurora-postgresql and db_version~11 | discord title="Outdated Aurora databases found." message="This version is outdated and should be migrated!"
   ```

2. Determine the [job schedule](docs/concepts/automation/index.md#schedule-trigger) and define it using a [cron expression](https://crontab.guru). For example, if we want to run the job every Monday at 9am:

   ```bash
   0 9 * * 1
   ```

3. Now that we've defined the action and decided on the schedule, create the job using the [`jobs add` command](../../reference/cli/action-commands/jobs/add.md) (replace the value of the `--id` parameter with a unique job identifier):

   ```bash
   > jobs add --id outdated_aurora --schedule "0 9 * * 1" 'search is(aws_rds_instance) and db_type=aurora-postgresql and db_version~11 | discord title="Outdated Aurora databases found." message="This version is outdated and should be migrated!"'
   ```

## Related How-To Guides

- [How to Create an Event-Based Job](./create-an-event-based-job.md)

## Further Reading

- [Automation](docs/concepts/automation/index.md)
- [Cloud Data Sync](docs/concepts/cloud-data-sync/index.md)
- [Command-Line Interface](../../reference/cli/index.md)
