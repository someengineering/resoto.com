---
sidebar_label: DigitalOcean
---

# Configure DigitalOcean Resource Collection

The [DigitalOcean](../../reference/data-models/digitalocean.md) collector is configured within the [Resoto Worker configuration](../../reference/configuration/index.md).

Add `digitalocean` to the list of collectors and define API tokens and/or access keys by modifying the [Resoto Worker configuration](../../reference/configuration/index.md) as follows:

```yaml
resotoworker:
  ...
  # List of collectors to run
  collector:
# highlight-next-line
    - 'digitalocean'
    ...
...
# highlight-start
digitalocean:
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

Once one or more cloud providers have been configured the `collect_and_cleanup` [workflow](../../concepts/automation/workflow.md) can be run by executing:

```bash
> workflow run collect_and_cleanup
```
