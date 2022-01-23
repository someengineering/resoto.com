---
sidebar_label: Documentation
---

# Contributing Documentation

The Resoto website and documentation are built with [Docusaurus](https://docusaurus.io), a static-site generator. The source code lives in the [`someengineering/resoto.com` repository on GitHub](https://github.com/someengineering/resoto.com).

## Authoring Changes

Contributions are made via [pull requests to the GitHub repository](https://github.com/someengineering/resoto.com/pulls). Changes can be authored via the [GitHub web interface](#github-web-interface) (easy) or [your favorite `git` client](#git) (recommended).

If your changes modify non-Markdown files, it is strongly recommended to work on a local clone of the repository rather than within the GitHub web interface.

### GitHub Web Interface

On the bottom of all documentation pages, there is an "**Edit this page**" link.

Simply click the link, make your changes, and select the "**Create a new branch for this commit and start a pull request.**" option at the bottom of the page.

For supported Markdown features, please refer to the [Docusaurus documentation](https://docusaurus.io/docs/markdown-features).

## Git

### Prerequisites

- [Git](https://git-scm.com)
- Code editor
  - [Visual Studio Code](https://code.visualstudio.com/) is recommended.
- [Node.js](https://nodejs.org)
- [Yarn](https://yarnpkg.com)

### Cloning the Repository

You will first need to [fork](https://docs.github.com/get-started/quickstart/fork-a-repo) the repository.

Then, creating a local [clone](https://docs.github.com/repositories/creating-and-managing-repositories/cloning-a-repository) of the repository is as simple as:

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/resoto.com.git
```

This will create a directory named `resoto.com` in your current working directory.

Next, add a remote pointing to the upstream repository (as opposted to your fork) named `upstream`:

```bash
git remote add upstream https://github.com/someengineering/resoto.com.git
```

We will now create a new [branch](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) from `main` (it is recommended to give your branch a meaningful, descriptive name):

```bash
git checkout -b YOUR_BRANCH_NAME main
```

### Starting the Development Server

We are finally able to get to the fun stuff! 🥳 Install dependencies and start a local development server:

```bash
yarn
yarn start
```

You will notice that `http://localhost:3000` has been opened in your browser, where you can see your changes reflected live.

### Pushing Your Changes

After you are done authoring your changes, be sure to verify that they will pass our [lint](<https://en.wikipedia.org/wiki/Lint_(software)>) and build [continuous integration](https://docs.github.com/actions/automating-builds-and-tests/about-continuous-integration) checks.

```bash
yarn lint
yarn build
```

When you are ready to submit your changes for review, commit them to your local repository:

```bash
git commit
```

Then, push them to your fork:

```bash
git push --set-upstream origin YOUR_BRANCH_NAME
```

You can now [submit your pull request on GitHub](https://github.com/someengineering/resoto.com/pulls)! You are welcome to [open your pull request as a draft](https://docs.github.com/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests#draft-pull-requests) for early feedback and review. Be sure to follow the pull request template!

### Keeping Your Branch Up-to-Date

If there are new commits to the `main` branch of the repository, you can update your branch by rebasing from your `upstream` remote:

```bash
git fetch upstream
git rebase upstream/main
```

To update the branch in your fork, you will then need to force push:

```bash

git push -f origin YOUR_BRANCH_NAME
```
