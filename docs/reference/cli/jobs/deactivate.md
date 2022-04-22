---
sidebar_label: deactivate
---

# `jobs deactivate`

The `jobs deactivate` command deactivates the triggers of a job, so that the job is not started if the triggers are fired.

## Usage

```bash
jobs deactivate <id>
```

### Parameters

| Parameter | Description    | Required? | Default Value |
| --------- | -------------- | --------- | ------------- |
| `id`      | Job identifier | ✔️        | N/A           |

## Examples

```bash
> jobs deactivate say-hello
// highlight-start
​id: say-hello
​command: echo hello world
​active: false
​trigger:
​  cron_expression: '* * * * *'
// highlight-end
```
