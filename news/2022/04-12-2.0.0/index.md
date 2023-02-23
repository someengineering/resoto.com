---
tags: [release notes]
---

# 2.0.0

**We are proud to announce the general availability of Resoto 2.0.0.**

Resoto provides a single data source and search engine to explore infrastructure in a cloud-agnostic way. Resoto aggregates and exports user-defined infrastructure metrics, and automates recurring tasks. That ensures a sound infrastructure and leaves developers and SREs more time and headspace to do productive work.

Resoto currently supports the following cloud providers:

- [Amazon Web Services (AWS)](/docs/reference/data-models/aws)
- [Google Cloud Platform (GCP)](/docs/reference/data-models/gcp)
- [DigitalOcean](/docs/reference/data-models/digitalocean)

## Highlights

- Flexible distributed [system setup](/docs/reference/components), which allows for small installations as well as a big enterprise scale infrastructure.
- [Graph-based](/docs/concepts/asset-inventory-graph) data storage, that maintains all infrastructure resources, as well as all relationships between them.
- Powerful [search](/docs/reference/search) of your entire cloud metadata, no matter which service, account, or region.
- Report infrastructure changes over time with out-of-the-box [metrics](https://github.com/someengineering/resoto/tree/main/resotometrics), and aggregation of any data points for custom metrics.
- [Automate](/docs/concepts/automation) tedious tasks. Define rules for your infrastructure that are checked against existing resources, no matter how they were created. Rules are applied automatically whenever infrastructure changes.
- [Command line interface](/docs/reference/cli) to interact with Resoto.
- Ability to [clean up](/docs/concepts/resource-management/cleanup) your infrastructure in a user defined and reliable way.
- Allow for manipulating [tags](/docs/concepts/resource-management/tagging).
- [API](/docs/reference/api) to interact with Resoto from your own code.

Please check out the [Getting Started](/docs/getting-started) section of our documentation to give it a spin.

## Installation Options

There are currently two installation options for Resoto: [Docker](/docs/getting-started/install-resoto/docker) and [Kubernetes](/docs/getting-started/install-resoto/kubernetes).

<!--truncate-->

## Docker Images

- `somecr.io/someengineering/resotocore:2.0.0`
- `somecr.io/someengineering/resotoworker:2.0.0`
- `somecr.io/someengineering/resotoshell:2.0.0`
- `somecr.io/someengineering/resotometrics:2.0.0`
