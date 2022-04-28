---
id: overview
title: Documentation
sidebar_label: Overview
sidebar_position: 0
---

# Overview

Welcome to the Resoto documentation! 👋

To help you find the information you need, the documentation is structured as follows:

- **[Getting Started](/docs/getting-started)** walks you through how to install and use Resoto, step by step. _Start here if you're new to Resoto._
<!-- - **[How-To Guides](/docs/how-to)** provide guided instructions for specific use cases and scenarios. -->
- **[Concepts](/docs/concepts)** describe key topics and ideas, and provide an overview of how Resoto works and its [components](./concepts/components/index.md).
- **[Reference](/docs/reference)** is a manual describing the [command-line interface (CLI)](./reference/cli/index.md) and [data models](./reference/data-models/index.md). It is assumed that you already have a basic understanding of important concepts.
- **[Contributing](/docs/contributing)** lists instructions and guidelines for contributing to Resoto.

## What Is Resoto?

Resoto indexes resources, captures dependencies, and maps out your infrastructure in an intuitive [graph](./concepts/graph/index.md). The graph contains metrics for each [resource](./reference/data-models/index.md).

Developers and SREs can [search the graph](./concepts/search/index.md) and create alerting and cleanup [jobs](./concepts/automation/job.md).

Metrics can be aggregated and exported to a time-series database such as [Prometheus](https://prometheus.io).

## Why Resoto?

Have you ever…

- had a standstill in your CI pipeline because a broken job leaked cloud resources and triggered a [quota limit](./concepts/search/examples.md#quota)?
- wanted to find all expired [certificates](./concepts/search/examples.md#certificate)?
- had to change the [tags](./reference/cli/tag/index.md) of thousands of EC2 instances?
- needed to delete all unused EBS [volumes](./concepts/search/examples.md#volume) with no I/O in the past month?
- wished for an [aggregate](./concepts/search/aggregation.md) view of resource usage across all cloud services?
- tediously created a report of the cost of a project across different accounts or cloud services?
- manually cleaned up orphaned [load balancers](./concepts/search/examples.md#aws_alb) that had no active backends?
- wanted to [automate](./concepts/automation/workflow.md) any of the above?

If you answered **yes** to any of the above, then Resoto was built to make _your_ life easier!

## Supported Cloud Providers and Integrations

Resoto collects data using simple plugins written in [Python](https://www.python.org).

Support for the following is currently included out-of-the-box in Resoto:

- [Amazon Web Services (AWS)](./reference/data-models/aws.md)
- [Google Cloud Platform (GCP)](./reference/data-models/gcp.md)
- [Digital Ocean](./reference/data-models/digitalocean.md)
- [Kubernetes (K8s)](./reference/data-models/kubernetes.md)
- [VMware Vsphere](./reference/data-models/vsphere.md)

See [Configuring Resoto Cloud Providers](./getting-started/configuring-resoto.md#configuring-cloud-providers) for more information on how to configure individual providers.

In addition to the above collector plugins, various [tag validation and cleanup plugins](./concepts/components/plugins/index.md) are included.

:::tip

It is possible to write your own collector plugins! Please refer to the [example plugin in our GitHub repository](https://github.com/someengineering/resoto/tree/main/plugins/example_collector), and feel free to reach out on [Discord](https://discord.gg/someengineering) if we can be of any assistance.

:::
