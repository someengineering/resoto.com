---
sidebar_label: Set Up Discord Notifications
sidebar_custom_props:
  tags: [Discord]
---

# How to Set Up Discord Notifications

## Introduction

Resoto constantly monitors your infrastructure, and can alert you to any detected issues.

One way to receive these notifications is via [Discord](https://discord.com). In this guide, we will configure Resoto to send alerts to a Discord text channel.

## Prerequisites

A Discord server and the privilege to create a webhook in Discord is required.

## Sending Alerts

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
