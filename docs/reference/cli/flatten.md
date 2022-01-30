# `flatten`

The `flatten` command combines groups of elements from the input stream into a stream of individual elements, preserving their original order.

## Usage

```bash
flatten
```

## Examples

The result of the following command would be `[1, 2, 3, 4, 5]`:

```bash
$> json [1, 2, 3, 4, 5] | chunk 2 | flatten
```

The next command would also return `[1, 2, 3, 4, 5]`:

```bash
$> json [[1, 2], 3, [4, 5]] | flatten
```

## See Also

[`chunk`](./chunk.md)
