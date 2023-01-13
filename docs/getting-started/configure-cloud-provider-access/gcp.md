---
sidebar_label: Google Cloud Platform
---

# Configure Google Cloud Platform Access

```mdx-code-block
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
```

The [Google Cloud Platform (GCP)](../../reference/data-models/gcp/index.md) collector is configured within the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs/index.md) in [Resoto Shell](../../concepts/components/shell.md).

## Enabling the Collector

1. Open the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs) in [Resoto Shell](../../concepts/components/shell):

   ```bash
   > config edit resoto.worker
   ```

2. Add `gcp` to the list of collectors by modifying the configuration as follows:

   ```yaml title="Resoto Worker configuration"
   resotoworker:
     ...
     # List of collectors to run
     collector:
   # highlight-next-line
       - 'gcp'
       ...
   ...
   ```

## Authentication

**You can authenticate with [Google Cloud Platform](../../reference/data-models/gcp/index.md) via service account JSON files or automatic discovery.**

<Tabs>
<TabItem value="service-account-json-files" label="Service Account JSON Files">

1. Move or copy your service account JSON file(s) to the `~/.gcp` directory.

2. Make your service account JSON file(s) available to Resoto at `/home/resoto/.gcp`:

   <Tabs groupId="install-method">
   <TabItem value="docker" label="Docker">

   - Add volume definition(s) for each service account JSON file to the `resotoworker` service in `docker-compose.yaml`:

     ```yaml title="docker-compose.yaml"
     services:
       ...
       resotoworker:
         image: somecr.io/someengineering/resotoworker:{{imageTag}}
         ...
     # highlight-start
         volumes:
           - $HOME/.gcp:/home/resoto/.gcp
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

   - Create a secret with the path(s) to your service account JSON file(s):

     ```bash
     $ kubectl -n resoto create secret generic resoto-auth \
       --from-file=service-account-1.json=<PATH TO SERVICE ACCOUNT JSON> \
       --from-file=service-account-2.json=<PATH TO ANOTHER SERVICE ACCOUNT JSON>
     ```

   - Update `resoto-values.yaml` as follows:

     ```yaml title="resoto-values.yaml"
     ...
     resotoworker:
       ...
     # highlight-start
       volumeMounts:
         - mountPath: /home/resoto/.gcp`
           name: auth-secret
       volumes:
         - name: auth-secret
           secret:
             secretName: resoto-auth
     # highlight-end
     ...
     ```

   - Deploy these changes with Helm:

     ```bash
     $ helm upgrade resoto resoto/resoto --set image.tag={{imageTag}} -f resoto-values.yaml
     ```

   </TabItem>
   <TabItem value="pip" label="pip">

   - Simply move or copy your service account JSON file(s) to the `~/.gcp` directory. (Since Resoto is running on your local machine, it can access the file(s) directly.)

     :::note

     The following steps assume that the file(s) are named `service-account-1.json`, `service-account-2.json`, etc.

     :::

   </TabItem>
   </Tabs>

3. Open the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs) in [Resoto Shell](../../concepts/components/shell):

   ```bash
   > config edit resoto.worker
   ```

4. Modify the `gcp` section of the configuration as follows, adding the paths to your service account JSON file:

   ```yaml title="Resoto Worker configuration"
   resotoworker:
     ...
   ...
   gcp:
     ...
   # highlight-start
     # GCP service account file(s)
     service_account:
       - /home/resoto/.gcp/service-account-1.json
       - /home/resoto/.gcp/service-account-2.json
   # highlight-end
   ...
   ```

</TabItem>
<TabItem value="automatic-discovery" label="Automatic Discovery">

You can specify an empty string for the service account file, and Resoto will automatically discover the service account and all the projects it has access to.

1. Open the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs) in [Resoto Shell](../../concepts/components/shell):

   ```bash
   > config edit resoto.worker
   ```

2. Modify the `gcp` section of the configuration as follows:

   ```yaml title="Resoto Worker configuration"
   resotoworker:
     ...
   ...
   gcp:
     ...
   # highlight-start
     # GCP service account file(s)
     service_account:
       - ''
   # highlight-end
   ...
   ```

</TabItem>
</Tabs>

## Resource Collection

By default, Resoto performs resource collection each hour. To immediately trigger a collect run, use the [`workflow run` command](../../reference/cli/action-commands/workflows/run.md) in [Resoto Shell](../../concepts/components/shell):

```bash
> workflow run collect
```

Once the collect run completes, you can view a summary of collected <abbr title="Google Cloud Platform">GCP</abbr> resources using the following search:

```bash
> search is(gcp_resource) | count kind
```
