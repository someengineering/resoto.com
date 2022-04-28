---
slug: shell
sidebar_position: 4
sidebar_label: Shell
---

# Resoto Shell

The `resh` command starts [Resoto Shell (`resotoshell`)](https://github.com/someengineering/resoto/tree/main/resotoshell), which is used to interact with [`resotocore`](./core.md).

Resoto Shell allows you to explore the graph, find resources of interest, mark them for cleanup, fix their tagging, aggregate over their metadata to create metrics, and format the output for use in a third-party script or system.

Please refer to the [Command-Line Interface (CLI) reference section](../../reference/cli/index.md) for details on how to use Resoto Shell.

```bash title="Resoto Shell Docker image"
somecr.io/someengineering/resotoshell:{{latestRelease}}
```

## Usage

`resh` uses the following commandline arguments:

```
  --resotocore-uri RESOTOCORE_URI
                        resotocore URI (default: https://localhost:8900)
  --resotocore-section RESOTOCORE_SECTION
                        All queries are interpreted with this section name. If not set, the server default is used.
  --resotocore-graph RESOTOCORE_GRAPH
                        The name of the graph to use by default. If not set, the server default is used.
  --download-directory DOWNLOAD_DIRECTORY
                        If files are received, they are written to this directory.
  --no-color            Output should be rendered plain without any color escape sequences.
  --stdin               Read from STDIN instead of opening a shell
  --verbose, -v         Verbose logging
  --quiet               Only log errors
  --psk PSK             Pre-shared key
  --ca-cert CA_CERT     Path to custom CA certificate file
  --no-verify-certs     Turn off certificate verification
```

ENV Prefix: `RESOTOSHELL_` Every CLI arg can also be specified using ENV variables.

For instance `--resotocore-uri https://foobar.tld:8900` would become `RESOTOSHELL_RESOTOCORE_URI=https://foobar.tld:8900`.

## Examples

### Basics

Enter `help` into `resh` to get an overview of all available commands

Using `help` followed by a command will provide more information about that command.

### Intermediate

Show all storage volumes that are in use

```
> search is(volume) and volume_status = in-use
```

Show all storage volumes in use and format the output as CSV

```
> search is(volume) and volume_status = in-use | format {kind},{id},{name},{ctime}
```

Show all storage volumes not in use with a size of more than 10 GB

```
> search is(volume) and volume_status = available and volume_size > 10
```

### Advanced

Find volumes in cloud AWS that are in use

```
> search is(volume) and volume_status = in-use and /ancestors.cloud.reported.name = aws
```

Alternatively instead of filtering for storage volumes of the generic `volume` kind we can also be more specific

```
> search is(aws_ec2_volume) and volume_status = in-use
```

Find unused AWS volumes older than 30 days with no I/O in the past 7 days

```
> search is(aws_ec2_volume) and volume_status = available and ctime < -30d and atime < -7d and mtime < -7d
```

Find more usage examples in [the performing searches section](../../getting-started/performing-searches.md).
