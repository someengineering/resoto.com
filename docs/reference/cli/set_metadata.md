# `set_metadata`

The `set_metadata` command sets one or more properties as metadata for incoming database objects.

The metadata state of each node in the database is merged with this new metadata state, so that existing metadata state not defined in this command is not touched.

This command assumes that all incoming elements are either objects coming from a query or are object ids. All objects coming from a query will have a property `id`. This command will return the updated state.

## Usage

```bash
set_metadata <properties>
```

### Parameters

| Parameter    | Description                                                                 | Required? | Default Value |
| ------------ | --------------------------------------------------------------------------- | --------- | ------------- |
| `properties` | Space-delimited list of property-value pairs, formatted as `<name>=<value>` | ✔️        | N/A           |

## Examples

```bash
> query is(instance) limit 1 | set_metadata a=b b="c" num=2 | list /id, /metadata
// highlight-next-line
id=123, a=b, b=c, num=2
```

```bash
> json ["id1", "id2"] | set_metadata a=b | list /id /metadata
// highlight-start
id=id1, a=b
id=id2, a=b
// highlight-end
```
