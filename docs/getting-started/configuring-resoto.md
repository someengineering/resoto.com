---
sidebar_position: 2
pagination_prev: getting-started/installation/index
pagination_next: getting-started/performing-searches
---

# Configuring Resoto

```mdx-code-block
import LatestRelease from '@site/src/components/LatestRelease';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
```

Resoto uses an internal configuration system for its [components](../concepts/components/index.md). Configuration is maintained within [Resoto Core](../concepts/components/core.md) and can be edited using [Resoto Shell](../concepts/components/shell.md) using the [`config edit` command](../reference/cli/configs/edit.md).

:::note

In the code blocks below, `$` at the beginning of a line denotes that a command is to be run on the normal shell (Bash, Zsh, etc.).

Lines beginning with `>` should be executed inside [Resoto Shell](../concepts/components/shell.md).

:::

## Listing Configurations

```bash title="Start the Resoto Shell"
$ resh --psk changeme --resotocore-uri https://resotocore.resoto.svc.cluster.local:8900
```

:::note

Be sure to adjust the above PSK and Resoto Core URI arguments to reflect your setup!

:::

```bash title="List available configurations"
> configs list
```

Resoto automatically creates the following configurations by default:

- `resoto.core`
- `resoto.core.commands`
- `resoto.worker`
- `resoto.metrics`

## Editing Configuration

```bash title="Edit the Resoto Worker configuration"
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
  $ export RESOTOWORKER_OVERRIDE=resotoworker.pool_size=5
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

### Overriding List Type Properties

If the property type is a list/an array, it is possible to specifying multiple values as a comma-separated list of values:

```bash
  $ resotocore --override resotocore.api.web_hosts 127.0.0.1,10.0.0.1
```

or

```bash
  $ export RESOTOCORE_OVERRIDE=resotocore.api.web_hosts=127.0.0.1,10.0.0.1
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

Next, modify the [Resoto Worker](../concepts/components/worker.md) configuration as follows, making sure that `aws.access_key_id` and `aws.secret_access_key` are set to `null` (Resoto will fall back to loading credentials from the environment/home directory):

```yml
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

Next, modify the [Resoto Worker](../concepts/components/worker.md) configuration as follows, making sure that `aws.access_key_id` and `aws.secret_access_key` are set to `null`:

```yml
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

Modify the [Resoto Worker](../concepts/components/worker.md) configuration as follows:

```yml
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

Volume mount the service account JSON file to a path inside the `resotoworker` container (e.g., `/gcp`) and modify the [Resoto Worker](../concepts/components/worker.md) configuration as follows:

```yml
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

Modify the [Resoto Worker](../concepts/components/worker.md) configuration as follows:

```yml
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

Modify the [Resoto Worker](../concepts/components/worker.md) configuration as follows:

```yml
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

Once one or more cloud providers have been configured the `collect_and_cleanup` [workflow](../concepts/automation/workflow.md) can be run by executing:

```bash
> workflow run collect_and_cleanup
```

## Configuring Resoto Worker for Multi-Core Machines

Resoto resource collection speed depends heavily on the number of CPU cores available to the worker. When collecting hundreds of accounts `resotoworker` can easily saturate 64 cores or more. The amount of RAM depends on the number of resources in each account. As a rule of thumb calculate with 512 MB of RAM and 0.5 CPU cores per account concurrently collected with a minimum of 4 cores and 16 GB for a production setup.

The following settings specify how many worker threads Resoto starts:

```yml
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

## Configuring Logging

Resoto components produce logs in JSON format by default, with the exception of [Resoto Shell](../concepts/components/shell.md).

The rationale behind this behavior is that [Core](../concepts/components/core.md), [Worker](../concepts/components/worker.md), and [Metrics](../concepts/components/metrics.md) are likely running on something like a Kubernetes cluster in a data center, with logs ingested by a central logging system. [Resoto Shell](../concepts/components/shell.md), on the other hand, is executed on a user's local machine so the log output is formatted for readability.

JSON-format logging can be disabled by setting environment variable `RESOTO_LOG_TEXT=true`.
