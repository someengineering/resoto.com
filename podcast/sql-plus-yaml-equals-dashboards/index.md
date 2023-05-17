---
date: 2022-12-22
authors:
  - lars
  - name: Michael Driscoll
    title: Co-Founder & CEO at Rill Data
    image_url: https://avatars.githubusercontent.com/u/306103?v=4
    url: https://linkedin.com/in/medriscoll
tags: [cloud, analytics]
image: ./img/banner-social.jpg
---

# Episode 12: SQL + YAML = Dashboards

Creating an analytics dashboard is a time-consuming process that involves stitching together many components: ELT pipelines, cloud warehouses, transformation and semantic layers, data catalogs, and a dashboard tool. The flexibility of the Modern Data Stack (MDS) also means a great deal of complexity and many design decisions.

**[Rill Data](https://rilldata.com) is on a mission to radically simplify how developers create operational dashboards.** Rill offers blazing fast dashboards that come bundled with a real-time analytical database and a modeling layer.

[**Michael Driscoll**](https://linkedin.com/in/medriscoll) is the co-founder and CEO of Rill Data. In this episode, Mike demos the latest 0.16 release of [Rill Developer](https://docs.rilldata.com).

There are three pieces of infrastructure that form a Rill dashboard application:

- **Sources:** Rill ships with a CLI you can use to import data from an object store like AWS S3 or Google Cloud Storage. Rill treats the object store as the source of truth and imports data for the "last-mile ETL." As data in the object store changes, Rill orchestrates incremental updates.
- **Runtime:** The runtime itself consists of a database ([DuckDB](https://duckdb.org)), a web UI for rendering the dashboards ([SvelteKit](https://kit.svelte.dev)), and a middleware written in [Go](https://go.dev). Rill Enterprise replaces DuckDB with Apache Druid to process large data sets.
- **Models:** Configuration code that parameterizes the dashboards, using [YAML](https://yaml.org) and <abbr title="Structured Query Language">SQL</abbr>.

Bringing these things together in one application is an opinionated way to transform data to dashboards that Mike says covers "80%+ of the use cases that \[they've\] come across when building operational dashboards." Rill customers create dashboards to build analytics for their advertising, marketplace, and infrastructure operations.

Rill's stack is a departure from point-and-click interfaces, moving towards what Mike calls "<abbr title="business intelligence">BI</abbr>-as-code." Source definitions and metrics are implemented in YAML, and models create a <abbr title="Structured Query Language">SQL</abbr> query. The combination of <abbr title="Structured Query Language">SQL</abbr> and YAML creates a <abbr title="business intelligence">BI</abbr> layer that can be checked into a [Git](https://git-scm.com) repository, which can then be managed automatically by <abbr title="continuous integration">CI</abbr> workflows.

We also cover broader trends in our discussion, including the convergence of engineering and analytics cultures as engineers adopt practices from analytics to work with infrastructure data. Watch this episode to learn more about building data infrastructure for engineering teams with <abbr title="Structured Query Language">SQL</abbr> and YAML with Rill.

https://youtu.be/TJMqmg_-EDg
