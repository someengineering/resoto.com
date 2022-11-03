---
sidebar_label: ancestors
---

# `ancestors` Command

The `ancestors` command selects all ancestors of nodes returned in a query.

Please refer to the [Search Traversals](../../search/traversals.md#by-depth) for a detailed explanation of traversals.

## Usage

```bash
ancestors [--with-origin] <edge_type>
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

```bash title="Equivalent to 'search is(aws_region) <-[1:]-'"
> search is(aws_region) | ancestors
```

```bash title="Equivalent to 'search is(aws_region) <-[0:]-'"
> search is(aws_region) | ancestors --with-origin
```

```bash
> search is(volume_type) limit 1 | ancestors
# highlight-start
​kind=gcp_service_sku, id=D2, name=Storage PD Capacity, age=5d8h, cloud=gcp, account=sre
​kind=gcp_zone, id=2, name=us-central1-a, age=52yr1mo, cloud=gcp, account=sre, region=us-central1, zone=us-central1-a
​kind=gcp_region, id=1000, name=us-central1, age=52yr1mo, cloud=gcp, account=sre, region=us-central1
​kind=gcp_service, id=6F81-5844-456A, name=Compute Engine, age=5d8h, cloud=gcp, account=sre
​kind=gcp_project, id=sre-tests, name=sre-tests, age=5d8h, cloud=gcp, account=sre
​kind=cloud, id=gcp, name=gcp, age=5d8h, cloud=gcp
​kind=graph_root, id=root, name=root
# highlight-end
```

## Related Commands

- [`descendants`](./descendants.md)
- [`predecessors`](./predecessors.md)
- [`successors`](./successors.md)
