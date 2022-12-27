---
authors: [matthias]
tags: [cloud, history]
image: ./img/banner-social.svg
---

# What we can learn from history

> "A generation which ignores history has no past – and no future."<br/> -- Robert A. Heinlein

While this is definitely true for human history, there is also some truth that applies to the state of a cloud infrastructure: most of the time we care for the current snapshot of resources, but sometimes we want to know where a resource is coming from, when it has been deleted or when it has been updated at which point in time to which configuration. Having such knowledge is great in situations where you need to understand the order of changes to understand a specific system behaviour.

![](./img/banner.svg)

<!-- truncate -->

## Why history matters

Think of a post-mortem that tries to analyze why a specific outage happened to the application we maintain. For this analysis we need to understand how cloud resources might have changed over time, yielding the behaviour that we saw in our application. Without the ability to review a change log this becomes impossible.

If you want to understand spikes in your cloud billing dashboard, you need to understand which resources have been created when and by whom. In this case you do not only want to be able to review all changes, but also to be able to filter, group and sort them by different criteria as well as aggregate them to get a better understanding of the overall picture.

If you want to check for security issues or compliance violations you would be able to reduce the amount of work to only those resources that have been created or updated. Even complex checks can be managed in large infrastructures, since the checks get applied only to the changed but not all resources.

Last but not least, you can think of history as a log of events that defines the infrastructure that you maintain. You want to keep this event log to be able to answer any question in the future retrospectively for the state of your infrastructure at any specific point in time. This is especially important for questions you will have tomorrow that you cannot even think of today.

## Existing capabilities of cloud providers

Without Resoto you rely on your cloud provider to give you this kind of information. Most cloud providers offer tools yielding some (hopefully) helpful information:

- AWS offers [Cloud Trail](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html). It positions itself like this:
  > A service that helps you enable operational and risk auditing, governance, and compliance of your AWS account. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Events include actions taken in the AWS Management Console, AWS Command Line Interface, and AWS SDKs and APIs.
- GCP offers [Cloud Audit Logs](https://cloud.google.com/logging/docs/audit). The description looks like this:
  > Writes audit logs that record administrative activities and accesses within your Google Cloud resources. Audit logs help you answer "who did what, where, and when?"
- If you have deployed your workload in Kubernetes, then there is no simple way to track the history of your definitions. Some resources like the Kubernetes deployment maintain a list of [revisions](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#checking-rollout-history-of-a-deployment), but this is not the case for all resources. There is no option out of the box to combine the list of changes inside Kubernetes together with the changes of the cloud infrastructure your Kubernetes cluster is running on.

All the existing tools give you some insights into when a resource has been changed by whom. If our application is spread across different accounts and regions, you will have a hard time to gather the data. If you run your cloud resources in a Kubernetes cluster the cloud providers will not help you at all, which means even more manual work. If you want to know how a resource configuration was defined at a specific moment in time, only Kubernetes Deployments might have an answer eventually based on the configured resource limit.

Cloud providers do not give you a complete picture of the history of a cloud infrastructure (across accounts and regions). They can not show a resource configuration at a specific point in time, and they completely ignore resources maintained in Kubernetes.

## Meet Resoto history

Resoto maintains all your resources in an asset inventory. It scrapes your infrastructure continuously, and knows the configuration of any resource that is collected. Whenever the state of such a resource is identified as a change, the internal representation of this resource is updated. This change is captured as event in Resoto and stored inside the database. You can see the general idea in the following diagram:

![History Events](./img/history-events.svg)

Since this mechanism does not rely on any mechanism provided by the cloud provider but purely on the collected snapshot data, we can offer the same functionality for all cloud providers the same way. This means that you can use the same tool to get the history of your resources, no matter where they are running.

Every resource change falls into the three categories:

- `created` event: happens only once for any single resource when the resource gets created. Payload data is the configuration of the created resource.
- `updated` event: can happen zero, one or multiple times and happens every time the resource changes. Payload data is the configuration of the updated resource.
- `deleted` event: happens only once for any single resource when the resource gets deleted. Payload of the data is the configuration of the resource before it gets deleted.

It is possible to filter the list of events by event-type and time of change.

Let us see this in action. The command in Resoto to access the history is called `history`. The simplest version of history can be invoked by defining the type and the time of change. The result will be a list of all matching changes for all cloud providers in all accounts and all regions.

```bash title="List all reasource that have been deleted between 2022-12-02 and 2022-12-09"
> history --change node_deleted --after 2022-12-02 --before 2022-12-09
# highlight-start
​change=node_deleted, changed_at=2022-12-03T16:02:17Z, kind=aws_iam_role, name=resoto-eks-stack, cloud=aws, account=prod, region=global
​change=node_deleted, changed_at=2022-12-04T16:02:17Z, kind=aws_vpc, name=eks-stack-vpc, cloud=aws, account=dev, region=eu-central-1
​change=node_deleted, changed_at=2022-12-07T16:37:12Z, kind=kubernetes_pod, name=resotocore, cloud=k8s, account=resoto, region=default
# highlight-end
```

Here we defined the absolute time for `before` and `after`. It is also possible to use relative time by defining durations, e.g. `2d` (2 days), `4h` (4 hours), `6m` (6 minutes) which can also be combined to something like `2d4h6m` (2 days and 4 hours and 6 minutes). We can use durations instead of absolute time to define the time of change, where the duration is subtracted from the current time.

```bash title="List all reasource that have been deleted in the last 3 days"
> history --change node_deleted --after 3d
# highlight-start
​change=node_deleted, changed_at=2022-12-07T16:37:12Z, kind=kubernetes_pod, name=resotocore, cloud=k8s, account=resoto, region=default
# highlight-end
```

If we want to know how the configuration was defined at the moment of deletion, we can pipe the result into the [`dump`](/docs/reference/cli/format-commands/dump) command. Since the complete configuration is part of any event, we can use this approach for any event, no matter which type of event or which time the resource changed.

```bash title="Show the last known configuration of resources that have been deleted"
> history --change node_deleted --after 3d | dump
# highlight-start
​id: '4836788'
​reported:
​  id: b9a2ca84-399c-4716-8f1e-3ab47a4f89d4
​  tags:
​    kubectl.kubernetes.io/restartedAt: '2022-12-01T23:33:14+01:00'
​  name: resoto-resotocore-5ff798987-wj7cp
​  ctime: '2022-12-01T22:33:17Z'
​  resource_version: '39787763'
​  namespace: default
​  labels:
​    app.kubernetes.io/instance: resoto
​    app.kubernetes.io/name: resoto
​    pod-template-hash: 5ff798987
​    resoto: core
​  pod_spec:
​  --- cutted for brevity ---
# highlight-end
```

Resoto comes with a powerful search DSL that allows filtering the resources that we maintain. The history command understands the same search syntax and can be used to filter the resulting list of changes even further. Let's filter the list of changes to only see resources of kind Kubernetes deployment that have the name `core` in their name:

```bash title="List all changes to the k8s deployment of core after 2022-12-02"
> history --after 2022-12-02 is(kubernetes_deployment) and name~core
# highlight-start
change=node_updated, changed_at=2022-12-02T16:37:12Z, kind=kubernetes_deployment, name=resoto-resotocore, cloud=k8s, account=resoto, region=default
change=node_updated, changed_at=2022-12-04T00:02:21Z, kind=kubernetes_deployment, name=coredns, cloud=k8s, account=posthog, region=kube-system
# highlight-end
```

You can not only filter the result, but also use any other command that is provided by Resoto, including `count` and `aggregation`. Let's assume we want to know which resource kinds have changed the most in the last week:

```bash title="Which resource kinds have changed the most in the last week"
> history --after 7d | count kind
# highlight-start
​aws_iam_access_key: 96
​aws_ec2_volume: 141
​kubernetes_endpoint: 182
​aws_iam_role: 285
​kubernetes_node: 450
​kubernetes_config_map: 720
​total matched: 1874
​total unmatched: 0
# highlight-end
```

It is also interesting to count the number of changes based on the type of change. Let's see how many resources have been created, updated or deleted in the last week:

```bash title="How many resources have been created, updated or deleted in the last week"
> history --after 7d | count /change
# highlight-start
​node_updated: 412
​node_deleted: 480
​node_created: 982
​total matched: 1874
​total unmatched: 0
# highlight-end
```

Let us take the same changes again but this time aggregate the data by the owner of the resource and the kind of change. We assume that you have a proper tag policy in place, so that an owner of a resource can be identified by the owner tag. We will see which owner did the most changes and which kind of changes they did.

```bash title="Count the number of changes by owner in the last week"
> history --after 7d | aggregate tags.owner, /change: sum(1) as count
# highlight-start
​count: 132
​group:
​  owner: team-cumulus
​  change: node_updated
​---
​count: 637
​group:
​  owner: team-stratos
​  change: node_created
​---
​count: 81
​group:
​  owner: team-cumulus
​  change: node_created
​---
​count: 12
​group:
​  owner: team-cirrus
​  change: node_updated
​--- cutted for brevity ---
# highlight-end
```

## Future plans

We hope this feature is already useful for you. We are planning to extend the capabilities of the history feature in several ways. The straight forward extension is providing a diff view that shows exactly what has changed between two resource configurations. This way you would not only see what has changed plus the final configuration, but also the delta between the two configurations.

The other more involved feature is the ability to provide a complete snapshot of the state of your infrastructure at a specific point in time. We would love to hear from you, if this is something you would like to see in Resoto. Please join our [Discord](https://discord.gg/someengineering) and let us know what you think.

## Conclusion

If you need more insights into who is changing your infrastructure, when, to which configuration across clouds, accounts, regions, Resoto is the right tool for you. Resoto is a free and open source tool that is available on [GitHub](https://github.com/someengineering/resoto). Please find installation instructions, tutorials and more in our [documentation](https://resoto.com).