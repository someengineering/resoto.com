---
sidebar_label: Create an Event-Based Job
---

# How to Create an Event-Based Job

[Jobs](../../concepts/jobs/index.md) allow you to define automations in Resoto and can be triggered by the steps in the [cloud data sync](docs/concepts/cloud-data-sync/index.md).

## Prerequisites

This guide assumes that you have already [installed](../../getting-started/install-resoto/index.md) Resoto.

## Directions

1. Define the action you would like to automate. For example, let's say we want to create a Pagerduty alert if a publicly accessible database is detected:

   ```bash
   > search is(database) and db_publicly_accessible==true | pagerduty summary="Databases found that are publicly accessible" dedup_key="dbs_publicly_accessible"
   ```

2. Determine the [event trigger](../../concepts/jobs/index.md#event-trigger) for the job. In this case, since we want to send an alert as soon as a publicly accessible database is detected, we'll use the `post_collect` event to trigger the job.

3. Now that we've defined the action and decided on the trigger, create the job using the [`jobs add` command](../../reference/cli/action-commands/jobs/add.md) (replace the value of the `--id` parameter with a unique job identifier):

   ```bash
   > jobs add --id alert_public_dbs --wait-for-event post_collect 'search is(database) and db_publicly_accessible==true | pagerduty summary="Databases found that are public to the internet" dedup_key="dbs_publicly_accessible"'
   ```

## Related How-To Guides

- [How to Create a Scheduled Job](./create-a-scheduled-job.md)

## Further Reading

- [Jobs](../../concepts/jobs/index.md)
- [Cloud Data Sync](docs/concepts/cloud-data-sync/index.md)
- [Command-Line Interface](../../reference/cli/index.md)
