# `uniq`

The `uniq` command deduplicates input stream objects.

The final chunk may contain fewer elements than the defined chunk size.

## Usage

```bash
uniq
```

## Examples

```bash title="Duplicates of the same element are removed"
> json [1, 2, 3, 1, 2, 3] | uniq
// highlight-start
​1
​2
​3
// highlight-end
```

```bash title="The same logic applies to JSON objects"
> json [{"a": 1, "b": 2}, {"b": 2, "a": 1}] | uniq
// highlight-start
​a: 1
​b: 2
// highlight-end
```
