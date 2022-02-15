# `jq`

The `jq` command filters and processes JSON input.

This command uses the well-known [`jq` JSON processor](https://stedolan.github.io/jq) to manipulate incoming JSON. Please refer to the [`jq` manual](https://stedolan.github.io/jq/manual) for details.

## Usage

```bash
jq <filter>
```

### Parameters

| Parameter | Description                                                      | Required? | Default Value |
| --------- | ---------------------------------------------------------------- | --------- | ------------- |
| `filter`  | [`jq` filter](https://stedolan.github.io/jq/manual#Basicfilters) | ✔️        | N/A           |

## Examples

```bash title="Query all AWS EC2 instances and select the reported.id"
> query is(aws_ec2_instance) | jq '.reported.id'
// highlight-next-line
["id-1", "id-2"]
```

```bash title="Query all AWS EC2 instances and select the reported.id as id and the revision as rev"
> query is(aws_ec2_instance) | jq '. | {id: .reported.id, rev:.revision}'
// highlight-next-line
[{"id": "id-1", "rev": "1"}, {"id": "id-2", "rev": "5"}]
```

## See Also

[`dump`](./dump.md), [`format`](./format.md), [`list`](./list.md)
