---
sidebar_label: Create a Custom Command
sidebar_custom_props:
  tags: []
---

# How to Create a Custom Command

## Introduction

Resoto offers a Command Line Interface and provides a list of [commands](/docs/reference/cli) out of the box. On top of that, Resoto allows you to define a command line as template with parameters as new command, that can be executed by any user of the system. An example of such command is the `discord` command, which ships automatically with every Resoto installation. It allows users to send the result of a search to a Discord channel. The discord command itself assembles existing commands to make something new. We believe that there are a lot of cases, where custom commands are one way to fine tune Resoto to your needs.

## Prerequisites

Custom commands are defined with [mustache](https://mustache.github.io) templates. You should have an understanding what a template is.

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

## Define a custom command

1. Resoto ships with a `templates` command that can be used to test a template:

```shell
> templates test message="Hello World" echo {{message}}
​echo Hello World
```

2. Once your template is working, you can define a custom command by adding it in the `resoto.core.commands` configuration.

3. Check your Resoto installation by performing a `help <name of new command>` command. This should provide a manual page and shows how to use this command.

4. Test your new command by invoking it on the shell.
