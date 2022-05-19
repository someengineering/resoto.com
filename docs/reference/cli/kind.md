# `kind`

The `kind` command retrieves information about the graph data kinds.

## Usage

```bash
kind [-p <property_path>] <name>
```

### Options

| Option               | Description                                                                    |
| -------------------- | ------------------------------------------------------------------------------ |
| `-p <property_path>` | Perform a reverse lookup and search all kinds for the specified property path. |

### Parameters

| Parameter | Description | Required? | Default Value |
| --------- | ----------- | --------- | ------------- |
| `name`    | Kind name   | ❌        | N/A           |

## Examples

```bash title="Show all available kinds"
> kind
# highlight-start
​access_key
​.
​.
​zone
# highlight-end
```

```bash title="Show details about a specific kind"
> kind graph_root
# highlight-start
​name: graph_root
​bases:
​- graph_root
​properties:
​- description: The name of this node.
​  kind: string
​  name: name
​  required: false
​- description: All attached tags of this node.
​  kind: dictionary[string, string]
​  name: tags
​  required: false
# highlight-end
```

```bash title="Look up the type of the given property path in the model"
> kind -p reported.tags.owner
# highlight-start
​name: string
​runtime_kind: string
# highlight-end
```
