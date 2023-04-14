---
id: overview
title: Documentation
pagination_prev: null
pagination_next: null
---

# Overview

**Resoto is an [open-source](https://github.com/someengineering/resoto/blob/main/LICENSE) cloud asset inventory tool for infrastructure engineers.**

Resoto allows you to search, explore, and manage your cloud resources. Resoto also automatically [tags](./concepts/resource-management/tagging.md) and [cleans up](./concepts/resource-management/cleanup.md) resources based on custom rules and logic, so you can write code to react to changes in your infrastructure.

At Resoto's core is a graph-based data model, which is better suited to capture the resource dependencies in cloud-native infrastructure than a traditional relational model.

:::info

To help you find the information you need, the Resoto documentation is organized as follows:

- **[Getting Started](./getting-started/index.md)** walks you through how to install and configure Resoto, step by step.** _Start here if you're new to Resoto._**
- **[How-To Guides](./how-to-guides/index.md)** provide step-by-step instructions for performing various tasks within Resoto, such as [search](./how-to-guides/search/index.md), [cleanup](./how-to-guides/cleanup/index.md), [alerting](./how-to-guides/alerting/index.md), and [data export](./how-to-guides/data-export/index.md).
- **[Concepts](./concepts/index.md)** describe key topics and ideas, and provide an overview of how Resoto works.
- **[Reference](./reference/index.md)** is a manual describing the [command-line interface (CLI)](./reference/cli/index.md) and [data models](./reference/data-models/index.md). It is assumed that you already have a basic understanding of important concepts.
- **[Contributing](./contributing/index.md)** lists instructions and guidelines for contributing to Resoto.

:::

### Why Cloud Asset Inventory?

**Cloud-native infrastructure today has an inventory problem.** It's a new type of technical debt, where you lose track of the assets running in your infrastructure and how they relate to the business.

The inventory problem is the result of two trends:

1. **Resource proliferation in the cloud.** With containers and serverless functions, services have become more abstract and the size of the individual deliverable has become smaller.
2. **Automated deployment of new resources.** Infrastructure-as-code (IaC) technologies like [Terraform](https://terraform.io) and the Kubernetes [Cluster API](https://cluster-api.sigs.k8s.io), coupled with <abbr title="continuous integration">CI</abbr>/<abbr title="continuous deployment">CD</abbr> pipelines, have made it easier than ever to spin up new resources.

Your inventory becomes large and is constantly changing. Not every resource that gets spun up gets torn down. Deployment processes fail, leaving systems in a half-configured state that leaks resources.

When engineers encounter a resource they are unfamiliar with, they are unlikely to delete it. Creating new cloud resources is low-risk, but deleting them can trigger unintended side effects. Over time, resources accumulate across cloud accounts and lead to growing inventory debt. This inventory debt compounds over time and results in outages, vulnerabilities, and cost problems.

**An asset inventory gives you a complete and up-to-date view of the resources that comprise your infrastructure.** Coupled with search functionality, you can query and slice this resource data in almost any imaginable way.

## How Does Resoto Work?

Resoto builds an inventory of your cloud by collecting the following data from your infrastructure:

1. **Resource data** including but not limited to:
   - General resource information (e.g., name, ID, timestamp, tags),
   - Hierarchy information (e.g., region, account), and
   - Resource-specific information (e.g., CPU, memory, price, utilization, policy).
2. **Dependency data** that represents the relationship between different resources.

![](./img/data-collection.png)

By default, Resoto collects this data and creates an inventory snapshot every hour.

## Supported Cloud Providers

With the help of our community, Resoto currently supports over [300 resource types](./reference/data-models/index.md) that enable you to track and manage assets across the following cloud providers:

- [Amazon Web Services (AWS)](./getting-started/configure-resoto/aws.md)
- [Google Cloud Platform (GCP)](./getting-started/configure-resoto/gcp.md)
- [DigitalOcean](./getting-started/configure-resoto/digitalocean.md)
- [Kubernetes (K8s)](./getting-started/configure-resoto/kubernetes.md)

See [Configure Resoto](./getting-started/configure-resoto/index.md) for more information on how to configure these providers.

In addition to the above collector plugins, various [tag validation and cleanup plugins](./reference/components/plugins/index.md) are also included for effortless handling of common use cases and tasks.

:::info

**Interested in contributing to Resoto's components, plugins, or documentation?** Check out the [contribution guide](./contributing/index.md) for guidelines and information.

:::
