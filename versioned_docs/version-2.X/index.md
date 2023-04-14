---
id: overview
title: Documentation
pagination_prev: null
pagination_next: null
---

# Overview

**Resoto is an [open-source](https://github.com/someengineering/resoto/blob/main/LICENSE) cloud asset inventory tool for infrastructure and security engineers.**

Resoto enables a broad set of exploration and automation scenarios. Its foundation is a [graph-based data model](./concepts/asset-inventory-graph/index.md), which exposes all resource metadata and otherwise hidden dependency relationships between your service's assets.

A powerful [CLI](./reference/cli/index.md) allows you to search, explore, and manage your cloud resources.

Resoto's [automations](./concepts/automation/index.md) facilitates [resource management](./concepts/resource-management/index.md) like tagging and cleanup based on customized rules and logic, ensuring that your infrastructure remains organized and optimized.

:::info

Resoto's documentation is organized as follows:

- **[Getting Started](./getting-started/index.md)** walks you through the installation process. **_Start here if you're new to Resoto._**

- **[How-To Guides](./how-to-guides/index.md)** provide step-by-step instructions for performing specific tasks.

- **[Concepts](./concepts/index.md)** provide an overview of how Resoto works.

- **[Reference](./reference/index.md)** is a manual covering the details of Resoto. It is assumed that you already have a basic understanding of important concepts.

- **[Contributing](./contributing/index.md)** lists instructions and guidelines for contributing to Resoto.

:::

## Why Cloud Asset Inventory?

Cloud-native infrastructure today is fragmented because:

1. **Resource Proliferation in the Cloud**

   With containers and serverless functions, services have become more abstract, and the size of the individual deliverable has become smaller but many times more numerous.

2. **Bulkhead Partitioning of Resources**

   Cloud providers have made partitioning resources into separate accounts, projects, and namespaces easy. This allows for better isolation and security, but also makes it harder to get a consistent view of the state of the world.

3. **Shared Ownership**

   Engineers using Infrastructure-as-code (IaC) in <abbr title= "continuous integration">CI</abbr>/<abbr title= "continuous deployment">CD</abbr> pipelines make it easy to spin up new resources.

4. **Multiple Service Providers**

   Many organizations use multiple services and cloud providers to take advantage of the unique features of each provider.

**Resoto helps you overcome these challenges by providing a single source of truth for your cloud assets.**

With Resoto, you can search, explore, and manage your cloud resources in a consistent manner, no matter which cloud provider, account, project, or namespace they are in.

Resoto's complete, up-to-date picture of your infrastructure combined with [automations](./concepts/automation/index.md) enable you to easily manage all of your cloud assets.
