---
sidebar_label: Expired resources
sidebar_custom_props:
  tags: [cleanup]
---

# Clean up expired resources

## Prerequisites

This guide assumes that you have already [installed](../../getting-started/install-resoto/index.md) and configured Resoto for [cleanup](../../getting-started/clean-resources.md).

## Introduction

When creating resources Resoto allows you to set an `expiration` tag that will make sure the resource is cleaned up when it expires. This can be used either as a safety net for when a CI job fails or the IaC tool aborts halfway through its run, or even as the main means of maintaining the resource lifecycle.

Resoto understands the following tags: `expiration`, `resoto:expiration`, and `resoto:expires`. The first two serve the same purpose and contain a time delta string like `24h` which would ensure the resource is being deleted 24 hours after its creation. The third tag expects an ISO 8601 timestamp like `2022-09-21T10:40:11+00:00` which would ensure the resource is being deleted if it still exists after that time.

Based on these tags Resoto calculates a `metadata.expires` property that we can search for. It contains the timestamp of when the resource expires.

## Supported tags and their formats

| Tag                 | Format                      | Description                                          |
| ------------------- | --------------------------- | ---------------------------------------------------- |
| `resoto:expires`    | `2022-09-21T10:40:11+00:00` | ISO 8601 timestamp                                   |
| `resoto:expiration` | `24h`                       | A timedelta relative to the resource's creation time |
| `expiration`        | `24h`                       | A timedelta relative to the resource's creation time |

Example of valid units for the expiration tag:

| Unit      | Valid abbreviations  |
| --------- | -------------------- |
| `years`   | `year`, `yr`, `y`    |
| `months`  | `month`, `mo`, `M`   |
| `days`    | `day`, `d`           |
| `weeks`   | `week`, `w`          |
| `hours`   | `hour`, `h`          |
| `minutes` | `minute`, `min`, `m` |
| `seconds` | `second`, `s`        |

A space between the numeric value and the unit is optional, meaning `7d4h` and `7 days 4 hours` are equivalent.

## Cleaning up manually

This search finds expired resources and flags them for cleanup.

```
> search /metadata.expires < "@now@" | clean "Resource is expired"
```

Resoto automatically expands `@now@` to the current date and time. See `help placeholders` for more information on valid placeholder strings.

:::note

The `clean` command flags a resource for clean up. Cleanup is performed whenever the `collect_and_cleanup` [workflow](../../concepts/automation/workflow.md) runs. It can also be manually triggered using the `workflow run cleanup` command.

:::

### Automating cleanup using jobs

Resoto can automatically clean up orphaned load balancers by turning the above search into a [job](../../concepts/automation/job.md).

```
> jobs add --id cleanup-expired --wait-for-event cleanup_plan 'search /metadata.expires < "@now@" | clean "Resource is expired"'
```

Now our command runs automatically every time Resoto emits the `cleanup_plan` event. This event is part of the `collect_and_cleanup` [workflow](../../concepts/automation/workflow.md) and is emitted after Resoto has finished collecting cloud provider resources and before cleanup is performed. Execute `workflow show collect_and_cleanup` to list the steps that make up the `collect_and_cleanup` workflow.

## Enabling the `cleanup_expired` plugin

Instead of manually defining the search and adding a job the `cleanup_expired` plugin can be enabled to perform this function.

In [Resoto Shell](../../concepts/components/shell.md) execute

```
> config edit resoto.worker
```

and find the following section

```yaml
plugin_cleanup_expired:
  # Enable plugin?
  enabled: true
```

The plugin runs automatically every time Resoto emits the before mentioned `cleanup_plan` event.
