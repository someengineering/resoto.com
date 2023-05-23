---
sidebar_label: update
---

# `apps update` Command

The `apps update` command applies updates one or all apps.

## Usage

```bash
apps update <app_name>
```

### Parameters

| Parameter  | Description                      | Required? | Default Value |
| ---------- | -------------------------------- | --------- | ------------- |
| `app_name` | `all` or infrastructure app name | ✔️        | N/A           |

## Example

```bash
> apps update all
# highlight-start
App cleanup-untagged updated successfully to the latest version (1.0.0)
# highlight-end
```
