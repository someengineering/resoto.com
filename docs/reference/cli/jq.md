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

```bash title="Query EC2 instances and extract only the name property"
> search is(aws_ec2_instance) limit 2 | jq .name
// highlight-start
build-node-1
prod-23
// highlight-end
```

```bash title="Query EC2 instances and create a new JSON object for each entry with name and owner"
> search is(aws_ec2_instance) limit 2 | jq {name: .name, owner: .tags.owner}
// highlight-start
name: build-node-1
owner: frosty
---
name: prod-23
owner: bog-team
// highlight-end
```

## See Also

- [`dump`](./dump.md)
- [`format`](./format.md)
- [`list`](./list.md)
