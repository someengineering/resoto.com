# `predecessors`

The `predecessors` command selects all predecessors of nodes returned in a query.

Please refer to the [Search Traversals](../../search/traversals.md#by-depth) for a detailed explanation of traversals.

## Usage

```bash
predecessors [--with-origin] <edge_type>
```

### Options

| Option          | Description                                     |
| --------------- | ----------------------------------------------- |
| `--with-origin` | Includes the current element in the result set. |

### Parameters

| Parameter   | Description                    | Required? | Default Value |
| ----------- | ------------------------------ | --------- | ------------- |
| `edge_type` | Edge type by which to traverse | ❌        | `delete`      |

## Examples

```bash title="Equivalent to query is(aws_region) <--"
> search is(aws_region) | predecessors
```

```bash title="Equivalent to query is(aws_region) <-[0:1]-"
> search is(aws_region) | predecessors --with-origin
```

```bash
> search is(volume) and volume_status=available | predecessors | query is(volume_type)
# highlight-start
​kind=gcp_disk_type, name=pd-standard, age=2yr1mo, cloud=gcp, account=eng, region=us-central1, zone=us-central1-a
​kind=gcp_disk_type, name=pd-standard, age=2yr1mo, cloud=gcp, account=sre, region=us-central1, zone=us-central1-a
​kind=aws_ec2_volume_type, name=gp2, age=5d8h, cloud=aws, account=sales, region=us-west-2
# highlight-end
```

## Related Commands

- [`ancestors`](./ancestors.md)
- [`descendants`](./descendants.md)
- [`successors`](./successors.md)
