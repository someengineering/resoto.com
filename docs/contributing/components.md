---
sidebar_label: Components
---

```mdx-code-block
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

# Contributing to Components

The source code for Resoto lives in the [`someengineering/resoto` repository on GitHub](https://github.com/someengineering/resoto).
Resoto consists of multiple components, where each component is maintained as separate project.
A change should target one of the components.

- [Resoto Core](https://github.com/someengineering/resoto/tree/main/resotocore)
- [Resoto Shell](https://github.com/someengineering/resoto/tree/main/resotoshell)
- [Resoto Worker](https://github.com/someengineering/resoto/tree/main/resotoworker)
- [Resoto Metrics](https://github.com/someengineering/resoto/tree/main/resotometrics)
- [Resoto Library](https://github.com/someengineering/resoto/tree/main/resotolib)

## Authoring Changes

Contributions are made via [pull requests to the GitHub repository](https://github.com/someengineering/resoto/pulls).
You will first need to [fork](https://docs.github.com/get-started/quickstart/fork-a-repo) the repository.

#### Prerequisites

- [Git](https://git-scm.com)
- [Python](https://python.org) 3.8+ (3.10 is recommended)
- [ArangoDB](https://arangodb.com) 3.8.2+
- [GNU Compiler Collection (GCC)](https://gcc.gnu.org) (depending on the host system, Python dependencies may need to be compiled from source)

#### Setting Up a Virtual Environment

We recommend using a [Python virtual environment](https://docs.python.org/3/tutorial/venv.html).

A script is provided to simplify the process of configuring the virtual environment:

```bash
./setup_venv.sh --dev --path .
```

Activate the virtual environment:

```mdx-code-block
<Tabs>
  <TabItem value="linux" label="Linux/macOS">
    <CodeBlock language="bash">source venv/bin/activate</CodeBlock>
  </TabItem>
  <TabItem value="windows" label="Windows">
    <CodeBlock language="powershell">venv\Scripts\activate.bat</CodeBlock>
  </TabItem>
</Tabs>
```

#### Starting the Database

After you have installed ArangoDB, you need to start it.
The way the database is started depends on the way it has been installed (`systemctl` on Linux, clicking the application icon on macOS, etc.).

**The expected default access is the built-in user account `root` with a configured empty string as password.**
No additional settings are required in such a setup, since `resotocore` will use this access to create all necessary items.
This setting is required for tests to pass, as the tests create users and databases.

:::caution
This setup is for development only and should not be deployed in production environments.
:::

#### Start components locally

You can now start each of the Resoto components:

```mdx-code-block
<Tabs>
  <TabItem value="core" label="Core (resotocore)">
    <CodeBlock language="bash">
      cd resotocore{'\n'}
      python -m core
    </CodeBlock>
  </TabItem>
  <TabItem value="shell" label="Shell (resh)">
    <CodeBlock language="bash">
      cd resotoshell{'\n'}
      python -m resotoshell
    </CodeBlock>
  </TabItem>
  <TabItem value="worker" label="Worker (resotoworker)">
    <CodeBlock language="bash">
      cd resotoworker{'\n'}
      python -m resotoworker
    </CodeBlock>
  </TabItem>
  <TabItem value="metrics" label="Metrics (resotometrics)">
    <CodeBlock language="bash">
      cd resotometrics{'\n'}
      python -m resotometrics
    </CodeBlock>
  </TabItem>
</Tabs>
```

#### Testing Your Changes

We use the [`pytest`](https://pytest.org) framework. Prior to submitting your changes for review, please verify that all existing tests pass and add test coverage for new code.

Lint and test your code:

```shell
tox
```

You can now [submit your pull request on GitHub](https://github.com/someengineering/resoto/pulls)! You are welcome to [open your pull request as a draft](https://docs.github.com/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests#draft-pull-requests) for early feedback and review. Be sure to follow the pull request template!
