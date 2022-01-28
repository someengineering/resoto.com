# `tag`

Tags are a useful to organize your cloud infrastructure and provide additional information to your resources.

Resoto provides a powerful command to mass create, update or delete tags to keep everything clean and tidy.

```bash title="update tag owner of instance i-039e06bb2539e5484 if present, create if new"
$> query id = i-039e06bb2539e5484 | tag update owner lukas
```

```bash title="delete tag owner from instance i-039e06bb2539e5484"
$> query id = i-039e06bb2539e5484 | tag delete owner
```

[`resotocore`](../../concepts/components/core.md) will put this tagging task onto a task queue. This task is then consumed by a [`resotoworker`](../../concepts/components/worker.md) that knows how to perform tagging for that particular resource and its particular cloud and account.

In our first example above we set the tag `owner: lukas` for the AWS EC2 instance with ID `i-039e06bb2539e5484`. This task is given to a [`resotoworker`](../../concepts/components/worker.md) that knows how to update AWS EC2 instance tags in that resources account.
