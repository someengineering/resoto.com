---
sidebar_position: 4
---

# Automation

The heart of automation are [Resoto commands](../../reference/cli/index.md) that allow you to interact with the system. Commands in Resoto are self-contained and run in a secure and controlled environment.<br/> Jobs execute [commands](#job-actions) automatically based on a defined [trigger](#job-triggers).

Think of jobs as cron jobs, executed within Resoto. The difference between Resoto jobs and cron jobs is, that while cron jobs are triggered solely based on a schedule, Resoto jobs can also be triggered based on an event or a combination of the two.

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
0 4 * * MON
```

```bash title="Every New Year's Eve at 11:59pm"
59 23 31 12 *
```

:::

### Event Trigger

**An event trigger executes a job when a specific event is emitted by Resoto.**

Resoto updates the state of resources in four phases: [`collect`](docs/concepts/cloud-data-sync/index.md#collect), `cleanup_plan`, `cleanup`, and `generate_metrics`, each of emits events that can be used to trigger jobs.

### Combined Trigger

**A combined trigger combines a schedule trigger with an event trigger, and executes a job when a specific event is emitted after a schedule trigger is fired.**

Combined triggers are useful if you want to perform an action on a specific schedule, but only after a specific event is fired.

:::tip Example

Let's say you want to clean up development accounts at the end of each week.

You could define both a [schedule trigger](#schedule-trigger) (e.g., every Friday at 10pm) that combines with a `cleanup_plan` [event trigger](#event-trigger).

The combination of the two triggers ensures that you execute the job based on the latest state of resources after 10pm each Friday.

:::

## Job Actions

Job actions are command lines executed by the [command-line interface (CLI)](../../reference/cli/index.md).

**Commands can be combined by piping the output of one command to another command.** Combining commands allows you to perform actions based on any logic you define, and this is the basis for creating automations in Resoto.

### Structure of a Job Action

The usual structure of a job action in Resoto is this:

1. Use a [search command](../../reference/cli/search-commands/index.md) to find the resources you want to act on.

   This defines the scope of your job action. You can use any search command to find the resources you want to act on.

2. Pipe the result into ab [action command](../../reference/cli/action-commands/index.md) to act on that resource.

   The action command takes the resulting resource as input and performs the action you define.

   To give you an idea about actions you can perform, here are some examples:

   - tag the resource with the [`tag`](../../reference/cli/action-commands/tag/index.md) command

     ```shell title="Example"
     # set the tag 'owner' to 'team-cumulus' on any resource that matches the search criteria
     > search ... | tag update owner=team-cumulus
     # delete the tag 'costcenter' from on any resource that matches the search criteria
     > search ... | tag delete costcenter
     ```

   - clean up the resource via the [`clean`](../../reference/cli/action-commands/clean.md) command
     ```shell title="Example"
     # mark resources for cleanup. Matching resources will be deleted during the next cleanup run.
     > search ... | clean "Reason for cleanup"
     ```
   - create an alert in Pagerduty via the [`pagerduty`](../../how-to-guides/alerting/create-pagerduty-alert/index.md) command
     ```shell title="Example"
     # Create an alert in pagerduty
     > search ... | pagerduty summary="Reason for the alert" dedup_key="xyz"
     ```
   - create a Jira ticket with the [`jira`](../../how-to-guides/alerting/create-jira-issues) command
     ```shell title="Example"
     # Create a ticket in Jira
     > search ... | jira title="Title of the ticket" username="..." token="..." project_id="123" reporter_id="xyz"
     ```
   - send an alert to Alertmanager via [`alertmanager`](../../how-to-guides/alerting/send-prometheus-alertmanager-alerts)

     ```shell title="Example"
     # Create an alert in alertmanager
     > search ... | alertmanager name="Description of the alert"
     ```

   - send a message to Slack via the [`slack`](../../how-to-guides/alerting/send-slack-notifications) command
     ```shell title="Example"
     # Send a message to Slack
     > search ... | slack title="Description of the alert"
     ```
   - send a message to Discord via the [`discord`](../../how-to-guides/alerting/send-discord-notifications) command

     ```shell title="Example"
     # Send a message to Discord
     > search ... | discord title="Description of the alert"
     ```

   - you can call the [`aws`](https://some.engineering/blog/2022/12/09/resoto-at-your-command) command on AWS resources. It allows all options the AWS CLI offers to change your AWS resource in any way you need.

     ```shell title="Example"
     # Stop running ec2 instances
     > search is(aws_ec2_instance) and instance_status=running and ... | aws ec2 stop-instances --instance-ids {id}
     # Start stopped ec2 instances
     > search is(aws_ec2_instance) and instance_status=stopped and ... | aws ec2 start-instances --instance-ids {id}
     ```

   - send a message to an external webhook via the [`http` or `https`](../../reference/cli/action-commands/http.md) command
     ```shell title="Example"
     # Break the results of the search into chunks of 50 and send them to a webhook.
     > search ... | chunk 50 | http POST my.node.org/handle
     ```
   - ensure that a resource is protected from cleanup via the [`protect`](../../reference/cli/action-commands/protect.md) command
     ```shell title="Example"
     # Protect resources from cleanup
     > search ... | protect
     ```
   - adjust the metadata associated with a resource via the [`set_metadata`](../../reference/cli/action-commands/set_metadata.md) command
     ```shell title="Example"
     # Set the metadata 'owner' to 'team-cumulus' on any resource that matches the search criteria
     > search ... | set_metadata owner=team-cumulus
     ```
   - adjust the desired data associated with a resource via the [`set_desired`](../../reference/cli/action-commands/set_metadata.md) command
     ```shell title="Example"
     # Set the desired data clean=false on any resource that matches the search criteria
     > search ... | set_desired clean=false
     ```

## Related How-To Guides

- [How to Create an Event-Based Job](../../how-to-guides/automation/create-an-event-based-job.md)
- [How to Create a Scheduled Job](../../how-to-guides/automation/create-a-scheduled-job.md)

## Further Reading

- [Cloud Data Sync](docs/concepts/cloud-data-sync/index.md)
- [Command-Line Interface](../../reference/cli/index.md)
