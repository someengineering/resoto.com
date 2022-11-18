---
authors: [anja]
tags: [aws, tagging, cloud]
---

# Tagging as a Treat

```mdx-code-block
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
```

Cloud tagging strategies and policies are hailed as one of the most efficient ways to keep your cloud infrastructure controllable. But are they really?

Generally, the idea is that every piece of cloud service gets tagged (or _labeled_, in case of <abbr title="Google Cloud Platform">GCP</abbr>) by the developers or maintainers who work with it. This could be accomplished with infrastructure-as-code (IaC) tools (such as [Terraform](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/guides/resource-tagging)), with a command-line interface (CLI), or in the cloud UI.

Tagging policies could require that each resource needs tags identifying the owner, cost center, product, project, and/or any other metadata. **By being diligent about tagging, resources can be managed via their tags and nothing gets overlooked.**

In theory, this is the correct way to manage resources; in practice, however, this hardly ever works as intended. **Each tag created is a tag that requires maintenance.** Tagging policies may change over time and people can make mistakes (in <abbr title="Amazon Web Services">AWS</abbr>, for example, tag keys are case sensitive). And, to properly use tagging on a greenfield cloud account is one thing; to retroactively apply tags to sprawling cloud infrastructure is quite another (especially when utilizing a multi-cloud strategy, where you'd need to repeat any operation over multiple interfaces).

<!--truncate-->

We asked our community about their most challenging aspect of cloud tagging strategies on [LinkedIn](https://linkedin.com/feed/update/urn:li:activity:6987739499686428672):

![LinkedIn Poll](./img/linkedinpoll.png)

**Over 70% of poll respondents felt that human error is the biggest issue.** Be it on the console, in the UI, in templates, or in Terraform config files, tags are initially created by humans. But then, we want them to be properly understood by unforgiving machines.

As highlighted in [my previous blog post](../10-14-a-tale-of-two-tools/index.md), going through cloud infrastructure with a <abbr title="command-line interface">CLI</abbr> can be tiresome and requires contextual knowledge (because the API differs between services). This is hardly conducive to keeping tags under control.

## Enforcing Tagging Policies with Resoto

**Resoto simplifies interaction with your cloud(s), and can be a powerful tool in tag maintenance.**

Consider a scenario where an internal policy demands that all <abbr title="Amazon Web Services">AWS</abbr> <abbr title="Simple Storage Service">S3</abbr> buckets and <abbr title="Elastic Compute Cloud">EC2</abbr> volumes carry a tag with key `costcenter` and value corresponding to a department or project. Most developers know of this requirement, but the information is often conveyed by word of mouth. As a result, the case-sensitive tag is sometimes misspelled.

:::note

For the sake of clarity, today's blog post only covers <abbr title="Amazon Web Services">AWS</abbr>. However, [Resoto treats resources from all cloud providers the same](../09-22-cloud-resources-they-have-a-lot-in-common/index.md) and you can easily customize the below search queries as needed.

:::

### Discovery

First, we need to find the resources fall under the policy:

```bash title="Search for all resources that are EC2 Volumes or S3 Buckets, and count them"
> search is(aws_ec2_volume) or is(aws_s3_bucket) | count
# highlight-start
​total matched: 314159
​total unmatched: 0
# highlight-end
```

Next, you can check how many of these resources carry the correct tag by adding a condition that a tag with key `costcenter` must exist:

```bash title="Add the condition that a tag with key 'costcenter' must exist"
> search is(aws_ec2_volume) or is(aws_s3_bucket) and tags.costcenter != null | count
# highlight-start
​total matched: 271828
​total unmatched: 0
# highlight-end
```

If you already have suspicions about certain misspellings, you can check how many of these resources carry a spelling variant of the tag by varying the tag condition:

```bash title="Add the condition that a tag with key 'CostCenter' must exist"
> search is(aws_ec2_volume) or is(aws_s3_bucket) and tags.CostCenter != null | count
# highlight-start
​total matched: 42331
​total unmatched: 0
# highlight-end
```

Alternatively, if you don't yet have an idea about which typos might have snuck into your data, search for all tags:

```bash title="Search for all tags of all resources and count how often they occur"
> search is(aws_ec2_volume) or is(aws_s3_bucket) | jq '.tags | keys | .[] | {name:.}' | flatten | count /name
# highlight-start
​Name: 123
​CostCenter: 42331
​costcenter: 271828
​name: 359632
​owner: 389374
# highlight-end
```

### Solution

Now, you can create a new tag on the affected resources with the correct key and the value from the incorrect tag:

```bash title="Add a new tag to resources, taking the value from the existing tag"
> search is(aws_ec2_volume) or is(aws_s3_bucket) and tags.CostCenter != null | tag update costcenter {tags.CostCenter}
```

Then, clean up:

```bash title="Delete the incorrect tag"
> search is(aws_ec2_volume) or is(aws_s3_bucket) and tags.CostCenter != null | tag delete CostCenter
```

Double-check that all resources now carry the correct tag:

```bash title="Count resources that are EC2 Volumes or S3 Buckets that don't have a 'costcenter' tag"
> search is(aws_ec2_volume) or is(aws_s3_bucket) and tags.costcenter != null | count
# highlight-start
​total matched: 314159
​total unmatched: 0
# highlight-end
```

### Prevention

Once you know the most common mistakes, it's time to set up automation. While the above process in Resoto Shell is already infinitely more comfortable than trying the same on <abbr title="Amazon Web Services">AWS</abbr> CLI, it is more of an exploratory step than an end-all solution.

Resoto allows you to define and schedule [jobs](/docs/concepts/automation/job) with the [`jobs add` command](/docs/reference/cli/action-commands/jobs/add) to further reduce this kind of toil work:

```bash title="Create a job with the id 'repair_tags' that executes after the 'collect_done' event and runs the command to add a new tag to resources"
> jobs add --id repair_tags --wait-for-event collect_done: search is(aws_ec2_volume) or is(aws_s3_bucket) and tags.CostCenter != null | tag update costcenter {tags.CostCenter}
```

### Alerting

While the constant cleaning up behind your developers is now entirely hands-off, **it would be ideal to have them avoid these kinds of tagging mistakes in the first place**.

In addition to a repair job, you can also set up notifications for your team to alert them of wrong tags, providing an opportunity to fix the root cause (e.g., Cloudformation templates or Terraform config files):

<Tabs>
<TabItem value="discord" label="Discord">

```bash title="Create a job to send notifications of untagged resources to Discord"
> jobs add --id notify_missing_tags --wait-for-event post_collect 'search is(aws_ec2_volume) or is(aws_s3_bucket) and tags.costcenter = null | discord title="Resources missing `costcenter` tag"
webhook="https://discord.com/api/webhooks/..."'
```

</TabItem>
<TabItem value="slack" label="Slack">

:::info

**The `slack` custom command will be available in the upcoming Resoto 3.0 release.**

If you would like to try it out today, you can [install the `edge` version of Resoto](/docs/edge/getting-started/install-resoto) (not recommended for use in production environments).

:::

```bash title="Create a job to send notifications of untagged resources to Slack"
> jobs add --id notify_missing_tags --wait-for-event post_collect 'search is(aws_ec2_volume) or is(aws_s3_bucket) and tags.costcenter = null | slack title="Resources missing `costcenter` tag"
webhook="https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX"'
```

</TabItem>
</Tabs>

See [Alerting How-To Guides](/docs/how-to-guides/alerting) for additional notification options.

## Summary

Because Resoto has a complete view over your entire cloud asset inventory **and** because Resoto is service-agnostic the tag handling even of millions of resources is no longer a fight against windmills but becomes a treat instead! ✨

Resoto is [open source](https://github.com/someengineering/resoto/blob/main/LICENSE) and free to use, and currently supports [<abbr title="Amazon Web Services">AWS</abbr>](/docs/getting-started/configure-cloud-provider-access/aws), [<abbr title="Google Cloud Platform">GCP</abbr>](/docs/getting-started/configure-cloud-provider-access/gcp), and [DigitalOcean](/docs/getting-started/configure-cloud-provider-access/digitalocean). [Install Resoto](/docs/getting-started/install-resoto) today!

## Further Reading

- [Resource Tagging](/docs/concepts/resource-management/tagging)
- [How to Find Untagged Resources](/docs/how-to-guides/search/find-untagged-resources)
- [How to Clean Up Untagged Resources](/docs/how-to-guides/cleanup/clean-up-untagged-resources)
- [`tagvalidator` Plugin](/docs/concepts/components/plugins/tagvalidator)
