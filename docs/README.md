---
id: introduction
title: Documentation
---

# Introduction

Welcome to the Resoto documentation!

```bash title="Hello World in Resoto 👋🌎"
$> query is(resource) | count
// highlight-start
total matched: 459241
total unmatched: 0
// highlight-end
```

To help you find the information you need, the documentation is structured as follows:

- **[Getting Started](/docs/getting-started)** walks you through how to install and use Resoto, step by step. _Start here if you're new to Resoto._
<!-- - **[How-To Guides](/docs/how-to)** provide guided instructions for specific use cases and scenarios. -->
- **[Concepts](/docs/concepts)** describe key topics and ideas, and provide an overview of how Resoto works and its [components](./concepts/components/README.md).
- **[Reference](/docs/reference)** is a manual describing the [command-line interface (CLI)](./reference/cli/README.md) and [data models](./reference/data-models/README.md). It is assumed that you have a basic understanding of important concepts.
- **[Contributing](/docs/contributing)** lists instructions and guidelines for contributing to Resoto.

## What Is Resoto?

Resoto indexes resources, captures dependencies, and maps out your infrastructure in an understandable [graph](./concepts/graph). The graph contains metrics for each [resource](./reference/data-models).

Developers and SREs can search the graph with a [query language](./reference/cli/query), and create alerting and clean-up [workflows](./concepts/automation/workflow.md).

Metrics can be aggregated and exported to a time-series database such as [Prometheus](https://prometheus.io).

## Why Resoto?

Have you ever…

- had a standstill in your CI pipeline because a broken job leaked cloud resources and triggered a [quota limit](./reference/cli/query/examples.md#quota)?
- wanted to find all expired [certificates](./reference/cli/query/examples.md#certificate)?
- had to change the [tags](./reference/cli/tag.md) of thousands of EC2 instances?
- needed to delete all unused EBS [volumes](./reference/cli/query/examples.md#volume) with no I/O in the past month?
- wished for an [aggregate](./reference/cli/query/aggregation.md) view of resource usage across all cloud services?
- tediously created a report of the cost of a project across different accounts or cloud services?
- manually cleaned up orphaned [load balancers](./reference/cli/query/examples.md#aws_alb) that had no active backends?
- wanted to [automate](./concepts/automation/workflow.md) any of the above?

If you answered **yes** to any of the above, then Resoto was built to make _your_ life easier!

## Supported Cloud Providers and Integrations

Resoto collects data using simple plugins written in [Python](https://www.python.org).

Support for the following is currently included out-of-the-box in Resoto:

- [Amazon Web Services (AWS)](https://aws.amazon.com)
- [Google Cloud Platform (GCP)](https://console.cloud.google.com)
- [VMware Vsphere](https://www.vmware.com/products/vsphere.html)
- [OneLogin](http://www.onelogin.com)
- [Kubernetes (K8s)](https://kubernetes.io)

In addition to the above collector plugins, a [Slack](https://slack.com) plugin is also included for notification of resource cleanups.

:::tip

It is possible to write your own collector plugins! Please refer to the [example plugin in our GitHub repository](https://github.com/someengineering/resoto/tree/main/plugins/example_collector), and feel free to reach out on [Discord](https://discord.gg/someengineering) if we can be of any assistance.

:::
