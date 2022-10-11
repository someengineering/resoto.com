---
authors: [anja]
tags: [aws, inventory, cloud]
image: ./img/banner-social.png
---

# A tale of two tools

It is the best of times, it is the worst of times. Software engineers working with AWS have any cloud service imaginable at their fingertips and developer velocity could hardly be higher. But even the most shiny of coins has two sides. While developers can spin up compute instances, databases and less tangible things like lambda functions or virtual identities as they wish - at some point someone will ask “what is all of this?”. And as they try to get an overview of all the cloud resources in all their AWS accounts by hacking away in the CLI, they will get frustrated. While Amazon has been the pioneering force of cloud computing and they offer the largest array of services, there are some things that didn’t come as easy: API consistency.

In this post we want to illustrate a few of the challenges and quirks with AWS API and give you an idea of why we go through all of this trouble day by day when building Resoto. (Spoiler: It is so that you don’t have to.) In case you’re curious about the implementation of new resources or new services, please take a look at our [Contribution Guide]. PRs are most welcome, we’re an open source product after all! While there is somewhat of a recipe to follow for every AWS service, many pitfalls lie ahead and the devil is in the details. Here are a few of them:

## Retrieving resource information

Generally speaking, the API for every service covers the typical life cycle: creation, tagging, description and deletion of resources. This is about where the similarities end. In Resoto, [everything is a resource](../09-22-cloud-resources-they-have-a-lot-in-common/index.md). Therefore we will be on the lookout for any calls in the realm of `list-...`, `get-...-attributes`, or `describe-...`. This is where the divergence begins. Can you get all metadata for all resources of the same kind in one call or do you have to make nested calls for every item? For EC2 we all get lucky and get everything in one go. Other services however force you to first retrieve a list of resource identifiers (more on that below) and then ask for attributes or descriptions for each entry in that list. To go through that by means of manual exploration is forbiddingly arduous. To go through that programmatically, however, is not half as bad. Resoto does this wherever necessary so that with each collection run, all metadata for all resources are complete. The total number and the nesting of calls are out of sight for Resoto users.

## Concerning resource identification

Naively speaking, every question concerning the distinct identification of any resource should be answered by its ARN. That’s the whole idea behind it. However, matters are not that simple. For example you could wish to tag a RestApi in AWS ApiGateway. Looking at the CLI documentation you can see that there is a [tag resource](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/apigateway/tag-resource.html) command. You provide the ARN of the resource and the tags you wish to add. But what is the ARN of a RestApi? If you thought that this rather crucial bit of information is covered by a call to [get-rest-apis](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/apigateway/get-rest-apis.html#output) you’d be mistaken. A closer look at the output of said call shows that it does not in fact contain the ARN. You can assemble the ARN manually or try to find it somewhere in the management console. But is that a reasonable way to go? No. That’s why we have taken great care to provide correct ARNs for every resource in Resoto. You no longer have to care about these idiosyncrasies! Aside from ARNs, resources can come with a name and/or an ID. (Sometimes they’re the same, though!). So when the [description of an EC2 Volume](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/ec2/describe-volumes.html#output) contains a section called `KmsKeyId` - surely this contains the ID of a Key? Wrong! Many references to KMS Keys are called `ID` but do in fact contain the ARN. While this is noted in the documentation, it’s still certain to cause confusion should you want to make use of this information. Since it’s not uncommon to reference resources by ID within and across AWS Services, this behaviour is unexpected, to say the least.

## Data types

Let’s take one step back to retrieving metadata for resources. The information you receive vary in complexity and volume. Some of them do come with reasonable data types. The [size of a Glacier Vault in Bytes](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/glacier/describe-vault.html#output) is a long integer. The indicator if a [Glacier Job has completed](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/glacier/describe-job.html#output) is a boolean. Let this not lull you in a false sense of comfort though. Do you want to know how many [subscriptions of an SNS Topic](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/sns/get-topic-attributes.html#output) have been confirmed? Make sure to convert this string to an integer if you want to work with it anywhere! Are you looking at such a subscription and need to know whether or not the confirmation is pending? This binary piece of information is a string, too! Another data quirk concerns information about date and time. Are you interested in the age of an EC2 instance or a Lambda function? You’re being provided with a datetime string in iso format. Are you interested though in when an SQS Queue was created? Here, you have to make do with a timestamp in epoch time. While both can be worked with of course, you do need this contextual knowledge to do it. Except, of course, you’re using Resoto - because Resoto provides consistency for all of these issues.

## Tagging

We briefly touched on resource tagging before. If done diligently, tagging strategies can make a real difference to infrastructure sprawl. Tagging AWS Resources can follow a plethora of patterns though. “tag-resource”, “tag-queue”, “add-tags-to-resource”, “create-or-update-tags”, “update-tags-for-resource” et cetera, et cetera… the options are almost as numerous as the services. Do you have to provide the tags as an array or as a hashmap? Can you do multiple tags at once or is it one-by-one only? The workload of tagging existing resources can blow out of proportion really quickly because all the services do their own thing. At this point I’m sure you’re guessing it already: You don’t have to worry about any of this when you use Resoto to apply tags:

<table>
<thead>
  <tr>
    <th>Tagging in AWS CLI</th>
    <th>Tagging in Resoto</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><pre><code>aws ec2 create-tags –resources jenkins-master –tags Key=owner,Value=jenkins</code></pre></td>
    <td><pre><code>
    search is(aws_ec2_instance) and name = jenkins-master | tag update owner jenkins
    </code></pre></td>
  </tr>
  <tr>
    <td><pre><code>aws sqs tag-queue –queue-url https://sqs.us-west-2.amazonaws.com/123456789012/MyQueue –tags owner=jenkins</code></pre></td>
    <td><pre><code>search is(aws_sqs_queue) and sqs_queue_url = https://sqs.us-west-2.amazonaws.com/123456789012/MyQueue | tag update owner jenkins</code></pre></td>
  </tr>
</tbody>
</table>

## TL;DR

All of these examples are taken from our experiences implementing Resotos AWS collector. They caused all kinds of reactions from a weary smile to a full blown “WTF”. They all required us to dive deep into every detail of every response of any call. For anyone who needs to get meaningful data out of their resources, should all of this be necessary? Does everyone have to be aware of all these nuggets of niche knowledge? We think not! Exploring and maintaining cloud infrastructure should be way more straightforward and leave capacity to focus on actual problems. Resoto is [open source](https://github.com/someengineering/resoto/blob/main/LICENSE) and free to use, and currently supports [<abbr title="Amazon Web Services">AWS</abbr>](/docs/getting-started/configure-cloud-provider-access/aws), [<abbr title="Google Cloud Platform">GCP</abbr>](/docs/getting-started/configure-cloud-provider-access/gcp), and [DigitalOcean](/docs/getting-started/configure-cloud-provider-access/digitalocean). [Install Resoto](/docs/getting-started/install-resoto) today!
