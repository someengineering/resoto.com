---
authors: [nikita]
tags: [aws, cdk, installation]
---

# Resoto AWS CDK construct

We recently released a [AWS CDK construct](https://eu-central-1.console.aws.amazon.com/cloudformation/home?region=eu-central-1#/stacks/create/review?templateURL=https://resoto-cdk.s3.eu-central-1.amazonaws.com/Resoto_EKS.template&stackName=ResotoEKS), which simplifies the deployement of Resoto to AWS.

## Getting stared

The CDK construct is simple to start with. All you need is a recent version of Node.js (we tested it on 18.x.x) and installed git. If you don't have the Node.js intalled in your system, we can recomment using [nvm](https://github.com/nvm-sh/nvm).

Once you have Node.js installed, you can deploy the CDK construct with the following commands:

```bash
npm ci
npm run cdk deploy
```

It might be the case that the CDK will ask for the bootstrap stack. If that's the case, you can run the following command:

```bash
npm run cdk bootstrap
```

It is also possible to customize the deployment:

```bash
npm run cdk deploy -- --parameters ResotoTag=2.4.4 --parameters MngInstanceType=t3.large
```

The following parameters can be customized:

- `ResotoTag`: The tag of the Resoto image to use. The default value is 2.4.3.
- `MngMaxSize`: The maximum number of instances in the k8s managed node group. The default value is 3.
- `MngMinSize`: The minimum number of instances in the k8s managed node group. The default value is 1.
- `MngDesiredSize`: The desired number of instances in the k8s managed node group. The default value is 1.
- `MngInstanceType`: The instance type of the k8s managed node group. The default value is t3.medium.

## There is more

The CDK construct is just a starting point. Soon we will provide a one click install method for AWS, which will allow you to deploy Resoto in a single click. Stay tuned!
