---
sidebar_label: Google Cloud Platform
---

# Configure Google Cloud Platform Resource Collection

```mdx-code-block
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
```

The [Google Cloud Platform (GCP)](../../reference/data-models/gcp/index.md) collector is configured within the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs/index.md) in [Resoto Shell](../../reference/components/shell.md).

## Enabling the Collector

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

## Authentication

**You can authenticate with [Google Cloud Platform](../../reference/data-models/gcp/index.md) via service account JSON files or automatic discovery.**

<Tabs>
<TabItem value="service-account-json-files" label="Service Account JSON Files">

1. Make your service account JSON file(s) available to Resoto at `/home/resoto/.gcp`:

:::note

If you do not wish to store service account JSON file(s) in the Resoto configuration, you have the option [to mount the directory containing the files onto the container](../../reference/configuration/worker#mounting-configuration-files-using-docker-or-kubernetes).

:::

- Open the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs) in [Resoto Shell](../../reference/components/shell):

  ```bash
  > config edit resoto.worker
  ```

- Add the content of the service account JSON to the `resotoworker` section as follows:

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

  # highlight-end
    ...
  ...
  ```

- Resoto Worker will create the service account JSON file at the specified location.

:::info

This step is not necessary for pip installs. Simply move or copy your service account JSON file(s) to the `~/.gcp` directory. (Since Resoto is running on your local machine, it can access the file(s) directly.)

:::

:::note

The following steps assume that the file(s) are named `service-account-1.json`, `service-account-2.json`, etc.

:::

2. Open the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs) in [Resoto Shell](../../reference/components/shell):

   ```bash
   > config edit resoto.worker
   ```

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

## Resource Collection

By default, Resoto performs resource collection each hour. To immediately trigger a collect run, use the [`workflow run` command](../../reference/cli/action-commands/workflows/run.md) in [Resoto Shell](../../reference/components/shell):

```bash
> workflow run collect
```

Once the collect run completes, you can view a summary of collected <abbr title="Google Cloud Platform">GCP</abbr> resources using the following search:

```bash
> search is(gcp_resource) | count kind
```
