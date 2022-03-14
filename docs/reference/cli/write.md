# `write`

The `write` command outputs data to a file.

## Usage

```bash
write <file_name>
```

### Parameters

| Parameter   | Description | Required? | Default Value |
| ----------- | ----------- | --------- | ------------- |
| `file_name` | File name   | ✔️        | N/A           |

## Examples

```bash title="Select 3 resources and write them to out.json in JSON format"
> query all limit 3 | format --json | write out.json
// highlight-next-line
Received a file out.json, which is stored to ./out.json.
```

```bash title="Select the root node and traverse 2 levels deep, and write the result as dot graph to out.dot"
> query --with-edges id(root) -[0:2]-> | format --dot | write out.dot
// highlight-next-line
Received a file out.dot, which is stored to ./out.dot.
```
