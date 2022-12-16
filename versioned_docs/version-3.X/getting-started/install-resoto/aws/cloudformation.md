---
sidebar_label: CloudFormation
sidebar_position: 1
pagination_prev: getting-started/install-resoto/index
pagination_next: getting-started/configure-cloud-provider-access/index
---

# Deploy Resoto with AWS CloudFormation

```mdx-code-block
import CloudFormationButton from '@site/src/components/CloudFormationButton';
```

The Resoto CloudFormation template is the easiest way to get a production-grade setup.

## Prerequisites

- [<abbr title="Amazon Web Services">AWS</abbr>](https://aws.amazon.com) account with IAM role permissions
- [`kubectl`](https://kubernetes.io/docs/reference/kubectl) command-line tool

## Deploying Resoto

1. Log into the [AWS Management Console](https://console.aws.amazon.com).

2. Click this button to open the **Quick create stack** page:

   <CloudFormationButton />

3. Configure the stack name, node type, and node count:

   ![Quick create stack form](./img/quick-create-form.png)

   :::note

   Resoto performs CPU-intensive graph operations. In a production setup, we recommend at least four cores and 16 gigabytes of RAM. See [Configuring Resoto Worker](../../../reference/configuration/worker.md#multi-core-machines) for more information.

   :::

4. Tick the checkboxes and click the orange **Create stack** button:

   ![Create stack button](./img/create-stack-button.png)

   This will trigger the CloudFormation stack creation. It will create an EKS cluster and install the [Resoto Helm chart](https://github.com/someengineering/helm-charts).

   :::info

   **The deployment will take approximately 30 minutes.** You can follow the progress in the CloudFormation console **Events** tab.

   :::

5. Once the stack creation is completed, open the **Outputs** tab of the CloudFormation stack.

   ![kubectl output command](./img/eks-cfn-output.png)

6. Copy the command with the key `ResotoEKSConfigCommandXXXX` and paste it into your terminal. This will configure your `kubectl` to connect to the EKS cluster. This requires the `aws` command line client to be installed and configured as well as the `kubectl` command line client.

## Launching the UI

1. Open the **Outputs** tab of the CloudFormation stack and look for the ResotoUI Key. Click on the link to open the UI. Please note: the certificate is self-signed and will not be trusted by your browser. You can safely ignore the warning.

2. The UI needs a PSK token to authenticate. You can find the command to obtain the token in the **Outputs** tab of the CloudFormation stack under the key `ResotoPskSecret`. Copy the command and paste it into your terminal.

   ```bash
   $ kubectl get secrets resoto-psk -o jsonpath="{.data.psk}" | base64 -d
   ```

3. Copy the token and paste it into the UI into the PSK field.

4. The Resoto UI is starting up and will guide you through the configuration.

![](./img/ui-ck-wizard.png)

## Launching the Command-Line Interface

The `resh` command is used to interact with [`resotocore`](../../../concepts/components/core.md).

Simply execute the following to access the [Resoto Shell](../../../concepts/components/shell.md) interface:

```bash
$ kubectl exec -it service/resoto-resotocore -- resh
```

![Resoto Shell](../img/resoto-shell.png)

## Removing the Resoto Deployment

To remove the Resoto deployment and all associated resources, you can delete the CloudFormation stack.

1. Open the CloudFormation console and select the stack you wish to delete:

   ![Delete Resoto stack](./img/delete-resoto-stack.png)

2. Click the **Delete** button at the top of the page.

:::warning

Removing the Resoto stack will also delete all data stored in the Resoto database.

:::
