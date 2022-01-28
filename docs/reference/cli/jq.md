# `jq`

The `jq` command filters and processes JSON input.

This command uses the well-known [`jq` JSON processor](https://stedolan.github.io/jq) to manipulate incoming JSON. Please refer to the [`jq` manual](https://stedolan.github.io/jq/manual) for details.

:::tip Example

```bash title="Query all AWS EC2 instances and select the reported.id"
// highlight-next-line
$> query is(aws_ec2_instance) | jq '.reported.id'
["id-1", "id-2"]
```

```bash title="Query all AWS EC2 instances and select the reported.id as id and the revision as rev"
// highlight-next-line
$> query is(aws_ec2_instance) | jq '. | {id: .reported.id, rev:.revision}'
[{"id": "id-1", "rev": "1"}, {"id": "id-2", "rev": "5"}]
```

:::

**See also:** [`dump`](./dump.md), [`format`](./format.md), [`list`](./list.md)
