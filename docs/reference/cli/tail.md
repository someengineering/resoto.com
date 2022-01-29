# `tail`

The `tail` command returns the last `n` elements of the input stream. The beginning of the stream is consumed but discarded.

The command returns 100 elements by default if the number of elements is not specified.

:::tip Example

This command has a result of `[4, 5]`:

```bash
$> json [1,2,3,4,5] | tail 2
```

The next command returns `[1, 2, 3, 4, 5]`:

```bash
$> json [1,2,3,4,5] | tail
```

:::

**See also:** [`head`](./head.md)
