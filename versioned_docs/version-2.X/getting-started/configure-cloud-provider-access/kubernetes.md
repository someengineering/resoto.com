---
sidebar_label: Kubernetes
---

# Configure Kubernetes Access

```mdx-code-block
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
```

The [Kubernetes](../../reference/data-models/kubernetes/index.md) collector is configured within the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs/index.md) in [Resoto Shell](../../reference/components/shell.md).

## Enabling the Collector

1. Open the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs) in [Resoto Shell](../../reference/components/shell):

   ```bash
   > config edit resoto.worker
   ```

2. Add `k8s` to the list of collectors by modifying the configuration as follows:

   ```yaml title="Resoto Worker configuration"
   resotoworker:
     ...
     # List of collectors to run
     collector:
   # highlight-next-line
       - 'k8s'
       ...
   ...
   ```

## Authentication

**You can authenticate with Kubernetes via kubeconfig files, manual configuration, or both.**

<Tabs>
<TabItem value="kubeconfig-files" label="kubeconfig Files">

**The easiest way to configure access to Kubernetes is to give Resoto Worker access to [kubeconfig files](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig).**

1. Move or copy your kubeconfig files to the `~/.kube` directory.

2. Make your kubeconfig file(s) available to Resoto at `/home/resoto/.kube`:

   <Tabs groupId="install-method">
   <TabItem value="docker" label="Docker">

   - Add volume definition(s) for each kubeconfig file to the `resotoworker` service in `docker-compose.yaml`:

     ```yaml title="docker-compose.yaml"
     services:
       ...
       resotoworker:
         image: somecr.io/someengineering/resotoworker:{{imageTag}}
         ...
     # highlight-start
         volumes:
           - $HOME/.kube:/home/resoto/.kube
     # highlight-end
       ...
     ...
     ```

   - Recreate the `resotoworker` container with the updated service definition:

     ```bash
     $ docker-compose up -d
     ```

     :::note

     [Docker Compose V2 integrated compose functions in to the Docker platform.](https://docs.docker.com/compose/#compose-v2-and-the-new-docker-compose-command)

     In Docker Compose V2, the command is `docker compose` (no hyphen) instead of `docker-compose`.

     :::

   </TabItem>
   <TabItem value="k8s" label="Kubernetes">

   - Create a secret with the path(s) to your kubeconfig file(s):

     ```bash
     $ kubectl -n resoto create secret generic kubernetes-auth \
       --from-file=config_1=<PATH TO kubeconfig FILE>
       --from-file=config_2=<PATH TO ANOTHER kubeconfig FILE>
     ```

   - Update `resoto-values.yaml` as follows:

     ```yaml title="resoto-values.yaml"
     ...
     resotoworker:
       ...
     # highlight-start
       volumeMounts:
         - mountPath: /home/resoto/.kube
           name: kubeconfig-files
       volumes:
         - name: kubeconfig-files
           secret:
             secretName: kubernetes-auth
     # highlight-end
     ...
     ```

   - Deploy these changes with Helm:

     ```bash
     $ helm upgrade resoto resoto/resoto --set image.tag={{imageTag}} -f resoto-values.yaml
     ```

   </TabItem>
   <TabItem value="pip" label="pip">

   - Simply move or copy your kubeconfig file(s) to the `~/.kube` directory. (Since Resoto is running on your local machine, it can access the file(s) directly.)

     :::note

     The following steps assume that the file(s) are named `config_1`, `config_2`, etc.

     :::

   </TabItem>
   </Tabs>

3. Open the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs) in [Resoto Shell](../../reference/components/shell):

   ```bash
   > config edit resoto.worker
   ```

4. Modify the `k8s` section of the configuration as follows, defining `path` and `contexts` for each file:

   ```yaml title="Resoto Worker configuration"
   resotoworker:
     ...
   ...
   k8s:
   # highlight-start
     config_files:
       - path: "/home/resoto/.kube/config_1"
         all_contexts: false
         contexts: ["context1", "context2"]
       - path: "/home/resoto/.kube/config_2"
         all_contexts: true
   # highlight-end
   ```

   :::info

   If a single [kubeconfig file](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig) holds multiple contexts, it is possible to restrict the contexts to be used by defining them explicitly. Setting `all_contexts` to `true` will not filter, resulting in taking all found contexts.

   :::

</TabItem>
<TabItem value="manual-configuration" label="Manual Configuration">

**Instead of exposing a [kubeconfig file](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig) to Resoto Worker, you can alternatively supply credentials manually.**

The required values can be found in the [kubeconfig file](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig):

| Option                       | kubeconfig Property                                                                                                 |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `server`                     | `clusters.cluster.server`                                                                                           |
| `token`                      | `users.user.token`                                                                                                  |
| `certificate_authority_data` | `clusters.cluster.certificate-authority-data`<br />(only required if the server is using a self-signed certificate) |

1. Open the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs) in [Resoto Shell](../../reference/components/shell):

   ```bash
   > config edit resoto.worker
   ```

2. Modify the `k8s` section of the configuration as follows:

   ```yaml title="Resoto Worker configuration"
   resotoworker:
     ...
   ...
   k8s:
   # highlight-start
     configs:
       - name: 'dev'
         certificate_authority_data: 'xxx'
         server: 'https://k8s-cluster-server.example.com'
         token: 'token'
   # highlight-end
   ```

   :::info

   Multiple k8s clusters can be defined by adding multiple sets of values.

   :::

</TabItem>
</Tabs>

## Resource Collection

By default, Resoto performs resource collection each hour. To immediately trigger a collect run, use the [`workflow run` command](../../reference/cli/action-commands/workflows/run.md) in [Resoto Shell](../../reference/components/shell):

```bash
> workflow run collect
```

Once the collect run completes, you can view a summary of collected Kubernetes resources using the following search:

```bash
> search is(kubernetes_resource) | count kind
```
