---
authors: [lukas]
tags: [infrastructure, apps]
image: ./img/banner-social.png
---

```mdx-code-block
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
```

# Building Infrastructure Apps with Resoto

Last time we talked about [building actionable cloud infrastructure metrics](../06-09-building-actionable-cloud-infrastructure-metrics/index.md) and learned how to create metrics, export them into a time series database, and visualize them with Grafana. This time we'll take a look at how to take the next step. Instead of just clicking together a dashboard, limited by the components Grafana provides, we'll write some Python code to build our own infrastructure app.

![Sheep looking inside a black box](./img/banner.png)

If you are not super familiar with Python, don't worry. We'll keep it simple and under 100 lines of code. In the Prerequisites we'll show you how to install Python and give a brief overview of the few coding techniques that we are going to apply. Looking at the code ahead, the only thing we're going to do is some variable assignment and function calls. If you have ever written even a simple shell or batch script, you will be able to follow along.

<!--truncate-->

## Prerequisites

### Installing Python and Pip

The only things we need to get started are Python and Pip, the Python package installer.

<Tabs>
<TabItem value="windows" label="Windows">

<Tabs>
<TabItem value="windows-chocolatey" label="Chocolatey">

If you have [Chocolatey](https://chocolatey.org/) installed you can install Python with the following command:

```powershell
choco install python
```

</TabItem>
<TabItem value="windows-download" label="Download">

You can download the latest version from [python.org](https://www.python.org/downloads/).

![Download Python from python.org](img/download-python-windows.png)

</TabItem>
</Tabs>

</TabItem>
<TabItem value="macos" label="macOS">

<Tabs>
<TabItem value="macos-homebrew" label="Homebrew">

If you have [Homebrew](https://brew.sh/) installed you can install Python with the following command:

```sh
$ brew install python
```

Enter this command in the `Terminal` app, which can be found in the `Utilities` folder of the `Applications` folder.

![Terminal app in the Utilities folder of the Applications folder](img/finder-terminal.png)

</TabItem>
<TabItem value="macos-download" label="Download">

You can download the latest version from [python.org](https://www.python.org/downloads/).

![Download Python from python.org](img/download-python-macos.png)

</TabItem>
</Tabs>

</TabItem>
<TabItem value="linux" label="Linux">

On Linux there is a good chance your distribution already comes with a version of Python 3.x installed. If you are not sure, you can check with the following command:

```bash
$ python3 --version
# highlight-start
​Python 3.10.4
# highlight-end
```

If instead of the version the command returns an error, you can install Python and pip (the Python package installer) using your distribution's package manager.

<Tabs>
<TabItem value="linux-fedora" label="Fedora/CentOS">

```bash
$ sudo dnf install python3 python3-pip
```

</TabItem>
<TabItem value="linux-debian" label="Debian/Ubuntu">

```bash
$ sudo apt update
$ sudo apt install python3 python3-pip
```

</TabItem>
</Tabs>

</TabItem>
</Tabs>

## Getting Started

If you are new to Resoto, [start the Resoto stack](/docs/getting-started/install-resoto) and [configure it to collect your cloud accounts](/docs/getting-started/configure-cloud-provider-access).

[Install Resoto](/docs/getting-started/install-resoto) and build your own infrastructure app today! ✨
