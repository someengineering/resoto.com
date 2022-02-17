# Performing Searches

Resoto's search syntax is quite powerful and has many features. Once Resoto has finished its first collect run, we suggest trying these example queries:

```bash title="Get number of collected resources"
> query is(resource) | count
```

```bash title="Get list of all the compute instances"
> query is(instance)
```

```bash title="Get CSV-style list of name, type, cores, and memory for each account"
> query is(instance) | format {/ancestors.account.reported.name},{name},{instance_type},{instance_cores},{instance_memory}
```

```bash title="Write formatted list of instance IDs and their creation times to outfile.txt"
> query is(instance) | format {id},{ctime} | write outfile.txt
```

```bash title="Get list of all compute instances with more than two CPU cores"
> query is(instance) and instance_cores > 2
```

```bash title="Get all AWS EC2 instances and display the metadata of the last instance"
> query is(aws_ec2_instance) | tail -1 | dump
```

```bash title="Get list of EBS volumes that are not in use, larger than 10GB, older than 30 days, and with no I/O during the past 7 days"
> query is(aws_ec2_volume) and volume_status = available and volume_size > 10 and age > 30d and last_access > 7d
```

```bash title="Aggregate the number of EC2 instances by account ID"
> query aggregate(/ancestors.account.reported.id as account_id: sum(1) as instance_count): is(aws_ec2_instance)
```

```bash title="Aggregate RAM usage (bytes) data grouped by cloud, account, region, and instance type"
> query aggregate(/ancestors.cloud.reported.name as cloud, /ancestors.account.reported.name as account, /ancestors.region.reported.name as region, instance_type as type: sum(instance_memory * 1024 * 1024 * 1024) as memory_bytes): is(instance) and instance_status == running
```

```bash title="Aggregate hourly instance cost grouped by cloud, account, region, and type from the cost information associated with the instance_type higher up in the graph"
> query aggregate(/ancestors.cloud.reported.name as cloud, /ancestors.account.reported.name as account, /ancestors.region.reported.name as region, instance_type as type: sum(/ancestors.instance_type.reported.ondemand_cost) as instances_hourly_cost_estimate): is(instance) and instance_status == running
```

The above examples only highlight some of what is possible with Resoto's search syntax. For more in-depth explanations and additional examples, please refer to the [search syntax documentation](../concepts/search/README.md).
