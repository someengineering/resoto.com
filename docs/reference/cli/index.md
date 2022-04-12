# Command-Line Interface

The [Resoto Shell](/concepts/components/shell.md) CLI supports various commands that allow you to access the graph database.

:::tip

You can pipe commands using `|` and chain multiple commands using `;`.

:::

## Commands

| Command                             | Description                                                                        |
|-------------------------------------|------------------------------------------------------------------------------------|
| [`aggregate`](./aggregate.md)       | Aggregate this query by the provided specification                                 |
| [`ancestors`](./ancestors.md)       | Select all ancestors of this node in the graph                                     |
| [`certificate`](./certificate.md)   | Create TLS certificates                                                                             |
| [`chunk`](./chunk.md)               | Chunk incoming elements in batches                                                 |
| [`clean`](./clean.md)               | Mark all incoming database objects for cleaning                                    |
| [`configs`](./configs/index.md)     | Manage configuration settings.                                                     |
| [`count`](./count.md)               | Count incoming elements or sum defined property                                    |
| [`descendants`](./descendants.md)   | Select all descendants of this node in the graph                                   |
| [`dump`](./dump.md)                 | Dump all properties of incoming objects                                            |
| [`echo`](./echo.md)                 | Send the provided message to downstream                                            |
| [`env`](./env.md)                   | Retrieve the environment and pass it to the output stream                          |
| [`flatten`](./flatten.md)           | Take incoming batches of elements and flattens them to a stream of single elements |
| [`format`](./format.md)             | Transform incoming objects as string with a defined format                         |
| [`head`](./head.md)                 | Return `n` first elements of the stream                                            |
| [`help`](./help.md)                 | Shows available commands, as well as help for any specific command                 |
| [`http`](./http.md)                 | Perform HTTP request with incoming data                                            |
| [`jobs`](./jobs/index.md)           | Manage all jobs                                                                    |
| [`jq`](./jq.md)                     | Filter and process JSON                                                            |
| [`json`](./json.md)                 | Parse JSON and pass parsed objects to the output stream                            |
| [`kind`](./kind.md)                 | Retrieves information about the graph data kinds                                   |
| [`list`](./list.md)                 | Transform incoming objects as string with defined properties                       |
| [`predecessors`](./predecessors.md) | Select all predecessors of this node in the graph                                  |
| [`protect`](./protect.md)           | Mark all incoming database objects as protected                                    |
| [`search`](./search.md)             | Search the graph                                                                   |
| [`set_desired`](./set_desired.md)   | Allows to set arbitrary properties as desired for all incoming database objects    |
| [`set_metadata`](./set_metadata.md) | Allows to set arbitrary properties as metadata for all incoming database objects   |
| [`sleep`](./sleep.md)               | Suspend execution for an interval of time                                          |
| [`successors`](./successors.md)     | Select all successor of this node in the graph                                     |
| [`system`](./system/index.md)       | Access and manage system wide properties                                           |
| [`tag`](./tag/index.md)             | Update a tag with provided value or delete a tag                                   |
| [`tail`](./tail.md)                 | Return `n` last elements of the stream                                             |
| [`templates`](./templates/index.md) | Access the query template library                                                  |
| [`uniq`](./uniq.md)                 | Remove all duplicated objects from the stream                                      |
| [`workflows`](./workflows/index.md) | Manage all workflows                                                               |
| [`write`](./write.md)               | Writes the incoming stream of data to a file in the defined format                 |


## Placeholder Strings

| Placeholder   | Example                |
| ------------- | ---------------------- |
| `@DAY@`       | `16`                   |
| `@FRIDAY@`    | `2022-02-18`           |
| `@HOUR@`      | `15`                   |
| `@MINUTE@`    | `23`                   |
| `@MONDAY@`    | `2022-02-21`           |
| `@MONTH@`     | `02`                   |
| `@NOW@`       | `2022-02-16T15:23:31Z` |
| `@SATURDAY@`  | `2022-02-19`           |
| `@SECOND@`    | `31`                   |
| `@SUNDAY@`    | `2022-02-20`           |
| `@THURSDAY@`  | `2022-02-17`           |
| `@TIME@`      | `15:23:31`             |
| `@TODAY@`     | `2022-02-16`           |
| `@TOMORROW@`  | `2022-02-17`           |
| `@TUESDAY@`   | `2022-02-22`           |
| `@TZ@`        | `CET`                  |
| `@TZ_OFFSET@` | `+0100`                |
| `@UTC@`       | `2022-02-16T14:23:31Z` |
| `@WEDNESDAY@` | `2022-02-16`           |
| `@YEAR@`      | `2022`                 |
| `@YESTERDAY@` | `2022-02-15`           |
