---
sidebar_label: list
---

# `jobs list`

The `jobs list` command lists all jobs.

## Usage

```bash
jobs list
```

## Examples

```bash
> jobs list
// highlight-start
id: say-hello
trigger:
  cron_expression: '* * * * *'
command: echo hello world
// highlight-end
```
