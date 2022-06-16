---
sidebar_label: Worker
---

# Configuring Resoto Worker

## Cloud Providers

### Amazon Web Services

<Tabs>
<TabItem value="environment" label="Environment">

Resoto supports all the authentication mechanisms described in the [boto3 SDK documentation](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html). To get started on a local machine [configure AWS CLI](https://aws.amazon.com/cli/) and volume mount e.g. `$HOME/.aws/` to `/home/resoto/.aws/` inside the `resotoworker` container. If your configuration contains multiple profiles make sure to set `AWS_PROFILE` for the `resotoworker` container.

[The shared credentials file](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html#shared-credentials-file) has a default location of `/home/resoto/.aws/credentials`. You can change the location of the shared credentials file by setting the `AWS_SHARED_CREDENTIALS_FILE` environment variable.

```ini title="Minimal example of the shared credentials file."
[default]
aws_access_key_id=foo
aws_secret_access_key=bar
aws_session_token=baz
```

Boto3 can also [load credentials from `/home/resoto/.aws/config`](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html#aws-config-file). You can change this default location by setting the `AWS_CONFIG_FILE` environment variable.

Next, modify the [Resoto Worker](../../concepts/components/worker.md) configuration as follows, making sure that `aws.access_key_id` and `aws.secret_access_key` are set to `null` (Resoto will fall back to loading credentials from the environment/home directory):

```yaml
resotoworker:
  [...]
  # List of collectors to run
  collector:
    - 'aws'
  [...]
aws:
  # AWS Access Key ID (null to load from env - recommended)
  access_key_id: null
  [...]
  # AWS Secret Access Key (null to load from env - recommended)
  secret_access_key: null
  [...]
[...]
```

:::note

Resoto is meant to run unattended on a server using a service account or instance profile. Resoto supports the same environment variables that the [AWS Command-Line Interface](https://aws.amazon.com/cli) does (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_SESSION_TOKEN`, `AWS_ROLE_ARN`, `AWS_WEB_IDENTITY_TOKEN_FILE`, `AWS_ROLE_SESSION_NAME`, etc.).

When using temporary credentials, however, they should be written to the `credentials` or `config` file and updated out-of-band instead of using environment variables, because the `resotoworker` process starts once and then runs forever (updated environment variables are only reflected upon restart).

You can specify a profile using `AWS_PROFILE` and for local testing SSO authentication would work as well. However when Resoto is running unattended in a production environment, SSO credentials that require opening a browser window would not work.

:::

</TabItem>
<TabItem value="instance-profile" label="Instance Profile">

First, [set up an instance profile](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html). Then, volume mount a file (or in Kubernetes, a secret) `/home/resoto/.aws/config` containing the role ARN and external ID into the `resotoworker` container.

```ini
[default]
region = us-west-2

role_arn = arn:aws:iam::235059640852:role/Cloudkeeper
external_id = a5eMybsyGIowimdZqpZWxxxxxxxxxxxx
credential_source = Ec2InstanceMetadata
```

Next, modify the [Resoto Worker](../../concepts/components/worker.md) configuration as follows, making sure that `aws.access_key_id` and `aws.secret_access_key` are set to `null`:

```yaml
resotoworker:
  [...]
  # List of collectors to run
  collector:
    - 'aws'
  [...]
aws:
  # AWS Access Key ID (null to load from env - recommended)
  access_key_id: null
  [...]
  # AWS Secret Access Key (null to load from env - recommended)
  secret_access_key: null
  [...]
[...]
```

</TabItem>
<TabItem value="access-key" label="Access Key">

:::note

Using a static access key is only recommended for testing.

:::

Modify the [Resoto Worker](../../concepts/components/worker.md) configuration as follows:

```yaml
resotoworker:
  [...]
  # List of collectors to run
  collector:
    - 'aws'
  [...]
aws:
  # AWS Access Key ID (null to load from env - recommended)
  access_key_id: 'AKIAZGZKXXXXXXXXXXXX'
  [...]
  # AWS Secret Access Key (null to load from env - recommended)
  secret_access_key: 'vO51EW/8ILMGrSBV/Ia9Fov6xZnKxxxxxxxxxxxx'
  [...]
[...]
```

</TabItem>
</Tabs>

### Google Cloud Platform

<Tabs>
<TabItem value="json" label="Service Account JSON Files">

Volume mount the service account JSON file to a path inside the `resotoworker` container (e.g., `/gcp`) and modify the [Resoto Worker](../../concepts/components/worker.md) configuration as follows:

```yaml
resotoworker:
  [...]
  # List of collectors to run
  collector:
    - 'gcp'
  [...]
gcp:
  [...]
  # GCP service account file(s)
  service_account:
    - '/gcp/gcp0.json'
    - '/gcp/gcp1.json'
  [...]
[...]
```

</TabItem>
<TabItem value="auto-discovery" label="Automatic Discovery">

Specify an empty string for the service account file, and Resoto will automatically discover the service account and all the projects it has access to.

Modify the [Resoto Worker](../../concepts/components/worker.md) configuration as follows:

```yaml
resotoworker:
  [...]
  # List of collectors to run
  collector:
    - 'gcp'
  [...]
gcp:
  [...]
  # GCP service account file(s)
  service_account:
    - ''
  [...]
[...]
```

</TabItem>
</Tabs>

### DigitalOcean

Modify the [Resoto Worker](../../concepts/components/worker.md) configuration as follows:

```yaml
resotoworker:
  [...]
  # List of collectors to run
  collector:
    - 'digitalocean'
  [...]
digitalocean:
  # DigitalOcean API tokens for the teams to be collected
  api_tokens:
    - 'dop_v1_e5c759260e6a43f003f3b53e2cfec79cxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  [...]
  # DigitalOcean Spaces access keys for the teams to be collected, separated by colons
  spaces_access_keys: []
[...]
```

:::note

As described [above](#overriding-individual-properties), instead of specifying the API tokens or secret access keys in the Resoto config directly, they can also be specified using Resoto Worker's `--override` flag or the `RESOTOWORKER_OVERRIDE` environment variable. This is useful for environments where the token might be stored as a secret in a system like [Vault](https://www.vaultproject.io/).

```bash title="Example"
RESOTOWORKER_OVERRIDE="digitalocean.api_tokens=dop_v1_e5c759260e6a43f003f3b53e2cfec79cxxxxxxxxxxxxxxxxxxxxxxxx"
```

:::

Once one or more cloud providers have been configured the `collect_and_cleanup` [workflow](../../concepts/automation/workflow.md) can be run by executing:

```bash
> workflow run collect_and_cleanup
```

### Kubernetes

The Kubernetes plugin is configured as part of the [Resoto Worker](../../concepts/components/worker.md) configuration. In ResotoShell you can [edit configuration](docs/getting-started/configuration#editing-configuration) via:

```bash title="Edit the Resoto Worker configuration"
> config edit resoto.worker
```

To enable the plugin, you need to add `k8s` to the list of collectors,

```yaml
resotoworker:
  collector:
    - 'k8s'
```

and then define access in the `k8s` section.

The plugin allows two methods to authenticate with Kubernetes either via kubeconfig files or direct configuration. Both config mechanisms can be mixed.

#### Access via kubeconfig files

This is the easiest way to configure access to Kubernetes. Resotoworker needs to have access to this file. If your installation makes it difficult to access the file, we recommend the [direct configuration](#define-access-directly) method.

```yaml
k8s:
  config_files:
    - path: "/path/to/kubeconfig"
      all_contexts: false
      contexts: ["context1", "context2"]
    - path: "/path/to/kubeconfig2"
      all_contexts: true
```

Multiple configuration files can be used. If one configuration file holds multiple contexts, it is possible to restrict the contexts to be used by specifying them. The easiest way is to set `all_contexts` to `true` which will not filter and take all contexts found.

#### Define access directly

The information provided in the kubeconfig file is defined here in the `configs` section directly. Following properties can be looked up in the kubeconfig file:

- name: user defined name of this cluster
- server: `clusters.cluster.server`
- token: `users.user.token`
- certificate-authority-data: `clusters.cluster.certificate-authority-data`. This property is only required, if the server is using a self-signed certificate.

```yaml
k8s:
  configs:
    - name: 'dev'
      certificate_authority_data: 'xxx'
      server: 'https://k8s-cluster-server.example.com'
      token: 'token'
```

Multiple k8s clusters can be defined.

#### Other config options

The kubernetes collector has a couple of other config options. They allow to fine tune the behaviour - it is safe to leave them as they are. Default options look like this:

```yaml
k8s:
  collect: []
  no_collect: []
  pool_size: 8
  fork_process: false
```

- `collect`: whitelist of resources to collect. Default: all resources get collected.
- `no_collect`: blacklist of resources to not collect. Default: no resource is blacklisted.
- `pool_size`: number of workers to use. Default: 8.
- `fork_process`: whether to fork a process for each worker or use a thread pool. Default: false.

Here is one complete configuration example:

```yaml
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
```

## Multi-Core Machines

Resoto resource collection speed depends heavily on the number of CPU cores available to the worker. When collecting hundreds of accounts, [Resoto Worker](../../concepts/components/worker.md) can easily saturate 64 cores or more.

The amount of RAM required depends on the number of resources in each account. As a rule of thumb, estimate 512 MB of RAM and 0.5 CPU cores per account concurrently collected, with a minimum of 4 cores and 16 GB for a production setup.

The following settings specify how many [Worker](../../concepts/components/worker.md) threads Resoto starts:

```yaml
resotoworker:
  [...]
  # How many cleanup threads to run in parallel
  cleanup_pool_size: 16
  [...]
  # Collector thread/process pool size
  pool_size: 5
  [...]
aws:
  [...]
  # Account thread/process pool size
  account_pool_size: 32
  [...]
  # Region thread pool size
  region_pool_size: 20
  [...]
gcp:
  [...]
  # GCP project thread/process pool size
  project_pool_size: 32
  [...]
[...]
```

The setting `resotoworker.pool_size` determines how many collectors (Amazon Web Services, Google Cloud Platform, DigitalOcean, Kubernetes, etc.) are run concurrently. `aws.account_pool_size` and `gcp.project_pool_size` are used to determine how many accounts or projects respectively are collected concurrently. Within Amazon Web Services, the setting `aws.region_pool_size` is used to determine how many regions per account are collected concurrently.
