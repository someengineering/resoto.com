---
date: 2022-09-14
authors:
  - lars
  - name: Andreas Grabner
    title: DevOps Activist at Dynatrace
    image_url: https://avatars.githubusercontent.com/u/675886?v=4
    url: https://linkedin.com/in/grabnerandi
tags: [cloud, site reliability, devops, metrics]
image: ./img/banner-social.jpg
---

# Episode 6: Site Reliability Engineering and Cloud-Native Architecture

[**Andreas Grabner**](https://linkedin.com/in/grabnerandi) is a DevOps Activist at [Dynatrace](https://dynatrace.com), where he has fifteen years of experience helping developers, testers, operations, and XOps folks do their jobs more efficiently.

In this episode, Andreas and I discuss how the shift to cloud-native and more dynamic infrastructure is followed by a change in how developers, architects, and site reliability engineers (SREs) work together.

**With the sheer quantity of resources running in cloud-native infrastructure and the monitoring signals produced by each resource, the only way to keep growing without "throwing people at the problem" is to turn to automation.**

Andreas makes a noteworthy distinction between DevOps engineers and <abbr title="site reliability engineer">SRE</abbr>s:

- DevOps engineers use automation to speed up delivery and get new changes into production.
- <abbr title="site reliability engineer">SRE</abbr>s use automation to keep production healthy.

&#8203;<abbr title="site reliability engineer">SRE</abbr>s are often former <abbr title="information technology">IT</abbr> operations and system administrators responsible for physical machines, virtual machines (VMs), and [Kubernetes](https://kubernetes.io) clusters. As <abbr title="site reliability engineer">SRE</abbr>s, they move up the stack and become responsible for everything from the bottom of the stack all the way up to serverless functions and the service itself.

We dive into the differences between <abbr title="service level agreement">SLA</abbr>s, <abbr title="service level objective">SLO</abbr>s, and [Google's four golden signals of monitoring](https://sre.google/sre-book/monitoring-distributed-systems/#xref_monitoring_golden-signals)—latency, traffic, errors, and saturation. Andreas shares the example of a bank and how they started defining <abbr title="service level objective">SLO</abbr>s to measure the growth of their mobile app business versus just defining engineering metrics.

This episode covers "engineering for game days," chaos engineering, and making the unplannable, plannable. Andreas shares his perspective on the general trend to "shift left" and include performance engineering in the development and architecture of cloud-native systems.

https://youtu.be/2zVYIurCJ-A
