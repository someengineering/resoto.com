---
date: 2022-12-08
authors:
  - lars
  - name: Patrick DeVivo
    title: Founder & CEO at MergeStat
    image_url: https://avatars.githubusercontent.com/u/57259?v=4
    url: https://linkedin.com/in/patrick-devivo
tags: [open source, analytics]
image: ./img/banner-social.jpg
---

# Episode 10: Creating Operational Analytics with SQL and Git Repositories

Software engineering is often more art than science, making it difficult to measure productivity. There are ways to use data to be more effective as an individual contributor or an engineering leader, but surprisingly, engineering organizations and teams typically are not data-driven.

**[MergeStat](https://mergestat.com) is on a mission to change this with open-source, operational analytics for software engineering organizations.** MergeStat started as an experiment to bring together two technologies: <abbr title="Structured Query Language">SQL</abbr> and [Git](https://git-scm.com) repositories. MergeStat provides data integration for your Git repositories, facilitating the exploration of legacy code and identification of code that hadn't been touched in a while and maybe deserved new attention.

From there, the use cases evolved. Today, MergeStat is used by organizations that have hundreds or even thousands of repositories. MergeStat is data infrastructure for Git repositories, where anyone can query the history and contents of their code bases.

Behind the scenes, MergeStat syncs data from the tools used to build and ship software into a [PostgreSQL](https://postgresql.org) instance, as <abbr title="application programming interface">API</abbr>s provided by these tools are not always easy to understand and extract data from. MergeStat puts a lot of the usual work into implementing good <abbr title="application programming interface">API</abbr> data consumption, like pagination and respecting rate limits.

From there, a user can query their data directly in MergeStat, or use other business intelligence tools and dashboards that know how to speak to PostgreSQL. See this example Grafana dashboard for GitHub pull requests.

[**Patrick DeVivo**](https://linkedin.com/in/patrick-devivo) is Founder and CEO at MergeStat. In this session, we start out with a general overview of MergeStat and how it's used today.

Patrick explains how MergeStat is a general-purpose engine that companies use to craft the queries that fit their organization. We go into a few MergeStat use cases that Patrick sees today:

- In some cases, the actual data collection is the use case. For example, with audits the action is to deliver the list of pull requests that didn't follow best practices.
- Understanding the different versions of a programming language in use. If you're a [Go](https://go.dev) shop, a single query aggregates the different Go versions used across all repositories.
- Find pull requests that have been open for a long time or merged without review.

Patrick's advice is to use MergeStat in a way that is positive and constructive to take action. Watch this episode to learn more about data integration for the software development lifecycle.

https://youtu.be/fBNP8iVSnw0
