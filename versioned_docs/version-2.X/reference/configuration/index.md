# Configuration

```mdx-code-block
import DocCardList from '@theme/DocCardList';
```

## Internal Configuration

Resoto uses an internal configuration system for its [components](../../concepts/components/index.md). Configuration is maintained within [Resoto Core](../../concepts/components/core.md) and can be edited using [Resoto Shell](../../concepts/components/shell.md) using the [`config edit` command](../cli/setup-commands/configs/edit.md).

### Listing Configurations

```bash title="Start the Resoto Shell"
$ resh --psk changeme --resotocore-uri https://resotocore.resoto.svc.cluster.local:8900
```

:::note

Be sure to adjust the above PSK and Resoto Core URI arguments to reflect your setup!

:::

```bash title="List available configurations"
> configs list
```

Resoto automatically creates the following configurations by default:

- `resoto.core`
- `resoto.core.commands`
- `resoto.worker`
- `resoto.metrics`

<DocCardList />

### Editing Configuration

```bash title="Edit the Resoto Worker configuration"
> config edit resoto.worker
```

Upon execution of the above command, [Resoto Shell](../../concepts/components/shell.md) presents the specified configuration in [YAML format](https://yaml.org) using the local text editor as defined by the [`EDITOR` environment variable](#text-editor).

```yaml title="Example Resoto Worker configuration"
resotoworker:
  # Enable cleanup of resources
  cleanup: false
  # Do not actually cleanup resources, just create log messages
  cleanup_dry_run: true
  # How many cleanup threads to run in parallel
  cleanup_pool_size: 16
  # List of collectors to run
  collector:
    - aws
    - gcp
    - k8s
  # Dump the generated JSON data to disk
  debug_dump_json: false
  # Use forked process instead of threads
  fork_process: true
  # Name of the graph to import data into and run searches on
  graph: resoto
  # Resource kind to merge graph at (cloud or account)
  graph_merge_kind: cloud
  # Collector thread/process pool size
  pool_size: 5
  # Directory to create temporary files in
  tempdir: null
  # Collection/cleanup timeout in seconds
  timeout: 10800
  # IP address to bind the web server to
  web_host: '::'
  # Web root in browser (change if running behind an ingress proxy)
  web_path: /
  # Web server tcp port to listen on
  web_port: 9956
  ...
...
```

:::note

While the configuration is presented in [YAML format](https://yaml.org) for easy editing, all configuration is stored within Resoto's database in a data structure following a strictly typed model.

This means that you will get an error if, for instance, you attempt to set the value of `resotoworker.pool_size` to `foobar`, because `pool_size` is of type `int`.

:::

### Setting Individual Properties

Instead of editing a component's configuration in a text editor, it is also possible to set the values of specific properties using the [`config set` command](../cli/setup-commands/configs/set.md).

```title="Modify a specific property of the Resoto Worker configuration"
> config set resoto.worker resotoworker.pool_size=5
```

### Overriding Individual Properties

Resoto also has support for overriding configuration. Overrides allow for values like passwords, credentials, and API keys to be retrieved from a secure credential store and passed into the environment, rather than being stored as plain text inside Resoto's database.

There are two ways to overriding configuration properties:

1. `--override` flag

   ```bash
   $ resotoworker --override resotoworker.pool_size=5 resotoworker.cleanup_pool_size=20
   ```

2. `<COMPONENT_NAME>_OVERRIDE` environment variable

   ```bash
   $ export RESOTOWORKER_OVERRIDE=resotoworker.pool_size=5
   $ resotoworker
   ```

It is possible to override multiple values by delimiting them with a space:

```bash
$ export RESOTOWORKER_OVERRIDE="resotoworker.pool_size=5 resotoworker.cleanup_pool_size=20"
$ resotoworker
```

Alternatively, if a value contains a space, it is also possible to use separate, enumerated environment variables:

```bash
$ export RESOTOWORKER_OVERRIDE0=resotoworker.pool_size=5
$ export RESOTOWORKER_OVERRIDE1=resotoworker.cleanup_pool_size=20
$ resotoworker
```

#### Overriding List Properties

If the property type is a list/an array, it is possible to specifying multiple values as a comma-separated list of values:

```bash
  $ resotocore --override resotocore.api.web_hosts=127.0.0.1,10.0.0.1
```

or

```bash
  $ export RESOTOCORE_OVERRIDE=resotocore.api.web_hosts=127.0.0.1,10.0.0.1
```

### Restoring Defaults

Default configurations can be restored simply by deleting the configuration and restarting the component.

```bash title="Delete the Resoto Worker configuration"
> config delete resoto.worker
```

```bash title="Restart Resoto Worker"
$ resotoworker
```

## Environment Variables

### Text Editor

The text editor opened by [Resoto Shell](../../concepts/components/shell.md) can be configured via the `EDITOR` environment variable.

For [Docker installs](../../getting-started/install-resoto/local/docker.md), the default text editor is [nano](https://nano-editor.org).

```bash
$ export EDITOR=nano
```

### Logging Format

Resoto components produce logs in JSON format by default, with the exception of [Resoto Shell](../../concepts/components/shell.md).

The rationale behind this behavior is that [Core](../../concepts/components/core.md), [Worker](../../concepts/components/worker.md), and [Metrics](../../concepts/components/metrics.md) are likely running on something like a Kubernetes cluster in a data center, with logs ingested by a central logging system. [Resoto Shell](../../concepts/components/shell.md), on the other hand, is executed on a user's local machine so the log output is formatted for readability.

JSON-format logging can be disabled via the `RESOTO_LOG_TEXT` environment variable:

```bash
$ export RESOTO_LOG_TEXT=true
```
