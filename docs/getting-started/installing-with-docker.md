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

Note that the [role ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) must also be provided to the [worker](../concepts/components/worker.md) as `RESOTOWORKER_AWS_ROLE`. This role is assumed while fetching the list of resources in each sub-account when `RESOTOWORKER_AWS_SCRAPE_ORG=true`.

:::

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

And just like that, you now have Resoto running in Docker! Depending on the size of your AWS account the first collect run will take around 5-10 minutes.

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

The container will start up and after some initial configuration start the first collect run. Depending on the size of your AWS account this run will take around 5-10 minutes.

## Using the Resoto CLI

The [`resh`](../concepts/components/shell.md) command is used to interact with [`resotocore`](../concepts/components/core.md).

To access the Resoto shell interface inside the Docker container, simply execute:

```bash
docker exec -it resoto resh
```

Once Resoto has finished its first collect run, you can try [performing some queries](./performing-queries.md).

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
