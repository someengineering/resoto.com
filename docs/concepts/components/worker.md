---
slug: worker
sidebar_position: 2
---

# Resoto Worker

Resoto Workers do all of the collection and cleanup work in Resoto. A `resotoworker` is connected to [`resotocore`](./core.md) over a websocket connection and simply awaits instructions. By default, it subscribes to the `collect` and `cleanup` actions as well as `tag` tasks.

`resotoworker` loads collector plugins like AWS, GCP, Slack, Onelogin, etc. Only those plugins have knowledge about how to communicate with each cloud, how to collect resources, and how to clean them up.

There can be one or more instances of `resotoworker` in a Resoto deployment. A single `resotoworker` can collect many clouds, or you could have multiple `resotoworker`s each collecting one cloud or account.

Once `resotoworker` is started, you do not need to interact with it at all. It will simply wait for work and do its job.
