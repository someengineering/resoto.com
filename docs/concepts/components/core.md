---
slug: core
sidebar_position: 1
---

# Resoto Core

The Resoto Core graph platform (`resotocore`) is the persistence and query backend of Resoto. It maintains the graph of resources and provides APIs to update and access them.

Within `resotocore`, there are workflows consisting of steps that result in actions like `collect`, `cleanup` or `generate_metrics`. These actions are received by components like [`resotoworker`](./worker.md) and [`resotometrics`](./metrics.md).

## API

The `resotocore` API is exposed at `http://<resoto-address>:8900/api-doc`. You can also access it at [`https://resoto.com/docs/reference/resotocore-api`](https://resoto.com/docs/reference/resotocore-api).

`resotocore` has two API endpoints to connect to for CLI purposes:

1. `/cli/evaluate`
2. `/cli/execute`

The `cli/evaluate` functinality is used internally on every `/cli/execute` before the command executes.

Below is a simulation of sending a [`resh`](./shell.md) query to the CLI API.

We will evaluate the query before executing it for demonstration. We also introduce this query with a typo to show the response if not successful.

### Evaluate

```bash title="Correct"
$ echo 'query is("resource") limit 1' | http :8900/cli/evaluate
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
```

```bash title="Typo"
$ echo 'graph=resoto query is("resource") limit1' | http :8900/cli/evaluate
HTTP/1.1 400 Bad Request
Content-Length: 151
Content-Type: text/plain; charset=utf-8
Date: Wed, 06 Oct 2021 15:13:33 GMT
Server: Python/3.9 aiohttp/3.7.4.post0

Error: ParseError
Message: expected one of '!=', '!~', '<', '<=', '=', '==', '=~', '>', '>=', '[A-Za-z][A-Za-z0-9_]*', '`', 'in', 'not in', '~' at 0:21
```

## Execute

```bash title="Correct"
$ echo 'graph=resoto query is("resource") limit 1' | http :8900/cli/execute
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
```

```bash title="Typo"
$ echo 'graph=resoto query is("resource") limit1' | http :8900/cli/execute
HTTP/1.1 400 Bad Request
Content-Length: 151
Content-Type: text/plain; charset=utf-8
Date: Wed, 06 Oct 2021 15:26:54 GMT
Server: Python/3.9 aiohttp/3.7.4.post0

Error: ParseError
Message: expected one of '!=', '!~', '<', '<=', '=', '==', '=~', '>', '>=', '[A-Za-z][A-Za-z0-9_]*', '`', 'in', 'not in', '~' at 0:21
```

# More API Endpoints

Resoto Core is the central hub for everything Resoto does. You can explore additional API endpoints at `http://<resoto-address>:8900/` or [`https://resoto.com/docs/reference/resotocore-api`](https://resoto.com/docs/reference/resotocore-api).
