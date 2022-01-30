# `format`

The `format` command creates a string from the JSON input based on the provided format string.

## Usage

```bash
format [--<format-option>] <format_string>
```

### Options

The `format` command supports some predefined formats, which can be utilized using the following options:

| Option        | Description                                                                                                |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| `--json`      | Creates a JSON string and returns it within a JSON array.                                                  |
| `--ndjson`    | Creates a JSON object for each element, with line element per line in the output.                          |
| `--text`      | Creates a text representation of each element.                                                             |
| `--cytoscape` | Creates a string representation in [Cytoscape.js format](https://js.cytoscape.org/#notation/elements-json) |
| `--graphml`   | Creates a string representation in [GraphML format](http://graphml.graphdrawing.org)                       |
| `--dot`       | Creates a string representation in [Graphviz DOT format](https://graphviz.org/doc/info/lang.html)          |

### Parameters

Alternatively, a custom format string may be provided to the command:

| Parameter       | Description      | Required? | Default Value |
| --------------- | ---------------- | --------- | ------------- |
| `format_string` | Format string \* | ❌        | N/A           |

\* The format string may contain placeholders in curly braces that access properties of the JSON object. If a property is not available, it will result in the string `null`.

## Examples

This first example has a result of `[ "b!=d" ]`:

```bash
$> json {"a":"b", "b": {"c":"d"}} | format {a}!={b.c}
```

The result of the next command is `[ "only select >2<" ]`:

```bash
$> json {"b": {"c":[0,1,2,3]}} | format only select >{b.c[2]}<
```

The following command results in `[ "only select >2<" ]`:

```bash
$> json {"b": {"c":[0,1,2,3]}} | format only select >{b.c[2]}<
```

And the below example has a result of `[ "null:null:null" ]`:

```bash
$> json {} | format {a}:{b.c.d}:{foo.bla[23].test}
```

This command writes the result of `query all` in JSON format to a file named `out.json`:

```bash
$> query all | format --json | write out.json
```

## See Also

[`dump`](./dump.md), [`list`](./list.md), [`jq`](./jq.md)
