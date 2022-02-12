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
  -e RESOTOWORKER_AWS_ACCESS_KEY_ID=YOUR_ACCESS_KEY_ID \
  -e RESOTOWORKER_AWS_SECRET_ACCESS_KEY=YOUR_ACCESS_KEY \
  -e RESOTOWORKER_COLLECT='aws example' \
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
      RESOTOWORKER_AWS_ACCESS_KEY_ID: YOUR_ACCESS_KEY_ID
      RESOTOWORKER_AWS_SECRET_ACCESS_KEY: YOUR_ACCESS_KEY
      RESOTOWORKER_COLLECT: aws example
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

## A note regarding credentials

Resoto is meant to run unattended using a service account. For the purposes of this interactive getting started guide we have been using IAM access key and secret access key. In production we recommend using an instance profile. Instead of providing any credentials to Resoto you can use all authentication methods described in [the AWS SDK](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html#configuring-credentials) similar to how the [`aws cli`](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html) works. You can volume mount a folder `/home/resoto/.aws/` with a `config` file containing a `[default]` profile with a `role_arn`, `external_id` and `credential_source = Ec2InstanceMetadata`. The role name would also have to be provided to `resotoworker` as `RESOTOWORKER_AWS_ROLE`. When using Resoto to crawl all of your AWS accounts using the `RESOTOWORKER_AWS_SCRAPE_ORG=true` option, this role is used to assume into each sub account and fetch the list of resources.
