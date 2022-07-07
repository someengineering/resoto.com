---
sidebar_label: Kubernetes
pagination_prev: getting-started/index
pagination_next: getting-started/configuring-resource-collection/index
---

# Installing Resoto with Kubernetes

[Kubernetes](https://kubernetes.io) is an open-source system for automating deployment, scaling, and management of containerized applications.

## Prerequisites

- [Helm](https://helm.sh) (version 3 or above)
- Kubernetes cluster ([kind](https://kind.sigs.k8s.io) or [minikube](https://minikube.sigs.k8s.io) should work as well)

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

See [`values.yaml`](https://github.com/someengineering/resoto/blob/main/kubernetes/chart/values.yaml) for a list of configurable values.

### Install Helm Chart

Clone the [`someengineering/resoto`](https://github.com/someengineering/resoto) repository:

```bash
$ git clone https://github.com/someengineering/resoto
```

Next, install Resoto using Helm:

```bash
$ helm install resoto ./resoto/kubernetes/chart --set image.tag={{latestRelease}} -f resoto-values.yaml
```

And just like that, you have Resoto running in Kubernetes! A collect run will begin automatically. This first collect usually takes less than 3 minutes.

## Launching the Resoto Command-Line Interface

The `resh` command is used to interact with [`resotocore`](../../concepts/components/core.md).

To access the [Resoto Shell](../../concepts/components/shell.md) interface, simply execute:

```bash
$ kubectl exec -it service/resoto-resotocore -- resh
```

### Configuring Resource Collection

Please refer to [Configuring Resource Collection](../configuring-resource-collection/index.md) for details on how to authenticate with supported cloud providers.

:::note

Some cloud providers like GCP provide a file to access resources. This file needs to be passed to the worker. You can use Helm values `resotoworker.volumes`, and `resotoworker.volumeMounts` to inject credentials and their configuration to [`resotoworker`](../../concepts/components/worker.md).

```bash
$ kubectl -n resoto create secret generic resoto-auth \
  --from-file=GOOGLE_APPLICATION_CREDENTIALS=<PATH TO SERVICE ACCOUNT JSON CREDS>
```

You would provide these values for [`resotoworker`](../../concepts/components/worker.md) as file:

```yaml
resotoworker:
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
```

Other providers like AWS provide environment variables to gain access, which can also be passed to the worker.

```bash
$ kubectl -n resoto create secret generic resoto-auth \
  --from-literal=AWS_ACCESS_KEY_ID=<YOUR ACCESS KEY ID> \
  --from-literal=AWS_SECRET_ACCESS_KEY=<YOUR ACCESS KEY>
```

```yaml
resotoworker:
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
```

:::

### Collecting Resources

Once one or more cloud providers have been configured, the `collect_and_cleanup` [workflow](../../concepts/automation/workflow.md) can be run by executing:

```bash
> workflow run collect_and_cleanup
```

No worries, no cleanup will be performed as cleanup is disabled by default. It is just the name of the [workflow](../../concepts/automation/workflow.md). See [Cleaning Resources](../cleaning-resources.md) for details on how to enable cleanup.

### Performing Searches

Once Resoto has completed its first collect run, you can try [performing some searches](../performing-searches.md).
