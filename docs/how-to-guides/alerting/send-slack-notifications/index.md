---
sidebar_label: Send Slack Notifications
sidebar_custom_props:
  tags: [Slack]
---

# How to Send Slack Notifications

Resoto constantly monitors your infrastructure, and can alert you to any detected issues.

One way to receive these alerts is via [Slack](https://slack.com). In this guide, we will configure Resoto to send alerts to a Slack channel.

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your cloud resources](../../../getting-started/configure-cloud-provider-access/index.md).

## Directions

1. [Create an Incoming Webhook](https://api.slack.com/messaging/webhooks) in Slack.

2. Define search criteria that will trigger an alert. For example, let's say we have a test account `test-account` where instances with more than 4GB of RAM are not permitted:

   ```bash
   > search is(instance) and instance_memory>4 and /ancestors.account.reported.name==test-account
   ```

3. Now that we've defined the alert trigger, we will simply pipe the result of the search query to the `slack` [custom command](../../../reference/cli/index.md#custom-commands), replacing the `title` with your desired alert text and `webhook` with your Slack webhook URL:

   ```bash
   > search is(instance) and instance_memory>4 and /ancestors.account.reported.name==test-account | slack title="Large instances found in test-account" webhook="https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX"
   ```

   If the defined condition is currently true, you should see a new message in Slack:

   ![Example Slack alert](./img/example-alert.png)

4. Finally, we want to automate checking of the defined alert trigger and send alerts to Slack whenever the result is true. We can accomplish this by creating a [job](../../../concepts/automation/job.md):

   ```bash
   > jobs add --id notify_large_test_instances --wait-for-event post_collect 'search is(instance) and instance_memory>4 and /ancestors.account.reported.name==test-account | slack title="Large instances found in test-account" webhook="https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX"'
   ```

:::tip

A default webhook URL can be specified in the `slack` custom command configuration, so that you can simply execute `slack title="..."`.

:::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Job](../../../concepts/automation/job.md)
- [Command-Line Interface](../../../reference/cli/index.md)
