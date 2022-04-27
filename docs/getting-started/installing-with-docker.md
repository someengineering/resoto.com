---
sidebar_position: 1
pagination_prev: getting-started/index
pagination_next: getting-started/configuring-resoto
---

# Installing with Docker

```mdx-code-block
import LatestRelease from '@site/src/components/LatestRelease';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
```

[Docker](https://docker.com) provides the ability to run an application in a loosely isolated environment called a [container](https://docs.docker.com/get-started/overview#containers). For more information on Docker, please see the [official Docker documentation](https://docs.docker.com).

## Prerequisites

- [Docker](https://docs.docker.com/get-started#download-and-install-docker) needs to be installed on your machine.

## Installing Resoto

Resoto consists of multiple [components](../concepts/components/index.md) that are published as individual Docker images :

1. [📦](https://hub.docker.com/repository/docker/someengineering/resotocore) `somecr.io/someengineering/resotocore` maintains the infrastructure graph.
2. [📦](https://hub.docker.com/repository/docker/someengineering/resotoworker) `somecr.io/someengineering/resotoworker` collects infrastructure data from the cloud provider APIs.
3. [📦](https://hub.docker.com/repository/docker/someengineering/resotometrics) `somecr.io/someengineering/resotometrics` exports metrics in Prometheus format.
4. [📦](https://hub.docker.com/repository/docker/someengineering/resotoshell) `somecr.io/someengineering/resotoshell` is the command-line interface (CLI) used to interact with Resoto.

To install Resoto using [Docker Compose](https://docs.docker.com/compose/install/), checkout the [repository](https://github.com/someengineering/resoto) and run:

```bash
$ git clone https://github.com/someengineering/resoto.git
$ cd resoto
$ git checkout tags/<LatestRelease />
$ docker compose up -d
```

:::note

When using an old Python versions of Docker Compose the command is `docker-compose` instead of `docker compose`.

:::

Docker Compose will start all components and set up the system. This process should not take more than 1-3 minutes depending on your machine and internet connection.

:::note

Resoto publishes packages for x86 and ARM architectures for every proper release. Edge versions are only available for x86. People that try out Resoto on Apple Silicon or other ARM based machines should use a proper release (e.g. <LatestRelease />).

:::

## Launching the Command-Line Interface

The `resh` command starts an interactive shell session with Resoto. To access the [Resoto Shell](../concepts/components/shell.md) interface, simply execute:

```bash
$ docker compose run resotoshell
```

### Configuring Resoto

Please refer to the [Configuring Resoto](./configuring-resoto.md) tutorial for details.

Run Resoto Shell (`resh`) as described in the previous step. In `resh` enter the following:

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

Instead of specifying the API tokens or secret access keys in the Resoto config they can also be specified using [Resoto Worker's `--override` flag or the `RESOTOWORKER_OVERRIDE` environment variable](configuring-resoto.md#overriding-individual-properties). This is useful for environments where the token might be stored as a secret in a system like [Vault](https://www.vaultproject.io/).

```title="Example"
RESOTOWORKER_OVERRIDE="digitalocean.api_tokens=dop_v1_e5c759260e6a43f003f3b53e2cfec79cxxxxxxxxxxxxxxxxxxxxxxxx"
```

:::

### Performing Searches

Once Resoto has completed its first collect run, you can try [performing some searches](./performing-searches.md).

## Updating Resoto

When a new version of Resoto is available, simply edit the container image tag (e.g., <LatestRelease />) specified in the `docker-compose.yml` file to reflect the desired Resoto release.

Then, run the following command from the directory containing the `docker-compose.yml` file:

```bash
$ docker compose up -d
```
