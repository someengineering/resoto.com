---
title: About
---

# About Resoto

**Resoto** indexes resources, captures dependencies, and maps out your infrastructure in an understandable [graph](/docs/concepts/graph). The graph contains metrics for each [resource](/docs/reference/data-models).

Developers and SREs can search the graph with a [search syntax](/docs/reference/cli/search), and create alerting and cleanup [workflows](/docs/concepts/automation/workflow).

Metrics can be aggregated and exported to a time-series database such as [Prometheus](https://prometheus.io).

## Origin and Story

[Lukas](https://github.com/lloesche) started developing "Cloudkeeper" (now known as **Resoto**) in late 2019 as an internal project at [D2iQ](https://d2iq.com) (formerly Mesosphere).

At the time, [Lukas](https://github.com/lloesche) was a site reliability engineer (SRE) at [D2iQ](https://d2iq.com) and needed a tool to give him the big picture of all cloud resources running, automate their documentation, and reduce spend.

Like all startups, [D2iQ](https://d2iq.com) had prioritized growth. Engineering headcount at [D2iQ](https://d2iq.com) had grown to over 200 people, with some 40+ [AWS](https://aws.amazon.com) sub-accounts, and everyone was spinning up resources. A team of just three SREs had to support all this growth, and their priority was to build things that would increase feature velocity. "Let's worry about that SRE stuff later."

As a result, [D2iQ](https://d2iq.com)'s [Amazon Web Services (AWS)](https://aws.amazon.com) bill kept creeping up. From the mid 5-figure range to the mid 6-figure range _every month_. [D2iQ](https://d2iq.com) as a business had grown too, but cloud spend was growing much faster than customers and revenue. There also were outages. Usually because some obscure [AWS](https://aws.amazon.com) service in a sub-account had run into quota limit, which brought the entire development pipeline to a halt.

And so the order came down from the CEO and the CFO to reduce cloud spend, and bring order to the chaos.

The scenario probably sounds familiar. And there were plenty of infrastructure tools out there at the time that promised a solution. But they all had the same drawbacks:

- **Rule-based.** The tools assume that you know what your problem is, and that you know what you're looking for. And they work well in that situation. But not so much if the tool didn't create the resource. You just don't see it in your inventory. You can establish rules for tagging, etc.—but if you have 200 engineers, automated systems, something will aways fall by the way-side and the rules don't work.

- **"Rows & columns."** The tools produce a long list of resources, sometimes in a pretty UI, but don't show any dependencies. You couldn't really understand a resource's "blast radius" if you wanted to delete it.

- **Context.** There's no context for any individual resource. If it's not tagged, it's hard to understand for e.g. Finance why the resource is running. It comes back on the SREs to explain it.

[Lukas](https://github.com/lloesche) wanted a tool that periodically collects a list of resources in cloud accounts, provides metrics about them, and can clean them up. Rather than creating yet another list with "rows and columns," he chose to store information in a graph. The graph reflects dependencies and also stores context.

The first version of Cloudkeeper was deployed in early 2020. And it delivered. Within four weeks, cloud spend was cut in half! Another six months later, cloud spend had been reduced by a total of 70%. The entire infrastructure had become more resilient.

In 2020, [D2iQ](https://d2iq.com) open-sourced Cloudkeeper, and [Some Engineering Inc.](https://some.engineering) took over development in July 2021. In 2022, the Cloudkeeper project was rebranded as "Resoto."

## Product Vision

A lesson learned from our history is that the biggest question to ask is always "Why now?" Why is _now_ the right time for something like Resoto, and why would customers care?

In our product vision, we project this "Why now?" into the future.

For the near term, it is still trends like cloud-native and multi-cloud infrastructure that drive our roadmap.

### Cloud Infrastructure Has Changed

Cloud-native architectures have caused a change in the way companies operate their infrastructure. What used to be manual processes and ITIL practices is now infrastructure-as-code and self-service automation.

Developers are in the driver's seat—they determine what cloud services they want to use, and spin up resources as needed. The goal is feature velocity, and to ship new digital products faster. But—the larger and more distributed an organization gets, the more challenges these new dynamic environments create.

CI/CD pipelines and tear down jobs fail. Things break and don't get cleaned up—the result is "drift" and a rising cloud bill. Despite garbage collection, "stuff" is leaking. Artifacts get left behind, growing the number of orphaned resources. It's not just servers, databases and VPCs. It's also things like accounts, SSH keys, IAM policies, roles and certificates, volumes and their snapshots, and dynamic IP addresses. It's a long tail of resources.

### The Problem Is Getting Worse

Drift can cause all sorts of downtime issues. Today's infrastructure management tools don't offer a solution. They do a good job of managing resources they know about. But they do a poor job managing resources they didn't create.

For SREs in charge of maintaining cloud infrastructure, it's a drag. They are typically outnumbered by developers by a factor of 50-80x. At the same time, SREs are expected to build features that increase development velocity. Over time, that widens the "gap" between the desired state and the actual state of the infrastructure.

**This is why we are building Resoto.**

### A New Approach

Resoto automatically cleans up drift that shouldn't be there and closes the gap.

Resoto indexes resources, captures dependencies, and maps out your infrastructure in a graph so that it is understandable for a human. The graph contains metrics for each resource. Developers and SREs can search the graph with a search syntax, and create alerting and cleanup workflows.

#### 1-Year Vision

**Cleanup and search in multi-cloud infrastructure is easy for developers and engineers.**

Resoto is the one place where developers and site reliability engineers go to search for resources in their cloud infrastructure. They create event-based workflows that automate high-value but also high-effort tasks such as deleting unused resources or documenting cloud inventory for audit purposes.

Resoto is a horizontal product that supports [Amazon Web Services (AWS)](https://aws.amazon.com) and [Google Cloud Platform (GCP)](https://console.cloud.google.com). That is more for historic reasons than for market share reasons. Resoto started as an internal [D2iQ](https://d2iq.com) project, and [D2iQ](https://d2iq.com) runs on [AWS](https://aws.amazon.com) and [GCP](https://console.cloud.google.com).

Resoto is an expert tool for engineers that runs on top of the [Resoto Core](/docs/concepts/components/core) graph platform. They interact with Resoto via a [command-line interface (CLI)](/docs/reference/cli) which engineers are comfortable working with.

- We keep their cloud infrastructure _permanently_ clean.

- The [Resoto search syntax](/docs/concepts/search) offers an abstraction layer for engineers to query and collect metrics from their infrastructure. Think `> match is(instance) and tags.owner ~ jane`, for example, to find all compute instances across [AWS](https://aws.amazon.com) and [GCP](https://console.cloud.google.com) owned by Jane.

- We collect bare-metal information. Hardware specifications differ, even for the same type of instance. Pre-deployment we give developers estimates about the fastest and/or cheapest hardware per region, and once they have the instance let them know exactly what they got.

- We integrate with [Terraform](https://terraform.io) and show the difference between the planned state and the current state of infrastructure in our CLI.

- On top of the [CLI](/docs/reference/cli), we will build a UI/UX that makes navigation with the resource graph intuitive. Someone can search, navigate and click on resources in the graph. They can annotate and build workflows across all resources.

- Users receive notifications when resources relevant to them change, via integrations with popular "ChatOps" tools like [Slack](https://slack.com)), [Teams](https://teams.microsoft.com), and [Discord](https://discord.com).

- We offer an approval workflow within these tools ("Resoto will delete these resources. Are you OK with that?").

- We start with collecting metrics from [AWS](https://aws.amazon.com) and [GCP](https://console.cloud.google.com) cloud services most relevant for users, and expand the number of supported services with each sprint based on what the community is telling us.

- Because Resoto is extensible and open source, the community can build plug-ins and collect metrics from any [AWS](https://aws.amazon.com) or [GCP](https://console.cloud.google.com) service that we do not support yet. Our SDK makes it easy to build new custom plug-ins to collect data.

#### 3-Year Vision

**Anyone in a company can search their digital infrastructure and build workflows.**

We make it easy for engineers and all other company stakeholders (Finance, Legal, Product, Customer Success, etc.) to explore and navigate a company's entire digital infrastructure. They can build workflows, dashboards, and reports relevant for their business needs in a browser, and export metrics to their favorite tools. They don't need to talk to an engineer anymore, which saves everyone time.

For example, Legal builds an inventory of workflows that verify ongoing infrastructure compliance with regulatory frameworks such as HIPAA, SOC or FedRAMP. Finance pulls cloud cost metrics down to the individual product and user level and exports them to their Snowflake data warehouse. For a sustainability report, engineering calculates a company's annual carbon footprint based on the hardware profiles of their cloud servers.

By now, Resoto covers the major global ([AWS](https://aws.amazon.com), [GCP](https://console.cloud.google.com), [Azure](https://azure.microsoft.com), [Alibaba](https://www.alibabacloud.com)), specialized ([DigitalOcean](https://digitalocean.com), [Oracle](https://oracle.com), [IBM](https://cloud.ibm.com), etc.), and private/hybrid clouds such as [VMWare](https://cloud.vmware.com) and [Red Hat](https://cloud.redhat.com).

We've expanded beyond the cloud, and also collect metadata from other infrastructure such as IoT devices—[Raspberry Pi](https://raspberrypi.org), industrial appliances, etc. Either directly, or through community-supported plug-ins. If something has an IP address, we can collect metadata and metrics—and that opens up new (vertical) use cases. Cloud computing is not the only infrastructure where it's useful to be able to search, query resources, build workflows or have metrics and have event triggers. In short, reacting to changes. Something changes, and you want to be able to react to it. That's useful for any digital infrastructure.

Say the valves of a fertilizer plant have embedded sensors. The sensors only have an analog serial interface and are not connected to the Internet. If the plant operator retrofits each valve with a [Raspberry Pi](https://raspberrypi.org), then Resoto collects data from both the Pis and the sensors, and integrates them into the overall company infrastructure graph. The plant operator builds the Resoto plug-in for the valves and defines the valve-specific primitives / attributes (e.g. `pressure`, `throughput`, `temperature`) to collect, in addition to any applicable common attributes (e.g. `atime`, `ctime`). Resoto provides an [MQTT](https://mqtt.org) bridge that integrates with existing IoT infrastructure and allows attribute updates via an industry standard protocol.

Because of this abstraction via the primitives and our declarative search syntax—the Pis and valves are each just one more infrastructure component that users can discover, query and build workflows for. As the valves get replaced over time, their spec and even their brand may change. All the plant operator needs to do is write a new plug-in for a new spec or brand, and collect the same primitives. That means existing queries, workflows and automation for the entire plant will keep working.

We also collect metadata from popular SaaS and software tools, e.g. for identity ([Okta](https://okta.com), [OneLogin](https://onelogin.com)), source code management ([GitLab](https://gitlab.com), [GitHub](https://github.com)) or enterprise resource planning ([NetSuite](https://netsuite.com), [SAP](https://www.sap.com/products/enterprise-management-erp.html)). These tools are now sources, not just destinations or integrations where we export to.

That way, Resoto is one powerful abstraction layer across the entire digital infrastructure—cloud, hybrid, IoT, SaaS, software. We collect their attributes and do not care what those are; we store them in the graph, document dependencies, make them searchable, aggregatable, and then actionable by triggering alerts and workflows on events for those metrics.

- We've launched a no-code UI/UX for non-technical users. They can explore a company's digital infrastructure and build workflows in a browser.

- Running infrastructure is a collaborative effort. We've built functionality so users can share and discover workflow templates that other people have built. This raises overall productivity.

- The productivity benefits of Resoto are so high and so useful that Resoto is among the first three tools any engineer uses for a cloud project:

  - [GitHub](https://github.com) to maintain versions of their infrastructure config as code
  - [Terraform](https://terraform.io) to deploy infrastructure
  - **Resoto** to maintain infrastructure

- Because Resoto is open-source, anyone can contribute and build plugins for company- and industry-specific digital infrastructure.

- Customers share their basic graph structure with us. We can train a model with that data set, infer typical ways of architecting cloud-native services and help customers detect anomalies in their infrastructure.

- Once a day, we collect the latest pricing and open benchmarking data for all cloud providers and share that part of our graph with everyone else.

Our users have started to adopt Resoto as their "source of truth" to document their digital infrastructure instead of, for example, their existing CMDBs.

#### 5-Year Vision

**Resoto is _the_ platform for universal search and workflows for digital infrastructure.**

Resoto is the established tool to collect metadata from millions and millions of resources. [Resoto Core](/docs/concepts/components/core) is the underlying graph platform to store, annotate and navigate the resources.

As our use cases have expanded, our users want to start offering the benefits of universal search and workflows for digital infrastructure to their customers. They embed Resoto and [Resoto Core](/docs/concepts/components/core) into their own products.

In the example of the valves and the fertilizer plant, the plant operator retrofitted the valves by connecting them via [Raspberry Pis](https://raspberrypi.org) and writing the plug-in.

Now, it's the valve manufacturers themselves who standardize and expose attributes of their valves, write the Resoto plug-ins, and define standard workflow templates. A workflow template could be a maintenance alert and dispatch when the valve achieves a certain age or total lifetime throughput.

Instead of "just" selling valves, a manufacturer bundles valve, [Raspberry Pi](https://raspberrypi.org), Keepercore, plug-in and workflow templates into a subscription for a "digital valve" or a "valve cloud" that carries the manufacturer's own brand. The valve manufacturer also maintains connectivity to all valves across its customer base, collecting the aggregate data set. Because Resoto is open, standardized and abstracted, the "valve cloud" is plug-and-play and integrates with a plant operators' existing digital / cloud infrastructure. The valves and [Raspberry Pis](https://raspberrypi.org) again become searchable, discoverable and programmable.

By turning a physical product into a programmable infrastructure resource, companies open up new types of business models and income streams, such as subscription revenue. There are benefits for all parties. With the subscription, the plant operator has the benefit of turning upfront Capex into an operating expense. As the maintainers of the project, [Some Engineering](https://some.engineering) contributes with certifications, training, and support.

- We keep our customers' entire digital infrastructure clean.

- We've launched a development platform, to build and publish custom-branded infrastructure workflow apps via the web and cloud marketplaces. These stores offer distribution and commercialization options for our customers and partners. We build the integrations to automate onboarding and listing for these marketplaces.

- Customers use Resoto to maintain their entire digital infrastructure—across cloud, edge, IoT, SaaS, data, software. We hear from customers how they are replacing their "rows & columns" CMDBs with a graph maintained in [Resoto Core](/docs/concepts/components/core).

- Our customers consider us to be their Air Traffic Control, depending on us to supervise their infrastructure and act before something catastrophic happens (e.g., when a user starts a database that is not encrypted).

#### 10-Year Vision

**Resoto is a creator platform for digital infrastructure.**

Ten years out is an entire platform cycle in computing. Today, we're still in the early stages of a number of generational technology and socio-economic shifts. Cloud, edge, IoT, 5G, AI/ML, autonomous cars, blockchain/crypto, NFTs, AR/VR, voice, vision, ESG, creators, remote work, millennials/Gen Z—the list goes on. There's no shortage of new digital infrastructure companies have to deal with.

It's a giant mess.

By 2031 these shifts will be at the tail end of their maturity cycle. Meanwhile, they will only drive up the variety of digital infrastructure companies have to work with. While a giant mess, it's also a giant opportunity for new markets and services. The need for clean, resilient and programmable digital infrastructure only goes up.

With our open source and plug-in approach, we can support any and all of these new infrastructures. Customers will need to work with data-, blockchain- and IoT infrastructure in similar ways the same way they're working with cloud infrastructure today. New services might have new interfaces.

But the basic properties will stay the same—there's going to be some resource connected to some network, and the resources will have properties and attributes. As long as these primitives hold true, we can collect them and be useful. We may start with a limited set of primitives for each new infrastructure and its resources, but over time our coverage and depth will always go up.

- We will replace point solutions to understand and map out any of these new types of infrastructures. There will always be tension between a monolithic management layer that ships with a product versus a platform like ours.

- Our plug-in, no-code, and search syntax approach lowers the barrier to work with any type of infrastructure. We think customers will value that simplicity and adoption speed.

- Because we cover all these platforms with a large reach, we're becoming the de-facto standard that other companies adopt when they ship their products and infrastructure elements. We attract more developers and creators that want to build custom apps.

- We've launched a marketplace where our community of developers and ISVs can develop, distribute and monetize their services and infrastructure workflow applications.
