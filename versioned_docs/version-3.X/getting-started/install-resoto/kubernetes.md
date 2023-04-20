---
sidebar_label: Kubernetes
pagination_prev: getting-started/install-resoto/index
pagination_next: getting-started/launch-resoto/index
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

3. Install the `resoto` chart:

   ```bash
   $ helm install resoto someengineering/resoto --set image.tag={{imageTag}}
   ```

</TabItem>
<TabItem value="customized" label="Customized Installation">

It is possible to customize your Resoto installation using a Helm values file.

1. Create a file `resoto-values.yaml` with the desired configuration:

   ```yaml title="Example configuration that mounts AWS credentials from a Kubernetes Secret"
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

   [Configurable values are documented in the Some Engineering Helm Chart Repository.](https://github.com/someengineering/helm-charts/blob/main/someengineering/resoto/README.md#values)

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

| Secret        | Description                                                  | Output Command                                                                    |
| ------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| `arango-user` | The ArangoDB user and password                               | `kubectl get secret arango-user -o jsonpath="{.data.password}" | base64 --decode` |
| `resoto-psk`  | The pre-shared key used for communication between components | `kubectl get secret resoto-psk -o jsonpath="{.data.psk}" | base64 --decode`       |

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
