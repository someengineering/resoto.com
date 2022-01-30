# `http`

The `http` command sends objects in a payload to the defined HTTP(S) endpoint.

The shape and format of the object can be adjusted with commands such as [`list`](./list.md), [`format`](./format.md), [`jq`](./jq.md), etc.

:::tip

You can use the [`chunk`](./chunk.md) command to send chunks of objects:

```bash title="Perform up to 3 requests, where every request will contain up to 10 elements"
$> query is(volume) limit 30 | chunk 10 | http test.foo.org
```

:::

:::tip Examples

```bash
$> query is(volume) and reported.volume_encrypted==false | https my.node.org/handle_unencrypted
// highlight-next-line
3 requests with status 200 sent.
```

```bash
$> query is(volume) | chunk 50 | https --compress my.node.org/handle
// highlight-next-line
2 requests with status 200 sent.
```

```bash
$> query is(volume) | chunk 50 | https my.node.org/handle "greeting:hello from resotocore" type==volume
// highlight-next-line
2 requests with status 200 sent.
```

:::
