# `env`

The `env` command retrieves environment variables and passes it to the output stream.

This command is useful when inspecting the environment given to the CLI interpreter.

## Usage

```bash
env
```

## Examples

```bash title="resotoshell will set the graph, section, and session ID"
> env
// highlight-start
graph: resoto
section: reported
resoto_session_id: SHQF9MBUEJ
// highlight-end
```

```bash title="Environment variables can be defined directly on the command line"
> section=desired foo=bla env
// highlight-start
graph: resoto
section: desired
resoto_session_id: SHQF9MBUEJ
foo: bla
// highlight-end
```
