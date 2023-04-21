---
sidebar_label: Kubernetes
pagination_prev: getting-started/install-resoto/index
pagination_next: getting-started/configure-resoto/index
---

# Install Resoto with Kubernetes

```mdx-code-block
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
```

[Kubernetes](https://kubernetes.io) is an open-source system for automating deployment, scaling, and management of containerized applications.

## Prerequisites

- [Helm](https://helm.sh) (version 3 or above)
- Kubernetes cluster ([kind](https://kind.sigs.k8s.io) or [minikube](https://minikube.sigs.k8s.io) should work as well)
- At least 2 CPU cores and 8 GB of RAM

:::note

Resoto performs CPU-intensive graph operations. In a production setup, we recommend at least four cores and 16 gigabytes of RAM. See [Configuring Resoto Worker](../../reference/configuration/worker.md#multi-core-machines) for more information.

:::

## Installing Resoto

### Prepare ArangoDB operator

If you don't have ArangoDB, you can use the operator to install it. See more info [here](https://arangodb.com/docs/stable/tutorials-kubernetes.html).

You can use the following commands to install the operator:

```bash
$ helm repo add arangodb https://arangodb.github.io/kube-arangodb
$ helm repo update
$ helm install kube-arangodb-crd arangodb/kube-arangodb-crd
```

:::note

These instructions were tested with version 1.2.15 of the operator.

:::

### Install Helm Chart

<Tabs groupId="installation-method">
<TabItem value="default" label="Default Installation">

1. Add the [Some Engineering Helm chart repository](https://helm.some.engineering):

   ```bash
   $ helm repo add someengineering https://helm.some.engineering
   ```

2. Update cached chart information:

   ```bash
   $ helm repo update
   ```

3. And install the `resoto` chart:

   ```bash
   $ helm install resoto someengineering/resoto --set image.tag={{imageTag}}
   ```

</TabItem>
<TabItem value="customized" label="Customized Installation">

It is possible to customize your Resoto installation using a Helm values file.

1. Create a file `resoto-values.yaml` with the desired configuration:

   ```yaml title="resoto-values.yaml"
   resotoworker:
     volumeMounts:
       - mountPath: /home/resoto/.aws
         name: aws-credentials
     volumes:
       - name: aws-credentials
         secret:
           secretName: resoto-home
   ```

   :::info

   [Configurable values are documented in the Some Engineering Helm Chart Repository.](https://helm.some.engineering/someengineering/resoto#values)

   :::

2. Add the [Some Engineering Helm chart repository](https://helm.some.engineering):

   ```bash
   $ helm repo add someengineering https://helm.some.engineering
   ```

3. Update cached chart information:

   ```bash
   $ helm repo update
   ```

4. Install the `resoto` chart with the `resoto-values.yaml` file:

   ```bash
   $ helm install resoto someengineering/resoto --set image.tag={{imageTag}} -f resoto-values.yaml
   ```

</TabItem>
</Tabs>

And just like that, you have Resoto running in a Kubernetes cluster! A collect run will begin automatically. This first collect usually takes less than 3 minutes.

### Credentials

The Helm chart stack generates credentials used by Resoto's components.

These credentials are stored in [Kubernetes Secrets](https://kubernetes.io/docs/concepts/configuration/secret) as Base64-encoded strings:

| Secret        | Description                                                  | Output Command                                                                                     |
| ------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| `arango-user` | The ArangoDB user and password                               | <code>kubectl get secret arango-user -o jsonpath=\{.data.password\}" &#124; base64 --decode</code> |
| `resoto-psk`  | The pre-shared key used for communication between components | <code>kubectl get secret resoto-psk -o jsonpath=\{.data.psk\}" &#124; base64 --decode</code>       |

## Launching the Resoto Command-Line Interface

The `resh` command is used to interact with [`resotocore`](../../reference/components/core.md).

We need to first make sure that the deployment is available:

```bash
$ kubectl wait --for=condition=available deployment/resoto-resotocore
```

Then, simply execute the following to access the [Resoto Shell](../../reference/components/shell.md) interface:

```bash
$ kubectl exec -it service/resoto-resotocore -- resh
```

![Resoto Shell](./img/resoto-shell.png)

## Updating Resoto

1. List installed Helm charts:

   ```bash
   $ helm list
   ​NAME  	NAMESPACE	CHART       	APP VERSION
   ​resoto	resoto   	resoto-0.7.4	3.3.1
   ```

   :::note

   The `APP VERSION` column displays the currently installed version of Resoto.

   :::

2. Add the [Some Engineering Helm chart repository](https://helm.some.engineering):

   ```bash
   $ helm repo add someengineering https://helm.some.engineering
   ```

3. Update cached chart information:

   ```bash
   $ helm repo update
   ```

4. Upgrade the `resoto` chart:

   ```bash
   $ helm upgrade resoto someengineering/resoto --atomic --reuse-values --set image.tag={{imageTag}}
   ```
