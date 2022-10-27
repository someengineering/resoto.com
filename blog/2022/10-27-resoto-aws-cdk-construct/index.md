---
authors: [nikita]
tags: [aws, cdk, cloudformation, deployment]
---

# Resoto AWS CDK Construct

**We recently released the Resoto [<abbr title="Amazon Web Services">AWS</abbr> <abbr title="Cloud Development Kit">CDK</abbr> construct](/docs/getting-started/install-resoto/aws/cdk), which simplifies the deployment of Resoto to AWS.**

We also offer a [CloudFormation template](/docs/getting-started/install-resoto/aws/cloudformation), which is the easiest way to get a production-grade setup. The [CDK construct](/docs/getting-started/install-resoto/aws/cdk) is a bit more involved, but gives you more control over the setup.

The CDK construct pretty simple. All you need is a recent version of [Node.js](https://nodejs.org) (we tested with 18.x.x) and [Git](https://git-scm.com). If you don't already have [Node.js](https://nodejs.org) installed, we recommend using [Node Version Manager (`nvm`)](https://github.com/nvm-sh/nvm).

<!--truncate-->

Once you have [Node.js](https://nodejs.org) and [Git](https://git-scm.com), you can deploy the Resoto CDK construct with just the following commands:

```bash
$ git clone git@github.com:someengineering/resoto-cdk.git
$ cd resoto-cdk
$ npm ci
$ npm run cdk deploy -- --parameters ResotoTag={{imageTag}}
```

:::note

If this is your first CDK deployment, you will need to bootstrap your AWS account. You can do so with the following command:

```bash
$ npm run cdk bootstrap
```

:::

It is also possible to customize the deployment by overriding the default CloudFormation parameter values:

```bash
$ npm run cdk deploy -- --parameters ResotoTag={{imageTag}} --parameters MngInstanceType=t3.large
```

| Parameter         | Description                                                   | Default Value     |
| ----------------- | ------------------------------------------------------------- | ----------------- |
| `ResotoTag`       | The Resoto image tag to use                                   | <LatestRelease /> |
| `MngMaxSize`      | The maximum number of instances in the k8s managed node group | `3`               |
| `MngMinSize`      | The minimum number of instances in the k8s managed node group | `1`               |
| `MngDesiredSize`  | The desired number of instances in the k8s managed node group | `1`               |
| `MngInstanceType` | The instance type of the k8s managed node group               | `t3.medium`       |

We hope that the Resoto [<abbr title="Amazon Web Services">AWS</abbr> <abbr title="Cloud Development Kit">CDK</abbr> construct](/docs/getting-started/install-resoto/aws/cdk) makes it easier to get started with Resoto!

## Further Reading

- [Deploy Resoto with <abbr title="Amazon Web Services">AWS</abbr> CloudFormation](/docs/getting-started/install-resoto/aws/cloudformation)
- [Deploy Resoto with <abbr title="Amazon Web Services">AWS</abbr> Cloud Development Kit](/docs/getting-started/install-resoto/aws/cdk)
