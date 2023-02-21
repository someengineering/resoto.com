---
sidebar_position: 4
---

# Jobs

Jobs allow you to define automations in Resoto. Jobs are [command-line actions](#job-actions) that are executed automatically based on a defined [trigger](#job-triggers).

## Job Triggers

There are two types of job triggers: schedule triggers and event triggers.

### Schedule Trigger

**A schedule trigger executes a job at a specific time interval described by a [cron expression](https://crontab.guru).**

:::tip Examples

```bash title="Every 5 minutes"
*/5 * * * *
```

```bash title="Every day at 3:00am"
0 3 * * *
```

```bash title="Every Monday at 4:00am"
0 4 \* \* MON
```

```bash title="Every New Year's Eve at 11:59pm"
59 23 31 12 \*
```

:::

### Event Trigger

**An event trigger executes a job when a specific event is emitted by Resoto.**

Resoto updates the state of resources in four phases: [`collect`](../workflows/index.md#collect), `cleanup_plan`, `cleanup`, and `generate_metrics`, each of emits events that can be used to trigger jobs.

### Combined Trigger

**A combined trigger combines a schedule trigger with an event trigger, and executes a job when a specific event is emitted after a schedule trigger is fired.**

Combined triggers are useful if you want to perform an action on a specific schedule, but only after a specific event is fired.

:::tip Example

Let's say you want to clean up development accounts at the end of each week.

You could define both a [schedule trigger](#schedule-trigger) (e.g., every Friday at 10pm) that combines with a `cleanup_plan` [event trigger](#event-trigger).

The combination of the two triggers ensures that you execute the job based on the latest state of resources after 10pm each Friday.

:::

## Job Actions

The heart of automation in Resoto lies in the [command-line interface (CLI)](../../reference/cli/index.md), which performs server-side actions.

Resoto commands can be categorized into the following types:

| Type                                                       | Description                                     |
| ---------------------------------------------------------- | ----------------------------------------------- |
| **[Search](../../reference/cli/search-commands/index.md)** | Search, filter, and traverse the resource graph |
| **[Format](../../reference/cli/format-commands/index.md)** | Define how results should be rendered           |
| **[Action](../../reference/cli/action-commands/index.md)** | Change the state of resources and/or the graph  |
| **[Setup](../../reference/cli/setup-commands/index.md)**   | Set up and configure your Resoto install        |

**Commands can be combined by piping the output of one command to another command.** Combining commands allows you to perform actions based on any logic you define, and this is the basis for creating automations in Resoto.

## Related How-To Guides

- [How to Create an Event-Based Job](../../how-to-guides/automation/create-an-event-based-job.md)
- [How to Create a Scheduled Job](../../how-to-guides/automation/create-a-scheduled-job.md)

## Further Reading

- [Workflows](../../concepts/workflows/index.md)
- [Command-Line Interface](../../reference/cli/index.md)
