# Command-Line Interface

The [Resoto Shell](/concepts/components/shell.md) CLI supports various commands that allow you to access the graph database.

:::tip

You can pipe commands using `|` and chain multiple commands using `;`.

:::

## Commands

| Command                             | Description                                                                         |
| ----------------------------------- | ----------------------------------------------------------------------------------- |
| [`aggregate`](./aggregate.md)       | Aggregate this query by the provided specification.                                 |
| [`ancestors`](./ancestors.md)       | Select all ancestors of this node in the graph.                                     |
| [`chunk`](./chunk.md)               | Chunk incoming elements in batches.                                                 |
| [`clean`](./clean.md)               | Mark all incoming database objects for cleaning.                                    |
| [`count`](./count.md)               | Count incoming elements or sum defined property.                                    |
| [`descendants`](./descendants.md)   | Select all descendants of this node in the graph.                                   |
| [`dump`](./dump.md)                 | Dump all properties of incoming objects.                                            |
| [`echo`](./echo.md)                 | Send the provided message to downstream.                                            |
| [`env`](./env.md)                   | Retrieve the environment and pass it to the output stream.                          |
| [`flatten`](./flatten.md)           | Take incoming batches of elements and flattens them to a stream of single elements. |
| [`format`](./format.md)             | Transform incoming objects as string with a defined format.                         |
| [`head`](./head.md)                 | Return `n` first elements of the stream.                                            |
| [`help`](./help.md)                 | Shows available commands, as well as help for any specific command.                 |
| [`http`](./http.md)                 | Perform HTTP request with incoming data.                                            |
| `jobs`                              | Manage all jobs.                                                                    |
| [`jq`](./jq.md)                     | Filter and process JSON.                                                            |
| `json`                              | Parse JSON and pass parsed objects to the output stream.                            |
| `kind`                              | Retrieves information about the graph data kinds.                                   |
| [`list`](./list.md)                 | Transform incoming objects as string with defined properties.                       |
| [`predecessors`](./predecessors.md) | Select all predecessors of this node in the graph.                                  |
| `protect`                           | Mark all incoming database objects as protected.                                    |
| [`query`](./query.md)               | Query the graph.                                                                    |
| `set_desired`                       | Allows to set arbitrary properties as desired for all incoming database objects.    |
| `set_metadata`                      | Allows to set arbitrary properties as metadata for all incoming database objects.   |
| `sleep`                             | Suspend execution for an interval of time.                                          |
| `start_task`                        | Start a task with the given name.                                                   |
| [`successors`](./successors.md)     | Select all successor of this node in the graph.                                     |
| `system`                            | Access and manage system wide properties.                                           |
| [`tag`](./tag.md)                   | Update a tag with provided value or delete a tag.                                   |
| [`tail`](./tail.md)                 | Return `n` last elements of the stream.                                             |
| `templates`                         | Access the query template library.                                                  |
| `uniq`                              | Remove all duplicated objects from the stream.                                      |
| `write`                             | Writes the incoming stream of data to a file in the defined format.                 |

### Command Aliases

| Alias            | Command      | Description                              |
| ---------------- | ------------ | ---------------------------------------- |
| `match`          | `query`      | Query the graph.                         |
| `start_workflow` | `start_task` | Start a task with the given name.        |
| `https`          | `http`       | Perform HTTP request with incoming data. |

## Placeholder Strings

| Placeholder   | Example                |
| ------------- | ---------------------- |
| `@UTC@`       | `2022-01-21T03:58:19Z` |
| `@NOW@`       | `2022-01-21T03:58:19Z` |
| `@TODAY@`     | `2022-01-21`           |
| `@TOMORROW@`  | `2022-01-22`           |
| `@YESTERDAY@` | `2022-01-20`           |
| `@YEAR@`      | `2022`                 |
| `@MONTH@`     | `01`                   |
| `@DAY@`       | `21`                   |
| `@TIME@`      | `03:58:19`             |
| `@HOUR@`      | `03`                   |
| `@MINUTE@`    | `58`                   |
| `@SECOND@`    | `19`                   |
| `@TZ_OFFSET@` | `+0000`                |
| `@TZ@`        | `UTC`                  |
| `@MONDAY@`    | `2022-01-24`           |
| `@TUESDAY@`   | `2022-01-25`           |
| `@WEDNESDAY@` | `2022-01-26`           |
| `@THURSDAY@`  | `2022-01-27`           |
| `@FRIDAY@`    | `2022-01-21`           |
| `@SATURDAY@`  | `2022-01-22`           |
| `@SUNDAY@`    | `2022-01-23`           |
