# Command-Line Interface

The [Resoto Shell](/concepts/components/shell.md) CLI supports various commands that allow you to access the graph database.

:::tip

You can pipe commands using `|` and chain multiple commands using `;`.

:::

## Keyboard Shortcuts

Resoto Shell supports most common Unix shell keyboard shortcuts.

| Shortcut                | Description                                                        |
| ----------------------- | ------------------------------------------------------------------ |
| CTRL+D on an empty line | Exit the shell (same as `quit`)                                    |
| CTRL+L                  | Clear the entire terminal but not the current line (redraw)        |
| CTRL+C                  | Cancel input for the current line                                  |
| CTRL+U                  | Clears from cursor to beginning of line                            |
| CTRL+K                  | Clears from cursor to end of line                                  |
| CTRL+H                  | Clears one character to the left of the cursor (same as BACKSPACE) |
| CTRL+D                  | Clears one character to the right of the cursor                    |
| ESC+BACKSPACE           | Clears one word to the left of the cursor                          |
| ESC+D                   | Clears one word to the right of the cursor                         |
| ALT+LEFT/RIGHT          | Jumps to the beginning of the previous/next word                   |
| CTRL+A                  | Jumps to start of line                                             |
| CTRL+E                  | Jumps to end of line                                               |
| CTRL+R                  | Reverse search your history                                        |
| UP                      | Step backwards in history                                          |
| DOWN                    | Step forward in history                                            |

## Commands

| Command                             | Description                                                                        |
| ----------------------------------- | ---------------------------------------------------------------------------------- |
| [`aggregate`](./aggregate.md)       | Aggregate this query by the provided specification                                 |
| [`ancestors`](./ancestors.md)       | Select all ancestors of this node in the graph                                     |
| [`certificate`](./certificate.md)   | Create TLS certificates                                                            |
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

## Custom Commands

It is possible to create your own commands by combining existing commands with your own logic. In resoto shell type `config edit resoto.core.commands`. This will open a file and show all available custom commands. Resoto ships with an example command called `discord`, that allows to send the result of a search to [Discord](https://discord.com) as notification.

A custom command has the following properties:

- `name`: The name of the custom command
- `template`: a command template that will be executed when the command is called. A template can have template parameters. See [templates](/docs/reference/templates) to learn how to define them.
- `info`: a short description of the command. This will be displayed to users when they call `help my-custom-command`
- `parameters`: a list of placeholder parameters. All parameters need to be defined in order to use the command. If the parameter defines a default value, it is considered optional. If there is no default value, the parameter is required and needs to be defined by the user during execution time.

```yaml title="Example custom command"
info: 'Say Hi to the user.'
name: 'hello'
parameters:
  - name: 'person'
    default: 'world'
    description: 'The person to greet.'
template: 'echo Hello {{person}}.'
```

Once a custom command has been defined in the `resoto.core.commands` configuration, the command can be executed in [Resoto Shell](../../concepts/components/shell.md):

```bash title="Usage of the new hello command"
> help hello
# output omitted for brevity
> hello
Hello world.
> hello person="John Doe"
Hello John Doe.
```

:::note

Custom commands are defined globally, so they can be executed by any Resoto user.

:::

## Placeholder Strings

Placeholders are not case sensitive. You can use `@utc@` or `@UTC@` and will get the same result.

| Placeholder   | Example                    |
| ------------- | -------------------------- |
| `@UTC@`       | `2022-02-16T14:23:31Z`     |
| `@NOW@`       | `2022-02-16T15:23:31+0200` |
| `@DAY@`       | `16`                       |
| `@FRIDAY@`    | `2022-02-18`               |
| `@HOUR@`      | `15`                       |
| `@MINUTE@`    | `23`                       |
| `@MONDAY@`    | `2022-02-21`               |
| `@MONTH@`     | `02`                       |
| `@SATURDAY@`  | `2022-02-19`               |
| `@SECOND@`    | `31`                       |
| `@SUNDAY@`    | `2022-02-20`               |
| `@THURSDAY@`  | `2022-02-17`               |
| `@TIME@`      | `15:23:31`                 |
| `@TODAY@`     | `2022-02-16`               |
| `@TOMORROW@`  | `2022-02-17`               |
| `@TUESDAY@`   | `2022-02-22`               |
| `@TZ@`        | `CET`                      |
| `@TZ_OFFSET@` | `+0100`                    |
| `@WEDNESDAY@` | `2022-02-16`               |
| `@YEAR@`      | `2022`                     |
| `@YESTERDAY@` | `2022-02-15`               |
