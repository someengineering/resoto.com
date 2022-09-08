# `flatten`

The `flatten` command combines groups of elements from the input stream into a stream of individual elements, preserving their original order.

## Usage

```bash
flatten
```

## Examples

```bash
> json [[1, 2], 3, [4, 5]] | flatten
# highlight-start
​1
​2
​3
​4
​5
# highlight-end
```

```bash title="An already flat stream of elements would be unchanged"
> json [1, 2, 3, 4, 5] | flatten
# highlight-start
​1
​2
​3
​4
​5
# highlight-end
```

## Related Commands

- [`chunk`](./chunk.md)
