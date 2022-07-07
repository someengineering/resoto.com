---
tags: [release notes]
---

# v2.0.0

**We are proud to announce the general availability of Resoto 2.0.0.**

Resoto provides a single data source and search engine to explore infrastructure in a cloud-agnostic way. Resoto aggregates and exports user-defined infrastructure metrics, and automates recurring tasks. That ensures a sound infrastructure and leaves developers and SREs more time and headspace to do productive work.

Resoto currently supports the following cloud providers:

- [Amazon Web Services (AWS)](/docs/reference/data-models/aws)
- [Google Cloud Platform (GCP)](/docs/reference/data-models/gcp)
- [DigitalOcean](/docs/reference/data-models/digitalocean)

## Highlights

- Flexible distributed [system setup](/docs/concepts/components), which allows for small installations as well as a big enterprise scale infrastructure.
- [Graph-based](/docs/concepts/graph) data storage, that maintains all infrastructure resources, as well as all relationships between them.
- Powerful [search](/docs/concepts/search) of your entire cloud metadata, no matter which service, account, or region.
- Report infrastructure changes over time with out-of-the-box [metrics](https://github.com/someengineering/resoto/tree/main/resotometrics), and aggregation of any data points for custom metrics.
- [Automate](/docs/concepts/automation) tedious tasks. Define rules for your infrastructure that are checked against existing resources, no matter how they were created. Rules are applied automatically whenever infrastructure changes.
- [Command line interface](/docs/reference/cli) to interact with Resoto.
- Ability to [clean](/docs/reference/cli/clean) up your infrastructure in a user defined and reliable way.
- Allows for manipulating [tags](/docs/reference/cli/tag).
- [API](/docs/reference/api) to interact with Resoto from your own code.

Please check out the [Getting Started](/docs/getting-started) section of our documentation to give it a spin.

## Deployment Options

There are currently 2 deployment options for Resoto: [Docker](/docs/getting-started/installing-resoto/docker) and [Kubernetes](/docs/getting-started/installing-resoto/kubernetes).

<!--truncate-->

## Docker Images

- `somecr.io/someengineering/resotocore:2.0.0`
- `somecr.io/someengineering/resotoworker:2.0.0`
- `somecr.io/someengineering/resotoshell:2.0.0`
- `somecr.io/someengineering/resotometrics:2.0.0`
