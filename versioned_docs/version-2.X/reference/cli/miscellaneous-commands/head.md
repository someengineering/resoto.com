# `head`

The `head` command returns the first `n` elements of the input stream and discards the remainder of the stream.

The command returns 100 elements by default if the number of elements is not specified.

## Usage

```bash
head <n>
```

### Parameters

| Parameter | Description                  | Required? | Default Value |
| --------- | ---------------------------- | --------- | ------------- |
| `n`       | Number of elements to return | ❌        | `100`         |

## Examples

```bash title="Only take the first 2 elements of the JSON array"
> json [1,2,3,4,5] | head -2
# highlight-start
​1
​2
# highlight-end
```

```bash title="Only take the first 2 results of the search"
> search is(volume) | head -2
# highlight-start
​kind=gcp_disk, id=12, name=gke-1, age=5mo26d, cloud=gcp, account=eng, region=us-central1, zone=us-central1-c
​kind=gcp_disk, id=34, name=pvc-2, age=4mo16d, cloud=gcp, account=dev, region=us-west1, zone=us-west1-a
# highlight-end
```

## Related Commands

- [`tail`](./tail.md)
