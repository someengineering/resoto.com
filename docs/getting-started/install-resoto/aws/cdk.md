---
sidebar_label: Cloud Development Kit
pagination_prev: getting-started/index
pagination_next: getting-started/configure-cloud-provider-access/index
---

# Deploy Resoto with <abbr title="Amazon Web Services">AWS</abbr> Cloud Development Kit

The Resoto Cloud Development Kit (CDK) construct gives more control over the setup than the [CloudFormation template](./cloudformation.md).

## Prerequisites

- [Git](https://git-scm.com)
- [<abbr title="Amazon Web Services">AWS</abbr>](https://aws.amazon.com) account with IAM role permissions
- [`kubectl`](https://kubernetes.io/docs/reference/kubectl) command-line tool
- [Node.js](https://nodejs.org)

## Deploying Resoto

1. Run the following commands in the terminal:

   ```bash
   $ git clone git@github.com:someengineering/resoto-cdk.git
   $ cd resoto-cdk
   $ npm ci
   ```

2. Then, deploy Resoto with the following command:

   ```bash
   $ npm run cdk deploy -- --parameters ResotoTag={{imageTag}}
   ```

   :::note

   If this is your first CDK deployment, you will need to bootstrap your AWS account. You can do so with the following command:

   ```bash
   $ npm run cdk bootstrap
   ```

   :::

   :::info

   It is possible to override the default CloudFormation parameter values:

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

   :::

3. Confirm the deployment. This will trigger CDK to create an EKS cluster and install the [Resoto Helm chart](https://github.com/someengineering/helm-charts).

   :::info

   **The deployment will take approximately 30 minutes.** You can follow the progress in the terminal.

   Once deployment is complete, you will see output similar to the following:

   ```bash
   Outputs:
   east-test-1.easttest1ClusterName8D8E5E5E = east-test-1
   east-test-1.easttest1ConfigCommand25ABB520 = aws eks update-kubeconfig --name east-test-1 --region us-east-1 --role-arn <ROLE_ARN>
   east-test-1.easttest1GetTokenCommand337FE3DD = aws eks get-token --cluster-name east-test-1 --region us-east-1 --role-arn <ROLE_ARN>

   Stack ARN:
   arn:aws:cloudformation:us-east-1:115717706081:stack/east-test-1/e1b9e6a0-d5f6-11eb-8498-0a374cd00e27e
   ```

   :::

4. Once the stack creation is completed, you need to configure access to the newly created EKS cluster. Open the **Outputs** tab of the CloudFormation stack and copy the value of the `resotoeksstackConfigCommand` key:

   ![kubectl output command](./img/eks-cfn-output.png)

5. Execute the copied command in the terminal.

## Launching the Command-Line Interface

The `resh` command is used to interact with [`resotocore`](../../../concepts/components/core.md).

Simply execute the following to access the [Resoto Shell](../../../concepts/components/shell.md) interface:

```bash
$ kubectl exec -it service/resoto-resotocore -- resh
```

![Resoto Shell](../img/resoto-shell.png)

## Removing the Resoto Deployment

To remove the Resoto deployment and all associated resources, run the following command in the terminal:

```bash
$ cdk destroy
```

:::warning

Removing the Resoto stack will also delete all data stored in the Resoto database.

:::
