---
sidebar_label: list
---

# `jobs list` Command

The `jobs list` command lists all jobs.

## Usage

```bash
jobs list
```

## Examples

```bash
> jobs list
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
