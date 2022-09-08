---
sidebar_label: DigitalOcean
---

# Configure DigitalOcean Access

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

:::note

Instead of specifying API tokens or secret access keys in the [Resoto Worker configuration](../../reference/configuration/index.md) directly, it is possible to define them using the [`--override` flag or `RESOTOWORKER_OVERRIDE` environment variable](../../index.md#overriding-individual-properties):

```bash title="Example"
RESOTOWORKER_OVERRIDE="digitalocean.api_tokens=dop_v1_e5c759260e6a43f003f3b53e2cfec79cxxxxxxxxxxxxxxxxxxxxxxxx"
```

This is especially useful in cases where tokens are stored as secrets in a system such as [Vault](https://vaultproject.io).

:::

## Resource Collection

By default, Resoto performs resource collection each hour. To immediately trigger a collect run, use the [`workflow run` command](../../reference/cli/action-commands/workflows/run.md) in [Resoto Shell](../../concepts/components/shell):

```bash
> workflow run collect
```

Once the collect run completes, you can view a summary of collected DigitalOcean resources using the following search:

```bash
> search is(digitalocean_resource) | count kind
```
