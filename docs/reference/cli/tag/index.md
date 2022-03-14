# `tag`

The `tag` command allows for mass creation, update, and deletion of tags.

Tags are a useful to organize your cloud infrastructure and provide additional information to your resources.

[Resoto Core](../../../concepts/components/core.md) puts tagging tasks into a task queue. Tasks are then consumed by a [Resoto Worker](../../../concepts/components/worker.md) instance that knows how to perform tagging for the specific resource and its cloud/account.

| Command                     | Description            |
| --------------------------- | ---------------------- |
| [`tag update`](./update.md) | Create or update a tag |
| [`tag delete`](./delete.md) | Delete a tag           |
