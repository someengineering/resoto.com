# `jobs`

```mdx-code-block
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
```

The `jobs` command allows for the management of jobs.

| Command           | Description                                                                                |
| ----------------- | ------------------------------------------------------------------------------------------ |
| `jobs activate`   | Activate the triggers of a job                                                             |
| `jobs add`        | Add a job to the task handler                                                              |
| `jobs deactivate` | Deactivate the triggers of a job, so that the job is not started if the triggers are fired |
| `jobs delete`     | Delete a job                                                                               |
| `jobs list`       | List all jobs                                                                              |
| `jobs run`        | Run a job                                                                                  |
| `jobs running`    | List all currently running jobs                                                            |
| `jobs show`       | Show the definition of a job                                                               |
| `jobs update`     | Update a job                                                                               |

## Usage

<Tabs>
<TabItem value="activate" label="activate">

```bash
jobs activate <id>
```

### Parameters

| Parameter | Description    | Required? | Default Value |
| --------- | -------------- | --------- | ------------- |
| `id`      | Job identifier | ✔️        | N/A           |

</TabItem>
<TabItem value="add" label="add">

```bash
jobs add [--id <id>] [--schedule <cron_expression>] [--wait-for-event <event_name>] <command>
```

### Options

| Option                          | Description                                                                                                                                     |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `--id <id>`                     | Job identifier (if no ID is provided, a random identifier will be automatically generated)                                                      |
| `--schedule <cron_expression>`  | The schedule as a `cron` expression                                                                                                             |
| `--wait-for-event <event_name>` | Waits for the specified event to occur (if this option is defined in conjunction with the `--schedule` option, the schedule must trigger first) |
| `--timeout`                     | Number of seconds for which the job is allowed to run before being automatically terminated (default 3600)                                      |

### Parameters

| Parameter | Description                                                    | Required? | Default Value |
| --------- | -------------------------------------------------------------- | --------- | ------------- |
| `command` | CLI command that will be executed when the job is triggered \* | ✔️        | N/A           |

\* It is recommended to either surround the `command` with single quotes (`'`) or escape special characters such as pipes (`|`) or semicolons (`;`). Multiple commands can be delimited using semicolons.

</TabItem>
<TabItem value="deactivate" label="deactivate">

```bash
jobs deactivate <id>
```

### Parameters

| Parameter | Description    | Required? | Default Value |
| --------- | -------------- | --------- | ------------- |
| `id`      | Job identifier | ✔️        | N/A           |

</TabItem>
<TabItem value="delete" label="delete">

```bash
jobs delete <id>
```

### Parameters

| Parameter | Description    | Required? | Default Value |
| --------- | -------------- | --------- | ------------- |
| `id`      | Job identifier | ✔️        | N/A           |

</TabItem>
<TabItem value="list" label="list">

```bash
jobs list
```

</TabItem>
<TabItem value="run" label="run">

```bash
jobs run <id>
```

### Parameters

| Parameter | Description    | Required? | Default Value |
| --------- | -------------- | --------- | ------------- |
| `id`      | Job identifier | ✔️        | N/A           |

</TabItem>
<TabItem value="running" label="running">

```bash
jobs running
```

</TabItem>
<TabItem value="show" label="show">

```bash
jobs show <id>
```

### Parameters

| Parameter | Description    | Required? | Default Value |
| --------- | -------------- | --------- | ------------- |
| `id`      | Job identifier | ✔️        | N/A           |

</TabItem>
<TabItem value="update" label="update">

```bash
jobs update <id> [--schedule <cron_expression>] [--wait-for-event <event_name>] <command>
```

### Options

| Option                          | Description                                                                                                                                     |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `--schedule <cron_expression>`  | The schedule as a `cron` expression                                                                                                             |
| `--wait-for-event <event_name>` | Waits for the specified event to occur (if this option is defined in conjunction with the `--schedule` option, the schedule must trigger first) |
| `--timeout`                     | Number of seconds for which the job is allowed to run before being automatically terminated (default 3600)                                      |

### Parameters

| Parameter | Description                                                    | Required? | Default Value |
| --------- | -------------------------------------------------------------- | --------- | ------------- |
| `id`      | Job identifier                                                 | ✔️        | N/A           |
| `command` | CLI command that will be executed when the job is triggered \* | ✔️        | N/A           |

\* It is recommended to either surround the `command` with single quotes (`'`) or escape special characters such as pipes (`|`) or semicolons (`;`). Multiple commands can be delimited using semicolons.

</TabItem>
</Tabs>

## Examples

```bash title="Print 'hello world' to the console every minute"
> jobs add --id say-hello --schedule "* * * * *" echo hello world
// highlight-next-line
Job say-hello added.
```

```bash title="List all jobs"
> jobs list
// highlight-start
id: say-hello
trigger:
  cron_expression: '* * * * *'
command: echo hello world
// highlight-end
```

```bash title="Display a specific job"
> jobs show say-hello
// highlight-start
id: say-hello
trigger:
  cron_expression: '* * * * *'
command: echo hello world
// highlight-end
```

```bash title="At 4am each morning, wait for message of type collect_done and print a message"
> jobs add --id early_hi --schedule "0 4 * * *" --wait-for-event collect_done 'match is("volume") | format id'
// highlight-next-line
Job early_hi added.
```

```bash title="Wait for message of type collect_done and print a message"
> jobs add --id wait_for_collect_done collect_done: echo hello world
// highlight-next-line
Job wait_for_collect_done added.
```

```bash title="Run the job directly without waiting for its triggers"
> jobs run say-hello
// highlight-next-line
Job say-hello started with id a4bb64cc-7385-11ec-b2cb-dad780437c53.
```

```bash title="Display all currently running jobs"
> jobs running
// highlight-start
job: say-hello
started_at: '2022-01-12T09:01:34Z'
task-id: a4bb64cc-7385-11ec-b2cb-dad780437c53
// highlight-end
```

```bash title="Deactivate the triggers of a job"
> jobs deactivate say-hello
// highlight-start
id: say-hello
command: echo hello world
active: false
trigger:
  cron_expression: '* * * * *'
// highlight-end
```

```bash title="Activate the triggers of a job"
> jobs activate say-hello
// highlight-start
id: say-hello
command: echo hello world
active: true
trigger:
  cron_expression: '* * * * *'
// highlight-end
```

```bash title="Delete a job"
> jobs delete say-hello
// highlight-next-line
Job say-hello deleted.
```
