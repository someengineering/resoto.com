---
authors: [lars]
tags: [cloud, search, graph, aws, gcp, digitalocean]
---

# What Is Cloud Asset Inventory?

On March 14, 2006, [Amazon Web Services (AWS)](https://aws.amazon.com) launched [<abbr title="Simple Storage Service">S3</abbr>](https://aws.amazon.com/s3), the first public cloud service. Since then, cloud consumption has increased each year. [Gartner estimates that worldwide spend on public cloud services will reach $600 billion in 2023](https://www.gartner.com/en/newsroom/press-releases/2022-04-19-gartner-forecasts-worldwide-public-cloud-end-user-spending-to-reach-nearly-500-billion-in-2022), up from $410 billion in 2021. At annual growth rates of over 20%, the trillion-dollar market size is only a few years away.

<!--truncate-->

## The Evolution of Cloud Offerings

Cloud providers foster that growth by continuously launching new products. Market leader <abbr title="Amazon Web Services">AWS</abbr> now offers a portfolio of over two hundred fully-featured services.

Two hundred may not seem significant until you start looking at the <abbr title="stock-keeping units">SKU</abbr>s for each service. Consider [<abbr title="Elastic Compute Cloud">EC2</abbr>](https://aws.amazon.com/ec2), <abbr title="Amazon Web Services">AWS</abbr>' computing flagship service which comes in over 475 instance types with various combinations of CPU, memory, storage, and networking capacity. "And we're not even close to being done," said <abbr title="Amazon Web Services">AWS</abbr> CEO Adam Selipsky during the 2021 [<abbr title="Amazon Web Services">AWS</abbr> re:Invent keynote](https://www.youtube.com/watch?v=WGA2P_oH5Xc).

![](./img/aws-reinvent-keynote.png)[<span class="badge badge--secondary">AWS re:Invent 2021 - Keynote with Adam Selipsky</span>](https://www.youtube.com/watch?v=WGA2P_oH5Xc)

With the emergence of containers and serverless functions, services have only become even more abstract, and the size of the individual deliverables smaller. And since cloud providers often match each other's portfolios, these trends apply to [Azure](https://azure.microsoft.com), [Google Cloud Platform (GCP)](https://cloud.google.com), [DigitalOcean](https://digitalocean.com), and others as well.

### A New Type of Technical Debt

On the enterprise side, adoption of new cloud services is driving forward innovation.

The flip side of that innovation is that companies now have an inventory problem. It's a new type of technical debt, where you lose track of the assets running in your infrastructure and how they relate to your business.

The following graph render depicts how vast the problem can be. It shows the <abbr title="Amazon Web Services">AWS</abbr> infrastructure snapshot of a 200-employee startup with over 400,000 cloud resources:

![](https://cdn.some.engineering/misc/cloud.png)

### What Is an Asset?

An asset can be a resource such as a virtual machine, database, or storage bucket. An asset can also be a VPC, subnet, policy, security key, or IP address. Assets also include third-party cloud services, like an identity platform or even channels on [Slack](https://slack.com) or [Discord](https://discord.com). Cloud inventory consists of the many discrete assets that form your stack.

<abbr title="Information Technology">IT</abbr> used to control asset procurement. Now, developers have liberal permissions to spin up new cloud resources. Reintroducing the old, rigid process of submitting <abbr title="Information Technology">IT</abbr> support tickets would kill productivity.

If anything, companies have adopted new processes to iterate more quickly. Continuous integration (CI) and infrastructure-as-code (IaC) have enabled development teams to deploy more, faster. A startup with a hundred employees can easily have hundreds of thousands of resources, and larger enterprises millions.

## New Operational Challenges

Platform teams responsible for infrastructure today deal with three new challenges:

1. **Gaining Visibility**

   It's hard to get a complete picture of all assets in a cloud. Resources are distributed across multiple regions and accounts, for reasons like architecture, high availability, geography, compliance, and separation of workloads. You have to peel through many layers of hierarchy to get answers to questions like, "How many total instances are running?"

2. **Tracking Changes**

   Frequent deployments lead to changes in the stack and its resources. When pipelines fail, they often leave behind orphaned assets. Developers also make changes and spin up resources through cloud consoles, unbeknownst to the platform team. These changes result in infrastructure drift, which in turn causes uncertainty, security issues, and toil.

3. **Taking Action**

   Platform teams need resource context to prioritize their work and take action. Creating actionable metrics like resource adoption, utilization, pricing, or tag coverage is impossible without complete inventory knowledge.

If left unmanaged, inventory debt results in incidents that slow down development. Sooner or later, resources hit quota limits and result in the failure of new deployments. Misconfigured resources expose critical data. Cloud bills pile up from orphaned resources.

## Tackling Inventory Debt

Reducing inventory debt is a preventative measure to avoid or prevent incidents before they occur, with fewer wasted engineering hours and lower cloud bills.

The first step to tackling inventory debt is to create a complete inventory of all assets. This requires collecting data about the state and configuration of each resource in every cloud account.

### XOps Tools vs. Cloud Asset Inventory

XOps (DevOps, SecOps, FinOps, etc.) tools create inventories tailored for solving specific problems, such as performance, security, compliance, or cloud spend.

XOps tools only offer a retrospective, often with a narrow lens on a subset of inventory data. Their goal is to diagnose infrastructure issues and make adjustments to individual assets. They support a corresponding team (Dev, Security, Finance, etc.) and help "operate" and manage a single aspect of infrastructure.

A cloud asset inventory is different. A cloud asset inventory takes periodical snapshots of inventory data, creating full representations of your infrastructure at specific points in time. An inventory is a strategic, forward-looking tool that aligns infrastructure with company strategy and helps a company grow.

A cloud asset inventory is a meta layer that allows platform teams to analyze their infrastructure and track asset changes. It's different because it offers search features while being generic and extensible. Rather than supporting a single core use case like XOps tools, a cloud asset inventory prioritizes flexibility and exploration.

## Building a Cloud Asset Inventory

A cloud asset inventory should include two types of data:

1. **Resource data**, including but not limited to:
   - General resource information (e.g., name, ID, timestamp, tags),
   - Hierarchy information (e.g., region, account), and
   - Resource-specific information (e.g., CPU, memory, price, utilization, policy).
2. **Dependency data** that represents the relationship between different resources.

Modern cloud asset inventories use a graph-based data model, as it's better suited to capture dependencies than a traditional relational model. Resources are always connected to each other in some way. For example:

- A cloud account belongs to a region.
- A compute instance runs within a cloud account.
- A storage volume is attached to a compute instance.
- A load balancer sits in front of a target group.
- A target group is associated with an IP address.
- A target group runs a fleet of compute instances.

Dependencies are often nested and can run many levels deep. A graph-based asset inventory is particularly strong at exposing the hidden relationships between resources.

### How A Cloud Asset Inventory Accelerates Growth

With an inventory in place, all teams now benefit from exploring the graph, either ad-hoc or by continuously running queries, to support a variety of use cases:

- Platform teams can create asset reports.
- Finance can track cost metrics.
- Engineering can identify unused resources.
- Security can discover attack paths.

Resource data also aids in planning and forecasting for holidays or events (Black Friday, Tax Day, etc.).

But most of all, a cloud asset inventory is a foundation for increasing development velocity. Platform teams can give developers liberal permissions without accumulating inventory debt. Inventory data gives platform teams both visibility and control.

## How Resoto Increases Development Velocity

Cloud providers already offer native inventory tools that support their own resources.

But platform teams support a wide range of assets across <abbr title="software-as-a-service">SaaS</abbr> tooling, legacy on-premises assets, and also multi-cloud infrastructure.

Resoto is an open-source cloud asset inventory and alternative to closed-source native tools. Resoto is extensible through [plugins](/docs/concepts/components/plugins), so anyone can [build or modify a collector](/docs/contributing/plugins) to suit their needs.

In addition, Resoto adds unique capabilities that solve the three major problems platform teams face when working with cloud inventory:

1. **Gaining Visibility**

   Often, you don't even know what resources exist. There is no single place to search resources across all accounts. Resoto offers [full-text search](/docs/concepts/search/full-text), which allows you to find resources that contain a specified string, with [filters](/docs/concepts/search/filters) to refine your search. The experience is like googling your infrastructure.

2. **Tracking Changes**

   You can't steer a fleet of tens of thousands of resources by individually reviewing each resource. Metrics are a better solution. Metrics describe the state of your inventory, reflecting business goals like cost, usage, or compliance. [Resoto Metrics](/docs/concepts/components/metrics) runs aggregation functions on inventory data and exposes them in [Prometheus](https://prometheus.io) format, which are easy to visualize in [Grafana dashboards](/blog/2022/06/09/building-actionable-cloud-infrastructure-metrics).

3. **Taking Action**

   Many tools either provide reporting or take action, but not both. This places the burden of resolving issues upon the platform team. [Resoto Jobs](/docs/concepts/automation/job) automate actions based on your defined criteria and metrics. Actions include updating resource [tags](/docs/concepts/resource-management/tagging) and [cleaning up](/docs/concepts/resource-management/cleanup) unused resources.

Consider a scenario where a platform team announces a new cost policy. The policy requires that any <abbr title="Amazon Web Services">AWS</abbr> compute instance older than 24 hours with more than 32 cores be cleaned up.

Finding the instances that violate the policy is easy with Resoto's [search](/docs/concepts/search):

```bash
> search is(aws_ec2_instance) and instance_cores > 32 and age > 24h
```

Then, adding a [job](/docs/concepts/automation/job) to automate cleanup after each new inventory snapshot is as simple as:

```bash
> jobs add 32_core_instance_cleanup --wait-for-event post_collect 'search is(aws_ec2_instance) and instance_cores > 32 and age > 24h | clean'
```

And just like that, the team has automated the work of enforcing the new cost policy.

## Start Now

Resoto enables platform teams to create measurable <abbr title="key performance indicator">KPI</abbr>s they can track over time, build fleet-wide monitoring, and automate tedious infrastructure work.

Resoto is [open source](https://github.com/someengineering/resoto/blob/main/LICENSE) and free to use. [Install Resoto](/docs/getting-started/install-resoto) today!
