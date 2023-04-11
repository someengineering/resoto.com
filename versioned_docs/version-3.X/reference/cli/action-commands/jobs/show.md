---
sidebar_label: show
---

# `jobs show` Command

The `jobs show` command shows the definition of a job.

## Usage

```bash
jobs show <id>
```

### Parameters

| Parameter | Description    | Required? | Default Value |
| --------- | -------------- | --------- | ------------- |
| `id`      | Job identifier | ✔️        | N/A           |

## Examples

```bash
> jobs show say-hello
# highlight-start
​id: say-hello
​trigger:
​  cron_expression: '* * * * *'
​command: echo hello world
# highlight-end
```

## Further Reading

- [Cloud Data Sync](../../../../concepts/cloud-data-sync/index.md)
- [Automation](../../../../concepts/automation/index.md)
- [Events](../../../events/index.md)
- [Workflows](../../../workflows/index.md)
