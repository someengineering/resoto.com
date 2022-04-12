---
sidebar_position: 3
pagination_prev: getting-started/index
pagination_next: getting-started/performing-searches
---

# Configuring Resoto

Resoto uses an internal configuration system to configure all [components](../concepts/components/index.md). Configuration is maintained within [Resoto Core](../concepts/components/core.md) and can be edited using [Resoto Shell (`resh`)](../concepts/components/shell.md) using the [`config edit` command](../reference/cli/configs/edit.md).

:::note

In the code blocks below, `$` at the beginning of a line denotes that a command is to be run on the normal shell ([Bash](https://gnu.org/software/bash), [Zsh](https://zsh.org/), etc.).

Lines beginning with `>` should be executed inside [Resoto Shell (`resh`)](../concepts/components/shell.md).

:::

## Listing Configurations

```bash title="Start the Resoto Shell"
$ resh
```

```bash title="List all available configurations"
> configs list
```

Resoto automatically creates the following configurations by default:

- `resoto.core`
- `resoto.core.commands`
- `resoto.worker`
- `resoto.metrics`

## Editing Configuration

```bash title="Start the Resoto Shell"
$ resh
```

```bash title="Edit the Resoto Worker configuration"
> config edit resoto.worker
```

Upon execution of the above command, [Resoto Shell](../concepts/components/shell.md) presents the specified configuration in [YAML format](https://yaml.org) using the local text editor as defined by the `EDITOR` environment variable.

```yml title="Example Resoto Worker configuration"
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

## Setting Individual Properties

Instead of editing a component's configuration in a text editor, it is also possible to set the values of specific properties using the [`config set` command](../reference/cli/configs/set.md).

```bash title="Start the Resoto Shell"
$ resh
```

```bash title="Modify a specific property of the Resoto Worker configuration"
> config set resoto.worker resotoworker.pool_size=5
```

## Overriding Individual Properties

Resoto also has support for overriding configuration. Overrides allow for values like passwords, credentials, and API keys to be retrieved from a secure credential store and passed into the environment, rather than being stored as plain text inside Resoto's database.

There are two ways to overriding configuration properties:

- `--override` flag

  ```bash
  $ resotoworker --override resotoworker.pool_size=5 resotoworker.cleanup_pool_size=20
  ```

- `<COMPONENT_NAME>_OVERRIDE` environment variable

  ```bash
  $ export RESOTOWORKER_OVERRIDE=resoto.worker.pool_size=5
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

## Restoring the Default Configuration

Default configurations can be restored simply by deleting the configuration and restarting the component.

```bash title="Delete the Resoto Worker configuration"
> config delete resoto.worker
```

```bash title="Restart Resoto Worker"
$ resotoworker
```
