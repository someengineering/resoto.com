# `clean`

The `clean` command marks resources for cleaning by adding `desired.clean = true` to the resources.

:::tip Examples

```bash
// highlight-next-line
$> query isinstance("ec2") and atime&lt;"-2d" | clean
[ { "id": "abc" "desired": { "clean": true }, "reported": { .. } }, . . { "id": "xyz" "desired": { "clean": true }, "reported": { .. } }, ]
```

```bash
// highlight-next-line
$> json [{"id": "id1"}, {"id": "id2"}] | clean
[ { "id": "id1", "desired": { "clean": true }, "reported": { .. } }, { "id": "id2", "desired": { "clean": true }, "reported": { .. } }, ]
```

```bash
// highlight-next-line
$> json ["id1", "id2"] | clean
[ { "id": "id1", "desired": { "clean": true }, "reported": { .. } }, { "id": "id2", "desired": { "clean": true }, "reported": { .. } }, ]
```

:::

Optionally, you can provide a reason for marking the matched ressources for the next cleanup run:

```bash title="Mark all unused EBS volume older than 30 days that had no IO in the past 7d"
$> query is(volume) and ctime < -30d and atime < -7d and mtime < -7d and volume_status = available | clean "older than 30d with more then 7d of not beeing used"
```

The reason is logged and can be useful in determining why a resource was pruned during cleanup.
