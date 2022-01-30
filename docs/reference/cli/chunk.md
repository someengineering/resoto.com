# `chunk`

The `chunk` command groups elements from the input stream into "chunks" of a defined size.

The final chunk may contain fewer elements than the defined chunk size.

## Usage

```bash
chunk [size]
```

### Parameters

| Parameter | Description                          | Required? | Default Value |
| --------- | ------------------------------------ | --------- | ------------- |
| `size`    | Desired number of elements per chunk | ❌        | `100`         |

## Examples

The result of the following command would be `[[1, 2], [3, 4], [5]]`:

```bash
$> json [1,2,3,4,5] | chunk 2
```

The next command would return `[[1, 2, 3, 4, 5]]`:

```bash
$> json [1,2,3,4,5] | chunk
```

## See Also

[`flatten`](./flatten.md)
