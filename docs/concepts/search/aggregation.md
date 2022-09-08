---
sidebar_position: 5
sidebar_label: Aggregation
---

# Search Aggregation

There are several situations where specific data is not too relevant but needs lifting to a higher level. That is where aggregation comes into play. Aggregation allows grouping entities by one or more properties and then do math operations on that group.

For example, the following search will select and count compute instances that are older than 3 years:

```bash
> search is(instance) and age > 3y | count
# highlight-start
​total matched: 21
​total unmatched: 0
# highlight-end
```

The [`count` command](../../reference/cli/search-commands/count.md) is actually a special type of aggregation.

## Aggregation Functions

Aggregations can utilize the following functions:

- `sum`
- `min`
- `max`
- `avg`

Function arguments can be variable names (e.g., `min(path.to.prop)`), static values (e.g., `sum(1)`), or even calculations using simple expressions (`min(path.to.prop * 3 + 2)`).

Each grouping function can have an `as <name>` clause to give the function result a specific name: `<function>(..) as <name>`. If this `as <name>` clause is omitted, a name is derived from the function name and property path.

Example: `min(memory)`, `sum(1) as count`, `avg(instance_cores) as average_cores`.

The [`aggregate` command](../../reference/cli/search-commands/aggregate.md) tells Resoto to aggregate the search results based on the defined criteria. Each result of the search is then passed to the defined aggregation function(s).

The above example using the [`count`](../../reference/cli/search-commands/count.md) could also be rewritten with `aggregate` like so:

```bash
> search is(instance) and age > 3y | aggregate sum(1) as count
# highlight-start
​count: 21
# highlight-end
```

Every element is counted as `1`, so `sum(1)` is the number of elements.

It is also possible to define multiple aggregation functions. Let's count both instances and cores:

```bash
> search is(instance) and age > 3y | aggregate
  sum(1) as count,
  sum(instance_cores) as cores
# highlight-start
​count: 21
​cores: 66
# highlight-end
```

We could even compute the average, minimum, and maximum number of available cores:

```bash
> search is(instance) and age > 3y | aggregate
  sum(1) as count,
  sum(instance_cores) as cores,
  min(instance_cores) as min_cores,
  max(instance_cores) as max_cores,
  avg(instance_cores) as avg_cores
# highlight-start
​count: 21
​cores: 66
​min_cores: 1
​max_cores: 4
​avg_cores: 3.14
# highlight-end
```

## Aggregation Groups

The real power of aggregations is in defining groups and applying functions on those groups.

A group is defined using a property path. The value of this path is looked up in every document. All documents with the same value form a group.

For example, instances can be grouped by status:

```bash
> search is(instance) and age > 3y | aggregate instance_status: sum(1) as count
# highlight-start
​group:
​  instance_status: running
​count: 1
​---
​group:
​  instance_status: stopped
​count: 15
​---
​group:
​  instance_status: terminated
​count: 5
# highlight-end
```

Grouping variable can be named using `as`. By default, the last part of the path is used as the variable name.

Additional aggregation functions also get applied on each group:

```bash
> search is(instance) and age > 3y | aggregate instance_status as status:
  sum(1) as count,
  sum(instance_cores) as cores,
  min(instance_cores) as min_cores,
  max(instance_cores) as max_cores,
  avg(instance_cores) as avg_cores
# highlight-start
​group:
​  status: running
​count: 1
​cores: 4
​min_cores: 4
​max_cores: 4
​avg_cores: 4
​---
​  group:
​status: stopped
​count: 15
​cores: 51
​min_cores: 1
​max_cores: 4
​avg_cores: 3.4
​---
​  group:
​status: terminated
​count: 5
​cores: 11
​min_cores: 1
​max_cores: 4
​avg_cores: 2.2
# highlight-end
```

Groups can also be defined using multiple grouping variables:

```bash
> search is(instance) and age > 3y | aggregate
  instance_status as status, instance_type as type:
  sum(1) as count,
  sum(instance_cores) as cores
# highlight-start
​group:
​  status: running
​  type: n1-standard-4
​count: 1
​cores: 4
​---
​group:
​  status: stopped
​  type: m5.xlarge
​count: 12
​cores: 48
​---
​group:
​  status: stopped
​  type: t2.micro
​count: 3
​cores: 3
​---
​group:
​  status: terminated
​  type: n1-standard-2
​count: 5
​cores: 11
# highlight-end
```
