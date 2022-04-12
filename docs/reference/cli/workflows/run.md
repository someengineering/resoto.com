---
sidebar_label: run
---

# `workflows run`

The `workflows run` command runs a workflow.

## Usage

```bash
workflows run <id>
```

### Parameters

| Parameter | Description          | Required? | Default Value |
| --------- | -------------------- | --------- | ------------- |
| `id`      | Workflows identifier | ✔️        | N/A           |

## Examples

```bash title="Run a workflow directly without waiting for its triggers"
> workflows run collect_and_cleanup
// highlight-next-line
Workflow collect_and_cleanup started with id b84257ac-ba30-11ec-abdf-dad780437c54.
```
