---
sidebar_position: 3
pagination_prev: getting-started/index
pagination_next: getting-started/performing-searches
---

# Configuring Resoto

```mdx-code-block
import LatestRelease from '@site/src/components/LatestRelease';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
```

Resoto uses an internal configuration system to configure all [components](../concepts/components/index.md). Configuration is maintained within [Resoto Core](../concepts/components/core.md) and can be edited using [Resoto Shell (`resh`)](../concepts/components/shell.md) using the [`config edit` command](../reference/cli/configs/edit.md).

:::note

In the code blocks below, `$` at the beginning of a line denotes that a command is to be run on the normal shell (Bash, Zsh, etc.).

Lines beginning with `>` should be executed inside [Resoto Shell (`resh`)](../concepts/components/shell.md).

:::

## Listing Configurations

```bash title="Start the Resoto Shell, e.g."
$ resh --psk changeme --resotocore-uri https://resotocore.resoto.svc.cluster.local:8900
```

<sub>Adjust PSK and Resoto Core URI to local values!</sub>

```bash title="List all available configurations"
> configs list
```

Resoto automatically creates the following configurations by default:

- `resoto.core`
- `resoto.core.commands`
- `resoto.worker`
- `resoto.metrics`

## Editing Configuration

```title="Edit the Resoto Worker configuration"
> config edit resoto.worker
```

Upon execution of the above command, [Resoto Shell](../concepts/components/shell.md) presents the specified configuration in [YAML format](https://yaml.org) using the local text editor as defined by the `EDITOR` environment variable.

```yml title="Example Resoto Worker configuration"
resotoworker:
  # Enable cleanup of resources
  cleanup: false
  # Do not actually cleanup resources, just create log messages
  cleanup_dry_run: true
  # How many cleanup threads to run in parallel
  cleanup_pool_size: 16
  # List of collectors to run
  collector:
    - aws
    - gcp
    - k8s
  # Dump the generated JSON data to disk
  debug_dump_json: false
  # Use forked process instead of threads
  fork_process: true
  # Name of the graph to import data into and run searches on
  graph: resoto
  # Resource kind to merge graph at (cloud or account)
  graph_merge_kind: cloud
  # Collector thread/process pool size
  pool_size: 5
  # Directory to create temporary files in
  tempdir: null
  # Collection/cleanup timeout in seconds
  timeout: 10800
  # IP address to bind the web server to
  web_host: '::'
  # Web root in browser (change if running behind an ingress proxy)
  web_path: /
  # Web server tcp port to listen on
  web_port: 9956
  ...
...
```

:::note

While the configuration is presented in [YAML format](https://yaml.org) for easy editing, all configuration is stored within Resoto's database in a data structure following a strictly typed model.

This means that you will get an error if, for instance, you attempt to set the value of `resotoworker.pool_size` to `foobar`, because `pool_size` is of type `int`.

:::

## Setting Individual Properties

Instead of editing a component's configuration in a text editor, it is also possible to set the values of specific properties using the [`config set` command](../reference/cli/configs/set.md).

```title="Modify a specific property of the Resoto Worker configuration"
> config set resoto.worker resotoworker.pool_size=5
```

## Overriding Individual Properties

Resoto also has support for overriding configuration. Overrides allow for values like passwords, credentials, and API keys to be retrieved from a secure credential store and passed into the environment, rather than being stored as plain text inside Resoto's database.

There are two ways to overriding configuration properties:

- `--override` flag

  ```bash
  $ resotoworker --override resotoworker.pool_size=5 resotoworker.cleanup_pool_size=20
  ```

- `<COMPONENT_NAME>_OVERRIDE` environment variable

  ```bash
  $ export RESOTOWORKER_OVERRIDE=resoto.worker.pool_size=5
  $ resotoworker
  ```

It is possible to override multiple values by delimiting them with a space:

```bash
$ export RESOTOWORKER_OVERRIDE="resotoworker.pool_size=5 resotoworker.cleanup_pool_size=20"
$ resotoworker
```

Alternatively, if a value contains a space, it is also possible to use separate, enumerated environment variables:

```bash
$ export RESOTOWORKER_OVERRIDE0=resotoworker.pool_size=5
$ export RESOTOWORKER_OVERRIDE1=resotoworker.cleanup_pool_size=20
$ resotoworker
```

## Restoring the Default Configuration

Default configurations can be restored simply by deleting the configuration and restarting the component.

```bash title="Delete the Resoto Worker configuration"
> config delete resoto.worker
```

```bash title="Restart Resoto Worker"
$ resotoworker
```

## Configuring Cloud Providers

```
> config edit resoto.worker
```

<Tabs>
<TabItem value="aws-env" label="AWS (environment)">

Resoto supports all the authentication mechanisms described in the [boto3 SDK documentation](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html). To get started on a local machine [configure AWS CLI](https://aws.amazon.com/cli/) and volume mount e.g. `$HOME/.aws/` to `/home/resoto/.aws/` inside the `resotoworker` container.

In `resh` run `config edit resoto.worker` and make sure that `aws.access_key_id` and `aws.secret_access_key` are set to `null`.

```yml title="config edit resoto.worker"
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
<TabItem value="aws-instance_profile" label="AWS (instance profile)">

[Set up an instance profile](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html) and volume mount a file (or in Kubernetes a secret) `/home/resoto/.aws/config` into the `resotoworker` container, containing the role ARN and external ID.

```
[default]
region = us-west-2

role_arn = arn:aws:iam::235059640852:role/Cloudkeeper
external_id = a5eMybsyGIowimdZqpZWxxxxxxxxxxxx
credential_source = Ec2InstanceMetadata
```

In `resh` run `config edit resoto.worker` and make sure that `aws.access_key_id` and `aws.secret_access_key` are set to `null`:

```yml title="config edit resoto.worker"
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
<TabItem value="aws-access_key" label="AWS (access key)">

Note: Using a static access key is only recommended for testing.

```yml title="config edit resoto.worker"
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
<TabItem value="gcp-json" label="Google Cloud (service account JSON files)">

Volume mount the service account JSON file to a path inside the resotoworker container, e.g. `/gcp` and configure:

```yml title="config edit resoto.worker"
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
<TabItem value="gcp-env" label="Google Cloud (auto discovery)">

Specify an empty string for the service account file and Resoto will automatically discover the service account and all the projects it has access to.

```yml title="config edit resoto.worker"
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
<TabItem value="digitalocean" label="DigitalOcean">

```yml title="config edit resoto.worker"
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

</TabItem>
</Tabs>

:::note

As described [above](#overriding-individual-properties), instead of specifying the API tokens or secret access keys in the Resoto config directly they can also be specified using Resoto Worker's `--override` flag or the `RESOTOWORKER_OVERRIDE` environment variable. This is useful for environments where the token might be stored as a secret in a system like [Vault](https://www.vaultproject.io/).

```title="Example"
RESOTOWORKER_OVERRIDE="digitalocean.api_tokens=dop_v1_e5c759260e6a43f003f3b53e2cfec79cxxxxxxxxxxxxxxxxxxxxxxxx"
```

:::

Once one or more cloud providers have been configured the `collect_and_cleanup` [workflow](../concepts/automation/workflow.md) can be run by executing

```
> workflow run collect_and_cleanup
```

## Configuring Resoto Worker for multi-core machines

Resoto resource collection speed depends heavily on the number of CPU cores available to the worker. When collecting hundreds of accounts `resotoworker` can easily saturate a 64 core machine. The amount of RAM depends on the number of resources in each account. As a rule of thumb calculate with 512 MB of RAM and 0.5 CPU cores per account concurrently collected with a minimum of 4 cores and 16 GB for a production setup.

The following settings specify how many worker threads Resoto starts:

```yml title="config edit resoto.worker"
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

The setting `resotoworker.pool_size` determines how many collectors (aws, gcp, digitalocean, k8s, etc.) are run concurrently. `aws.account_pool_size` and `gcp.project_pool_size` are used to determine how many accounts or projects respectively are collected concurrently. Within AWS the setting `aws.region_pool_size` is used to determine how many regions per account are collected concurrently.
