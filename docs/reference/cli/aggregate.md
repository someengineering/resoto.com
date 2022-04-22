# `aggregate`

The `aggregate` command aggregates query results over given properties and applies the defined aggregation functions.

## Usage

```bash
aggregate [group_props]: [functions]
```

### Parameters

| Parameter     | Description                                                                   | Required? | Default Value |
| ------------- | ----------------------------------------------------------------------------- | --------- | ------------- |
| `group_props` | Comma-delimited list of grouping properties                                   | ❌        | N/A           |
| `functions`   | Comma-delimited list of grouping functions to be applied on every result node | ✔️        | N/A           |

:::info

Each grouping variable can have an `as <name>` clause to give the variable a specific name: `<path_to_prop> as <name>`. If this `as <name>` clause is omitted, a name is derived from the property path.

The following functions are supported:

| Function | Description                                                                              |
| -------- | ---------------------------------------------------------------------------------------- |
| `sum(x)` | Sum `x` over all incoming elements. `x` can be a static value or the path to a property. |
| `min(x)` | Return the smallest seen `x` over all incoming elements.                                 |
| `max(x)` | Return the biggest seen `x` over all incoming elements.                                  |
| `avg(x)` | Compute the average over all `x`.                                                        |

Function arguments can be variable names (e.g., `min(path.to.prop)`), static values (e.g., `sum(1)`), or even calculations using simple expressions (`min(path.to.prop * 3 + 2)`).

Each grouping function can have an `as <name>` clause to give the function result a specific name: `<function>(..) as <name>`. If this `as <name>` clause is omitted, a name is derived from the function name and property path.

:::

## Examples

```bash title="Count volumes in the system, grouped by kind"
> search is(volume) | aggregate kind as kind: sum(1) as count
// highlight-start
​group:
​  kind: aws_ec2_volume
​count: 1799
​---
​group:
​  kind: gcp_disk
​count: 1100
// highlight-end
```

```bash title="Count volumes and compute total volume size, grouped by kind"
> search is(volume) | aggregate kind: sum(volume_size) as summed, sum(1) as count
// highlight-start
​group:
​  kind: aws_ec2_volume
​summed: 130903
​count: 1799
​---
​group:
​  kind: gcp_disk
​summed: 23930
​count: 1100
// highlight-end
```

```bash title="Count volumes and compute total volume size"
> search is(volume) | aggregate sum(volume_size) as summed, sum(1) as count
// highlight-start
​summed: 154833
​count: 2899
// highlight-end
```

## See Also

- [`search`](./search.md)
