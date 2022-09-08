---
sidebar_label: set
---

# `configs set`

The `configs set` command assigns values to specific properties in the specified configuration.

If a configuration with the specified identifier does not exist, the configuration will be created automatically.

## Usage

```bash
configs set <id> <properties>
```

### Parameters

| Parameter    | Description                                                                 | Required? | Default Value |
| ------------ | --------------------------------------------------------------------------- | --------- | ------------- |
| `id`         | Configuration identifier                                                    | ✔️        | N/A           |
| `properties` | Comma-delimited list of property-value pairs, formatted as `<name>=<value>` | ✔️        | N/A           |

## Examples

```bash
> config set test prop_a=test, prop_b=2, array_prop=[1,2,3,4]
# highlight-start
​array_prop:
​- 1
​- 2
​- 3
​- 4
​prop_a: test
​prop_b: 2
# highlight-end
```

```bash
> config set test prop_a="some other value"
# highlight-start
​array_prop:
​- 1
​- 2
​- 3
​- 4
​prop_a: some other value
​prop_b: 2
# highlight-end
```
