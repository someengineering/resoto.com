# `help`

The `help` commands outputs a list of all CLI commands when no argument is provided.

The `help` command can also provide information on a specific command when the command name is provided as an argument.

## Usage

```bash
help <command>
```

### Parameters

| Parameter    | Description                     | Required? | Default Value |
| ------------ | ------------------------------- | --------- | ------------- |
| `command`    | Command name                    | ❌        | N/A           |
| placeholders | Show all available placeholders | ❌        | N/A           |

## Examples

```bash title="Show all help options"
> help
```

```bash title="Show help for the format command"
> help format
```

```bash title="Show all available placeholders"
> help placeholders
```
