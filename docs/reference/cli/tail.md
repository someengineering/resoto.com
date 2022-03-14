# `tail`

The `tail` command returns the last `n` elements of the input stream. The beginning of the stream is consumed but discarded.

The command returns 100 elements by default if the number of elements is not specified.

## Usage

```bash
tail <n>
```

### Parameters

| Parameter | Description                  | Required? | Default Value |
| --------- | ---------------------------- | --------- | ------------- |
| `n`       | Number of elements to return | ❌        | `100`         |

## Examples

```bash
> json [1,2,3,4,5] | tail -2
// highlight-start
4
5
// highlight-end
```

```bash
> query is(volume) | tail -2
// highlight-start
kind=aws_ec2_volume, id=vol-0, name=vol-0, age=2mo1d, cloud=aws, account=dev, region=us-west-2
kind=gcp_disk, id=123, name=gke-1, age=7mo22d, cloud=gcp, account=eng, region=us-west1, zone=us-west1-a
// highlight-end
```

## See Also

- [`head`](./head.md)
