---
sidebar_position: 1
sidebar_label: Introduction
title: Documentation
---

# Introduction

Welcome to the Resoto documentation!

```bash title="Hello World in Resoto 👋🌎"
query is(resource) | count
total matched: 459241
total unmatched: 0
```

## What Is Resoto?

Resoto indexes resources, captures dependencies and maps out your infrastructure in an understandable graph. The graph contains metrics for each resource.

Developers and SREs can **search the graph with a query language**, and create **alerting and clean-up workflows**.

Metrics can be aggregated and exported to a time series database like Prometheus.

## Why Resoto?

Have you ever...

- had a standstill in your CI pipeline because a broken job leaked cloud resources and triggered a quota limit?
- wanted to find all expired certificates?
- had to change the tags of thousands of EC2 instances?
- needed to delete all unused EBS volumes with no I/O in the past month?
- wished for an aggregate view of resource usage across all cloud services?
- tediously created a report of the cost of a project across different accounts or cloud services?
- manually cleaned up orphaned load balancers that had no active backends?
- wanted to automate any of the above?

If you answered yes to any of the above, then Resoto was built to make your life easier!

## Supported Cloud Providers and Integrations

Resoto collects data using simple plugins written in Python.

Support for the following is currently included out-of-the-box in Resoto:

- [Amazon Web Services (AWS)](https://aws.amazon.com)
- [Google Cloud Platform (GCP)](https://console.cloud.google.com)
- [VMware Vsphere](https://www.vmware.com/products/vsphere.html)
- [OneLogin](http://www.onelogin.com)
- [Kubernetes (K8s)](https://kubernetes.io)

In addition to the above collector plugins, a [Slack](https://slack.com) plugin is also included for notification of resource cleanups.

:::tip
It is possible to write your own collector plugins! Please refer to the [example plugin in our GitHub repository](https://github.com/someengineering/cloudkeeper/tree/main/plugins/example_collector), and feel free to reach out on [Discord](https://discord.gg/someengineering) if we can be of any assistance.
:::
