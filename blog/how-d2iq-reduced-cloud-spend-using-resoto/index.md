---
date: 2023-04-12
authors: [lars]
tags: [cloud spend]
---

# How D2iQ Reduced Annual Cloud Spend by $5.4M Using Resoto

**Resoto offers an open-source approach to use infrastructure data to solve today's most pressing cloud problems: cost, resilience, security, and compliance.**

In this post, I share the story of how [D2iQ](https://d2iq.com), an enterprise Kubernetes provider, used Resoto to reduce their annual cloud bill by 78% and save $5.4M per year.

<!--truncate-->

## The Challenge

D2iQ uses the cloud predominantly for testing, validation, and demo environments, and their customers include enterprises like Apple, BMW, and the United States Navy.

The size and mission-critical nature of these customer environments means that D2iQ needs to test code changes at sufficient scale, sometimes resulting in environments with hundreds or thousands of compute instances.

D2iQ went through a phase of rapid growth and engineering headcount rose to over 100 developers. With each new developer, cloud spend increased because:

- Zombie resources from failed deployments that keep incurring cost

- Test environments keep running despite no usage

- Overprovisioning and inefficient use of resources

- Untagged resources make it hard to identify origin and purpose

- No easy way to understand how all resources are linked

While the reasons were known, D2iQ wanted to focus on growth and ship new product rather than spending engineering resources on cost savings.

Another issue was the per-unit cost of cloud-native resources. The monthly cost of a single micro instance may not justify the engineering effort required to clean it up; but when they number in the hundreds or thousands, the bills start to pile up.

At peak, D2iQ was spending $561,000 on AWS and $20,000 on GCP each month. The accelerating cash consumption from cloud spend started to impact D2iQ's runway. **That's when D2iQ CEO [Tobi Knaup](https://linkedin.com/in/tobiasknaup) decided it was time to change the focus to efficient growth.**

## The Solution

A key requirement was to not impact developer velocity and continually consume engineering resources for cleanup. Tobi also wanted to maintain developers' ability to freely spin up new resources and run tests, and not introduce rigid processes that would kill productivity. D2iQ's SRE team also wanted visibility into their entire cloud inventory and how resources are related, and to regain control over the lifecycle of each resource.

To accomplish these goals, D2iQ deployed Resoto. Resoto collects data from D2iQ's cloud accounts and takes a full inventory snapshot every hour. Snapshot data is available for users to search, aggregate, and ask questions across clouds, accounts, and regions.

The SRE team split the work to clean up their cloud infrastructure into three phases, with a 30/60/90-day plan:

- **30 Days: Get in Control**

  The SRE team created a baseline cloud inventory, to get a complete view of all resources. They used Resoto Metrics to define inventory metrics to track their infrastructure's rate of change and efficiency. The metrics also served to measure the benefits of their work.

- **60 Days: Remove Cost**

  Next, the team identified unused resources they could batch delete. Cleanup of expensive unused resources had already started during the first 30 days. Now the team attacked the long tail of "smaller" zombie resources.

- **90 Days: Prevent Future Waste**

  The SRE team re-organized the D2iQ cloud accounts and resized test infrastructure to balance it with actual capacity needs. They also introduced a logical separation of workloads. New resources in these accounts were all tagged and associated with a team or project.

The new tag policy meant developers were now required to use two mandatory tags for every resource—an owner and an expiration tag. The expiration date was specific to a workload and account, and limited to development accounts. The goal of the new tag policy was to introduce accountability, without adding any complexity.

To enforce the new policy, D2iQ started using Resoto's action commands that could perform updates on resources.

- Whenever a resource was missing one of the two required tags, within an hour after its creation Resoto would catch and delete it automatically.

- For expiration dates that were longer than the policy allowed for an account, Resoto would automatically correct the tag down to allow the maximum allowed lifetime.

- Once a resource had reached its expiration date, Resoto would delete the resource.

In addition, D2iQ implemented a "Friday evening wipe." In certain dev and test accounts, any resource created before Friday 10pm would be cleaned up over the weekend so that expensive test clusters wouldn't run when nobody was actively using them. This post is a short summary of a full case study, which you can download here.

## Results

This new approach delivered dramatic cost savings for D2iQ.

- D2iQ's AWS bill went from $561K per month down to $122K per month—a reduction of $439K or 78%.

- Their GCP bill dropped by 55% from $20K to $9K per month.

The cost reduction happened gradually within the 90 days of the project. In sum, this meant savings of $450K per month delivered at the end of the 90 days, or $5.4M per year. Cash that goes straight to D2iQ's bottom line. Enforcing the new lifecycle policy through tags meant that the cloud bill wouldn't slowly creep up again.

The savings were the primary target, but they had unexpected secondary effects. The savings freed up cloud budget, which D2iQ could reinvest into larger and more frequent testing, making their software more robust. Resoto also integrates with D2iQ's existing toolchain (e.g. Prometheus, Grafana, PagerDuty), making the SRE team more efficient.

## Lessons Learned

**The successes that D2iQ experienced with Resoto didn't happen overnight and required a lot of work by our engineers to fix bugs and introduce new features.**

The D2iQ team was the first to not just use Resoto passively to explore and understand their cloud inventory, but also to take infrastructure data and use it as an input to write commands and automations.

Here are some of our lessons learned:

- **Executive Support**

  This project would not have happened without Tobi's CEO support. In our experience, engineering teams are stretched as it is, and busy with delivering new features. Without a clear mandate from "the top," and a willingness to question conventional approaches to managing cloud infrastructure, delivering these levels of cost savings would have been impossible.

- **Developer Education**

  At first, developers met the new tagging policy and automatic deletion of resources (in test) by a certain date with skepticism and resistance. That required education upfront on the "why," and constant reminders—yet also no exceptions. But developers turned from "skeptics" into "believers," because Resoto removed non-productive time from their work that they could reinvest into building and testing.

- **Incremental Improvements**

  Don't start with a "big bang." Despite all caution, you will end up with "false positives" and delete resources that may look like they serve no purpose, but are still in use. That's where CEO support matters as well. It's best to start with exploration, and then add one clean-up job for one resource type at a time. Incremental improvements compound and create trust in the approach.

Our conclusion is that tactical clean up efforts don't work—your cloud bill will always creep up again. You have to change the way your developers work with the cloud, and make cost awareness and spend targets a KPI.

## Summary

We'd really like to thank D2iQ, in particular [Tobi Knaup](https://linkedin.com/in/tobiasknaup) (CEO), [Viktor Harutyunyan](https://linkedin.com/in/victorharutyunyan) (Director of Infrastructure), and [Jan Ulferts](https://linkedin.com/in/jan-ulferts-05175883) (Senior Staff Software Engineer) for helping us to develop Resoto's "data-driven cloud control" approach. Without their support, it would have been impossible to prove the efficacy of our model.

If you want to follow D2iQ's example, you can start with Resoto to [build an EC2 asset inventory](../building-an-ec2-cloud-inventory-across-all-regions-and-accounts/index.md) or [clean up resources](/docs/how-to-guides/cleanup). We're also available on [Discord](https://discord.gg/someengineering) to answer questions and help you [get started with Resoto](/docs/getting-started).
