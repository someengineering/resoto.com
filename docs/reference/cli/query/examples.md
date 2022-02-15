# Examples

The following are some common queries for Resoto, organized by [kind](../../../concepts/graph/node.md#kind).

Do you need help writing a query? Join us on [Discord](https://discord.gg/someengineering) and we'll do our best to help!

Have you written a query others may find useful? Contributions to this page are welcome!

:::note

All queries listed here are safe to use, as they will _NOT_ modify your resources.

:::

## `aws_alb`

```bash title="Orphaned Load Balancers that have no active backend"
> query is(aws_alb) and age > 7d and backends==[] with(empty, <-- is(aws_alb_target_group) and target_type = instance and age > 7d with(empty, <-- is(aws_ec2_instance) and instance_status != terminated)) <-[0:1]- is(aws_alb_target_group) or is(aws_alb)
```

## `aws_iam_access_key`

```bash title="Ensure there is only one active access key available for any single IAM user"
> query is(access_key) access_key_status = "Active" | aggregate user_name as user : sum(1) as number_of_keys
```

## `certificate`

```bash title="Find expired ssl certificates currently in use"
> query is(certificate) and expires < @NOW@ <--
```

## `quota`

```bash title="Find current quota consumption to prevent service interruptions"
> query is(quota) and usage > 0
```

## `volume`

```bash title="Find unused AWS volumes older than 30 days with no IO in the past 7 days"
> query is(aws_ec2_volume) and age > 30d and last_access > 7d and last_update > 7d and volume_status = available
```
