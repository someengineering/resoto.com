---
sidebar_label: test
---

# `templates test`

The `templates test` command tests a search template.

## Usage

```bash
templates test <template_values> <template_name>
```

### Parameters

| Parameter         | Description                                                           | Required?                               | Default Value |
| ----------------- | --------------------------------------------------------------------- | --------------------------------------- | ------------- |
| `template_values` | Comma-delimited list of key-value pairs, formatted as `<key>=<value>` | if template contains value placeholders | N/A           |
| `template_name`   | Template name                                                         | ✔️                                      | N/A           |

## Examples

```bash
> templates test kind=volume is({{kind}})
# highlight-next-line
is(volume)
```

## See Also

See [Templates](/docs/reference/templates) for more information about templates.
