---
sidebar_label: activate
---

# `jobs activate` Command

The `jobs activate` command activates the triggers of a job.

## Usage

```bash
jobs activate <id>
```

### Parameters

| Parameter | Description    | Required? | Default Value |
| --------- | -------------- | --------- | ------------- |
| `id`      | Job identifier | ✔️        | N/A           |

## Examples

```bash
> jobs activate say-hello
# highlight-start
​id: say-hello
​command: echo hello world
​active: true
​trigger:
​  cron_expression: '* * * * *'
# highlight-end
```

## Further Reading

- [Cloud Data Sync](../../../../concepts/cloud-data-sync/index.md)
- [Automation](../../../../concepts/automation/index.md)
- [Events](../../../events/index.md)
- [Workflows](../../../workflows/index.md)
