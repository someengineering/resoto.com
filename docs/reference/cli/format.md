# `format`

The `format` command creates a string from the JSON input based on the provided format string.

The format string may contain placeholders in curly braces that access properties of the JSON object. If a property is not available, it will result in the string `null`.

:::tip Example

This first example has a result of `[ "b!=d" ]`:

```bash
json {"a":"b", "b": {"c":"d"}} | format {a}!={b.c}
```

The result of the next command is `[ "only select &gt;2&lt;" ]`:

```bash
json {"b": {"c":[0,1,2,3]}} | format only select <{b.c[2]}>
```

The following command results in `[ "only select <2>" ]`:

```bash
json {"b": {"c":[0,1,2,3]}} | format only select <{b.c[2]}>
```

And the below example has a result of `[ "null:null:null" ]`:

```bash
json {} | format {a}:{b.c.d}:{foo.bla[23].test}
```

Finally, this last command writes the result of `query all` in JSON format to a file `out.json`:

```bash
query all | format --json | write out.json
```

:::

**See also:** [`dump`](./dump.md), [`list`](./list.md), [`jq`](./jq.md)
