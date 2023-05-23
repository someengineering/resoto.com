---
sidebar_label: info
---

# `apps info` Command

The `apps info` command shows information about an app.

## Usage

```bash
app info <app_name>
```

### Parameters

| Parameter  | Description             | Required? | Default Value |
| ---------- | ----------------------- | --------- | ------------- |
| `app_name` | Infrastructure app name | ✔️        | N/A           |

## Example

```bash
> app info tagvalidator
# highlight-start
name: tagvalidator
description: Tag Validator app for Resoto.
url: https://resoto.com/
version: 1.0.0
# highlight-end
```
