---
sidebar_label: Components
---

# Contributing to Components

```mdx-code-block
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
```

The source code for Resoto lives in the [`someengineering/resoto` repository on GitHub](https://github.com/someengineering/resoto).

## Authoring Changes

Contributions are made via [pull requests to the GitHub repository](https://github.com/someengineering/resoto/pulls). You will first need to [fork](https://docs.github.com/get-started/quickstart/fork-a-repo) the repository.

Each Resoto [component](../concepts/components/index.md) is maintained as separate project, and pull requests should target a single component:

- [Resoto Core (`resotocore`)](https://github.com/someengineering/resoto/tree/main/resotocore)
- [Resoto Shell (`resotoshell`)](https://github.com/someengineering/resoto/tree/main/resotoshell)
- [Resoto Worker (`resotoworker`)](https://github.com/someengineering/resoto/tree/main/resotoworker)
- [Resoto Metrics (`resotometrics`)](https://github.com/someengineering/resoto/tree/main/resotometrics)
- [Resoto Library (`resotolib`)](https://github.com/someengineering/resoto/tree/main/resotolib)

### Prerequisites

- [Git](https://git-scm.com)
- [Python](https://python.org) 3.8+ (3.10 is recommended)
- [ArangoDB](https://arangodb.com) 3.8.2+
- [GNU Compiler Collection (GCC)](https://gcc.gnu.org) (depending on the host system, Python dependencies may need to be compiled from source)

### Cloning the Repository

You will first need to [fork](https://docs.github.com/get-started/quickstart/fork-a-repo) the repository.

Then, creating a local [clone](https://docs.github.com/repositories/creating-and-managing-repositories/cloning-a-repository) of the repository is as simple as:

```bash
git clone https://github.com/<your_github_username>/resoto.git
```

This will create a directory named `resoto` in your current working directory.

Next, add a remote pointing to the upstream repository (as opposted to your fork) named `upstream`:

```bash
git remote add upstream https://github.com/someengineering/resoto.git
```

We will now create a new [branch](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) from `main` (it is recommended to give your branch a meaningful, descriptive name):

```bash
git checkout -b <branch_name> main
```

### Setting Up a Virtual Environment

We recommend using a [Python virtual environment](https://docs.python.org/3/tutorial/venv.html).

A script is provided to simplify the process of configuring the virtual environment:

```bash
./setup_venv.sh --dev --path .
```

Activate the virtual environment:

<Tabs>
<TabItem value="linux" label="Linux/macOS">

```bash
source venv/bin/activate
```

</TabItem>
<TabItem value="windows" label="Windows">

```powershell
venv\Scripts\activate.bat
```

</TabItem>
</Tabs>

### Starting the Database

Start ArangoDB (using `systemctl` on Linux, by clicking the application icon in macOS, etc.).

Start [ArangoDB](https://arangodb.com) (using `systemctl` on Linux, by clicking the application icon in macOS, etc.).

Depending on the installation method used for [ArangoDB](https://arangodb.com), [authentication may or may not be enabled on the built-in `root` user account](https://www.arangodb.com/docs/stable/getting-started-installation.html#securing-the-installation). The installation process either prompted for the `root` password (Debian, Windows), configured a random password (Red Hat), or set the password to an empty string.

In order for `resotocore` to perform the required database setup and for tests to pass, authentication must be disabled or the password for `root` must be set to an empty string.

:::caution

This setup is for development only and should not be deployed in production environments.

:::

### Starting the Components

You can now start each of the Resoto components:

<Tabs>
<TabItem value="core" label="Core">

```bash
cd resotocore
python -m core
```

</TabItem>
<TabItem value="shell" label="Shell">

```bash
cd resotoshell
python -m resotoshell
```

</TabItem>
<TabItem value="worker" label="Worker">

```bash
cd resotoworker
python -m resotoworker
```

</TabItem>
<TabItem value="metrics" label="Metrics">

```bash
cd resotometrics
python -m resotometrics
```

</TabItem>
</Tabs>

### Testing Your Changes

We use the [`pytest`](https://pytest.org) framework. Prior to submitting your changes for review, please verify that all existing tests pass and add test coverage for new code.

Lint and test your code:

```bash
tox
```

### Pushing Your Changes

When you are ready to submit your changes for review, commit them to your local repository:

```bash
git commit
```

Then, push them to your fork:

```bash
git push --set-upstream origin <branch_name>
```

You can now [submit your pull request on GitHub](https://github.com/someengineering/resoto/pulls)! You are welcome to [open your pull request as a draft](https://docs.github.com/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests#draft-pull-requests) for early feedback and review. Be sure to follow the pull request template!

:::info

Pull request titles should follow the following format for correct parsing by the [changelog generator script](https://github.com/someengineering/resoto/blob/main/tools/release_notes.py):

```
[<scope>][<type>] <description>
```

| Placeholder     | Description               |
| --------------- | ------------------------- |
| `<scope>`       | Affected component        |
| `<type>`        | `fix`, `feat`, or `chore` |
| `<description>` | Description of changes    |

However, do not worry too much about getting this right, as we will make any necessary adjustments prior to merging your changes.

:::
