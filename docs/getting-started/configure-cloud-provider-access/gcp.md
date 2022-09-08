---
sidebar_label: Google Cloud Platform
---

# Configure Google Cloud Platform Access

The [Google Cloud Platform (GCP)](../../reference/data-models/gcp.md) collector is configured within the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](/docs/reference/cli/setup-commands/configs) in [Resoto Shell](/docs/concepts/components/shell):

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

First, volume mount the service account JSON file to a path inside the `resotoworker` container (e.g., `/gcp`).

Next, open the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs) in [Resoto Shell](../../concepts/components/shell):

```bash
> config edit resoto.worker
```

Finally, modify the `gcp` section of the configuration as follows, adding the paths to your service account JSON files:

```yaml title="Resoto Worker configuration"
resotoworker:
  ...
...
# highlight-start
gcp:
  # GCP service account file(s)
  service_account:
    - '/gcp/gcp0.json'
    - '/gcp/gcp1.json'
  ...
# highlight-end
```

### Automatic Discovery

You can specify an empty string for the service account file, and Resoto will automatically discover the service account and all the projects it has access to.

Open the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs) in [Resoto Shell](../../concepts/components/shell):

```bash
> config edit resoto.worker
```

Then, modify the `gcp` section of the configuration as follows:

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
