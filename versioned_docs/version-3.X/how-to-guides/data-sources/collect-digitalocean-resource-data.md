---
sidebar_label: Collect DigitalOcean Resource Data
---

# How to Collect DigitalOcean Resource Data

```mdx-code-block
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
```

The [DigitalOcean](../../reference/data-models/digitalocean.md) collector is configured within the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs/index.md) in [Resoto Shell](../../reference/components/shell.md).

## Prerequisites

This guide assumes that you have already [installed](../../getting-started/install-resoto/index.md) Resoto.

## Directions

### 1. Enable the DigitalOcean Collector

1. Open the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs) in [Resoto Shell](../../reference/components/shell):

   ```bash
   > config edit resoto.worker
   ```

2. Add `digitalocean` to the list of collectors by modifying the configuration as follows:

   ```yaml
   resotoworker:
     ...
     # List of collectors to run
     collector:
   # highlight-next-line
       - 'digitalocean'
       ...
   ...
   ```

### 2. Authenticate with DigitalOcean

**DigitalOcean uses [access tokens](https://cloud.digitalocean.com/account/api/tokens) to authenticate API requests.** You can provide access tokens to Resoto via the Resoto Worker configuration or environment variables.

<Tabs groupId="auth-method">
<TabItem value="configuration" label="Resoto Worker Configuration">

1. Open the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs) in [Resoto Shell](../../reference/components/shell):

   ```bash
   > config edit resoto.worker
   ```

2. Modify the `digitalocean` section of the configuration as follows, adding your API tokens and/or access keys:

   ```yaml
   digitalocean:
   # highlight-start
     # DigitalOcean API tokens for the teams to be collected
     api_tokens:
       - 'dop_v1_e5c759260e6a43f003f3b53e2cfec79cxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
     # DigitalOcean Spaces access keys for the teams to be collected, separated by colons
     spaces_access_keys: []
     ...
   # highlight-end
   ```

</TabItem>
<TabItem value="environment" label="Environment Variables">

**Instead of specifying API tokens or secret access keys in the [Resoto Worker configuration](../../reference/configuration/index.md) directly, it is possible to define them using the [`--override` flag or `RESOTOWORKER_OVERRIDE` environment variable](../../reference/configuration/index.md#overriding-individual-properties).**

1. Set the `RESOTOWORKER_OVERRIDE` environment variable:

   <Tabs groupId="install-method">
   <TabItem value="docker" label="Docker">

   - Add a environment variable definition to the `resotoworker` service in `docker-compose.yaml`:

     ```yaml title="docker-compose.yaml"
     services:
       ...
       resotoworker:
     # highlight-start
         environment:
           - RESOTOWORKER_OVERRIDE="digitalocean.api_tokens=dop_v1_e5c759260e6a43f003f3b53e2cfec79cxxxxxxxxxxxxxxxxxxxxxxxx"
     # highlight-end
       ...
     ...
     ```

   - Recreate the `resotoworker` container with the updated service definition:

     ```bash
     $ docker-compose up -d
     ```

     :::note

     [Docker Compose V2 integrated compose functions in to the Docker platform.](https://docs.docker.com/compose/#compose-v2-and-the-new-docker-compose-command)

     In Docker Compose V2, the command is `docker compose` (no hyphen) instead of `docker-compose`.

     :::

   </TabItem>
   <TabItem value="k8s" label="Kubernetes">

   - Create a secret:

     ```bash
     $ kubectl -n resoto create secret generic resoto-auth \
       --from-literal=RESOTOWORKER_OVERRIDE="digitalocean.api_tokens=dop_v1_e5c759260e6a43f003f3b53e2cfec79cxxxxxxxxxxxxxxxxxxxxxxxx"
     ```

   - Update `resoto-values.yaml` as follows:

     ```yaml title="resoto-values.yaml"
     ...
     resotoworker:
       ...
     # highlight-start
       extraEnv:
         - name: RESOTOWORKER_OVERRIDE
           valueFrom:
             secretKeyRef:
               name: resoto-auth
               key: RESOTOWORKER_OVERRIDE
     # highlight-end
     ...
     ```

   - Deploy these changes with Helm:

     ```bash
     $ helm upgrade resoto resoto/resoto --set image.tag={{imageTag}} -f resoto-values.yaml
     ```

   </TabItem>
   <TabItem value="pip" label="pip">

   - Export the `RESOTOWORKER_OVERRIDE` environment variable:

     ```bash
     $ export RESOTOWORKER_OVERRIDE="digitalocean.api_tokens=dop_v1_e5c759260e6a43f003f3b53e2cfec79cxxxxxxxxxxxxxxxxxxxxxxxx"
     ```

   - Restart the `resotoworker` process.

   </TabItem>
   </Tabs>

</TabItem>
</Tabs>

### 3. Trigger Resource Collection

1. By default, Resoto performs resource collection each hour. To immediately trigger a collect run, use the [`workflow run` command](../../reference/cli/action-commands/workflows/run.md) in [Resoto Shell](../../reference/components/shell):

   ```bash
   > workflow run collect
   ```

2. Once the collect run completes, you can view a summary of collected [DigitalOcean resources](../../reference/data-models/digitalocean.md) using the following search:

   ```bash
   > search is(digitalocean_resource) | count kind
   ```
