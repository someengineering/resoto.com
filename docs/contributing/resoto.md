---
sidebar_label: Resoto
---

# Contributing to Resoto

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
- [Python](https://www.python.org) Version 3.8 or later is required. We recommend 3.10.
- [ArangoDB](https://www.arangodb.com) Version 3.8.2 or later is required.
- Optional [gcc](https://gcc.gnu.org) Depending on the host system, dependant python packages need to be compiled from source.

#### Setup a virtual environment

We recommend using a Python [virtual environment](https://docs.python.org/3/tutorial/venv.html) to develop.
A script is part of the Resoto code base to simplify this process and will prepare your virtual environment.

```bash
./setup_venv.sh --dev --path .
```

After the virtual env has been created, it needs to be activated.
Linux and macOS:

```bash
source venv/bin/activate
```

or Windows:

```powershell
venv\Scripts\activate.bat
```

#### Start the database

After you have installed ArangoDB, you need to start it.
The default root access is username `root` with no password.
This setup is required for the tests to run, since it will create all the necessary entities, like users and databases.
Please note: this setup is for development only and should not be used in production environments.

#### Start components locally

Once the virtual environment has been created and the database is running, you can also start all Resoto components locally.

Start the core

```shell
cd resotocore
python -m core
```

Start the shell

```shell
cd resotoshell
python -m resotoshell
```

Start the worker

```shell
cd resotowortker
python -m resotowortker
```

Start metrics

```shell
cd resotometrics
python -m resotometrics
```

#### Test your change

After you have made your changes, you can test if everything works as expected.
We are using [pytest](https://docs.pytest.org) and would encourage you to add a test case for the change you have made.
Linting and tests can be invoked manually via:

```shell
tox
```

If everything is green, you can now [submit your pull request on GitHub](https://github.com/someengineering/resoto/pulls)!
You are welcome to [open your pull request as a draft](https://docs.github.com/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests#draft-pull-requests) for early feedback and review.

Our CI pipeline will execute all tests automatically, once the PR is created and allowed.
