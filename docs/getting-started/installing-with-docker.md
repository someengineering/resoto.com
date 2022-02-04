---
title: Installing with Docker
---

# Installing with Docker

```mdx-code-block
import LatestRelease from '@site/src/components/LatestRelease';
```

[Docker](https://docker.com) provides the ability to run an application in a loosely isolated environment called a "[container](https://docs.docker.com/get-started/overview#containers)."

Currently, all of the requirements and components of Resoto are packaged into a single Docker [image](https://docs.docker.com/get-started/overview#images).

For more information on Docker, please see the [official Docker documentation](https://docs.docker.com).

## Prerequisites

- [Docker](https://docs.docker.com/get-started#download-and-install-docker)
- [AWS IAM access keys](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html)

## Installation

There are multiple ways to get the Resoto Docker image up and running.

### [`docker run`](https://docs.docker.com/engine/reference/run) Command {#docker-run-install}

First, create a volume in which to persist data:

```bash
docker volume create resoto-data
```

Then, start the container:

```bash
docker run \
  --name resoto \
  -e AWS_ACCESS_KEY_ID=YOUR_ACCESS_KEY_ID \
  -e AWS_SECRET_ACCESS_KEY=YOUR_ACCESS_KEY \
  -e CKWORKER_COLLECTOR='AWS Example' \
  -p 8900:8900 \
  -v resoto-data:/data \
  --restart unless-stopped \
  somecr.io/someengineering/resoto:{{latestRelease}}
```

And just like that, you now have Resoto running in Docker!

### [Docker Compose](https://docs.docker.com/compose/reference) {#docker-compose-install}

Add the following volume and service definitions to a [`docker-compose.yml` file](https://docs.docker.com/compose/compose-file):

```yml title="docker-compose.yml"
---
version: '3'

services:
  resoto:
    image: somecr.io/someengineering/resoto:{{latestRelease}}
    container_name: resoto
    environment:
      AWS_ACCESS_KEY_ID: YOUR_ACCESS_KEY_ID
      AWS_SECRET_ACCESS_KEY: YOUR_ACCESS_KEY
      CKWORKER_COLLECTOR: AWS Example
    ports:
      - 8900:8900
    volumes:
      - resoto-data:/data
    restart: unless-stopped
volumes:
  resoto-data:
```

Then, run the following command from the directory containing the `docker-compose.yml` file:

```bash
docker-compose up -d
```

## Resoto CLI

The [`resh`](../concepts/components/shell.md) command is used to interact with [`resotocore`](../concepts/components/core.md).

To access the Resoto shell interface inside the Docker container, simply execute:

```bash
docker exec -it resoto resh
```

## Resoto Web UI

To access the Resoto web interface, navigate to [http://localhost:8900/ui](http://localhost:8900/ui) in your preferred web browser.

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

Simply edit the image tag (e.g., <LatestRelease />) specified in the `docker-compose.yml` file to reflect the desired Resoto release.

Then, run the following command from the directory containing the `docker-compose.yml` file:

```bash
docker-compose up -d
```
