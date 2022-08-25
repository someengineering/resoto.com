---
sidebar_label: Kubernetes
---

# Configure Kubernetes Access

The [Kubernetes](../../reference/data-models/kubernetes.md) collector is configured within the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](/docs/reference/cli/configs) in [Resoto Shell](/docs/concepts/components/shell):

```bash
> config edit resoto.worker
```

Add `k8s` to the list of collectors by modifying the configuration as follows:

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

You can authenticate with Kubernetes via [kubeconfig files](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig), [manual configuration](#manual-configuration), or both.

### kubeconfig Files

The easiest way to configure access to Kubernetes is to give Resoto Worker access to [kubeconfig files](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig).

Modify the [Resoto Worker configuration](../../reference/configuration/index.md) as follows:

```yaml title="Resoto Worker configuration"
resotoworker:
  ...
...
# highlight-start
k8s:
  config_files:
    - path: "/path/to/kubeconfig"
      all_contexts: false
      contexts: ["context1", "context2"]
    - path: "/path/to/kubeconfig2"
      all_contexts: true
# highlight-end
```

Multiple [kubeconfig files](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig) can be specified. If a single [kubeconfig file](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig) holds multiple contexts, it is possible to restrict the contexts to be used by defining them explicitly. Setting `all_contexts` to `true` will not filter, resulting in taking all found contexts.

### Manual Configuration

Instead of exposing a [kubeconfig file](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig) to Resoto Worker, you can alternatively supply the required credentials manually.

The required values can be found in the [kubeconfig file](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig):

| Option                       | kubeconfig Property                                                                                                              |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `server`                     | `clusters.cluster.server`                                                                                                        |
| `token`                      | `users.user.token`                                                                                                               |
| `certificate_authority_data` | `clusters.cluster.certificate-authority-data` (This property is only required if the server is using a self-signed certificate.) |

Modify the [Resoto Worker configuration](../../reference/configuration/index.md) as follows:

```yaml title="Resoto Worker configuration"
resotoworker:
  ...
...
# highlight-start
k8s:
  configs:
    - name: 'dev'
      certificate_authority_data: 'xxx'
      server: 'https://k8s-cluster-server.example.com'
      token: 'token'
# highlight-end
```

Multiple k8s clusters can be defined by adding multiple sets of values.

## Configuration

The Kubernetes collector has additional options that allow for fine-tuning of the collector's behavior:

```yaml title="Resoto Worker configuration"
resotoworker:
  ...
...
# highlight-start
k8s:
  collect: []
  no_collect: []
  pool_size: 8
  fork_process: false
# highlight-end
```

| Option         | Description                                                                                                 | Default Value |
| -------------- | ----------------------------------------------------------------------------------------------------------- | ------------- |
| `collect`      | List of resources to collect. (By default, all resources are collected.)                                    | []            |
| `no_collect`   | List of resources to ignore during collection. (By default, no resources are blocked from being collected.) | []            |
| `pool_size`    | Number of workers to utilize.                                                                               | `8`           |
| `fork_process` | Fork a process for each worker.                                                                             | `false`       |

:::tip Example

```yaml title="Resoto Worker configuration"
resotoworker:
  ...
...
# highlight-start
k8s:
  configs:
    - name: 'dev'
      certificate_authority_data: 'LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURKekNDQWcrZ0F3SUJBZ0lDQm5Vd0RRWUpLb1pJaHZjTkFRRUxCUUF3TXpFVk1CTUdBMVVFQ2hNTVJHbG4KYVhSaGJFOWpaV0Z1TVJvd0dBWURWUVFERXhGck9ITmhZWE1nUTJ4MWMzUmxjaUJEUVRBZUZ3MHlNVEV4TWpZeApNREl6TVRCYUZ3MDBNVEV4TWpZeE1ESXpNVEJhTURNeEZUQVRCZ05WQkFvVERFUnBaMmwwWVd4UFkyVmhiakVhCk1CZ0dBMVVFQXhNUmF6aHpZV0Z6SUVOc2RYTjBaWElnUTBFd2dnRWlNQTBHQ1NxR1NJYjNEUUVCQVFVQUE0SUIKRHdBd2dnRUtBb0lCQVFEY294aGhXeElEUi91MUJ6Z2ZsMmZkRkRxMkFnR0tkK3VGMVRRNTl6anZRYlNPa04xZApZQ2VoZXVFbHNrc3IreEtkZWZkRGdUTWZneXhOeUN5ZUVwVXE3WjlZMkVaTFBBbU9OR0ljWkN4aEN4NVlzRkxlCjQzK0UzaVArR1F5NVp5RzlDbzlYQzA5a0lmTzlUSEo3WFFEUTNCS3pyRUZNTVhuSm1MNE8xTlZFa1BGNmZTZzYKVFdRQ0xSazZLVEdaWVRYb2hoelgxUE5WVWNFS3hHZnM2NGRHVzAyblAyb0oxU0s2ZVoxSWp0L2hIMXljZ08xdgoyNytNYjdiT0RDMHJCbmZ4Z05qdDRGU2dXKzVad0tyWlVWaFZQQUN5ZENSWkRHallYeksrV2lWbWdBb2wrQ2RlCkFRQTFMR1IxdUNCMmFqZFRBdmZXdnBObDV6WHBkZit6UmZHZkFnTUJBQUdqUlRCRE1BNEdBMVVkRHdFQi93UUUKQXdJQmhqQVNCZ05WSFJNQkFmOEVDREFHQVFIL0FnRUFNQjBHQTFVZERnUVdCQlJVcDg4M040SHJiS1FRUElCdgpHMFhqOUlGZ2x6QU5CZ2txaGtpRzl3MEJBUXNGQUFPQ0FRRUF0ODB4TlhjTnZEekQ0MFRBK0JuUnRQNWxwTm5ICkJuZGJ5N0hlZUF4YmxvdVVEcGV1eWV0aGJiUW4zMFB4MldDVXVEampucjV4Sk5PU1VKWjRzY2RBOHJsai93LzQKSGRuWGM0L3JtZzN6WklwdStMZ2tyWU1PcHlRZ3dRZEFxSWVFQnFTVUJ5YTQwU25mTTJBWW9pNVQzQVVlSzJOOAozeUU0ZnYySW5nSDdGTUNLeDVzVFNEaTR4UklDNjVqS1NNeExhOEFsbjFEZTVIN0lwRTU3cGhFeHBaellURVRVCjljU0kyZmsxOW4zdjBycUVGM0duQjBqVUc2R1duZFBGN1lsY28xeVJRQ3RDVWxyUmxYaGJlOG96REtwTHd3MkYKanhXckQ4dmpreDM2OThBWlg0THlmOWo3YVFibzJnWllrSnkvck5YS0pCbUNQNjVQREZOL1dxV3FxZz09Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K'
      server: 'https://foo.k8s.ondigitalocean.com'
      token: '234cace23514e919601bb1797caca80xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  config_files:
    - path: "/path/to/kubeconfig"
      all_contexts: true
      contexts: [ ]
  collect: [ ]
  no_collect: [ ]
  pool_size: 8
  fork_process: false
# highlight-end
```

:::

## Resource Collection

By default, Resoto performs resource collection each hour. To immediately trigger a collect run, use the [`workflow run` command](../../reference/cli/workflows/run.md) in [Resoto Shell](../../concepts/components/shell):

```bash
> workflow run collect
```

Once the collect run completes, you can view a summary of collected Kubernetes resources using the following search:

```bash
> search is(kubernetes_resource) | count kind
```
