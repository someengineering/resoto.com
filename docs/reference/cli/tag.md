# `tag`

The `tag` command allows for mass creation, update, and deletion of tags.

Tags are a useful to organize your cloud infrastructure and provide additional information to your resources.

[Resoto Core](../../concepts/components/core.md) puts tagging tasks into a task queue. Tasks are then consumed by a [Resoto Worker](../../concepts/components/worker.md) instance that knows how to perform tagging for the specific resource and its cloud/account.

## Usage

### Update

```bash
tag update [--nowait] <tag> <value>
```

#### Options

| Option     | Description                              |
| ---------- | ---------------------------------------- |
| `--nowait` | Execute asynchronously in the background |

#### Parameters

| Parameter | Description               | Required? | Default Value |
| --------- | ------------------------- | --------- | ------------- |
| `tag`     | Name of tag to delete     | ✔️        | N/A           |
| `value`   | New value to store in tag | ✔️        | N/A           |

### Delete

```bash
tag delete [--nowait] <tag>
```

#### Options

| Option     | Description                              |
| ---------- | ---------------------------------------- |
| `--nowait` | Execute asynchronously in the background |

#### Parameters

| Parameter | Description           | Required? | Default Value |
| --------- | --------------------- | --------- | ------------- |
| `tag`     | Name of tag to delete | ✔️        | N/A           |

## Examples

```bash title="update tag owner of instance i-039e06bb2539e5484 if present, create if new"
> query id = i-039e06bb2539e5484 | tag update owner lukas
```

```bash title="delete tag owner from instance i-039e06bb2539e5484"
> query id = i-039e06bb2539e5484 | tag delete owner
```
