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

To install Resoto using [Docker Compose](https://docs.docker.com/compose/install/), checkout the [repository](https://github.com/someengineering/resoto)) and run:

```bash
$ git clone https://github.com/someengineering/resoto.git
$ cd resoto
$ git checkout tags/<LatestRelease />
$ docker compose up -d
```

Docker Compose will start all components and set up the system. This process should not take more than 1-3 minutes depending on your machine and internet connection.

:::note

Resoto publishes packages for x86 and ARM architectures for every proper release. Edge versions are only available for x86. People that try out Resoto on Apple Silicon or other ARM based machines should use a proper release (e.g. <LatestRelease />).

:::

## Launching the Command-Line Interface

The `resh` command starts an interactive shell session with Resoto. To access the [Resoto Shell](../concepts/components/shell.md) interface, simply execute:

```bash
$ docker-compose run resotoshell
```

### Configuring Resoto

Please refer to the [Configuring Resoto](./configuring-resoto.md) tutorial for more details.

### Performing Searches

Once Resoto has completed its first collect run, you can try [performing some searches](./performing-searches.md).

## Updating Resoto

When a new version of Resoto is available, simply edit the container image tag (e.g., <LatestRelease />) specified in the `docker-compose.yml` file to reflect the desired Resoto release.

Then, run the following command from the directory containing the `docker-compose.yml` file:

```bash
$ docker-compose up -d
```
