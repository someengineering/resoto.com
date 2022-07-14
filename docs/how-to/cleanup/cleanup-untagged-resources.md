---
sidebar_label: Untagged resources
sidebar_custom_props:
  tags: [AWS]
---

# Clean up untagged resources

## Prerequisites

This guide assumes that you have already [installed](../../getting-started/install-resoto/index.md) and configured Resoto for [cleanup](../../getting-started/clean-resources.md).

## Introduction

We might have a policy in our engineering organization that requires all resources to be tagged with an `owner` and `expiration`. This is a good way to ensure that we can easily find and track all resources that we own.

## Manually cleaning up untagged resources

The following search finds all instances and volumes that are not tagged with an `owner` and `expiration` within 2 hours after their creation and flags them for cleanup.

```
> search is(instance,volume) and age > 2h and (tags.owner = null or tags.expiration = null) | clean
```

:::note

The `clean` command flags a resource for clean up. Cleanup is performed whenever the `collect_and_cleanup` [workflow](../../concepts/automation/workflow.md) runs. It can also be manually triggered using the `workflow run cleanup` command.

:::

### Automating cleanup using jobs

Resoto can automatically clean up resources missing a mandatory tag by turning the above search into a [job](../../concepts/automation/job.md).

```
> jobs add --id cleanup-untagged-resources --wait-for-event cleanup_plan 'search is(instance,volume) and age > 2h and (tags.owner = null or tags.expiration = null) | clean'
```

Now our command runs automatically every time Resoto emits the `cleanup_plan` event. This event is part of the `collect_and_cleanup` [workflow](../../concepts/automation/workflow.md) and is emitted after Resoto has finished collecting cloud provider resources and before cleanup is performed. Execute `workflow show collect_and_cleanup` to list the steps that make up the `collect_and_cleanup` workflow.

## Cleaning up untagged resources via the `cleanup_untagged` plugin

The manual search above works well for few resources. But when filtering for many accounts and/or resource kinds it can get very long very fast. That is why Resoto provides a plugin that can be used to clean up untagged resources. Its configuration takes a list of accounts in which resource tags should be enforced as well as a list of resource kinds and their age threshold after which they must be tagged with all of the listed tags.

### Enabling and configuring the plugin

In [Resoto Shell](../../concepts/components/shell.md) execute

```
> config edit resoto.worker
```

and find the following section

```yaml
plugin_cleanup_untagged:
  # Enable plugin?
  enabled: true
  # Configuration for the plugin
  config:
    accounts:
      aws:
        '068564737731':
          name: 'playground'
          age: '1d'
        '575584959047':
          name: 'eng-sre'
      example:
        Example Account:
          name: 'Example Account'
    default:
      age: '2h'
    kinds:
      - 'aws_ec2_instance'
      - 'aws_ec2_volume'
      - 'aws_vpc'
      - 'aws_cloudformation_stack'
      - 'aws_elb'
      - 'aws_alb'
      - 'aws_alb_target_group'
      - 'aws_eks_cluster'
      - 'aws_eks_nodegroup'
      - 'example_instance'
      - 'example_network'
    tags:
      - 'owner'
      - 'expiration'
```

From now on resources of the listed kinds in the AWS account 068564737731 will be cleaned up if they are missing the `owner` or `expiration` tags one day after creation, or in account 575584959047 2 hours after creation.

### Config section format

The config section consists of four sub-sections. `default`, `tags`, `classes` and `accounts`. The default section specifies the default age a resource must have before we enforce mandatory tags on it. For instance if `age` is set to `2h` this means that whatever mechanism creates a resource has two hours to add those mandatory tags.

The tags section is a list of tag names that MUST exist on every resource kind. The `kinds` section is a list of resource kinds for which tags specified in the `tags` list must exist.

The accounts section contains a dictionary with cloud IDs as keys (e.g. `aws`) and account IDs for which tags will be enforced as values (e.g. `068564737731`). Those in turn contain a name and optionally an `age` override.
