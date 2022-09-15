---
sidebar_label: DigitalOcean
---

# Configure DigitalOcean Access

```mdx-code-block
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
```

The [DigitalOcean](../../reference/data-models/digitalocean.md) collector is configured within the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs/index.md) in [Resoto Shell](../../concepts/components/shell.md):

```bash
> config edit resoto.worker
```

Add `digitalocean` to the list of collectors by modifying the configuration as follows:

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

## Authentication

DigitalOcean uses [access tokens](https://cloud.digitalocean.com/account/api/tokens) to authenticate API requests. You can provide your access tokens to Resoto via configuration or environment variables.

### Using Resoto Configuration

Open the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs) in [Resoto Shell](../../concepts/components/shell):

```bash
> config edit resoto.worker
```

Modify the `digitalocean` section of the configuration as follows, adding your API tokens and/or access keys:

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

### Using Environment Variables

Instead of specifying API tokens or secret access keys in the [Resoto Worker configuration](../../reference/configuration/index.md) directly, it is possible to define them using the [`--override` flag or `RESOTOWORKER_OVERRIDE` environment variable](../../index.md#overriding-individual-properties):

<Tabs groupId="install-method">
<TabItem value="docker" label="Docker">

- Add environment variable definitions to the `resotoworker` service in `docker-compose.yaml`:

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
$ docker compose up -d
```

</TabItem>
<TabItem value="k8s" label="Kubernetes">

- Create a secret:

```bash
$ kubectl -n resoto create secret generic resoto-auth \
  --from-literal=RESOTOWORKER_OVERRIDE="digitalocean.api_tokens=dop_v1_e5c759260e6a43f003f3b53e2cfec79cxxxxxxxxxxxxxxxxxxxxxxxx"
```

- Update the Helm `resoto-values.yaml` file as follows:

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

Export the `RESOTOWORKER_OVERRIDE` environment variable:

```bash
$ export RESOTOWORKER_OVERRIDE="digitalocean.api_tokens=dop_v1_e5c759260e6a43f003f3b53e2cfec79cxxxxxxxxxxxxxxxxxxxxxxxx"
```

and restart the `resotoworker` process.

</TabItem> 
</Tabs>

## Resource Collection

By default, Resoto performs resource collection each hour. To immediately trigger a collect run, use the [`workflow run` command](../../reference/cli/action-commands/workflows/run.md) in [Resoto Shell](../../concepts/components/shell):

```bash
> workflow run collect
```

Once the collect run completes, you can view a summary of collected DigitalOcean resources using the following search:

```bash
> search is(digitalocean_resource) | count kind
```
