---
sidebar_label: Discord Notification
---

# Notify via Discord

## Tags:

- Cloud provider independent
- Notification

## Problem Description

Resoto is able to actively search for issues in your cloud. You need a communication channel to inform people about issues that popped up.

## Provided Solution

Send the result of a query to a dedicated Discord channel. Refine message and content to be sent.

## Steps to follow

Resoto ships with a custom command called `discord` which is able to send the result of a search to a Discord channel. In order to use this command you need to set up a Discord webhook in the [Integrations Section](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) and copy the webhook URL.

A common approach is the definition of rules as a search: every result that is returned violates the rule. For the sake of an example, lets assume we have a test account with name `test-account`, where people are not allowed to create instances with more than 4GB of RAM. The following search will find all instances in `test-account` with more than 4GB of RAM and send the result to Discord. To run this example, you need to replace the webhook URL with the one you have set up in the Discord webhook.

```shell title="Find instances in the test account "
> search is(instance) and instance_memory>4 and /ancestors.account.reported.name==test-account |
  discord title="Big Instances found. Please clean them up!"
  webhook="https://discord.com/api/webhooks/123/xxx"
​
​1 requests with status 204 sent.
```

The next step is automating this command as [Job](/docs/concepts/automation/job). We want to trigger this command whenever the resources in the cloud provider have changed. This way we will receive notifications in Discord when new resources have been created, that violate our rule.

```shell title="Create a rule to run the command automatically"
> jobs add --id notify_big_instances_in_test_account --wait-for-event post_collect
  'search is(instance) and instance_memory>4 and
  /ancestors.account.reported.name==test-account |
  discord title="Big Instances found. Please clean them up!"
  webhook="https://discord.com/api/webhooks/123/xxx"'
​
​Job notify_big_instances_in_test_account added.
```

See this tutorial as [video](https://www.loom.com/share/d19133bec53241aebe7b6e1f2e759285) in action.