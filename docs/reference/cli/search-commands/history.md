---
sidebar_label: history
---

# `history` Command

The `history` command selects all changes inside a graph based on the given criteria.

Whenever changes are detected by Resoto, a dedicated change event is written as separate entity. Following changes are supported:

- `node_created`: a node is added to the graph that has not been seen before.
- `node_updated`: a node is delivered and is different to the one in the graph.
- `node_deleted`: a node is no longer reported and gets deleted from the graph.

## Usage

```bash
history [--before <timestamp>] [--after <timestamp>] [--change <change>] [search-statement]
```

### Options

| Option                    | Description                                                                                   |
| ------------------------- | --------------------------------------------------------------------------------------------- |
| `--before` &lt;timestamp> | Only show changes before the given timestamp. Timestamp should be defined in ISO 8601 format. |
| `--after` &lt;timestamp>  | Only show changes after the given timestamp. Timestamp should be defined in ISO 8601 format.  |
| `--change` &lt;change>    | Filter changes by type of change.                                                             |

### Parameters

| Parameter         | Description                                            | Required? | Default Value |
| ----------------- | ------------------------------------------------------ | --------- | ------------- |
| `search-statment` | Search filter statement to filter the list of changes. | ❌        |               |

### Examples

```shell title="Show all nodes changed in the last hour"
> history --after 2022-01-01T03:00:
# highlight-start
​change=node_updated, changed_at=2022-01-01T03:00:59Z, kind=kubernetes_config_map, id=73616434 name=leader, cloud=k8s
​change=node_deleted, changed_at=2022-01-01T04:40:59Z, kind=aws_vpc, id=vpc-1, name=resoto-eks, cloud=aws
# highlight-end
```

```shell title="Show all nodes created on 1.1.2022 between 03:00 and 06:00 (UTC)"
> history --change node_created --after 2022-01-01T03:00:00Z --before 2022-01-02T06:00:00Z
# highlight-start
​change=node_created, changed_at=2022-01-01T05:40:59Z, kind=aws_iam_role, id=AROA, name=some-role, cloud=aws
# highlight-end
```

```shell title="Show all changes to kubernetes resources in the kube-system namespace"
> history is(kubernetes_resource) and namespace=kube-system
# highlight-start
​change=node_created, changed_at=2022-11-18T12:00:49Z, kind=kubernetes_role, name=eks, namespace=kube-system
​change=node_updated, changed_at=2022-11-18T12:00:50Z, kind=kubernetes_config_map, name=cert, namespace=kube-system
# highlight-end
```

## Miscellaneous

The event history is only kept for a limited amount of time. The default retention time is 14 days. All changes that are older than that time are deleted from the database.

The current implementation only maintains the history of [nodes](../../../concepts/asset-inventory-graph/index.md#nodes), not [edges](../../../concepts/asset-inventory-graph/index.md#edges).

## Related Commands

- [`search`](./search.md)
