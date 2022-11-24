---
sidebar_label: Kubernetes
pagination_prev: getting-started/install-resoto/index
pagination_next: getting-started/configure-cloud-provider-access/index
---

```mdx-code-block
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
```

# Install Resoto with Kubernetes

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


### Install Helm Chart (default installation)

<Tabs groupId="installation-method">
<TabItem value="default" label="Default Installation">

Add the Resoto Helm chart repository and install the chart.

```bash
$ helm repo add someengineering https://helm.some.engineering
$ helm repo update
$ helm install resoto someengineering/resoto --set image.tag={{imageTag}}
```

</TabItem>
<TabItem value="customized" label="Customized Installation">

It is possible to adjust the configuration of Resoto installation using a Helm values file.

Please find the list of all possible configuration values in the [`someengineering/helm-chart` values documentation.](https://github.com/someengineering/helm-charts/tree/main/someengineering/resoto#values).

To override any value, please create the file `resoto-values.yaml` and define the values there.

```yaml title="resoto-values.yaml  Example File."
resotoworker:
  volumeMounts:
    - mountPath: /home/resoto/.aws
      name: aws-credentials
  volumes:
    - name: aws-credentials
      secret:
        secretName: resoto-home
```

Add the Resoto Helm chart repository and install the chart with the configuration defined in the `resoto-values.yaml` file.

```bash
$ helm repo add someengineering https://helm.some.engineering
$ helm repo update
$ helm install resoto someengineering/resoto --set image.tag={{imageTag}} -f resoto-values.yaml
```

</TabItem>
</Tabs>


And just like that, you have Resoto running in a Kubernetes cluster! A collect run will begin automatically. This first collect usually takes less than 3 minutes.


## Launching the Resoto Command-Line Interface

The `resh` command is used to interact with [`resotocore`](../../concepts/components/core.md).

We need to first make sure that the deployment is available:

```bash
$ kubectl wait --for=condition=available deployment/resoto-resotocore
```

Then, simply execute the following to access the [Resoto Shell](../../concepts/components/shell.md) interface:

```bash
$ kubectl exec -it service/resoto-resotocore -- resh
```

![Resoto Shell](./img/resoto-shell.png)

## Accessing generated credentials

The helm chart stack generates a couple of secrets that are used by the components. Those credentials are stored in Kubernetes secrets as base64 encoded strings.

- `arango-user` - contains the ArangoDB user and password.
- `resoto-psk` - contains the pre-shared key used for communication between components.

The secrets can be obtained by running the following commands:

```bash
$ kubectl get secret arango-user -o jsonpath="{.data.password}" | base64 --decode
$ kubectl get secret resoto-psk -o jsonpath="{.data.psk}" | base64 --decode
```
