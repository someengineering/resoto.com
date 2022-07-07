---
sidebar_label: Create a Custom Command
sidebar_custom_props:
  tags: []
---

# How to Create a Custom Command

## Introduction

Resoto has a powerful [command-line interface](../../reference/cli/index.md) that allows for the definition of [custom commands](../../reference/cli/index.md#custom-commands) using [Mustache](https://mustache.github.io) templates.

## Prerequisites

This guide assumes that you have already [installed Resoto](../../getting-started/installation/index.md).

## Structure of a Custom Command

The list of commands are stored in the Resoto configuration service. Configured commands are persisted and available for every user of this Resoto installation. The available list of commands can be configured via the shell or the UI:

```shell
> configs edit resoto.core.commands
```

A command has this structure:

```yaml
name: 'hello'
info: 'Say hello to the world'
parameters:
  - name: 'message'
    default: "Hello, world!"
    description: 'The message to display'
template: 'echo Resoto says {{message}}'
```

Parameters are the way to parameterize the template command. It is totally fine, if your custom command does not have any parameters.

## Defining a Custom Command

1. Resoto ships with a `templates` command that can be used to test a template:

```shell
> templates test message="Hello World" echo {{message}}
​echo Hello World
```

2. Once your template is working, you can define a custom command by adding it in the `resoto.core.commands` configuration.

3. Check your Resoto installation by performing a `help <name of new command>` command. This should provide a manual page and shows how to use this command.

4. Test your new command by invoking it on the shell.
