---
authors: [anja]
tags: [aws, tagging, cloud]
---

# Tagging as a Treat

Cloud Tagging Strategies and Policies are hailed as one of the most efficient ways to keep your cloud infrastructure controllable. But are they really?

The idea generally is that every (taggable) piece of cloud service gets tagged (or _labelled_ in case of <abbr title="Google Cloud Platform">GCP</abbr>) by the developers or maintainers who work with it. This could be done with Infrastructure-as-Code Tools (see [Terraform](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/guides/resource-tagging) for example), with a Command Line Interface or manually in the cloud UI.

Tagging policies could state that every resource needs a tag to identify the owner, the cost center, the product, the project or any other metadata. By doing this diligently every resource can be managed via its tags and nothing gets overlooked.

While in theory this is the right way to do it, in practice this hardly ever works as intended. Every tag created is a tag that needs maintaining. Tagging policies may change over time and people can make honest mistakes when tagging (in <abbr title="Amazon Web Services">AWS</abbr> for example: tag keys are case sensitive, which can quickly go wrong). To properly use tagging on a greenfield cloud account is one thing - to retroactively apply tags to sprawling cloud infrastructure is quite another (especially when utilising a multi-cloud strategy, where you’d need to repeat any operation over multiple interfaces).

We [asked our community](https://www.linkedin.com/feed/update/urn:li:activity:6987739499686428672) about their most challenging aspect of cloud tagging strategies:

![LinkedIn Poll](./img/linkedinpoll.png)

Over 70% agree that human error is the biggest issue. Be it on the console, in the UI, in templates or in Terraform config files, tags are initially being typed by people. But then we want them to be properly understood by machines.

As highlighted in [this recent blog post](../10-14-a-tale-of-two-tools/index.md) going through cloud infrastructure with CLI can be tiresome and requires a lot of contextual knowledge, as the API can differ between services. This is hardly conducive to effectively keeping tags under control. In that post we also outlined how Resoto simplifies interaction with your cloud(s).

Here, we are going to go through a scenario of tag maintenance on <abbr title="Amazon Web Services">AWS</abbr> with Resoto in detail:

Let us consider a (somewhat simplified) scenario where an internal policy demands that all <abbr title="Simple Storage Service">S3</abbr> buckets and <abbr title="Elastic Compute Cloud">EC2</abbr> volumes carry a tag with the key “costcenter” and a value that corresponds to a department or a project. Most developers know about this, but the information is often conveyed by word of mouth and not by looking into the policy itself. As a result, the tag is sometimes being misspelled.

For the sake of clarity our example only covers <abbr title="Amazon Web Services">AWS</abbr>. However, Resoto treats [all resources from all cloud providers](../09-22-cloud-resources-they-have-a-lot-in-common/index.md) the same and you can easily mix and match your search queries as needed.

All examples below are executed on resotoshell after resource collection. They will use the [search command](/docs/reference/cli/search-commands/search) and the [tagging commands](/docs/concepts/resource-management/tagging).

## Find out about the problem

First, check how many resources fall under the policy:

```bash title="search for all resources that are EC2 Volumes or S3 Buckets and count them"
> search is(aws_ec2_volume) or is(aws_s3_bucket) | count
# highlight-start
total matched: 314159
total unmatched: 0
# highlight-end
```

Next, you can check how many of these resources carry the correct tag by adding a condition that a tag with the key 'costcenter' must exist:

```bash title="add the condition that a tag with key 'costcenter' must exist"
> search is(aws_ec2_volume) or is(aws_s3_bucket) and tags.costcenter != null | count
# highlight-start
total matched: 271828
total unmatched: 0
# highlight-end
```

If you already have your suspicions about mis-spellings you can check how many of these resources carry a spelling variant of the tag by varying the tag-condition:

```bash title="add the condition that a tag with key 'CostCenter' must exist"
> search is(aws_ec2_volume) or is(aws_s3_bucket) and tags.CostCenter != null | count
# highlight-start
total matched: 42331
total unmatched: 0
# highlight-end
```

**Alternatively**, if you don’t yet have an idea about which typos might have snuck into your data, search for all tags:

```bash title="search for all tags of all resources and count how often they occur"
> search is(aws_ec2_volume) or is(aws_s3_bucket) | jq '.tags | keys | .[] | {name:.}' | flatten | count /name
# highlight-start
Name: 123
CostCenter: 42331
costcenter: 271828
name: 359632
owner: 389374
# highlight-end
```

## Solve the problem

Now you can create a new tag on the affected resources with the correct key and the value from the incorrect tag:

```bash title="add a new tag to resources, taking the value from the existing tag"
> search is(aws_ec2_volume) or is(aws_s3_bucket) and tags.CostCenter != null | tag update costcenter {tags.CostCenter}
```

Then clean up:

```bash title="delete the incorrect tag"
> search is(aws_ec2_volume) or is(aws_s3_bucket) and tags.CostCenter != null | tag delete CostCenter
```

Double check that all resources now carry the correct tag:

```bash title="count resources that are EC2 Volumes or S3 Buckets that don't have a **costcenter** tag"
> search is(aws_ec2_volume) or is(aws_s3_bucket) and tags.costcenter != null | count
# highlight-start
total matched: 314159
total unmatched: 0
# highlight-end
```

## Try to prevent the problem

Once you know the most common mistakes it’s time to set up some automation. While the above process on resotoshell is already infinitely more comfortable than trying the same on <abbr title="Amazon Web Services">AWS</abbr> CLI it is more of an exploratory step than an end-all solution. Resoto allows you to [define and schedule custom jobs](/docs/reference/cli/action-commands/jobs/add) to reduce this kind of toil work even more:

```bash title="create a job with the id 'repair_tags' that executes after the 'collect_done' event and runs the command to add a new tag to resources"
> jobs add --id repair_tags --wait-for-event collect_done: search is(aws_ec2_volume) or is(aws_s3_bucket) and tags.CostCenter != null | tag update costcenter {tags.CostCenter}
```

While the constant cleaning up behind your developers is now entirely hands-off it would be ideal to have them avoid these kinds of tagging mistakes in the first place. In addition to a repair job you can also set up a notification for your team that lets them know about wrong tags and gives them an opportunity to fix the root cause (i.e. Cloudformation templates or Terraform config files):

### Send a message to the team in Slack:

```bash title="send search results about untagged resources to Slack"
> search is(aws_ec2_volume) or is(aws_s3_bucket) and tags.costcenter = null | slack title="Missing tag “costcenter” on these resources:"
webhook="https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX"
```

[See full Slack command cocumentation here](/docs/edge/how-to-guides/alerting/send-slack-notifications)

### Create a Jira issue:

```bash title="send search results about untagged resources to Jira"
> search is(aws_ec2_volume) or is(aws_s3_bucket) and tags.costcenter = null | jira title="Resources are missing their “costcenter” tag!"
message="The following instances are missing their “costcenter” tag - please double-check your templates used! Thanks!"
url="https://your-domain.atlassian.net"
username="you@your-team.com"
token="xxxxxxxxx"
project_id="12345"
reporter_id="1111111111111"
```

[See full Jira command cocumentation here](/docs/edge/how-to-guides/alerting/create-jira-issues)

## Summary

Because Resoto has a complete view over your entire cloud asset inventory **and** because Resoto is service-agnostic the tag handling even of millions of resources is no longer a fight against windmills but becomes a treat instead! ✨

## Further Reading

- Learn [how to clean up untagged resources](/docs/how-to-guides/cleanup/clean-up-untagged-resources)
- Did you know about Resotos [Tag Validator Plugin](/docs/concepts/components/plugins/tagvalidator)?

Resoto is [open source](https://github.com/someengineering/resoto/blob/main/LICENSE) and free to use, and currently supports [<abbr title="Amazon Web Services">AWS</abbr>](/docs/getting-started/configure-cloud-provider-access/aws), [<abbr title="Google Cloud Platform">GCP</abbr>](/docs/getting-started/configure-cloud-provider-access/gcp), and [DigitalOcean](/docs/getting-started/configure-cloud-provider-access/digitalocean). [Install Resoto](/docs/getting-started/install-resoto) today!
