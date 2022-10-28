# `successors`

The `successors` command selects all successors of nodes returned in a query.

Please refer to the [Search Traversals](../../search/traversals.md#by-depth) for a detailed explanation of traversals.

## Usage

```bash
successors [--with-origin] <edge_type>
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

```bash title="Equivalent to query is(aws_region) -->"
> search is(aws_region) | successors
```

```bash title="Equivalent to query is(aws_region) -[0:1]->"
> search is(aws_region) | successors --with-origin
```

```bash
> search is(volume_type) | successors | query is(volume)
# highlight-start
​kind=gcp_disk, id=16, name=gke16, age=8mo29d, cloud=gcp, account=eng, region=us-west1, zone=us-west1-a
​kind=gcp_disk, id=26, name=gke26, age=8mo29d, cloud=gcp, account=eng, region=us-west1, zone=us-west1-a
​kind=aws_ec2_volume, id=vol1, name=vol1, age=2mo11d, cloud=aws, account=insights, region=us-west-2
# highlight-end
```

## Related Commands

- [`ancestors`](./ancestors.md)
- [`descendants`](./descendants.md)
- [`predecessors`](./predecessors.md)
