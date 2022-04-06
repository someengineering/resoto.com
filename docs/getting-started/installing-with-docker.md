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

[Docker](https://docker.com) provides the ability to run an application in a loosely isolated environment called a "[container](https://docs.docker.com/get-started/overview#containers)."

For more information on Docker, please see the [official Docker documentation](https://docs.docker.com).

## Prerequisites

- [Docker](https://docs.docker.com/get-started#download-and-install-docker)
- [AWS IAM access keys](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html)

:::note

**Resoto is intended to run unattended using a service account in production environments.**

For example, we recommend using an [instance profile](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html) for AWS rather than IAM access keys as described in this tutorial.

Any authentication method described in the [AWS SDK documentation](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html#configuring-credentials) may be used. This includes providing an [AWS `config` file](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html#aws-config-file), which can be mounted into the Docker container at `/home/resoto/.aws/config`:

```ini title="/home/resoto/.aws/config"
[default]
role_arn = [...]
external_id = [...]
credential_source = Ec2InstanceMetadata
```

Note that the [role name](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) must also be provided to the [worker](../concepts/components/worker.md) as `aws.role`. This role is assumed while fetching the list of resources in each sub-account when `aws.scrape_org` is `true`.

:::

## Installing Resoto

Resoto consists of four components:

1. [Resoto Core](../concepts/components/core.md) maintains the infrastructure graph.
2. [Resoto Worker](../concepts/components/worker.md) collects infrastructure data from the cloud provider APIs and sends it to the [Core](../concepts/components/core.md). It is also responsible for performing cloud specific tasks like clean up of resources or tagging.
3. [Resoto Metrics](../concepts/components/metrics.md) exports metrics in Prometheus format.
4. [Resoto Shell](../concepts/components/shell.md) is the command-line interface (CLI) used to interact with Resoto.

We publish Docker images for each individual Resoto [component](../concepts/components/index.md):

- `somecr.io/someengineering/resotocore`
- `somecr.io/someengineering/resotoworker`
- `somecr.io/someengineering/resotoshell`
- `somecr.io/someengineering/resotometrics`

The component images allow for greater flexibility in deploying Resoto with Docker Compose, and also make it possible to update each component independently.

To install Resoto using Docker Compose, add volume and service definitions to a [`docker-compose.yml` file](https://docs.docker.com/compose/compose-file) according to your preference for either the all-in-one image or the component images:

```yml title="docker-compose.yml"
---
version: '3'

volumes:
  resoto-data:

services:
  graphdb:
    image: arangodb:3.8.6
    container_name: graphdb
    platform: linux/amd64
    environment:
      ARANGO_NO_AUTH: 1
    ports:
      - 8529:8529
    volumes:
      - resoto-data:/var/lib/arangodb3

  resotocore:
    image: somecr.io/someengineering/resotocore:{{latestRelease}}
    container_name: resotocore
    depends_on:
      - graphdb
    ports:
      - 8900:8900
    environment:
      PSK:
      RESOTOCORE_GRAPHDB_SERVER: http://graphdb:8529
      RESOTOCORE_GRAPHDB_PASSWORD: changeme
    command:
      - --override
      - resotocore.api.web_hosts=resotocore
      - resotocore.api.host_certificate.common_name=resotocore
      - resotocore.api.host_certificate.san_dns_names=resotocore
      - resotocore.api.tsdb_proxy_url=http://tsdb:9090
      - resotocore.api.ui_path=/usr/local/resoto/ui/
      - resotocore.runtime.start_collect_on_subscriber_connect=true
    restart: unless-stopped
    stop_grace_period: 2m

  resotoworker:
    image: somecr.io/someengineering/resotoworker:{{latestRelease}}
    container_name: resotoworker
    depends_on:
      - resotocore
    ports:
      - 9956:9956
    environment:
      PSK:
      RESOTOWORKER_RESOTOCORE_URI: https://resotocore:8900
      RESOTOWORKER_OVERRIDE0: collect=aws,example
      RESOTOWORKER_OVERRIDE1: aws.access_key_id=YOUR_ACCESS_KEY_ID
      RESOTOWORKER_OVERRIDE2: aws.secret_access_key=YOUR_ACCESS_KEY
    restart: unless-stopped
    stop_grace_period: 2m

  resotometrics:
    image: somecr.io/someengineering/resotometrics:{{latestRelease}}
    container_name: resotometrics
    depends_on:
      - resotocore
    ports:
      - 9955:9955
    environment:
      PSK:
      RESOTOMETRICS_RESOTOCORE_URI: https://resotocore:8900
    restart: unless-stopped
    stop_grace_period: 2m

  resotoshell:
    image: somecr.io/someengineering/resotoshell:{{latestRelease}}
    container_name: resotoshell
    depends_on:
      - resotocore
    environment:
      PSK:
      RESOTOSHELL_RESOTOCORE_URI: https://resotocore:8900
    restart: unless-stopped
    stop_grace_period: 2m
```

Then, run the following command from the directory containing the `docker-compose.yml` file:

```bash
docker-compose up -d
```

Docker Compose will start the container, and a collect run will begin automatically. This first collect usually takes about 5 to 10 minutes, but the time is dependent on the size of your AWS account.

## Launching the Command-Line Interface

The `resh` command is used to interact with [Resoto Core](../concepts/components/core.md).

To access the [Resoto Shell](../concepts/components/shell.md) interface, simply execute:

```bash
docker exec -it resoto resh
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

## Updating Resoto

When a new version of Resoto is available, simply edit the image tag(s) (e.g., <LatestRelease />) specified in the `docker-compose.yml` file to reflect the desired Resoto release.

Then, run the following command from the directory containing the `docker-compose.yml` file:

```bash
docker-compose up -d
```
