# `chunk`

The `chunk` command groups elements from the input stream into "chunks" of a defined size.

The final chunk may contain fewer elements than the defined chunk size.

## Usage

```bash
chunk <size>
```

### Parameters

| Parameter | Description                          | Required? | Default Value |
| --------- | ------------------------------------ | --------- | ------------- |
| `size`    | Desired number of elements per chunk | ❌        | `100`         |

## Examples

```bash title="Chunking with size of 2"
> json [1,2,3,4,5] | chunk 2
# highlight-start
​[1, 2]
​[3, 4]
​[5]
# highlight-end
```

```bash title="Chunking with size of 3"
> json [1,2,3,4,5] | chunk 3
# highlight-start
​[1, 2, 3]
​[4, 5]
# highlight-end
```

```bash title="Chunking the output of a query (output omitted for brevity)"
> search is(volume) limit 5 | chunk 3
```

## Related Commands

- [`flatten`](./flatten.md)
