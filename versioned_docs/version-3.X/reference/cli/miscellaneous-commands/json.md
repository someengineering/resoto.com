---
sidebar_label: json
---

# `json` Command

The `json` command parses JSON input.

## Usage

```bash
json <json_string>
```

### Parameters

| Parameter     | Description                        | Required? | Default Value |
| ------------- | ---------------------------------- | --------- | ------------- |
| `json_string` | String representation of JSON data | ✔️        | N/A           |

## Examples

```bash title="Parse JSON string"
> json "test"
# highlight-next-line
​test
```

```bash title="Parse JSON object"
> json {"a": 1, "b": 2}
# highlight-start
​a: 1
​b: 2
# highlight-end
```

```bash title="Parse array of JSON objects"
> json [{"a":1, "b": 2}, {"c": 3, "d": 4}]
# highlight-start
​a: 1
​b: 2
​---
​c: 3
​d: 4
# highlight-end
```
