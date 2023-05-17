---
date: 2023-03-03
authors:
  - lars
  - name: Yevgeny Pats
    title: Co-Founder & CEO at CloudQuery
    image_url: https://avatars.githubusercontent.com/u/16490766?v=4
    url: https://linkedin.com/in/yevgeny-pats-5973328b
tags: [cloud]
image: ./img/banner-social.jpg
---

# Episode 16: ELT for Cloud Infrastructure Data

<p><abbr title="extract, load, transform">ELT</abbr> describes the process of extracting raw data from a source, loading it into a destination, and then transforming the data for analytics purposes. <abbr title="extract, load, transform">ELT</abbr> has become mainstream with the rise of cloud warehouses and data lakes, in a shift away from <abbr title="extract, transform, load">ETL</abbr>.</p>

<p><abbr title="extract, transform, load">ETL</abbr> was the dominant paradigm when storage and compute were expensive and pre-aggregating data (i.e., transform) made economic sense. But <abbr title="extract, transform, load">ETL</abbr> comes with a trade-off—aggregating data before analysis also means losing fidelity, granularity, and the flexibility to iterate and re-run an analysis in a different way.</p>

**The cloud has driven down the cost of compute and storage so that it no longer makes sense to pre-aggregate data in an external processing layer, resulting in the shift to <abbr title="extract, load, transform">ELT</abbr>.** Today, we can store raw data in data lakes at high fidelity and with the flexibility to write queries tailored to any use case.

The main use case for <abbr title="extract, load, transform">ELT</abbr> until now has been sales and marketing data, where data sources include systems like Salesforce, Marketo, and Google Analytics.

A new type of data source is cloud infrastructure data, which encompasses information about cloud resources like compute instances, storage buckets, or databases. Cloud infrastructure data describes the configuration of and relationships between cloud resources.

Examples of cloud infrastructure data include not only general properties like start date, name, and tags; but also resource-specific properties like price or type. This data is available via the cloud APIs that infrastructure-as-code tools like [Terraform](https://terraform.io) and [Pulumi](https://pulumi.com) use to deploy resources.

**[CloudQuery](https://cloudquery.io) is a high-performance open-source ELT framework built for developers.** CloudQuery extracts data from cloud APIs and loads it into databases, data lakes, or streaming platforms for further analysis.

With raw infrastructure data, CloudQuery users are building solutions for security, cost, and governance use cases by writing SQL queries. Querying raw infrastructure SQL provides more flexibility and coverage than an opinionated DevOps tool could provide.

In this episode, I chat with [**Yevgeny Pats**](https://linkedin.com/in/yevgeny-pats-5973328b), CEO and co-founder at CloudQuery. We cover the "why now?" for infrastructure data, and the change in mindset observed among infrastructure engineers and their shift to using data lakes.

Watch this episode to also see a demo of CloudQuery, and learn how the tool evolved from a niche data sync solution to a high-performing <abbr title="extract, load, transform">ELT</abbr> framework.

https://youtu.be/5ALXtsUKqeY
