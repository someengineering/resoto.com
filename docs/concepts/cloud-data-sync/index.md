---
sidebar_position: 1
---

# Cloud Data Sync

In today's fast-paced and ever-changing cloud infrastructure, keeping track of all the resources being used can be challenging. This is especially true for organizations with multiple teams and engineers working in multiple cloud accounts and regions.

Resoto is a tool that regularly scrapes your cloud infrastructure to ensure that the latest information about all resources is available, no matter which cloud provider, account, or region is being used. By creating a snapshot of your infrastructure and storing it in an internal graph database, Resoto provides a complete and up-to-date view of _all_ your cloud resources.

Having a complete view of your infrastructure is important since it defines the foundation for [Insights](../../reference/user-interface/index.md), [Metrics](https://some.engineering/blog/2022/06/09/building-actionable-cloud-infrastructure-metrics) and [Automation](../automation/index.md). It allows you to understand the current state of your infrastructure, and to identify any issues that might be present. Think of security vulnerabilities, compliance issues, or unused resources costing you money. All of that information is revealed by Resoto and available to you in a single place.

While it is essential to have a complete view of your infrastructure, it might also be necessary to be able to act on that information. Resoto can be configured to monitor your infrastructure and trigger actions when certain conditions are met. This is done by defining a set of rules that will be evaluated against the current state of your infrastructure. When a rule is triggered, Resoto can take action by changing the state of a resource or by sending an alert to a third-party tool (see the [list of integrations](../../how-to-guides/alerting/index.md)).

The cloud data sync process runs continuously in the background and is responsible for collecting and storing information about your cloud resources. It is also responsible for evaluating rules and triggering actions when necessary. By default, it runs every hour, but this can be configured to run more or less frequently. The data sync process is defined as [workflow](../../reference/cli/action-commands/workflows/index.md) in Resoto, and is divided into two phases: collect and react.

## Collect

Resoto's pluggable architecture allows data collection from multiple [cloud providers](https://github.com/someengineering/resoto/tree/main/plugins). It will instruct each collector plugin to scrape the cloud infrastructure in the collect phase.

![Collect](./img/collect.png)

Each collector plugin encodes the logic to scrape the cloud provider's API and transform the data into a [common data model](../../reference/data-models/index.md). This is important since it allows you to query any resource based on well-known properties, regardless of the cloud provider. Every resource will have an `id`, `name`, `kind`, `tags`, `created_at` and `updated_at` property as well as the information about `cloud`, `account` and `region` it belongs to. Detailed information about every resource of a specific kind is available as well.

The collectors not only collect the latest state of things of the infrastructure - it also knows how resources are related to each other. This information is used to connect the resources collected and build an [asset inventory graph](../asset-inventory-graph/index.md). The graph as an underlying data source allows for insights from the data of a single resource and the relationships between resources.

All collectors are designed to be run in parallel, allowing for fast and efficient data collection. Each collector will deliver the latest state of the infrastructure to Resoto, which will then store the data in the internal graph database. After all configured collectors have finished, the latest state of your infrastructure is available in Resoto.

## React

When the React phase starts, the collect phase is done. At this point, you have a complete and up-to-date view of your infrastructure available from a single place. The React phase is responsible for evaluating rules and triggering actions when necessary.

[Resoto Metrics](../../reference/components/metrics.md) is triggered in this phase. Based on its configuration, it will calculate the latest time series metrics for your infrastructure and store them in the time series database. It comes with a set of predefined metrics that make sense for most installations. You can also define your own metrics, which can be used to create custom dashboards and alerts.

There is a set of predefined action plugins for [resource management](../resource-management/index.md) which can be activated in the [Resoto Worker configuration](../../reference/configuration/worker.md) and also run in that phase. These plugins allow you to automatically manage your infrastructure, by enforcing tags or labels, or by deleting unused resources.

Last but not least, you can define your rules and actions in this phase. You can [automate](../automation/index.md) a job by listening to the desired [Cloud data sync event](../../reference/events#cloud-data-sync-events) and performing the desired action.

![React](./img/react.png)

The following list of actions is not exhaustive due to the extensible nature of Resoto, but it should give you an idea of what is possible:

- [tag](../../reference/cli/action-commands/tag/index.md) a matching resource either by using a static value or by creating one based on other properties or relationships of the resource. See a [blog post](https://some.engineering/blog/2022/11/21/cloud-resource-tagging-with-resoto) for inspiration.
- Mark a resource for [cleanup](../../reference/cli/action-commands/clean.md), so it will be deleted. This can be handy in development environments where you want to have more liberal permissions but still want to keep the infrastructure clean.
- Perform a cloud provider agnostic CLI command on a matching resource. See the [aws](https://some.engineering/blog/2022/12/09/resoto-at-your-command#the-aws-command) command as an example to perform an AWS CLI command on a matching resource.
- Trigger an external system by calling a webhook. The built-in [http](../../reference/cli/action-commands/http.md) command calls any HTTP or HTTPS endpoint with any required data format.
- Export the data collected by Resoto to an external system for further investigation. See the related [How-To](../../how-to-guides/data-export/index.md) section for inspiration. Another popular example is exporting the data to a SQL database or data lake. See [Cloud2SQL](https://cloud2sql.com) for more information.
- Send a message to an instant messenger like [Slack](../../how-to-guides/alerting/send-slack-notifications/index.md) or [Discord](../../how-to-guides/alerting/send-discord-notifications/index.md) to notify a team about issues with a matching resource.
- Create an alert in [Pagerduty](../../how-to-guides/alerting/create-pagerduty-alerts/index.md) or [Alertmanager](../../how-to-guides/alerting/send-prometheus-alertmanager-alerts) and use the escalation policies of these tools to notify the right people.

## Summary

Resoto is designed to run permanently in the background, constantly monitoring your infrastructure and taking action when necessary. The Cloud data sync process is the heart of Resoto. It is responsible for collecting and storing information about your cloud resources, and for evaluating rules, and triggering actions when necessary.
