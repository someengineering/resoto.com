# `list`

The `list` command transforms inputted JSON objects into `string`s.

## Usage

```bash
list <properties>
```

### Options

| Parameter    | Description               |
| ------------ | ------------------------- |
| `--markdown` | Format output as Markdown |
| `--csv`      | Format output as CSV      |

### Parameters

| Parameter    | Description                 | Required? | Default Value |
| ------------ | --------------------------- | --------- | ------------- |
| `properties` | Names of properties to show | ❌        | See note      |

:::note

If no properties are provided, a predefined list of properties will be shown:

- `reported.kind as kind`
- `reported.id as id`
- `reported.name as name`
- `reported.age as age`
- `ancestors.cloud.reported.name as cloud`
- `ancestors.account.reported.name as account`
- `ancestors.region.reported.name as region`
- `ancestors.zone.reported.name as zone`

If properties are provided, it will override the defaults and only show the defined properties. Property paths can be absolute (i.e., include a section name, such as `reported`, `desired`, or `metadata`). If the section is not defined, the `reported` section is assumed.

The defined property path will be searched for within every element in the JSON input. If the value is defined, it will be a part of the list. Undefined values are filtered out and will not be printed.

The property name can be defined via an `as` clause. `reported.kind as kind` would look up the path `reported.kind` and if the value is defined write `kind={value}`.

If no `as` clause is defined, the name of the last element of the property path is taken. In the example above, we could write `reported.kind` or `reported.kind as kind`; both would have the same result.

The `as` clause is important if the last part of the property path is not a unique property name.

:::

## Examples

```bash
> search is(aws_ec2_instance) limit 3 | list
// highlight-start
kind=aws_ec2_instance, id=1, name=sun, ctime=2020-09-10T13:24:45Z, cloud=aws, account=prod, region=us-west-2
kind=aws_ec2_instance, id=2, name=moon, ctime=2021-09-21T01:08:11Z, cloud=aws, account=dev, region=us-west-2
kind=aws_ec2_instance, id=3, name=star, ctime=2021-09-25T23:28:40Z, cloud=aws, account=int, region=us-east-1
// highlight-end
```

```bash
> search is(aws_ec2_instance) limit 3 | list reported.name
// highlight-start
name=sun
name=moon
name=star
// highlight-end
```

```bash title="Section name is missing, reported is used automatically"
> search is(aws_ec2_instance) limit 3 | list kind, name
// highlight-start
kind=aws_ec2_instance, name=sun
kind=aws_ec2_instance, name=moon
kind=aws_ec2_instance, name=star
// highlight-end
```

```bash
> search is(aws_ec2_instance) limit 3 | list kind as a, name as b
// highlight-start
a=aws_ec2_instance, b=sun
a=aws_ec2_instance, b=moon
a=aws_ec2_instance, b=star
// highlight-end
```

```bash
> search is(aws_ec2_instance) limit 3 | list kind as a, name as b, does_not_exist
// highlight-start
a=aws_ec2_instance, b=sun
a=aws_ec2_instance, b=moon
a=aws_ec2_instance, b=star
// highlight-end
```

```bash
> search is(aws_ec2_instance) limit 3 | list --csv kind as a, name as b, does_not_exist
// highlight-start
a,b,does_not_exist
aws_ec2_instance,sun,
aws_ec2_instance,moon,
aws_ec2_instance,star,
// highlight-end
```

```bash
> search is(aws_ec2_instance) limit 3 | list --markdown kind as a, name as b, does_not_exist
// highlight-start
|a               |b   |does_not_exist|
|----------------|----|--------------|
|aws_ec2_instance|sun |None          |
|aws_ec2_instance|moon|None          |
|aws_ec2_instance|star|None          |
// highlight-end
```

## See Also

- [`dump`](./dump.md)
- [`format`](./format.md)
- [`jq`](./jq.md)
