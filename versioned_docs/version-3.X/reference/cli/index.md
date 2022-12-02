# Command-Line Interface

The [Resoto Shell](/concepts/components/shell.md) CLI supports various commands that allow you to access the graph database.

## Keyboard Shortcuts

Resoto Shell supports most common Unix shell keyboard shortcuts.

| Shortcut                                        | Description                                                                  |
| ----------------------------------------------- | ---------------------------------------------------------------------------- |
| <kbd>Ctrl</kbd> + <kbd>D</kbd> on an empty line | Exit the shell (same as `quit`)                                              |
| <kbd>Ctrl</kbd> + <kbd>L</kbd>                  | Clear the entire terminal but not the current line (redraw)                  |
| <kbd>Ctrl</kbd> + <kbd>C</kbd>                  | Cancel input for the current line                                            |
| <kbd>Ctrl</kbd> + <kbd>U</kbd>                  | Clear from cursor to beginning of line                                       |
| <kbd>Ctrl</kbd> + <kbd>K</kbd>                  | Clear from cursor to end of line                                             |
| <kbd>Ctrl</kbd> + <kbd>H</kbd>                  | Clear one character to the left of the cursor (same as <kbd>Backspace</kbd>) |
| <kbd>Ctrl</kbd> + <kbd>D</kbd>                  | Clear one character to the right of the cursor                               |
| <kbd>Esc</kbd> + <kbd>Backspace</kbd>           | Clear one word to the left of the cursor                                     |
| <kbd>Esc</kbd> + <kbd>D</kbd>                   | Clear one word to the right of the cursor                                    |
| <kbd>Alt</kbd> + <kbd>←</kbd>                   | Jump to the beginning of the previous word                                   |
| <kbd>Alt</kbd> + <kbd>→</kbd>                   | Jump to the beginning of the next word                                       |
| <kbd>Ctrl</kbd> + <kbd>A</kbd>                  | Jump to start of line                                                        |
| <kbd>Ctrl</kbd> + <kbd>E</kbd>                  | Jump to end of line                                                          |
| <kbd>Ctrl</kbd> + <kbd>R</kbd>                  | Reverse search history                                                       |
| <kbd>↑</kbd>                                    | Step backwards in history                                                    |
| <kbd>↓</kbd>                                    | Step forward in history                                                      |

## Commands

:::tip

You can pipe commands using `|` and chain multiple commands using `;`.

:::

### Search Commands

| Command                                             | Description                                        |
| --------------------------------------------------- | -------------------------------------------------- |
| [`aggregate`](./search-commands/aggregate.md)       | Aggregate this query by the provided specification |
| [`ancestors`](./search-commands/ancestors.md)       | Select all ancestors of this node in the graph     |
| [`count`](./search-commands/count.md)               | Count incoming elements or sum defined property    |
| [`descendants`](./search-commands/descendants.md)   | Select all descendants of this node in the graph   |
| [`kinds`](./search-commands/kinds.md)               | Retrieves information about the graph data kinds   |
| [`predecessors`](./search-commands/predecessors.md) | Select all predecessors of this node in the graph  |
| [`search`](./search-commands/search.md)             | Search the graph                                   |
| [`successors`](./search-commands/successors.md)     | Select all successor of this node in the graph     |
| [`templates`](./search-commands/templates/index.md) | Access the query template library                  |

### Format Commands

| Command                                 | Description                                                  |
| --------------------------------------- | ------------------------------------------------------------ |
| [`dump`](./format-commands/dump.md)     | Dump all properties of incoming objects                      |
| [`format`](./format-commands/format.md) | Transform incoming objects as string with a defined format   |
| [`list`](./format-commands/list.md)     | Transform incoming objects as string with defined properties |

### Action Commands

| Command                                             | Description                                                                      |
| --------------------------------------------------- | -------------------------------------------------------------------------------- |
| [`aws`](./action-commands/aws.md)                   | Execute commands on AWS resources                                                |
| [`clean`](./action-commands/clean.md)               | Mark all incoming database objects for cleaning                                  |
| [`http`](./action-commands/http.md)                 | Perform HTTP request with incoming data                                          |
| [`jobs`](./action-commands/jobs/index.md)           | Manage all jobs                                                                  |
| [`protect`](./action-commands/protect.md)           | Mark all incoming database objects as protected                                  |
| [`set_desired`](./action-commands/set_desired.md)   | Allows to set arbitrary properties as desired for all incoming database objects  |
| [`set_metadata`](./action-commands/set_metadata.md) | Allows to set arbitrary properties as metadata for all incoming database objects |
| [`tag`](./action-commands/tag/index.md)             | Update a tag with provided value or delete a tag                                 |
| [`workflows`](./action-commands/workflows/index.md) | Manage all workflows                                                             |

### Setup Commands

| Command                                          | Description                              |
| ------------------------------------------------ | ---------------------------------------- |
| [`certificate`](./setup-commands/certificate.md) | Create TLS certificates                  |
| [`configs`](./setup-commands/configs/index.md)   | Manage configuration settings.           |
| [`system`](./setup-commands/system/index.md)     | Access and manage system wide properties |

### Miscellaneous Commands

| Command                                          | Description                                                                        |
| ------------------------------------------------ | ---------------------------------------------------------------------------------- |
| [`chunk`](./miscellaneous-commands/chunk.md)     | Chunk incoming elements in batches                                                 |
| [`echo`](./miscellaneous-commands/echo.md)       | Send the provided message to downstream                                            |
| [`env`](./miscellaneous-commands/env.md)         | Retrieve the environment and pass it to the output stream                          |
| [`flatten`](./miscellaneous-commands/flatten.md) | Take incoming batches of elements and flattens them to a stream of single elements |
| [`head`](./miscellaneous-commands/head.md)       | Return `n` first elements of the stream                                            |
| [`help`](./miscellaneous-commands/help.md)       | Shows available commands, as well as help for any specific command                 |
| [`jq`](./miscellaneous-commands/jq.md)           | Filter and process JSON                                                            |
| [`json`](./miscellaneous-commands/json.md)       | Parse JSON and pass parsed objects to the output stream                            |
| [`sleep`](./miscellaneous-commands/sleep.md)     | Suspend execution for an interval of time                                          |
| [`tail`](./miscellaneous-commands/tail.md)       | Return `n` last elements of the stream                                             |
| [`uniq`](./miscellaneous-commands/uniq.md)       | Remove all duplicated objects from the stream                                      |
| [`write`](./miscellaneous-commands/write.md)     | Writes the incoming stream of data to a file in the defined format                 |

### Custom Commands

It is possible to create your own commands by combining existing commands with your own logic. In resoto shell type `config edit resoto.core.commands`. This will open a file and show all available custom commands. Resoto ships with an example command called `discord`, that allows to send the result of a search to [Discord](https://discord.com) as notification.

A custom command has the following properties:

- `name`: The name of the custom command
- `template`: a command template that will be executed when the command is called. A template can have template parameters. See [templates](../templates.md) to learn how to define them.
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
