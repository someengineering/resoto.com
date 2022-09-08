---
sidebar_label: Kubernetes
pagination_prev: getting-started/index
pagination_next: getting-started/configure-cloud-provider-access/index
---

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

### Prepare ArangoDB Database

If you don't have ArangoDB, you can use the operator to install it. See more info [here](https://arangodb.com/docs/stable/tutorials-kubernetes.html).

You can use the following commands to install the database:

```bash
$ helm repo add arangodb https://arangodb.github.io/kube-arangodb
$ helm repo update
$ helm install kube-arangodb-crd arangodb/kube-arangodb-crd
$ helm install kube-arangodb arangodb/kube-arangodb

$ kubectl apply -f - <<EOF
apiVersion: "database.arangodb.com/v1alpha"
kind: "ArangoDeployment"
metadata:
  name: "single-server"
spec:
  mode: Single
  tls:
    caSecretName: None
EOF
```

:::note

These instructions were tested with version 1.2.8 of the operator.

:::

Wait until the ArangoDB deployment is ready. You can check the conditions in the status to see that it is ready:

```bash
$ kubectl wait --for=condition=ready arangodeployment/single-server
```

### Create Helm Values File

```yaml title="resoto-values.yaml"
resotocore:
  graphdb:
    server: http://single-server:8529
```

This is the minimum configuration, which points to an empty ArangoDB database with default username and password.

The installation will create a separate database and password and secure the database installation with a generated password. You can find the generated database password in the secret `arango-user`.

See the [`someengineering/helm-chart` GitHub repository](https://github.com/someengineering/helm-charts/tree/main/charts/resoto) for a list of configurable values.

:::note

Some cloud providers (e.g., [Google Cloud Platform](../configure-cloud-provider-access/gcp.md)) provide a file for authentication. You can use Helm values `resotoworker.volumes`, and `resotoworker.volumeMounts` to inject credentials and their configuration to [Resoto Worker](../../concepts/components/worker.md):

```bash
$ kubectl -n resoto create secret generic resoto-auth \
  --from-file=GOOGLE_APPLICATION_CREDENTIALS=<path to JSON credentials file>
```

Then, update the [Resoto Worker configuration](../../reference/configuration/index.md) as follows:

```yaml
resotoworker:
# highlight-start
  volumeMounts:
    - mountPath: /etc/tokens/
      name: auth-secret
  volumes:
    - name: auth-secret
      secret:
        secretName: resoto-auth
        items:
          - key: GOOGLE_APPLICATION_CREDENTIALS
            path: gcp-service-account.json
# highlight-end
```

Other cloud providers (e.g., [Amazon Web Services](../configure-cloud-provider-access/aws.md)) may use environment variables for authentication:

```bash
$ kubectl -n resoto create secret generic resoto-auth \
  --from-literal=AWS_ACCESS_KEY_ID=<YOUR ACCESS KEY ID> \
  --from-literal=AWS_SECRET_ACCESS_KEY=<YOUR ACCESS KEY>
```

In this case, we would update the [Resoto Worker configuration](../../reference/configuration/index.md) as follows:

```yaml
resotoworker:
# highlight-start
  extraEnv:
    - name: AWS_ACCESS_KEY_ID
      valueFrom:
        secretKeyRef:
          name: resoto-auth
          key: AWS_ACCESS_KEY_ID
    - name: AWS_SECRET_ACCESS_KEY
      valueFrom:
        secretKeyRef:
          name: resoto-auth
          key: AWS_SECRET_ACCESS_KEY
# highlight-end
```

:::

### Install Helm Chart

Add the Resoto Helm chart repository:

```bash
$ helm repo add resoto https://helm.resoto.com
```

Next, install Resoto using Helm:

```bash
$ helm install resoto resoto/resoto --set image.tag={{imageTag}} -f resoto-values.yaml
```

And just like that, you have Resoto running in a Kubernetes cluster! A collect run will begin automatically. This first collect usually takes less than 3 minutes.

## Launching the Resoto Command-Line Interface

The `resh` command is used to interact with [`resotocore`](../../concepts/components/core.md).

To access the [Resoto Shell](../../concepts/components/shell.md) interface, simply execute:

```bash
$ kubectl exec -it service/resoto-resotocore -- resh
```

![Resoto Shell](./img/resoto-shell.png)
