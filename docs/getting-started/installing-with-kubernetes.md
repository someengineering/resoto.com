# Installing with Kubernetes

## Prerequisites

- Helm (version 3 and above)
- A Kubernetes cluster (kind or minikube should work as well)
- AWS or GCP credentials with proper permissions.

## Installation

1.  **Prepare ArangoDB database**

    If you don't have ArangoDB, you can use the operator to install it.
    See more info here: https://www.arangodb.com/docs/stable/tutorials-kubernetes.html

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
        users.grantDatabase('resoto', '$RESOTOCORE_GRAPHDB_DATABASE', 'rw');
    EOF
    ```

    Create the secret with the credentials:

    ```bash
    kubectl create secret generic resoto-graphdb-credentials --from-literal=password=$RESOTOCORE_GRAPHDB_PASSWORD
    ```

2.  **Create a Helm values file**

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

3.  **_(Optional)_ Configure cloud credentials**

    You can use Helm values `resotoworker.extraArgs`, `resotoworker.extraEnv`, `resotoworker.volumes`, and `resotoworker.volumeMounts` to inject credentials and their configuration to [`resotoworker`](../concepts/components/resotoworker.md).

    For example, for AWS and GCP, you would do the following:

    ```bash
    kubectl -n resoto create secret generic resoto-auth --from-file=GOOGLE_APPLICATION_CREDENTIALS=<PATH TO SERVICE ACCOUNT JSON CREDS> --from-literal=AWS_ACCESS_KEY_ID=<YOUR ACCESS KEY ID> --from-literal=AWS_SECRET_ACCESS_KEY=<YOUR ACCESS KEY>
    ```

    You could then use these values for [`resotoworker`](../concepts/components/resotoworker.md):

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

4.  **Install the Helm chart**

    Clone the [`someengineering/resoto`](https://github.com/someengineering/resoto) repository:

    ```bash
    git clone https://github.com/someengineering/resoto
    ```

    Next, install Resoto using Helm:

    ```bash
    helm install resoto ./resoto/kubernetes/chart --set image.tag=2.0.0a12 -f resoto-values.yaml
    ```

## Resoto CLI

[`resh`](../concepts/components/resh.md) is used to interact with [`resotocore`](../concepts/components/resotocore.md).

To access the Resoto shell interface, simply execute the following command:

```bash
resh
```

## Resoto Web UI

To access the Resoto web interface, navigate to [http://localhost:8900/ui](http://localhost:8900/ui) in your preferred web browser.
