# `chunk`

The `chunk` command groups elements from the input stream into "chunks" of a defined size.

The final chunk may contain fewer elements than the defined chunk size.

:::tip Examples

The result of the following command would be `[[1, 2], [3, 4], [5]]`:

```bash
$> json [1,2,3,4,5] | chunk 2
```

The next command would return `[[1, 2, 3, 4, 5]]`:

```bash
$> json [1,2,3,4,5] | chunk
```

:::

See [`flatten`](./flatten.md) for the reverse operation.
