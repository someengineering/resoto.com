---
sidebar_position: 4
---

# Aggregation

There are several situations where specific data is not too relevant but needs lifting to a higher level. That is where aggregation comes into play.

Aggregation allows to group entities by one or more properties and then do math operations on that group.

Let's look at an example to understand the concept better.

For the sake of this example, consider this query:

```bash
> query is(instance) and age > 3y
```

This will select all compute instances in my cloud, that are older than 3 years.

If we only want to know the number of instances, that matches that criteria, we could write this:

```bash
> query aggregate(sum(1) as count): is(instance) and age > 3y
> count: 20
```

… which would return the total number of all compute instances that are older than 3 years.

You can see the `aggregate():` part in front of the filter query part. The query part itself has not changed—the aggregation part tells Resoto to aggregate the resulting data based on the defined criteria.

Every resulting element of the filter query is passed to the aggregation function. This function can aggregate data from the incoming element using on of `sum(x)`, `min(x)`, `max(x)` or `avg(x)`.

:::tip
This criteria in this case is `sum(1) as count`, which uses the static value `1` for every element passed and then sums it up.

Since every element counts as `1`; `sum(1)` is basically the number of elements passed.

Please note, that the variable to sum does not need to be a static value, but could come from the element passed to this function.
:::

If we would like to know the number of CPU cores, we could rewrite the aggregation like this:

```bash
> query aggregate(
    sum(1) as count,
    sum(instance_cores) as cores):
  is(instance) and age > 3y

count: 20
cores: 62
```

In addition to the instance count, we also get the total number of instance cores in the system.

All of the above aggregations do not use any grouping information. Grouping can be a powerful feature, since it allows to make the defined computation on separate groups.

Let us now assume we want to know the number of instances and cores for compute instances, grouped by its instance status:

```bash
> query aggregate(
    instance_status as status:
    sum(1) as count, sum(instance_cores) as cores):
  is(instance) and age > 3y

group:
  status: stopped
count: 15
cores: 51
---
group:
  status: terminated
count: 5
cores: 11
```

The query is the same and the aggregation functions are the same.

The only addition here is the aggregation group: `instance_status`, which is defined by every compute instance.
The result of this addition: the computation is performed on every matching subgroup.

Each group is identified by the value of the grouping variable.
Every compute instance is put into one subgroup by its reported `instance_status` property.

We can see that there are 15 stopped and 5 terminated instances, with the related number of cores.
It is totally possible to group by more than one variable.

Let's also use the instance_type as an additional group variable:

```bash
> query aggregate(
    instance_status as status,
    instance_type as type:
    sum(1) as count,
    sum(instance_cores) as cores):
  is(instance) and age > 3y

group:
  status: stopped
  type: m5.xlarge
count: 12
cores: 48
---
group:
  status: stopped
  type: t2.micro
count: 3
cores: 3
---
group:
  status: terminated
  type: n1-standard-1
count: 1
cores: 1
---
group:
  status: terminated
  type: n1-standard-2
count: 3
cores: 6
---
group:
  status: terminated
  type: n1-standard-4
count: 1
cores: 4
```

## Syntax

General structure of every aggregation query:

```bash
aggregate([grouping_part:] [function_part]): [query]
```

The grouping part is optional and could be omitted.
All grouping variables are separated by comma.
Every grouping variable can have an `as <name>` clause to give the variable a specific name: `<path_to_prop> as <name>`.
If the `as <name>` clause is omitted, a name is derived from the property path.

```bash
path.to.property1 as p1, path.to.property2 as p2
```

The grouping function part is mandatory with this syntax: `<function>(..)`.
Every grouping function can have an `as <name>` clause to give the function result a specific name: `<function>(..) as <name>`.
If the `as <name>` clause is omitted, a name is derived from the function name and property path.

```bash
sum(1) as fp1, avg(path.to.property) as fp2
```

The following functions are supported:

| Function | Description                                                                          |
| -------- | ------------------------------------------------------------------------------------ |
| `sum(x)` | Sum x over all incoming elements. x can be a static value or the path to a property. |
| `min(x)` | Return the smallest seen x over all incoming elements.                               |
| `max(x)` | Return the biggest seen x over all incoming elements.                                |
| `avg(x)` | Compute the average over all x.                                                      |

## Examples

```bash title="Count all instances in the system"
query aggregate(
  sum(1) as count):
  is(instance)
```

```bash title="Count all instances and instance cores in the system"
query aggregate(
  sum(1) as count,
  sum(instance_cores) as cores):
  is(instance)
```

```bash title="Same as above, but group all instances by status"
query aggregate(
  instance_status as status: sum(1) as count,
  sum(instance_cores) as cores):
  is(instance)
```

```bash title="Same as above, but group all instances by status and type"
query aggregate(
  instance_status as status,
  instance_type as type: sum(1) as count,
  sum(instance_cores) as cores):
  is(instance)
```
