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
- **[How-To Guides](/docs/how-to-guides)** provide instructions for specific use cases and scenarios.
- **[Concepts](/docs/concepts)** describe key topics and ideas, and provide an overview of how Resoto works and its [components](./concepts/components/index.md).
- **[Reference](/docs/reference)** is a manual describing the [command-line interface (CLI)](./reference/cli/index.md) and [data models](./reference/data-models/index.md). It is assumed that you already have a basic understanding of important concepts.
- **[Contributing](/docs/contributing)** lists instructions and guidelines for contributing to Resoto.

## What is Resoto?

Resoto is an open source cloud asset inventory for infrastructure engineers. 

Resoto lets you search, explore and document all your organizations’ cloud resources. Once you have a baseline inventory, Resoto also lets you write code that reacts to changes in your infrastructure. Resoto listens to events and can modify resource tags / labels, and clean up resources.  

Resoto uses a graph-based data model, as a graph is better suited to capture the resource dependencies in cloud-native infrastructure than a traditional relational model.

## Why use a cloud asset inventory?

Cloud-native infrastructure now has an inventory problem. It’s a new type of technical debt, where you lose track of the assets running in your infrastructure, and how they relate to the business. 

The inventory problem is the result of two trends that accelerate the volume of inventory:

1. Resource proliferation by cloud providers. With containers and serverless functions, services have become more abstract. The size of the individual deliverable becomes smaller and smaller.

2. Automated deployment of new resources through Infrastructure-as-code technologies like Terraform or the Kubernetes Cluster API, coupled with CI/CD  pipelines.

Your inventory becomes large in volume AND is also rapidly changing. Not every resource that gets spun up also gets torn down. Deployment processes fail or encounter unhandled errors. That leaves systems in a half-configured state and leaks resources. 

When engineers encounter a resource they don't know and lack context, they are unlikely to delete it. Creating new cloud resources is zero risk, but deleting them is a non-zero risk. Over time, resources accumulate across cloud accounts, leading to inventory debt. Inventory debt compounds over time  - leading to outages, vulnerabilities and cost problems. 

An asset inventory gives you a fast, complete and up-to-date view of all the resources that make up your infrastructure. Coupled with a search syntax, you can also search for resources and query and slice your asset data in any imaginable way. 


## Genesis of the name “Resoto”

Resoto started out as a simple **reso**urce **to**ol, hence the name. And yes, you pronounce “Resoto” like the Italian rice dish “Risotto” 🍚.

## How does Resoto work?

Resoto creates your inventory by collecting two types of resource metadata from your infrastructure:

1. Resource data, including but not limited to:

  - General resource information (e.g., name, ID, timestamp, tags),
  - Hierarchy information (e.g., region, account), and
  - Resource-specific information (e.g., CPU, memory, price, utilization, policy).

2. Dependency data that represents the relationship between different resources.


By default, Resoto takes an inventory snapshot every hour. Resoto collects metadata through API-based interactions with a specific cloud resource. 

Some Engineering and the Resoto community have already written over 300 Collectors to collect data from different cloud and SaaS services. You can see all existing collectors in our Collector Registry, including [Amazon Web Services (AWS)](./getting-started/configure-cloud-provider-access/aws.md), [Google Cloud Platform (GCP)](./getting-started/configure-cloud-provider-access/gcp.md), [DigitalOcean](./getting-started/configure-cloud-provider-access/digitalocean.md) and [Kubernetes (K8s)](./getting-started/configure-cloud-provider-access/kubernetes.md).

:::tip

It is possible to write your own collector plugins! Please refer to the [example plugin in our GitHub repository](https://github.com/someengineering/resoto/tree/main/plugins/example_collector), and feel free to reach out on [Discord](https://discord.gg/someengineering) if we can be of any assistance.

:::
