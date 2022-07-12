---
sidebar_label: Google Cloud Platform
---

# Configure Google Cloud Platform Access

The [Google Cloud Platform (GCP)](../../reference/data-models/gcp.md) collector is configured within the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](/docs/reference/cli/configs) in [Resoto Shell](/docs/concepts/components/shell):

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

Volume mount the service account JSON file to a path inside the `resotoworker` container (e.g., `/gcp`) and modify the [Resoto Worker configuration](../../reference/configuration/index.md) as follows:

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

Specify an empty string for the service account file, and Resoto will automatically discover the service account and all the projects it has access to.

Modify the [Resoto Worker configuration](../../reference/configuration/index.md) as follows:

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
