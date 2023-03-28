---
sidebar_label: Worker
---

# Resoto Worker Configuration

## Creating Configuration Files in the Worker's Home Directory

In certain scenarios, it may be necessary to create configuration files in the worker's home directory. For instance, you might need to store AWS credentials, GCP service account JSON, or Kubernetes kubeconfig files in that location.

Resoto Worker provides the ability to specify both the file path and content within the configuration settings, and will automatically generate the file upon worker startup. It is important to note that the worker will only permit the writing of files to its home directory.

:::caution

Resoto Worker will overwrite any pre-existing files with the same name.

:::

Example:

```yaml
resotoworker:
  write_files_to_home_dir:
    - path: ~/.aws/config
      content: |
        [default]
        aws_access_key_id=AKIAIOSFODNN7EXAMPLE
        aws_secret_access_key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
        region = us-east-1
        output=json

        [profile user1]
        region=us-west-1
        output=text

```

## Mounting configuration files using Docker or Kubernetes

Another method of providing configuration files is to mount them within the container. The following examples demonstrate how to mount the `.aws` directory in both Docker and Kubernetes:

### Docker

To mount the .aws directory in Docker, you need to add the following volume definition to the resotoworker service in the docker-compose.yaml file:

```yaml title="docker-compose.yaml"
services:
  ...
  resotoworker:
    image: somecr.io/someengineering/resotoworker:{{imageTag}}
    container_name: resotoworker
    ...
# highlight-start
    volumes:
      - $HOME/.aws:/home/resoto/.aws
# highlight-end
  ...
...
```

Once you have added the volume definition, you need to recreate the resotoworker container with the updated service definition using the following command:

```bash
$ docker-compose up -d
```

:::note

[Docker Compose V2 integrated compose functions in to the Docker platform.](https://docs.docker.com/compose/#compose-v2-and-the-new-docker-compose-command)

In Docker Compose V2, the command is `docker compose` (no hyphen) instead of `docker-compose`.

:::

### Kubernetes

To mount the .aws directory in Kubernetes, you need to create a secret that includes the path to the credentials file as follows:

```bash
$ kubectl -n resoto create secret generic resoto-home \
  --from-file=credentials=$HOME/.aws/credentials
```

Next, update the resoto-values.yaml file to include the following volume mounts and volumes under the resotoworker section:

```yaml title="resoto-values.yaml"
...
resotoworker:
  ...
# highlight-start
  volumeMounts:
    - mountPath: /home/resoto/.aws
      name: aws-credentials
  volumes:
    - name: aws-credentials
      secret:
        secretName: resoto-home
# highlight-end
...
```

Finally, deploy these changes with Helm using the following command:

```bash
$ helm upgrade resoto resoto/resoto --set image.tag={{imageTag}} -f resoto-values.yaml
```

## Multi-Core Machines

Resoto resource collection speed depends heavily on the number of CPU cores available to the worker. When collecting hundreds of accounts, [Resoto Worker](../components/worker.md) can easily saturate 64 cores or more.

The amount of RAM required depends on the number of resources in each account. As a rule of thumb, estimate 512 MB of RAM and 0.5 CPU cores per account concurrently collected, with a minimum of 4 cores and 16 GB for a production setup.

The following settings specify how many [Worker](../components/worker.md) threads Resoto starts:

```yaml
resotoworker:
  ...
# highlight-start
  # How many cleanup threads to run in parallel
  cleanup_pool_size: 16
  # Collector thread/process pool size
  pool_size: 5
# highlight-end
aws:
  ...
# highlight-start
  # Account thread/process pool size
  account_pool_size: 32
  # Region thread pool size
  region_pool_size: 20
# highlight-end
gcp:
  ...
# highlight-start
  # GCP project thread/process pool size
  project_pool_size: 32
# highlight-end
...
```

- The `resotoworker.pool_size` setting determines how many collectors (Amazon Web Services, Google Cloud Platform, DigitalOcean, Kubernetes, etc.) are run concurrently.
- `aws.account_pool_size` and `gcp.project_pool_size` are used to determine how many accounts or projects respectively are collected concurrently.
- Within Amazon Web Services, `aws.region_pool_size` is used to determine how many regions per account are collected concurrently.

:::caution

At peak, Resoto creates concurrent network connections for each region in every account. With a single cloud with 32 accounts and 20 regions per account, for example, there will be a maximum of 32 × 20 = 640 connections.

This is not a problem in a data center or with a <abbr title="small office / home office">SOHO</abbr> router, where hundreds of thousands (or even millions) of new connections per second are supported. However, if you are testing Resoto at home using a consumer-grade router, you should be conservative when configuring thread pool sizes.

:::
