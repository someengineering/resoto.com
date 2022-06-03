---
sidebar_position: 1
pagination_prev: getting-started/configuration/index
---

# Performing Searches

Resoto's search syntax is quite powerful and has many features. Once Resoto has finished its first collect run, we suggest trying these example queries:

```bash title="Search all resources for a property with value foo"
> search "foo"
```

```bash title="Get number of all collected resources"
> search all | count
```

```bash title="Get number of all collected resources by kind"
> search all | count kind
```

```bash title="Get list of all the compute instances"
> search is(instance)
```

```bash title="Get list of name, type, cores, and memory for each account in csv format"
> search is(instance) | list --csv name, instance_type, instance_cores as cores,
  instance_memory as memory, /ancestors.account.reported.name as account
```

```bash title="Write list of instance IDs and their creation times as markdown table to outfile.md"
> search is(instance) | list --markdown id, ctime | write outfile.md
```

```bash title="Get list of all compute instances with more than two CPU cores"
> search is(instance) and instance_cores > 2
```

```bash title="Get all instances and display the metadata of the last instance"
> search is(instance) | tail -1 | dump
```

```bash title="Get list volumes that are not in use, larger than 10GB, older than 30 days, and with no I/O during the past 7 days"
> search is(volume) and volume_status != in-use and
  volume_size > 10 and age > 30d and last_access > 7d
```

```bash title="Count the number of EC2 instances by account ID"
> search is(aws_ec2_instance) | count /ancestors.account.reported.id
```

```bash title="Aggregate RAM usage (bytes) data grouped by cloud, account, region, and instance type"
> search is(instance) and instance_status == running | aggregate
  /ancestors.cloud.reported.name as cloud,
  /ancestors.account.reported.name as account,
  /ancestors.region.reported.name as region,
  instance_type as type: sum(instance_memory * 1024 * 1024 * 1024) as memory_bytes
```

```bash title="Aggregate hourly instance cost grouped by cloud, account, region, and type from the cost information associated with the instance_type higher up in the graph"
> search is(instance) and instance_status == running | aggregate
  /ancestors.cloud.reported.name as cloud,
  /ancestors.account.reported.name as account,
  /ancestors.region.reported.name as region,
  instance_type as type: sum(/ancestors.instance_type.reported.ondemand_cost) as instances_hourly_cost_estimate
```

The above examples only highlight some of what is possible with Resoto's search syntax. For more in-depth explanations and additional examples, please refer to the [search documentation](../../concepts/search/index.md).
