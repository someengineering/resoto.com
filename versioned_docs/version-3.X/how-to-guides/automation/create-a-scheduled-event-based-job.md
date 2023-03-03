---
sidebar_label: Create a Scheduled Event-Based Job
---

# How to Create a Scheduled Event-Based Job

[Jobs](../../concepts/automation/index.md) allow you to define automations in Resoto and can be triggered on a regular schedule after [`collect_and_cleanup` workflow](../../reference/workflows/index.md#collect_and_cleanup-workflow) steps fire [events](../../reference/events/index.md).

## Prerequisites

This guide assumes that you have already [installed](../../getting-started/install-resoto/index.md) Resoto.

## Directions

1. Define the action you would like to automate. For example, let's say we want to clean up development accounts at the end of each week:

   ```bash
   > search is(instance) in ["dev", "playground"] | clean
   ```

   :::tip

   See [Search How-To Guides](../search/index.md) for guidance on how to write search queries.

   :::

2. Determine the [job schedule](../../concepts/automation/index.md#schedule-trigger) and define it using a [cron expression](https://crontab.guru). For example, if we want to run the job every Friday at 10pm:

   ```bash
   0 22 * * FRI
   ```

3. Determine the [event trigger](../../concepts/automation/index.md#event-trigger) for the job. In this case, since we want to send an alert as soon as a publicly accessible database is detected, we'll use the `cleanup_plan` [event](../../reference/events/index.md) to trigger the job.

4. Now that we've defined the action and decided on the trigger, create the job using the [`jobs add` command](../../reference/cli/action-commands/jobs/add.md) (replace the value of the `--id` parameter with a unique job identifier):

   ```bash
   > jobs add --id weekly_dev_cleanup --schedule "0 22 * * FRI" --wait-for-event cleanup_plan 'search ... | clean'
   ```

## Related How-To Guides

- [How to Create a Scheduled Job](./create-a-scheduled-job.md)
- [How to Create an Event-Based Job](./create-an-event-based-job.md)

## Further Reading

- [Automation](../../concepts/automation/index.md)
- [Cloud Data Sync](../../concepts/cloud-data-sync/index.md)
- [Command-Line Interface](../../reference/cli/index.md)
- [Events](../../reference/events/index.md)
- [Workflows](../../reference/workflows/index.md)
