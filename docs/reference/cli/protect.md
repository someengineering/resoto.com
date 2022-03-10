# `kind`

The `protect` command marks all incoming database objects as protected.

Protected objects will not be cleaned up even if they are marked for cleanup.

This command assumes that all incoming elements are either objects coming from a query or object IDs. All objects coming from a query will have a property `id`. This command will return the updated object.

## Usage

```bash
protect
```

## Examples

```bash title="Query for and protect instances that are tagged with 'build node'"
> query is(instance) and tags.job=="build node" | protect | list id, /metadata
// highlight-next-line
id=ins123, protected=true
```

```bash title="Protect a list of specific resources"
> json ["ins123"] | protect | list id, /metadata
// highlight-next-line
id=vol-123, protected=true
```
