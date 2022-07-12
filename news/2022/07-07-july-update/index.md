# July Update

```mdx-code-block
import Moment from 'react-moment';
import moment from 'moment/moment';
import 'moment-timezone';
```

Hello everyone, here's an update for July!

In June, we released [Resoto 2.3.2](/news/2022/06/24/v2.3.2). The key update that we shipped is a feature that a lot of users have asked for—[support for Kubernetes](#kubernetes-support)! 😎

## Configuration UI

Last month we introduced our new config system, with the ability to edit your Resoto configuration on the fly via Resoto Shell. Not everyone is comfortable working with the shell though, and so we added a new web-based UI.

## Kubernetes Support

So far, Resoto has worked out-of-the-box for the "native" cloud providers [AWS](/docs/getting-started/configure-cloud-provider-access/aws), [GCP](/docs/getting-started/configure-cloud-provider-access/gcp), and [DigitalOcean](/docs/getting-started/configure-cloud-provider-access/digitalocean). But our users have been telling us that they're not just running "bare metal" on these clouds. No surprise—most of them use Kubernetes for orchestration. You can now [point Resoto to your kubeconfig file](/docs/getting-started/configure-cloud-provider-access/kubernetes), with which Resoto will collect all available contexts.

:::note

Resoto's [unified data model](/docs/reference/data-models) still applies. Common Resoto types like `resource`, `instance`, and `volume` are still relevant with Kubernetes. We went "deep" on Kubernetes from day one, meaning we support the entire set of 100+ Kubernetes properties. Full-text search, piping commands, and performing jobs (like tag and cleanup) also work for Kubernetes.

:::

We think you will be delighted to use Resoto with Kubernetes. For more details, check out [Matthias' blog post](https://resoto.com/blog/2022/06/22/kubernetes-support).

## Nested Properties

To add [Kubernetes support](#kubernetes-support), we first had to build new capabilities into our data model. Nested properties is one such capability.

The first version of Resoto supported simple structures—think "a resource with a property." This simple structure unfortunately doesn't work well with the nested structures commonplace in Kubernetes. For example, one Kubernetes pod can contain multiple containers. Within each of those containers, you then have a long list of possible properties (from the 100+ mentioned above). Each of those nested properties can be accessed and used for filtering or information retrieval.

Resoto now supports arbitrary complex models with nested properties. We also made sure autocomplete in Resoto Shell works with complex models. You can (literally) navigate through nested properties as you type.

## Multi-Cloud Graph Edges

Another fundamental capability we launched with Kubernetes support is support for graph edges between different clouds.

Data collection and definition of resource dependencies within Resoto happens with cloud-specific collectors. Since collectors are cloud-specific, so far Resoto has only supported dependencies _within_ a cloud, not _between_ clouds.

Kubernetes resources are abstracted away from the underlying cloud provider. The Kubernetes collector knows nothing about AWS or EC2 instances, while the AWS collector only knows AWS services like EC2 and EKS. With multi-cloud edge support, Resoto can now track relationships between the two, creating the complete call graph for a view of the entire stack from ingress, via pod, deployment, k8s node, or compute instance down to the hardware.

This new feature provides insights across multi-cloud infrastructure. Since we see a lot of multi-cloud deployments in the enterprise, we will continue to extend our collectors to provide additional insights into relationships across clouds.

Read more about nested properties and multi-cloud graph edges in the [release notes](/news/2022/06/22/v2.3.1).
