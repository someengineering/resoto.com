---
sidebar_label: Amazon Web Services
pagination_prev: getting-started/index
pagination_next: getting-started/configure-cloud-provider-access/index
---

# Deploy Resoto to Amazon Web Services

We provide a <abbr title="Cloud Development Kit">CDK</abbr> construct to simplify the deployment of Resoto to AWS.

## Prerequisites

- [Git](https://git-scm.com)
- [<abbr title="Amazon Web Services">AWS</abbr>](https://aws.amazon.com) account with IAM role permissions
- [AWS command-line interface](https://aws.amazon.com/cli)
- [`kubectl` command-line tool](https://kubernetes.io/docs/reference/kubectl)
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
   | `MngInstanceType` | The instance type of the k8s managed node group               | `t3.large`        |

   :::

3. Confirm the deployment. This will trigger CDK to create an EKS cluster and install the [Resoto Helm chart](https://github.com/someengineering/helm-charts).

   :::info

   **The deployment will take approximately 30 minutes.** You can follow the progress in the terminal.

   Once deployment is complete, you will see output similar to the following:

   ```bash
   Outputs:
   ResotoEKS.ResotoEKSConfigCommandXXXX = aws eks update-kubeconfig ...
   ResotoEKS.ResotoPskSecret = kubectl get secrets ...
   ResotoEKS.ResotoUI = https://a3xxxxxx.us-east-1.elb.amazonaws.com:8900

   Stack ARN:
   arn:aws:cloudformation:us-east-1:115717706081:stack/ResotoEKS/e1b9e6a0-d5f6-11eb-8498-0a374cd00e27e
   ```

   :::

4. The value of `ResotoEKS.ResotoEKSConfigCommandXXXX` in **Outputs** is a command to configure `kubectl` to connect to the EKS cluster. Copy the command and paste it into your terminal.

## Launching the Web UI

1. The value of `ResotoEKS.ResotoUI` in **Outputs** is the URL for accessing Resoto UI. Copy the link into your browser.

   :::note

   The SSL certificate is self-signed, but you can safely ignore any browser warnings.

   :::

2. The UI requires a PSK token to authenticate. The value of `ResotoEKS.ResotoPskSecret` is the command to obtain this token. Copy the command and paste it into your terminal:

   ```bash
   $ kubectl get secrets resoto-psk -o jsonpath="{.data.psk}" | base64 -d
   ```

3. Copy the outputted token and paste it into the PSK field of Resoto UI.

4. Resoto UI will start and guide you through the configuration. If it is your first time starting Resoto UI, the setup wizard will appear and help you configure Resoto:

   ![Screenshot of Resoto UI](./img/resoto-ui.png)

## Launching the Command-Line Interface

The `resh` command is used to interact with [`resotocore`](../../concepts/components/core.md).

Simply execute the following to access the [Resoto Shell](../../concepts/components/shell.md) interface:

```bash
$ kubectl exec -it service/resoto-resotocore -- resh
```

![Screenshot of Resoto Shell](./img/resoto-shell.png)

## Removing the Resoto Deployment

To remove the Resoto deployment and all associated resources, run the following command in the terminal:

```bash
$ cdk destroy
```

:::warning

Removing the Resoto stack will also delete all data stored in the Resoto database.

:::
