---
slug: core
sidebar_position: 1
sidebar_label: Core
---

# Resoto Core

[Resoto Core (`resotocore`)](https://github.com/someengineering/resoto/tree/main/resotocore) is the graph persistence and search backend of Resoto. It maintains the graph of resources and provides APIs to update and access them.

Within Resoto Core, there are workflows consisting of steps that result in actions like `collect`, `cleanup` or `generate_metrics`. These actions are received by components like [Resoto Worker](./worker.md) and [Resoto Metrics](./metrics.md).

## API

The [Resoto Core API](../../reference/api.md) is exposed at `http://<resoto-address>:8900/api-doc`. You can also access it at [`https://resoto.com/docs/reference/api`](../../reference/api.md).

Resoto Core has two [API](../../reference/api.md) endpoints to connect to for CLI purposes:

1. [`/cli/evaluate`](../../reference/api.md#tag/cli/paths/~1cli~1evaluate/post)
2. [`/cli/execute`](../../reference/api.md#tag/cli/paths/~1cli~1execute/post)

The [`/cli/evaluate`](../../reference/api.md#tag/cli/paths/~1cli~1evaluate/post) functinality is used internally on every [`/cli/execute`](../../reference/api.md#tag/cli/paths/~1cli~1execute/post) before the command executes.

Below is a simulation of sending a [Resoto Shell](./shell.md) [search](../search/index.md) to the [API](../../reference/api.md).

We will evaluate the search before executing it for demonstration. We also introduce a search with a typo to show the response if not successful.

### Evaluate

```bash title="Correct"
> echo 'search is("resource") limit 1' | http :8900/cli/evaluate
// highlight-start
HTTP/1.1 200 OK
Content-Length: 47
Content-Type: application/json; charset=utf-8
Date: Wed, 06 Oct 2021 15:13:08 GMT
Server: Python/3.9 aiohttp/3.7.4.post0

[
    {
        "execute_query": "is(\"resource\") limit 1"
    }
]
// highlight-end
```

```bash title="Typo"
> echo 'graph=resoto search is("resource") limit1' | http :8900/cli/evaluate
// highlight-start
HTTP/1.1 400 Bad Request
Content-Length: 151
Content-Type: text/plain; charset=utf-8
Date: Wed, 06 Oct 2021 15:13:33 GMT
Server: Python/3.9 aiohttp/3.7.4.post0

Error: ParseError
Message: expected one of '!=', '!~', '<', '<=', '=', '==', '=~', '>', '>=', '[A-Za-z][A-Za-z0-9_]*', '`', 'in', 'not in', '~' at 0:21
// highlight-end
```

## Execute

```bash title="Correct"
> echo 'graph=resoto search is("resource") limit 1' | http :8900/cli/execute
// highlight-start
HTTP/1.1 200 OK
Content-Type: application/json
Date: Wed, 06 Oct 2021 15:08:10 GMT
Server: Python/3.9 aiohttp/3.7.4.post0
Transfer-Encoding: chunked

[
    {
        "id": "06ee67f7c54124c019b80a7f53fa59b231b374fe61f94b91e0c26729440d095c",
        "kinds": [
            "base_cloud",
            "cloud",
            "resource"
        ],
        "metadata": {
            "python_type": "resoto.baseresources.Cloud"
        },
        "reported": {
            "ctime": "2021-09-25T23:49:38Z",
            "id": "gcp",
            "kind": "cloud",
            "name": "gcp",
            "tags": {}
        },
        "revision": "_d_7eKMa---",
        "type": "node"
    }
]
// highlight-end
```

```bash title="Typo"
> echo 'graph=resoto search is("resource") limit1' | http :8900/cli/execute
// highlight-start
HTTP/1.1 400 Bad Request
Content-Length: 151
Content-Type: text/plain; charset=utf-8
Date: Wed, 06 Oct 2021 15:26:54 GMT
Server: Python/3.9 aiohttp/3.7.4.post0

Error: ParseError
Message: expected one of '!=', '!~', '<', '<=', '=', '==', '=~', '>', '>=', '[A-Za-z][A-Za-z0-9_]*', '`', 'in', 'not in', '~' at 0:21
// highlight-end
```

# More API Endpoints

Resoto Core is the central hub for everything Resoto does. You can explore additional API endpoints at `http://<resoto-address>:8900/api-doc` or [`https://resoto.com/docs/reference/api`](../../reference/api.md).
