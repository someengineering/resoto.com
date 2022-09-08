---
sidebar_label: update
---

# `templates update`

The `templates update` command updates a search template.

## Usage

```bash
templates update <template_name> <search_syntax>
```

### Parameters

| Parameter       | Description                                       | Required? | Default Value |
| --------------- | ------------------------------------------------- | --------- | ------------- |
| `template_name` | Template name                                     | ✔️        | N/A           |
| `search_syntax` | Search syntax template with value placeholders \* | ✔️        | N/A           |

\* Placeholders are defined using double curly braces (`{{placeholder}}`). Placeholders are replaced with provided values during `render_console` time. The name of the placeholder can be any valid alphanumeric string. For example, the template `is({{kind}})` with expand parameters `kind=volume` becomes `is(volume)` during expand time.
