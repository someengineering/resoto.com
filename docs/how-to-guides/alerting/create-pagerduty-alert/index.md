---
sidebar_label: Create Pagerduty Alerts
---

# How to Create Pagerduty Alerts

Resoto constantly monitors your infrastructure, and can alert you to any detected issues. [Pagerduty](https://www.pagerduty.com) is the de-facto standard to escalate alerts. In this guide, we will configure Resoto to send alerts to Pagerduty with a [custom command](../../../reference/cli/index.md).

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your cloud resources](../../../getting-started/configure-cloud-provider-access/index.md).

You will also need a valid routing key for your [Pagerduty](https://www.pagerduty.com) account.

The `pagerduty` command has the following parameters. All parameters without default values are required to define by the user.

| Parameter | Description | Default Value |
| --- | --- | --- |
| `summary` | Summary of this alert |  |
| `routing_key` | The GUID of one of your Events API V2 integrations. This is the "Integration Key" listed on the Events API V2 integration\'s detail page. |  |
| `dedup_key` | A string that identifies the alert. Pagerduty will ensure that only one alert with this key is active at a time. |  |
| `source` | The source of this alert | `Resoto` |
| `severity` | The severity of the alert. One of: `critical`, `error`, `warning` or `info`. | `warning` |
| `source` | The unique location of the affected system, preferably a hostname or FQDN. | `Resoto` |
| `event_action` | The action to take on the event. One of: `trigger`, `acknowledge`, `resolve` or `assign`. | `trigger` |
| `client` | The name of the monitoring client submitting the event. | `Resoto` |
| `client_url` | A URL linking to the monitoring client. | `https://resoto.com` |
| `webhook_url` | The complete url of the pagerduty events API. | `https://events.pagerduty.com/v2/enqueue` |

```bash
> help pagerduty
```

1. Configure the routing key to use for this command. This way we do not need to provide it with every execution of this command.

   ```bash
   > config edit resoto.core.commands
   ```

   Go to the `pagerduty` section and add your Routing key as default value to the `routing_key` parameter.

2. Define the search criteria that will trigger an alert. For example, let's say we want to send alerts whenever we find a [Kubernetes Pod](https://kubernetes.io/docs/concepts/workloads/pods) updated in the last hour with a restart count greater than 20:

   ```bash
   > search is(kubernetes_pod) and pod_status.container_statuses[*].restart_count > 20 and last_update<1h
   # highlight-next-line
   ​kind=kubernetes_pod, name=db-operator-mcd4g, restart_count=[42], age=2mo5d, last_update=23m, cloud=k8s, account=prod, region=kube-system
   ```

3. Now that we've defined the alert trigger, we will simply pipe the result of the search query to the `pagerduty` command, replacing the `name` with your desired alert name:

   ```bash
   > search is(kubernetes_pod) and pod_status.container_statuses[*].restart_count > 20 and last_update<1h | pagerduty summary="Pods are restarting too often!" dedup_key="Resoto::PodRestartedTooOften"
   ```

   If the defined condition is currently true, you should see a new alert in Pagerduty:

4. Finally, we want to automate checking of the defined alert trigger and send alerts to [Pagerduty](https://www.pagerduty.com) whenever the result is true. We can accomplish this by creating a [job](../../../concepts/jobs/index.md):

   ```bash
   > jobs add --id alert_on_pod_failure--wait-for-event post_collect 'search is(kubernetes_pod) and pod_status.container_statuses[*].restart_count > 20 and last_update<1h | pagerduty summary="Pods are restarting too often!" dedup_key="Resoto::PodRestartedTooOften"
   ```

## Further Reading

- [Search](../../../reference/search/index.md)
- [Jobs](../../../concepts/jobs/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
