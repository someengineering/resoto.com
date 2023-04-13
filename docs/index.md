---
id: overview
title: Documentation
pagination_prev: null
pagination_next: null
---

# Overview

**Resoto is an [open-source](https://github.com/someengineering/resoto/blob/main/LICENSE) cloud asset inventory for infrastructure and security engineers.**

Resoto enables a broad set of exploration and automation scenarios. Its foundation is a [graph-based data model](concepts/index.md), which exposes all resource metadata and otherwise hidden dependency relationships between your service's assets. A powerful [CLI](reference/cli/index.md) allows you to search, explore, and manage your cloud resources. It comes with an advanced [automation system](concepts/automation/index.md) that allows for [resource management](concepts/resource-management/index.md), like tagging and cleanup based on customized rules and logic, ensuring that your infrastructure remains organized and optimized.

With Resoto, you can explore your cloud resources and their associations through an appealing [user interface](reference/user-interface/index.md) (UI) that provides a visual representation for easy navigation and introspection.

:::info

Resoto's documentation is organized as follows:

- **[Getting Started](./getting-started/index.md)** walks you through the installation process. **_Start here if you're new to Resoto._**
- **[How-To Guides](./how-to-guides/index.md)** provide step-by-step instructions for performing specific tasks.
- **[Concepts](./concepts/index.md)** describe foundational ideas to understand the building blocks.
- **[Reference](./reference/index.md)** is a manual to check for every detail of Resoto. It assumes that you already have a basic understanding of important concepts.
- **[Contributing](./contributing/index.md)** lists instructions and guidelines for contributing to Resoto.

:::

## Why Cloud Asset Inventory?

Cloud-native infrastructure today is **fragmented** and a result of multiple trends:

1. **Resource proliferation in the cloud.** With containers and serverless functions, services have become more abstract, and the size of the individual deliverable has become smaller but many times more numerous.
2. **Bulkhead partitioning of resources.** Cloud providers have made partitioning resources into separate accounts, projects, and namespaces easy. This allows for better isolation and security but also makes it harder to get a consistent view of the state of the world.
3. **Shared Ownership.** Engineers using Infrastructure-as-code (IaC) in <abbr title= "continuous integration">CI</abbr>/<abbr title= "continuous deployment">CD</abbr> pipelines make it easy to spin up new resources.
4. **Multiple Service Providers.** Many organizations use multiple services and cloud providers to take advantage of the unique features of each provider.

![Cloud Asset Inventory](concepts/cloud-data-sync/img/collect.png)

Resoto helps you overcome these challenges by providing a **single source of truth** for your cloud assets. It allows you to **search, explore, and manage** your cloud resources consistently across all your cloud providers, no matter which account, project, or namespace they are in. Getting a complete, up-to-date picture of the world is excellent, but only half the battle. Together with a powerful [automation system](concepts/automation/index.md), Resoto enables you to **manage your cloud assets** in a [consistent way across all your cloud providers](https://some.engineering/blog/2022/09/22/multi-cloud-resource-management-with-resoto).

![React to changes in infrastructure](concepts/cloud-data-sync/img/react.png)
