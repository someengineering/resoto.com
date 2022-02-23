---
sidebar_position: 5
sidebar_label: Aggregation
---

# Search Aggregation

There are several situations where specific data is not too relevant but needs lifting to a higher level. That is where aggregation comes into play.
Aggregation allows grouping entities by one or more properties and then do math operations on that group.

Let's look at an example to understand the concept better:
```bash
> query is(instance) and age > 3y | count

total matched: 21
total unmatched: 0
```
This will select and count all compute instances in my cloud, that are older than 3 years.
`count` actually already is a special purpose aggregation, that allows counting objects or property values.

## Aggregation Functions

Aggregations support a list of functions. 
The value passed to this function is either a static number or the property path to lookup the number in every matching document.
- `sum`
- `min`
- `max`
- `avg`

Example: `min(memory)`, `sum(1) as count`, `avg(instance_cores) as average_cores`.

The [`aggregate` command](../../reference/cli/aggregate.md) tells Resoto to aggregate the query results based on the defined criteria. Each result of the query is then passed to the defined aggregation function(s).
Above CLI command using count could also be written with `aggregate` like this:

```js
> query is(instance) and age > 3y | aggregate sum(1) as count

count: 21
```
Every element is counted as `1`, so `sum(1)` is basically the number of elements passed.
It is possible to define multiple aggregation function on the same data source.
Let us get the all instances and the sum of all cores:

```js
> query is(instance) and age > 3y | aggregate 
  sum(1) as count, 
  sum(instance_cores) as cores

count: 21
cores: 66
```

In addition to the instance count, we also get the total number of instance cores in the system.

Let us also query for avg, min and max of available core:

```js
> query is(instance) and age > 3y | aggregate 
  sum(1) as count, 
  sum(instance_cores) as cores,
  min(instance_cores) as min_cores,
  max(instance_cores) as max_cores,
  avg(instance_cores) as avg_cores,
  
count: 21
cores: 66
min_cores: 1
max_cores: 4
avg_cores: 3.14
```

## Aggregation Groups

While aggregating all the things can be useful. The real power of aggregations come into play,
when we can define groups and apply the functions on those groups.

A group is defined using a property path. The value of this path is looked up in every document.
All documents with the same value form a group.
Example: Let us group the instances by instance status and do a simple count:

```js
> query is(instance) and age > 3y | aggregate instance_status: sum(1) as count

group:
  instance_status: running
count: 1
---
group:
  instance_status: stopped
count: 15
---
group:
  instance_status: terminated
count: 5
```
The grouping variable can be named via an `as` clause. If omitted, the last part of the path is used as name.
We could of course add additional aggregation functions, that get applied on each group:
```js
> query is(instance) and age > 3y | aggregate instance_status as status:
  sum(1) as count,
  sum(instance_cores) as cores,
  min(instance_cores) as min_cores,
  max(instance_cores) as max_cores,
  avg(instance_cores) as avg_cores

group:
  status: running
count: 1
cores: 4
min_cores: 4
max_cores: 4
avg_cores: 4
---
  group:
status: stopped
count: 15
cores: 51
min_cores: 1
max_cores: 4
avg_cores: 3.4
---
  group:
status: terminated
count: 5
cores: 11
min_cores: 1
max_cores: 4
avg_cores: 2.2
```

And we can also define groups using multiple grouping variables.
In this example we will use `instance_status` and `instance_type` to form the groups.

```js
> query is(instance) and age > 3y | aggregate 
  instance_status as status, instance_type as type:
  sum(1) as count,
  sum(instance_cores) as cores
 
group:
  status: running
  type: n1-standard-4
count: 1
cores: 4
---
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
  type: n1-standard-2
count: 5
cores: 11
```



