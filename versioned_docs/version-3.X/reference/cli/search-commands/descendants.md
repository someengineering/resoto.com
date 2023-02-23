---
sidebar_label: descendants
---

# `descendants` Command

The `descendants` command selects all [descendants](../../../concepts/asset-inventory-graph/index.md#descendant) of nodes returned in a query.

## Usage

```bash
descendants [--with-origin] <edge_type>
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

```bash title="Equivalent to query is(aws_region) -[1:]->"
> search is(aws_region) | descendants
```

```bash title="Equivalent to query is(aws_region) -[0:]->"
> search is(aws_region) | descendants --with-origin
```

```bash
> search is(volume_type) limit 1 | descendants --with-origin
# highlight-start
​kind=gcp_disk_type, name=pd-standard, age=52yr1mo, cloud=gcp, account=sre, region=us-central1, zone=us-central1-a
​kind=gcp_disk, id=881, name=disk-1, age=1yr2mo, cloud=gcp, account=sre, region=us-central1, zone=us-central1-a
# highlight-end
```

## Related Commands

- [`ancestors`](./ancestors.md)
- [`predecessors`](./predecessors.md)
- [`successors`](./successors.md)

## Further Reading

- [Asset Inventory Graph](../../../concepts/asset-inventory-graph/index.md)
- [Search Traversals](../../search/traversals.md)
