# `count`

The `count` command returns the number of elements or properties in the piped input.

When no argument is provided to the command, the total number of elements is returned.

When a property name is provided, the number of elements with the specified property is returned rather than the total number of input elements.

## Usage

```bash
count <property>
```

### Parameters

| Parameter  | Description               | Required? | Default Value |
| ---------- | ------------------------- | --------- | ------------- |
| `property` | Name of property to count | ❌        | N/A           |

## Examples

This command returns `[["total matched: 3", "total unmatched: 0"]]`:

```bash
$> json [{"a": 1}, {"a": 2}, {"b": 3}] | count
```

The next command would return `[["total matched: 2", "total unmatched: 1"]]`:

```bash
$> json [{"a": 1}, {"a": 2}, {"b": 3}] | count a
```

And this last command results in `[["total matched: 1", "total unmatched: 2"]]`:

```bash
$> json [{"a": 1}, {"a": 2}, {"b": 3}] | count b
```
