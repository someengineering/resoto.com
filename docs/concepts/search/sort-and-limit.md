---
sidebar_position: 3
sidebar_label: Sort and Limit
---

# Sort

Every search result can be sorted by a number of fields. Sort order is either ascending (`asc`) or descending (`desc`). If no order is defined, the default is ascending. The syntax to define a sort is

```bash
sort path.to.property [asc|desc]
```

It is possible to define multiple sort criteria. Example:

```bash
> search is(volume) sort kind, volume_size desc, name asc
```

Searches performed on the CLI will automatically sort the results by default using following sort criteria:

```bash
sort kind asc, name asc, id asc
```

# Limit

It is possible to define a limit on the search result. The limit is defined by an optional offset and the number of results to return.

Example:

```bash
# Limit to 10 results
> search is(volume) limit 10

# Limit to 5 results skipping the first 5
> search is(volume) limit 5, 5
```

:::tip While experimenting with a specific search or exploring the cloud you should always define a meaningful limit. This will reduce the search result to a number that can be digested easily. :::

Please note: a single search can have multiple limits: one for each partial search result. This is especially useful when the graph is traversed, since the limit can be applied to every graph traversal.

Example:

```bash
> search is(volume) limit 5,1 <-- is(instance) limit 1 <-- is(load_balancer) limit 1
```

Let's analyze the different limits one by one:

- we filter all volumes and limit the result to one example while skipping the first 5 results
- from this node we walk the graph inbound, filter the list of nodes by type `instance` and limit this result again to one example
- we continue walking the graph inbound, filter the list of nodes by type `load_balancer` and limit this result a last time to one example

The final result is exactly zero or one load balancer (depending on the structure of the graph). The performance of the search is excellent, since only a small number of nodes need to be traversed.
