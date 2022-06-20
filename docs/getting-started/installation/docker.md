---
sidebar_label: Docker
pagination_prev: getting-started/index
pagination_next: getting-started/configuration/index
---

# Installing Resoto with Docker

```mdx-code-block
import LatestRelease from '@site/src/components/LatestRelease';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
```

[Docker](https://docker.com) provides the ability to run an application in a loosely isolated environment called a [container](https://docs.docker.com/get-started/overview#containers). For more information on Docker, please see the [official Docker documentation](https://docs.docker.com).

## Prerequisites

- [Docker](https://docs.docker.com/get-started#download-and-install-docker) needs to be installed on your machine.
- [Docker Compose](https://docs.docker.com/compose/install/) needs to be available on your machine.
- At least two cores and eight gigabytes of RAM are required to run the Resoto stack. For a production setup we recommend at least four cores and 16 gigabytes of RAM. See [Configuring Resoto Worker](../configuration/worker/index.md#multi-core-machines) for more information.

## Installing Resoto

Resoto consists of multiple [components](../../concepts/components/index.md) that are published as individual Docker images :

1. [📦](https://hub.docker.com/repository/docker/someengineering/resotocore) `somecr.io/someengineering/resotocore` maintains the infrastructure graph.
2. [📦](https://hub.docker.com/repository/docker/someengineering/resotoworker) `somecr.io/someengineering/resotoworker` collects infrastructure data from the cloud provider APIs.
3. [📦](https://hub.docker.com/repository/docker/someengineering/resotometrics) `somecr.io/someengineering/resotometrics` exports metrics in Prometheus format.
4. [📦](https://hub.docker.com/repository/docker/someengineering/resotoshell) `somecr.io/someengineering/resotoshell` is the command-line interface (CLI) used to interact with Resoto.

To install Resoto using [Docker Compose](https://docs.docker.com/compose/install/), checkout the required files (use the ⧉ button in the code block below for copy'paste ready text):

<Tabs>
<TabItem value="curl" label="Using curl">

```bash
$ mkdir -p resoto/dockerV2
$ cd resoto
$ curl -o docker-compose.yaml https://raw.githubusercontent.com/someengineering/resoto/{{latestRelease}}/docker-compose.yaml
$ curl -o dockerV2/prometheus.yml https://raw.githubusercontent.com/someengineering/resoto/{{latestRelease}}/dockerV2/prometheus.yml
$ docker compose up -d
```

</TabItem>
<TabItem value="git" label="Using git">

```bash
$ git clone https://github.com/someengineering/resoto.git
$ cd resoto
$ git checkout tags/{{latestRelease}}
$ docker compose up -d
```

</TabItem>
</Tabs>

:::note

When using old versions of Docker Compose the command is `docker-compose` instead of `docker compose`.

:::

Docker Compose will start all components and set up the system. This process should not take more than 1-3 minutes depending on your machine and internet connection.

:::note

Resoto publishes packages for x86 and ARM architectures for every proper release. Edge tagged versions (`edge`) are only available for x86. People that try out Resoto on Apple Silicon or other ARM based machines should use a proper release (e.g. <LatestRelease /> or `latest`).

:::

## Launching the Command-Line Interface

The `resh` command starts an interactive shell session with Resoto. To access the [Resoto Shell](../../concepts/components/shell.md) interface using Docker compose, simply execute:

```bash
$ docker compose run --rm resotoshell
```

### Configuring Resoto

Please refer to the [Configuring Resoto Worker](../configuration/worker/index.md#cloud-providers) tutorial for details.

### Collecting Cloud Resources

Once one or more cloud providers have been configured the `collect_and_cleanup` workflow can be run by executing:

```
> workflow run collect_and_cleanup
```

No worries, no cleanup will be performed as cleanup is disabled by default. It is just the name of the [workflow](../../concepts/automation/workflow.md). See the [Cleaning Resources](../usage/cleanup.md) tutorial for details on how to enable cleanup.

### Performing Searches

Once Resoto has completed its first collect run, you can try [performing some searches](../usage/search.md).

## Updating Resoto

When a new version of Resoto is available, simply edit the container image tag (e.g., <LatestRelease />) specified in the `docker-compose.yml` file to reflect the desired Resoto release.

Then, run the following command from the directory containing the `docker-compose.yml` file:

```bash
$ docker compose up -d
```
