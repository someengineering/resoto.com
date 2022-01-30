# `clean`

The `clean` command marks resources for cleaning by adding `desired.clean = true` to the resources.

The `clean` command expects query results (objects) or an array of object IDs to be piped as input.

Optionally, you can provide a reason for marking the matched resources to be pruned during the next cleanup run. The reason is logged and can be useful in reviewing why a particular resource was deleted.

## Usage

```bash
clean <reason>
```

### Parameters

| Parameter | Description                      | Required? | Default Value |
| --------- | -------------------------------- | --------- | ------------- |
| `reason`  | Reason for marking to be cleaned | ❌        | N/A           |

## Examples

```bash title="Mark query results for cleaning"
$> query isinstance("ec2") and atime<"-2d" | clean
// highlight-next-line
[ { "id": "abc" "desired": { "clean": true }, "reported": { .. } }, . . { "id": "xyz" "desired": { "clean": true }, "reported": { .. } }, ]
```

```bash title="Mark objects with IDs id1 and id2 for cleaning"
$> json [{"id": "id1"}, {"id": "id2"}] | clean
// highlight-next-line
[ { "id": "id1", "desired": { "clean": true }, "reported": { .. } }, { "id": "id2", "desired": { "clean": true }, "reported": { .. } }, ]
```

```bash title="Mark objects with IDs id1 and id2 for cleaning"
$> json ["id1", "id2"] | clean
// highlight-next-line
[ { "id": "id1", "desired": { "clean": true }, "reported": { .. } }, { "id": "id2", "desired": { "clean": true }, "reported": { .. } }, ]
```

```bash title="Mark all unused EBS volume older than 30 days that had no I/O during the past 7 days for cleaning"
$> query is(volume) and ctime < -30d and atime < -7d and mtime < -7d and volume_status = available | clean "older than 30d with more then 7d of not beeing used"
```
