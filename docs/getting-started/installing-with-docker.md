---
pagination_prev: getting-started/index
pagination_next: getting-started/performing-searches
---

# Installing with Docker

```mdx-code-block
import LatestRelease from '@site/src/components/LatestRelease';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
```

[Docker](https://docker.com) provides the ability to run an application in a loosely isolated environment called a "[container](https://docs.docker.com/get-started/overview#containers)."

Currently, all of the requirements and components of Resoto are packaged into a single Docker [image](https://docs.docker.com/get-started/overview#images).

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

Note that the [role ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) must also be provided to the [worker](../concepts/components/worker.md) as `aws.role`. This role is assumed while fetching the list of resources in each sub-account when `aws.scrape_org=true`.

:::

## Installation

There are multiple ways to get the Resoto Docker image up and running.
Resoto consists of four components. `resotocore` maintains the infrastructure graph. `resotoworker` collects infrastructure data from the cloud provider APIs and sends it to the core. It is also responsible for performing cloud specific tasks like clean up of resources or tagging. `resotometrics` exports metrics in Prometheus format and `resotoshell (resh)` is the CLI used to interact with Resoto.
Once the core is running all component configuration can be edited using the `config edit` command inside `resh`. For example `config edit resoto.worker`. Every configuration option can be overridden using CLI flags or environment variables using the `--override` flag or the `<COMPONENTNAME>_OVERRIDE` environment variable.

### [`docker run`](https://docs.docker.com/engine/reference/run) Command {#docker-run-install}

First, create a volume in which to persist data:

```bash
docker volume create resoto-data
```

Then, start the container:

```bash
docker run \
  --name resoto \
  -e RESOTOWORKER_OVERRIDE0 collect=aws,example
  -e RESOTOWORKER_OVERRIDE1 aws.access_key_id=YOUR_ACCESS_KEY_ID \
  -e RESOTOWORKER_OVERRIDE2 aws.secret_access_key=YOUR_SECRET_ACCESS_KEY \
  -p 8900:8900 \
  -v resoto-data:/data \
  --restart unless-stopped \
  somecr.io/someengineering/resoto:{{latestRelease}}
```

And just like that, you have Resoto running in Docker! A collect run will begin automatically. This first collect usually takes about 5 to 10 minutes, but the time is dependent on the size of your AWS account.

:::note

By default, Resoto collects [anonymous statistics](../reference/telemetry.md) about how the product is used. However, this telemetry can be [disabled](../reference/telemetry.md#disabling) by setting the `RESOTOCORE_ANALYTICS_OPT_OUT` environment variable.

:::

### [Docker Compose](https://docs.docker.com/compose/reference) {#docker-compose-install}

We publish an all-in-one Docker image (`somecr.io/someengineering/resoto`) in addition to Docker images for each individual Resoto [component](../concepts/components/index.md):

- `somecr.io/someengineering/resotocore`
- `somecr.io/someengineering/resotoworker`
- `somecr.io/someengineering/resotoshell`
- `somecr.io/someengineering/resotometrics`

The component images allow for greater flexibility in deploying Resoto with Docker Compose, and also make it possible to update each component independently.

To install Resoto using Docker Compose, add volume and service definitions to a [`docker-compose.yml` file](https://docs.docker.com/compose/compose-file) according to your preference for either the all-in-one image or the component images:

<Tabs>
<TabItem value="all-in-one" label="All-in-One Image">

```yml title="docker-compose.yml"
---
version: '3'

volumes:
  resoto-data:

services:
  resoto:
    image: somecr.io/someengineering/resoto:{{latestRelease}}
    container_name: resoto
    environment:
      RESOTOWORKER_OVERRIDE0: collect=aws,example
      RESOTOWORKER_OVERRIDE1: aws.access_key_id=YOUR_ACCESS_KEY_ID
      RESOTOWORKER_OVERRIDE2: aws.secret_access_key=YOUR_ACCESS_KEY
    ports:
      - 8900:8900
    volumes:
      - resoto-data:/data
    restart: unless-stopped
```

</TabItem>
<TabItem value="components" label="Separate Component Images">

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
      RESOTOCORE_OVERRIDE0: resotocore.api.web_hosts=resotocore
      RESOTOCORE_OVERRIDE1: resotocore.runtime.start_collect_on_subscriber_connect=true
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

</TabItem>
</Tabs>

Then, run the following command from the directory containing the `docker-compose.yml` file:

```bash
docker-compose up -d
```

Docker Compose will start the container, and a collect run will begin automatically. This first collect usually takes about 5 to 10 minutes, but the time is dependent on the size of your AWS account.

:::note

By default, Resoto collects [anonymous statistics](../reference/telemetry.md) about how the product is used. However, this telemetry can be [disabled](../reference/telemetry.md#disabling) by setting the `resotocore.runtime.analytics_opt_out=true` config variable.

:::

## Launching the Resoto Command-Line Interface

The `resh` command is used to interact with [`resotocore`](../concepts/components/core.md).

To access the [Resoto Shell](../concepts/components/shell.md) interface inside the Docker container, simply execute:

```bash
docker exec -it resoto resh
```

Once Resoto has completed its first collect run, you can try [performing some searches](./performing-searches.md).
To list and edit the configuration run `config list` and `config edit <config-name>` respectively.

## Updating

When a new version of Resoto is available, the update process is dependent on how Resoto was installed initially.

### [`docker run`](https://docs.docker.com/engine/reference/run) Command {#docker-run-update}

First, stop and remove the existing container:

```bash
docker stop resoto
docker rm resoto
```

Next, recreate the container with the same parameters used previously, but updating the image tag (e.g., <LatestRelease />) to reflect the desired Resoto release.

### [Docker Compose](https://docs.docker.com/compose/reference) {#docker-compose-update}

Simply edit the image tag(s) (e.g., <LatestRelease />) specified in the `docker-compose.yml` file to reflect the desired Resoto release.

Then, run the following command from the directory containing the `docker-compose.yml` file:

```bash
docker-compose up -d
```
