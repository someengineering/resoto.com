---
sidebar_position: 5
sidebar_label: Aggregation
---

# Search Aggregation

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
> query is(instance) and age > 3y | aggregate sum(1) as count
// highlight-next-line
count: 20
```

… which would return the total number of all compute instances that are older than 3 years.

The [`aggregate` command](../../reference/cli/aggregate.md) tells Resoto to aggregate the query results based on the defined criteria. Each result of the query is then passed to the defined aggregation function(s).

:::tip

This criteria in this case is `sum(1) as count`, which uses the static value `1` for every element passed and then sums it up.

Since every element counts as `1`; `sum(1)` is basically the number of elements passed.

:::

If we would like to know the number of CPU cores, we could rewrite the aggregation like this:

```bash
> query is(instance) and age > 3y | aggregate sum(1) as count, sum(instance_cores) as cores
// highlight-start
count: 20
cores: 62
// highlight-end
```

In addition to the instance count, we also get the total number of instance cores in the system.

All of the above aggregations do not use any grouping information. Grouping can be a powerful feature, since it allows to make the defined computation on separate groups.

Let us now assume we want to know the number of instances and cores for compute instances, grouped by instance status:

```bash
> query is(instance) and age > 3y | aggregate instance_status as status: sum(1) as count, sum(instance_cores) as cores)
// highlight-start
group:
  status: stopped
count: 15
cores: 51
---
group:
  status: terminated
count: 5
cores: 11
// highlight-end
```

The query is the same and the aggregation functions are the same.

The only addition here is the aggregation group `instance_status as status`. The result of this addition is that the computation is performed on every matching subgroup.

Each group is identified by the value of the grouping variable. Every compute instance is put into one subgroup by its reported `instance_status` property.

We can see that there are 15 stopped and 5 terminated instances, with the related number of cores. It is totally possible to group by more than one variable.

Let's also use the instance_type as an additional group variable:

```bash
> query is(instance) and age > 3y | aggregate instance_status as status, instance_type as type: sum(1) as count, sum(instance_cores) as cores)
// highlight-start
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
// highlight-end
```

Please refer to the documentation of the [`aggregate` command](../../reference/cli/aggregate.md) for more details and examples.
