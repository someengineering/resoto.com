---
sidebar_position: 3
sidebar_label: Shell
---

# Resoto Shell

The `resh` command starts [Resoto Shell (`resotoshell`)](https://github.com/someengineering/resoto/tree/main/resotoshell), which is used to interact with [`resotocore`](./core.md).

Resoto Shell allows you to explore the graph, find resources of interest, mark them for cleanup, fix their tagging, aggregate over their metadata to create metrics, and format the output for use in a third-party script or system.

Please refer to [Command-Line Interface](../cli/index.md) for details on how to use Resoto Shell.

## Installation

Resoto Shell can be run via Docker or installed via `pip`. On macOS, you can also install it via Homebrew.

```bash title="Resoto Shell Docker image"
somecr.io/someengineering/resotoshell:{{imageTag}}
```

```bash title="Resoto Shell Python 3.9+ PIP install"
pip install --user resotoshell
```

```bash title="Homebrew installation"
brew install someengineering/tap/resotoshell
```

## Usage

### Options

| Option                                      | Description                                                                                 |
| ------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `--resotocore-uri <RESOTOCORE_URI>`         | Resoto Core URI (default: `https://localhost:8900`)                                         |
| `--resotocore-section <RESOTOCORE_SECTION>` | All queries are interpreted with this section name. If not set, the server default is used. |
| `--resotocore-graph <RESOTOCORE_GRAPH>`     | The name of the graph to use by default. If not set, the server default is used.            |
| `--download-directory <DOWNLOAD_DIRECTORY>` | If files are received, they are written to this directory.                                  |
| `--no-color`                                | Output should be rendered plain without any color escape sequences.                         |
| `--stdin`                                   | Read from STDIN instead of opening a shell                                                  |
| `--verbose`, `-v`                           | Verbose logging                                                                             |
| `--quiet`                                   | Only log errors                                                                             |
| `--psk <PSK>`                               | Pre-shared key                                                                              |
| `--ca-cert <CA_CERT>`                       | Path to custom CA certificate file                                                          |
| `--no-verify-certs`                         | Turn off certificate verification                                                           |

### Environment Variables

CLI options can also be set via environment variables. The environment variable name is the same as the option name, but in uppercase with the prefix `RESOTOSHELL_` and dashes replaced by underscores.

For example, `--resotocore-uri https://foobar.tld:8900` would become `RESOTOSHELL_RESOTOCORE_URI=https://foobar.tld:8900`.
