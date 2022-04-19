# `templates`

The `templates` command is used to access the search template library.

| Command                           | Description         |
| --------------------------------- | ------------------- |
| [`templates`](#usage)             | Display template(s) |
| [`templates add`](./add.md)       | Add template        |
| [`templates update`](./update.md) | Update template     |
| [`templates delete`](./delete.md) | Delete template     |
| [`templates test`](./test.md)     | Test template       |

## Usage

```bash
templates <template_name>
```

### Parameters

| Parameter       | Description                                           | Required? | Default Value |
| --------------- | ----------------------------------------------------- | --------- | ------------- |
| `template_name` | Template name; returns all templates if not specified | ❌        | N/A           |

## Examples

```bash title="List all templates"
> templates
// highlight-next-line
filter_kind: is({{kind}})
```

```bash title="Display the filter_kind template"
> templates filter_kind
// highlight-next-line
is({{kind}})
```

```bash title="Use the filter_kind template"
> query expand(filter_kind, kind=volume) and name=~dkl
// highlight-next-line
kind=aws_ec2_volume, id=vol-1, name=dkl-3, age=2mo2d, cloud=aws, account=eng, region=us-west-2
```

## See Also

See [Templates](/docs/reference/templates) for more information about templates.
