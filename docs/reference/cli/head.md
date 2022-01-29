# `head`

The `head` command returns the first `n` elements of the input stream and discards the remainder of the stream.

The command returns 100 elements by default if the number of elements is not specified.

:::tip Example

This command has a result of `[1, 2]`:

```bash
$> json [1,2,3,4,5] | head 2
```

The next command returns `[1, 2, 3, 4, 5]`:

```bash
$> json [1,2,3,4,5] | head
```

:::

**See also:** [`tail`](./tail.md)
