---
slug: worker
sidebar_position: 2
sidebar_label: Worker
---

# Resoto Worker

[Resoto Worker (`resotoworker`)](https://github.com/someengineering/resoto/tree/main/resotoworker) performs all of the collection and cleanup work in Resoto.

A worker is connected to [Resoto Core](./core.md) over a websocket connection and simply awaits instructions. By default, it subscribes to the `collect` and `cleanup` actions as well as `tag` tasks.

Resoto Worker loads collector plugins like AWS, GCP, Slack, Onelogin, etc. Only those plugins have knowledge about how to communicate with each cloud, how to collect resources, and how to clean them up.

There can be one or more workers in a Resoto deployment. A single worker can collect many clouds, or you could have multiple workers each collecting one cloud or account.

Once a worker is started, you do not need to interact with it at all. It will simply wait for work and do its job.
