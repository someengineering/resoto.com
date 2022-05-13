---
sidebar_position: 3
sidebar_label: Installing with Python pip
pagination_prev: getting-started/index
pagination_next: getting-started/configuring-resoto
---

# Installing with Python `pip`

```mdx-code-block
import LatestRelease from '@site/src/components/LatestRelease';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
```

We are going to install Resoto manually on a Linux server using [Python `pip`](https://pip.pypa.io/). Pip is the package installer for Python.

## Prerequisites

- [Python](https://python.org) 3.9+ (3.10 is recommended)
- [ArangoDB](https://arangodb.com) 3.8.4+
- [Prometheus](https://prometheus.io) 2.35.0+

:::note

Resoto is doing a lot of CPU intense graph operations. For a production setup we recommend running `resotocore` using [the PyPy Python interpreter](https://www.pypy.org/). On average, PyPy is 4.5 times faster than CPython (the reference Python implementation). When using Resoto in Docker we are already shipping it with PyPy by default.

:::

## Installing Resoto

Resoto consists of multiple [components](../concepts/components/index.md) that are published as individual Python packages:

1. [📦](https://pypi.org/project/resotocore/) `resotocore` maintains the infrastructure graph.
2. [📦](https://pypi.org/project/resotoworker/) `resotoworker` collects infrastructure data from the cloud provider APIs.
3. [📦](https://pypi.org/project/resotometrics/) `resotometrics` exports metrics in Prometheus format.
4. [📦](https://pypi.org/project/resotoshell/) `resotoshell` is the command-line interface (CLI) used to interact with Resoto.
5. [📦](https://pypi.org/project/resoto-plugins/) `resoto-plugins` a collection of worker plugins.

```bash title="Installing Resoto using pip"
$ mkdir -p ~/resoto
$ cd ~/resoto
$ python3 -m venv resoto-venv      # Create a virtual Python environment.
$ source resoto-venv/bin/activate  # Activate the virtual Python environment.
$ python -m ensurepip --upgrade    # Ensure pip is available.
$ pip install -U resotocore resotoworker resotometrics resotoshell resoto-plugins
# Generate two random passphrases. One to secure the graph database and one to secure resotocore with.
$ echo $(< /dev/urandom tr -dc _A-Z-a-z-0-9 | head -c${1:-20}) > .graphdb-password
$ echo $(< /dev/urandom tr -dc _A-Z-a-z-0-9 | head -c${1:-20}) > .pre-shared-key
$ chmod 600 .graphdb-password .pre-shared-key
```

## Installing ArangoDB

Follow [the ArangoDB installation instructions](https://www.arangodb.com/docs/stable/getting-started-installation.html) for your Linux distribution. Also read the [Linux Operating System Configuration](https://www.arangodb.com/docs/stable/installation-linux-osconfiguration.html) guide for optimal database performance.

A copy'paste ready snipped that worked at the time of writing this documentation:

```bash
$ mkdir -p $HOME/resoto/arangodb $HOME/resoto/data
$ cd ~/resoto
$ curl -L -o arangodb3.tar.gz https://download.arangodb.com/arangodb39/Community/Linux/arangodb3-linux-3.9.1.tar.gz
$ tar xzf arangodb3.tar.gz --strip-components=1 -C arangodb
$ rm -f arangodb3.tar.gz
$ arangodb/bin/arangod --database.directory $HOME/resoto/data
```

This will start ArangoDB on the current shell which is useful for testing. Once Resoto Core starts it will automatically secure the ArangoDB installation using the password provided in the `.graphdb-password` file (unless explicitly turned off using the `--graphdb-bootstrap-do-not-secure` flag).

Read the section [Securing ArangoDB](../concepts/security.md#custom-certificates) for details on how to generate certificates and encrypt the connection between Resoto Core and the graph database.

## Running Resoto

Create multiple shells/tabs and run each component in a separate shell:

<Tabs>
<TabItem value="resotocore" label="resotocore">

```bash
$ graphdb_password=$(< $HOME/resoto/.graphdb-password)
$ pre_shared_key=$(< $HOME/resoto/.pre-shared-key)
$ source $HOME/resoto/resoto-venv/bin/activate
$ resotocore --graphdb-password "$graphdb_password" --graphdb-server http://localhost:8529 --psk "$pre_shared_key"
```

</TabItem>
<TabItem value="resotoworker" label="resotoworker">

```bash
$ pre_shared_key=$(< $HOME/resoto/.pre-shared-key)
$ source $HOME/resoto/resoto-venv/bin/activate
$ resotoworker --resotocore-uri https://localhost:8900 --psk "$pre_shared_key"
```

</TabItem>
<TabItem value="resotometrics" label="resotometrics">

```bash
$ pre_shared_key=$(< $HOME/resoto/.pre-shared-key)
$ source $HOME/resoto/resoto-venv/bin/activate
$ resotometrics --resotocore-uri https://localhost:8900 --psk "$pre_shared_key"
```

Resoto now exposes Prometheus metrics at `https://localhost:9955/metrics`. Follow [the Prometheus Getting Started guide](https://prometheus.io/docs/prometheus/latest/getting_started/) to install and configure a Prometheus server.

</TabItem>
</Tabs>

## Launching the Command-Line Interface

The `resh` command starts an interactive shell session with Resoto. To access the [Resoto Shell](../concepts/components/shell.md) interface, simply execute:

```bash
$ pre_shared_key=$(< $HOME/resoto/.pre-shared-key)
$ source $HOME/resoto/resoto-venv/bin/activate
$ resh --resotocore-uri https://localhost:8900 --psk "$pre_shared_key"
```

### Configuring Resoto

Please refer to the [Configuring Resoto Cloud Providers](./configuring-resoto.md#configuring-cloud-providers) tutorial for details.

### Collecting Cloud Resources

Once one or more cloud providers have been configured the `collect_and_cleanup` workflow can be run by executing:

```
> workflow run collect_and_cleanup
```

No worries, no cleanup will be performed as cleanup is disabled by default. It is just the name of the [workflow](../concepts/automation/workflow.md). Read [Resource Cleanup](cleanup.md) for details on how to enable cleanup.

### Performing Searches

Once Resoto has completed its first collect run, you can try [performing some searches](./performing-searches.md).

## Updating Resoto

When a new version of Resoto is available, simply run `pip install --upgrade`:

```bash
$ pip install --upgrade resotocore resotoworker resotometrics resotoshell resoto-plugins
```
