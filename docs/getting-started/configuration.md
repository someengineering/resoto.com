# Resoto configuration crash course

Resoto is using an internal configuration system to configure all components. Configuration is maintained in [`resotocore`](../concepts/components/core.md) and can be edited in [`resotoshell` (`resh`)](../concepts/components/shell.md) using the `config edit` command. See `help config` for an in-shell overview.

:::note

In the examples below lines starting with `$` mean that the command after is to be run on the normal shell (bash, zsh, etc.).
Lines starting with `>` mean that the command is to be run inside `resotoshell` (`resh`).

:::


## Listing configs

```bash title="List all available configs"
$ resh

> configs list
```

By default Resoto creates three configs:
- `resoto.core`
- `resoto.worker`
- `resoto.metrics`


## Interactively editing configuration

```bash title="Editing the resotoworker configuration"
$ resh

> config edit resoto.worker
```

Configuration will be presented as YAML format. `resh` will open the default `$EDITOR` to edit the config.

Example output:
```yaml
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

Note that while the configuration is presented in YAML format for easy editing, inside Resoto all config is stored in a data structure following a strictly typed model. This means that if for instance you try to set `resotoworker.pool_size=foobar` you will get an error because the `pool_size` field is of type `int`.

:::


## Interactively setting individual configuration properties

```bash title="Editing the resotoworker configuration"
$ resh

> config set resoto.worker resotoworker.pool_size=5
```


## Overriding individual configuration properties

Resoto has support for overriding configuration.
The idea behind this function is that values like passwords, credentials or API keys should not be stored in plain-text inside Resoto but rather retrieved from a secure credential store and passed into the environment.

There are two ways of overriding configuration properties. Either using the `--override` flag or using the `<COMPONENTNAME>_OVERRIDE` environment variable.

```bash title="Overriding resotoworker configuration using cli flag"
$ resotoworker --override resotoworker.pool_size=5 resotoworker.cleanup_pool_size=20
```

```bash title="Overriding resoto.worker configuration using env vars"
$ export RESOTOWORKER_OVERRIDE=resoto.worker.pool_size=5
$ resotoworker
```

Multiple values can be overridden by either space separating them or if the value contains a space by using separate, enumerated variable names.

```bash title="Overriding multiple configuration properties space separated"
$ export RESOTOWORKER_OVERRIDE="resotoworker.pool_size=5 resotoworker.cleanup_pool_size=20"
$ resotoworker
```

or

```bash title="Overriding multiple configuration properties enumerated"
$ export RESOTOWORKER_OVERRIDE0=resotoworker.pool_size=5
$ export RESOTOWORKER_OVERRIDE1=resotoworker.cleanup_pool_size=20
$ resotoworker
```


## Restoring default configuration

If config ever gets into a broken state the defaults can be restored simply by deleting the current config and restarting the component.
```bash title="Overriding multiple configuration properties space separated"
> config delete resoto.worker

$ resotoworker
```
