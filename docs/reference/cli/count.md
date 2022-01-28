# `count`

The `count` command returns the number of elements or properties.

When no argument is provided to the command, the number of elements is returned.

When an argument is provided, the number of elements with the specified property is returned.

:::tip Examples

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

:::
