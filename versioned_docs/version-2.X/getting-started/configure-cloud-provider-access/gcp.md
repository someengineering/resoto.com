---
sidebar_label: Google Cloud Platform
---

# Configure Google Cloud Platform Access

```mdx-code-block
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
```

The [Google Cloud Platform (GCP)](../../reference/data-models/gcp.md) collector is configured within the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs/index.md) in [Resoto Shell](../../concepts/components/shell.md):

```bash
> config edit resoto.worker
```

Add `gcp` to the list of collectors by modifying the configuration as follows:

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

You can authenticate with [Google Cloud Platform](../../reference/data-models/gcp.md) via [service account JSON files](#service-account-json-files) or [automatic discovery](#automatic-discovery).

### Service Account JSON Files

1. Provide the files to Resoto based on your installation method.

  <Tabs groupId="install-method">
  <TabItem value="docker" label="Docker">

    - Add the following volume definition to the `resotoworker` service in `docker-compose.yaml`:

      ```yaml title="docker-compose.yaml"
      services:
        ...
        resotoworker:
          image: somecr.io/someengineering/resotoworker:{{imageTag}}
          container_name: resotoworker
          ...
      # highlight-start
          volumes:
            - <path to service account JSON file>:/home/resoto/.gcp/service-account.json
      # highlight-end
        ...
      ...
      ```

    - Recreate the `resotoworker` container with the updated service definition:

      ```bash
      $ docker compose up -d
      ```

  </TabItem>
  <TabItem value="k8s" label="Kubernetes">

    Use Helm values `resotoworker.volumes`, and `resotoworker.volumeMounts` to make the service account JSON file(s) available within the `resotoworker` container.

    - Create a secret. You can add as many secret files as you need by defining multiple `--from-file` arguments.

      ```bash
      $ kubectl -n resoto create secret generic resoto-auth \
        --from-file=service-account.json=<path to service account JSON file>
      ```

    - Update the `resoto-values.yaml` file as follows:

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

    - Deploy these changes:

      ```bash
      $ helm upgrade resoto resoto/resoto --set image.tag={{imageTag}} -f resoto-values.yaml
      ```

  </TabItem>
  <TabItem value="pip" label="pip">
  
    Move the files to the `~/.gcp` directory.
    Resoto is running on the local machine and can access the files directly. No further setup is required.

  </TabItem>
  </Tabs>

2. Open the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs) in [Resoto Shell](../../concepts/components/shell):

   ```bash
   > config edit resoto.worker
   ```

3. Modify the `gcp` section of the configuration as follows, adding the paths to your service account JSON file:

   ```yaml title="Resoto Worker configuration"
   resotoworker:
     ...
   ...
   # highlight-start
   gcp:
     # GCP service account file(s)
     service_account:
       - /home/resoto/.gcp/service-account.json
     ...
   # highlight-end
   ```

### Automatic Discovery

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
   # highlight-start
   gcp:
     ...
     # GCP service account file(s)
     service_account:
       - ''
     ...
   # highlight-end
   ```

## Resource Collection

By default, Resoto performs resource collection each hour. To immediately trigger a collect run, use the [`workflow run` command](../../reference/cli/action-commands/workflows/run.md) in [Resoto Shell](../../concepts/components/shell):

```bash
> workflow run collect
```

Once the collect run completes, you can view a summary of collected <abbr title="Google Cloud Platform">GCP</abbr> resources using the following search:

```bash
> search is(gcp_resource) | count kind
```
