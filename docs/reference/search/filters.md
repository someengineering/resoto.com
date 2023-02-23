---
sidebar_position: 2
sidebar_label: Filters
---

# Search Filters

## Selecting Nodes by [Kind](../../concepts/asset-inventory-graph/index.md#resource-kinds) {#selecting-nodes-by-kind}

```bash title="Filter by kind"
> search is(instance)
```

In order to select [nodes](../../concepts/asset-inventory-graph/index.md#nodes) by a specific type, the search syntax supports the `is(<kind>)` function. The term `is(instance)` would select the EC2 instance above, but also all other instances, e.g. Google Cloud instances, while the term `is(aws_ec2_instance)` would select only EC2 instances from AWS.

You can get a list of all available kinds via the `kind` CLI command.

## Selecting Nodes by ID

```bash title="Filter by internal ID"
> search id(id2345)
```

Resoto will add a synthetic `id` property to each [node](../../concepts/asset-inventory-graph/index.md#nodes) that is globally unique, no matter which cloud provider you are using. Nodes can be selected by their internal ID via the `id(xyz)` function.

## Selecting Nodes by Predicate

```bash title="Filter by predicate"
> search name=~"my-.*" and age>30d
```

In order to filter for specific attributes of a [node](../../concepts/asset-inventory-graph/index.md#nodes), it is possible to define predicates. A predicate always has the syntax `<property_path> <operation> <value>` (e.g., `answer != 42`).

### Property Path

The `property_path` is the path to the property in the JSON structure.

A nested property can be accessed by defining its dot-delimited path in the object structure. For example, `some.nested.prop` has the value `42` in the following JSON structure:

```json
{ "some": { "nested": { "prop": 42 } } }
```

If the path contains special characters (e.g., `.`) or is otherwise noncompliant, the affected portion(s) of the path should be surrounded by backticks.

For example, the path `` some.`non.compliant.key`.prop `` is used to access the property with value `42` in the below JSON structure: `` some.`non.compliant.key`.prop ``.

```json
{ "some": { "non.compliant.key": { "prop": 42 } } }
```

#### Arrays

If a property is an array, specific elements can be accessed using index notation.

In the below JSON, the path `some.nested[0]` references first element of the array with path `some.nested`, and `some.nested[2]` points to the third (and last) element:

```json
{ "some": { "nested": [1, 2, 3] } }
```

In arrays of objects, object elements can also be accessed using index notation.

The path `some.nested[0].prop` has a value of `1` here:

```json
{ "some": { "nested": [{ "prop": 1 }, { "prop": 2 }, { "prop": 3 }] } }
```

It is also possible to define filters based on object element properties. For example, the path `some.nested[0].prop > 2` matches if the first array element has a `prop` value greater than 2.

We can also check if _any_ array element has a `prop` value greater than 2. To do so, we would use the path `some.nested[*].prop > 2`. The `*` wildcard symbol indicates that all elements of the array should be checked, and that any single element satisfying the defined condition is sufficient for a match.

Take the following example:

```json
{
  "some": {
    "nested": [
      {  "prop": 1  },
      {  "prop": 2  },
      {  "prop": 3  }
    ]
  }
}
```

- `some.nested[*].prop==2` matches because the second element has a `prop` value of 2.
- `some.nested[*].prop>1` matches because one or more elements has a `prop` value greater than 1.
- `some.nested[*].prop>3` does not match because there is no element with a `prop` value greater than 3.

### Operation

The `operation` is one of the following:

| Operation   | Description                                                                |
| ----------- | -------------------------------------------------------------------------- |
| `=` or `==` | Property is equal to the provided value.                                   |
| `!=`        | Property is not equal to the provided value.                               |
| `<=`        | Property is less than or equal to the provided value.                      |
| `>=`        | Property is greater than or equal to the provided value.                   |
| `>`         | Property is greater than the provided value.                               |
| `<`         | Property is less than the provided value.                                  |
| `~` or `=~` | Property conforms to the given regexp. Only applicable to strings.         |
| `!~`        | Property is not conform to the given regexp. Only applicable to strings.   |
| `in`        | Property is one of the following values. The value has to be an array.     |
| `not in`    | Property is not one of the following values. The value has to be an array. |

### Value

The `value` can be any JSON literal or JSON conform value.

A JSON conform value is:

- `string`

  **Examples:** `"hello world"`, `"test"`

  :::note

  The query parser is gracious with quotes. If there are no white space and no special characters, it is possible to omit quotes. In case you see parse errors, try adding quotes to your strings.

  :::

- `number` (integers and floating-point numbers)

  **Examples:** `23`, `12.123`

  The model itself clearly defines if a number is `int32`, `int64`, `float` or `double`. From the query point of view, all numbers are treated the same way.

- `boolean`

  **Examples:** `true`, `false`

- `array`

  **Example:** `[1, true, "test"]`

- `object`

  **Example:** `{"a": 1, "b": 2}`

- `null`

  This can be useful to query for properties that are unset or do not exist.

#### Arrays

If the filtered property is an array, it is also possible to define a criteria based on elements of the array using one of the operator modifier: `all`, `any` or `none` in front of the operation.

Let us assume following document: `{"reported": { "test": [1, 2, 3, 4]}}`, we could define a query like

- `test all >= 1` all elements in the test array need to be greater or equals than 1
- `test any > 2` at least one element needs to be greater than 2
- `test none > 100` no element is greater than 100

In case no operator modifier is defined, the default is `any`.

:::tip Example Predicates

```bash title="Select nodes with names exactly matching "sunset""
name == "sunset"
```

```bash title="Same as previous; parentheses are optional if the string is not a number and does not contain special characters"
name == sunset
```

```bash title="Select nodes with more than 2 instance_cores"
instance_cores > 2
```

```bash title="Select nodes where the name matches the regular expression sun.*"
name =~ "sun.*"
```

```bash title="Select nodes where the name is either "sunset" or "sunrise""
name in ["sunset", "sunrise"]
```

:::

## Combining Selections

All listed selections can be combined with `and` and `or` clauses. In order to define precedence, enclose terms with parentheses. If no brackets are defined, the terms are evaluated from left to right.

It is possible to negate a simple predicate or more complex term with `not`.

:::tip Examples

```bash title="Select nodes where reported.name is either sunrise or sunset"
> search name in [sunset, sunrise]
```

```bash title="Select instance nodes where reported.name is sunrise"
> search is(instance) and name==sunrise
```

```bash title="Select aws_ec2_instance nodes of specific type or more than 2 cores"
> search is(aws_ec2_instance) and (instance_type=="m5a.large" or instance_cores>2)
```

```bash title="Select instance nodes in an account which name includes the term "engineering"
> search is(instance) and /ancestors.account.reported.name=~engineering
```

```bash title="Select all instance nodes wich are not in the engineering account"
> search is(instance) and not /ancestors.account.reported.name==engineering
```

:::

## Nested Predicates

There are entities that contain complex, deeply nested structures. As explained above, you can [reference a nested property using its path](#property-path) and [access specific array elements using index notation](#arrays). But what if we don't know the position of the target element in the array, or want to match multiple properties of an array element?

If you need to combine several predicates for nested array elements, it is not sufficient to combine multiple predicates using `[*]` since there is no way to define the same position for all predicates. However, this is achievable using context notation.

:::tip Example

```json title="Example document showing the data of an AWS security gateway"
{
  "id": "sg-123",
  "tags": {},
  "name": "redirus-master",
  "description": "redirus Master Security Group",
  "group_ip_permissions": [
    {
      "from_port": 80,
      "to_port": 80,
      "ip_protocol": "tcp",
      "ip_ranges": [
        { "cidr_ip": "0.0.0.0/0" }
      ]
    },
    {
      "from_port": 22,
      "to_port": 22,
      "ip_protocol": "tcp",
      "ip_ranges": [
        { "cidr_ip": "3.3.175.2/32" },
        { "cidr_ip": "4.4.119.97/32", "description": "Office access" }
      ]
    }
  ]
}
```

We want to select resources that allow SSH access (port 22) from everywhere on the internet by matching:

- `from_port >= 22`,
- `to_port <= 22`, and
- at least one `cidr` that contains `0.0.0.0`.

```bash title="This query will not do what we want!"
> search group_ip_permissions[*].from_port>=22 and group_ip_permissions[*].to_port<=22 and group_ip_permissions[*].ip_ranges[*].cidr_ip~"0.0.0.0"
```

A simple combination of the same properties is not sufficient. It would eventually match more items than expected, since every filter criteria has to be fulfilled in at least one of the group permissions. What we actually wanted to express: all the criteria should match in any of the nested complex objects.

```bash title="Correct query using context notation"
> search group_ip_permissions[*].{from_port>=22, to_port<=22, ip_ranges[*].cidr_ip~"0.0.0.0"}
```

:::

Resoto supports context notation, which allows us to reference a single position in all predicates. Context notation combines several predicates into a single term which is matched to a nested structure. The path to this structure is defined by a path which can contain arrays that use the wildcard index `[*]`.

The syntax of context notation is:

```bash title="Context notation"
path.to[*].nested.structure[*].{predicate1, predicate2, ....}
```

It is also possible to nest a context within another:

```bash title="Nested context notation"
path[*].{predicate1, nested[*].{predicate2, ...}, ...}
```

:::tip Example

Here is another example of context notation using the example JSON document above:

```bash title="Example with nested context"
> search group_ip_permissions[*].{from_port>=22, to_port<=22, ip_ranges[*].{cidr_ip~"0.0.0.0" or description~"Office access"}}
```

:::

With context notation you can match deeply nested objects by describing the structure and the predicates that should be matched in a single term. The nested context notation is not limited to arrays, but they are useful in combination with the wildcard index `[*]`.

## Property Sections

Every resource in Resoto is represented by a JSON document with the following structure:

```json
{
  "id": "abc",
  "reported": {
    "kind": "node",
    "name": "some-name",
    "ctime": "2022-12-16T09:12:12Z",
    "tags": {
      ...
    }
     ...
  },
  "ancestors": {
    "cloud": { "reported": { "name": "aws",  ... } },
    "account": { "reported": { "name": "abc",  ... }},
    ...
  }
  "metadata": { ... },
  "desired": { ... },
}
```

Values coming from the cloud provider are available in the `reported` section, and the CLI interprets property paths relative to the `reported` section by default. Thus, the path to property `reported.name` can simply be written as `name`. To target properties not in the `reported` section, prefix the property path with a slash (`/`) for it to be interpreted as an absolute path:

```bash title="Find nodes where reported.cpu_count is greater than 3 in the 123 account."
> search cpu_count > 3 and /ancestors.account.reported.name=="123"
```

## Selecting Nodes by Property Key

Nodes can be selected based on the fact that a specific property exists, no matter which value this property has. The `has_key(parent, property)` function will select all nodes where the property `parent` has property `property`.

:::tip Example

We want to find all volumes that are tagged with the tag `owner`.

```bash title="Select all volumes that are tagged with the tag owner"
> search is(volume) and has_key(tags, owner)
```

(**Note:** We could have used the search `search is(volume) and tags.owner!=null` instead. This would select all volumes with an owner tag, where the owner tag is not null. The `has_key` function ignores the value of the property and only returns if the property exists.)

:::

## Selecting Nodes by IPv4 Address

For resources with IPv4 addresses, it is possible to select nodes in a specific subnet range. The function `in_subnet(ipv4_property, cidr)` will select all nodes where the property `ipv4_property` is in the subnet range `cidr`.

:::tip Example

We want to find all load balancer, where the public IPv4 address is in the subnet range `167.123.0.0/16`.

```bash title="Select all load balancers in a specific subnet range"
> search is(load_balancer) and in_subnet(public_ip_address, "167.123.0.0/16")
```

:::
