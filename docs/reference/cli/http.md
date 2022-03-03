# `http`

The `http` command sends objects in a payload to the defined HTTP(S) endpoint.

The shape and format of the object can be adjusted with commands such as [`list`](./list.md), [`format`](./format.md), [`jq`](./jq.md), etc.

:::tip

You can use the [`chunk`](./chunk.md) command to send chunks of objects:

```bash title="Perform up to 3 requests, where every request will contain up to 10 elements"
> search is(volume) limit 30 | chunk 10 | http test.foo.org
```

:::

## Usage

```bash
http [--compress] [--timeout <seconds>] [--no-ssl-verify] [--no-body] [--nr-of-retries <num>] <http_method> <url> <headers> <query_params>
```

### Options

| Option                | Description                                                                        |
| --------------------- | ---------------------------------------------------------------------------------- |
| `--compress`          | Enable compression of the request body                                             |
| `--timeout <seconds>` | Maximum timeout in seconds; aborts request if timeout is exceeded                  |
| `--no-ssl-verify`     | Disable SSL certificate verification                                               |
| `--no-body`           | Send with empty request body                                                       |
| `--nr-of-retries`     | Maximum number of retries for unsuccessful requests (non-2XX HTTP status codes) \* |

\* By default, requests are retried three times. There is an exponential backoff between retries.

### Parameters

| Parameter      | Description                                                                                           | Required? | Default Value |
| -------------- | ----------------------------------------------------------------------------------------------------- | --------- | ------------- |
| `http_method`  | HTTP request method (`GET`, `PUT`, `POST`, `DELETE`, or `PATCH`)                                      | ❌        | `POST`        |
| `url`          | URL endpoint to which the request should be sent \*                                                   | ✔️        | N/A           |
| `headers`      | HTTP request headers (e.g., `HeaderA:value1 HeaderB:value2 "HeaderC:value with whitespace"`)          | ❌        | N/A           |
| `query_params` | HTTP request query parameters (e.g., `param1==value2 param2==value2 "param3==value with whitespace"`) | ❌        | N/A           |

\* If a URL scheme is not present, it will be determined by whether or not the `http` command or the `https` command alias was used. Additionally, `localhost` can be omitted from `url` (e.g., `:8080/call/me`).

### Aliases

- `https`

## Examples

```bash
> search is(volume) and reported.volume_encrypted==false | https my.node.org/handle_unencrypted
// highlight-next-line
3 requests with status 200 sent.
```

```bash
> search is(volume) | chunk 50 | https --compress my.node.org/handle
// highlight-next-line
2 requests with status 200 sent.
```

```bash
> search is(volume) | chunk 50 | https my.node.org/handle "greeting:hello from resotocore" type==volume
// highlight-next-line
2 requests with status 200 sent.
```
