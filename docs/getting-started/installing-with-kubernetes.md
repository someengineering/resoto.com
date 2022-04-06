---
sidebar_position: 2
pagination_prev: getting-started/index
pagination_next: getting-started/configuring-resoto
---

# Installing with Kubernetes

## Prerequisites

- [Helm](https://helm.sh) (version 3 or above)
- Kubernetes cluster ([kind](https://kind.sigs.k8s.io) or [minikube](https://minikube.sigs.k8s.io) should work as well)
- AWS or GCP credentials

## Installing Resoto

### Prepare ArangoDB Database

If you don't have ArangoDB, you can use the operator to install it. See more info here: https://www.arangodb.com/docs/stable/tutorials-kubernetes.html

You can use the following commands to install the DB, but do note that this is not a production-ready setup:

```bash
helm repo add arangodb https://arangodb.github.io/kube-arangodb
helm repo update
helm install kube-arangodb-crd arangodb/kube-arangodb-crd
helm install kube-arangodb arangodb/kube-arangodb

kubectl apply -f - <<EOF
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

These instructuions were tested with version 1.2.4 of the operator.

:::

Wait until the the ArangoDB deployment is ready. You can check the conditions in the status to see that it is ready:

```bash
kubectl get arangodeployment single-server -o yaml
```

Set up a database and password:

```bash
RESOTOCORE_GRAPHDB_PASSWORD=$(head -c 1500 /dev/urandom | tr -dc 'a-zA-Z0-9' | cut -c -32)
POD=$(kubectl get pods --selector=arango_deployment=single-server -o jsonpath="{.items[0].metadata.name}")
kubectl exec -i ${POD} -- arangosh --console.history false --server.password "" <<EOF
    const users = require('@arangodb/users');
    users.save('resoto', '$RESOTOCORE_GRAPHDB_PASSWORD');
    db._createDatabase('resoto');
    users.grantDatabase('resoto', 'resoto', 'rw');
EOF
```

Create the secret with the credentials:

```bash
kubectl create secret generic resoto-graphdb-credentials --from-literal=password=$RESOTOCORE_GRAPHDB_PASSWORD
```

### Create Helm Values File

```yml title="resoto-values.yml"
resotocore:
  graphdb:
    server: http://single-server:8529
    login: resoto
    database: resoto
    passwordSecret:
      name: resoto-graphdb-credentials
      key: password
# add your stuff here:
resotoworker:
  extraArgs:
    - --fork
  collector: example
```

See [`kubernetes/chart/values.yaml`](https://github.com/someengineering/resoto/blob/main/kubernetes/chart/values.yaml) for a list of configurable values.

### Configure Cloud Credentials (optional)

You can use Helm values `resotoworker.extraArgs`, `resotoworker.extraEnv`, `resotoworker.volumes`, and `resotoworker.volumeMounts` to inject credentials and their configuration to [`resotoworker`](../concepts/components/worker.md).

For example, for AWS and GCP, you would do the following:

```bash
kubectl -n resoto create secret generic resoto-auth \
  --from-file=GOOGLE_APPLICATION_CREDENTIALS=<PATH TO SERVICE ACCOUNT JSON CREDS> \
  --from-literal=AWS_ACCESS_KEY_ID=<YOUR ACCESS KEY ID> \
  --from-literal=AWS_SECRET_ACCESS_KEY=<YOUR ACCESS KEY>
```

You could then use these values for [`resotoworker`](../concepts/components/worker.md):

```yml
resotocore:
  graphdb:
    server: http://single-server:8529
    login: resoto
    passwordSecret:
      name: resoto-graphdb-credentials
      key: password
resotoworker:
  collector: aws gcp
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
  extraArgs:
    - --fork
    - --gcp-service-account
    - /etc/tokens/gcp-service-account.json
    - '--aws-fork'
    - '--gcp-fork'
    - '--aws-account-pool-size'
    - '4'
    - '--gcp-project-pool-size'
    - '4'
```

### Install Helm Chart

Clone the [`someengineering/resoto`](https://github.com/someengineering/resoto) repository:

```bash
git clone https://github.com/someengineering/resoto
```

Next, install Resoto using Helm:

```bash
helm install resoto ./resoto/kubernetes/chart --set image.tag={{latestRelease}} -f resoto-values.yaml
```

And just like that, you have Resoto running in Kubernetes! A collect run will begin automatically. This first collect usually takes about 5 to 10 minutes, but the time is dependent on the size of your AWS account.

## Launching the Resoto Command-Line Interface

The `resh` command is used to interact with [`resotocore`](../concepts/components/core.md).

To access the [Resoto Shell](../concepts/components/shell.md) interface, simply execute:

```bash
kubectl exec -it <pod_name> -- resh
```

### Configuring Resoto

Once the [Core](../concepts/components/core.md) is running, all component configuration can be edited using the [`config edit` command](../reference/cli/configs/edit.md) inside [Resoto Shell](../concepts/components/shell.md).

Additionally, configuration properties can be overridden using the `--override` CLI flag or the appropriate `<COMPONENT_NAME>_OVERRIDE` environment variable.

Please refer to the [Configuring Resoto](./configuring-resoto.md) tutorial for more details.

:::note

By default, Resoto collects [anonymous statistics](../reference/telemetry.md) about how the product is used. However, this telemetry can be [disabled](../reference/telemetry.md#disabling) by setting the `resotocore.runtime.analytics_opt_out=true` config variable.

```bash
> config set resoto.core resotocore.runtime.analytics_opt_out=true
```

:::

### Performing Searches

Once Resoto has completed its first collect run, you can try [performing some searches](./performing-searches.md).
