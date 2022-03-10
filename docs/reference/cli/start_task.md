# `start_task`

The `start_task` command starts a task with the given task descriptor ID.

The configured surpass behaviour of a task definition defines if multiple tasks of the same task definition are allowed to run in parallel. In the event that parallel tasks are forbidden, a new task will not be started.

## Usage

```bash
start_task <task_name>
```

### Parameters

| Parameter   | Description           | Required? | Default Value |
| ----------- | --------------------- | --------- | ------------- |
| `task_name` | Name of task to start | ✔️        | N/A           |

## Examples

```bash
> start_task example_task
```

## See Also

- [`jobs`](./jobs/index.md)
