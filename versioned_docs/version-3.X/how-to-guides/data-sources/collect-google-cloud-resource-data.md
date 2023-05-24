---
sidebar_label: Collect Google Cloud Resource Data
---

# How to Collect Google Cloud Resource Data

```mdx-code-block
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
```

The [Google Cloud](../../reference/data-models/gcp.md) collector is configured within the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs/index.md) in [Resoto Shell](../../reference/components/shell.md).

## Prerequisites

This guide assumes that you have already [installed](../../getting-started/install-resoto/index.md) Resoto.

## Directions

### 1. Enable the Google Cloud Collector

1. Open the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs) in [Resoto Shell](../../reference/components/shell):

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

### 2. Authenticate with Google Cloud

**You can authenticate with [Google Cloud](../../reference/data-models/gcp.md) via service account JSON files or automatic discovery.**

<Tabs>
<TabItem value="service-account-json" label="Service Account JSON">

1. Open the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs) in [Resoto Shell](../../reference/components/shell):

```bash
> config edit resoto.worker
```

2. Add the contents of your service account JSON file(s) to the `resotoworker` section of the configuration as follows:

   ```yaml title="Resoto Worker configuration"
   resotoworker:
     ...
   # highlight-start
     write_files_to_home_dir:
       - path: ~/.gcp/service-account-1.json
         content: |
           {
           "type": "service_account",
           "project_id": "example",
           "private_key_id": "7fe5157943fc7fe5157943fc7fe5157943fc",
           "private_key": "-----BEGIN PRIVATE KEY-----\n<private key>\n-----END PRIVATE KEY-----\n",
           "client_email": "account@example.iam.gserviceaccount.com",
           "client_id": "123456789123456789",
           "auth_uri": "https://accounts.google.com/o/oauth2/auth",
           "token_uri": "https://oauth2.googleapis.com/token",
           "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
           "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/account%40example.iam.gserviceaccount.com"
         }
       - path: ~/.gcp/service-account-2.json
         content: |
           {
             ...
           }
   # highlight-end
   ...
   ```

   :::note

   If you do not wish to save the contents of your service account JSON file(s) to Resoto's database, you can alternatively [mount the directory containing your service account JSON file(s) to the `resotoworker` container](../../reference/configuration/worker#mounting-configuration-files-to-container-based-installations).

   :::

   :::info

   Since Resoto is running on your local machine, it can access the file(s) directly. Move or copy your service account JSON file(s) to the `~/.gcp` directory.

   :::

3. Modify the `gcp` section of the configuration as follows, adding the paths to your service account JSON file:

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

   :::note

   The above example assumes that your service account JSON file(s) are named `service-account-1.json`, `service-account-2.json`, etc.

   :::

</TabItem>
<TabItem value="automatic-discovery" label="Automatic Discovery">

You can specify an empty string for the service account file, and Resoto will automatically discover the service account and all the projects it has access to.

1. Open the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs) in [Resoto Shell](../../reference/components/shell):

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

### 3. Trigger Resource Collection

1. By default, Resoto performs resource collection each hour. To immediately trigger a collect run, use the [`workflow run` command](../../reference/cli/action-commands/workflows/run.md) in [Resoto Shell](../../reference/components/shell):

   ```bash
   > workflow run collect
   ```

2. Once the collect run completes, you can view a summary of collected [Google Cloud resources](../../reference/data-models/gcp.md) using the following search:

   ```bash
   > search is(gcp_resource) | count kind
   ```
