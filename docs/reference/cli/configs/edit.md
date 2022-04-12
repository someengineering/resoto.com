---
sidebar_label: edit
---

# `configs edit`

The `configs edit` command opens the specified configuration in the locally configured text editor.
Changes to the configuration will be updated, when the local file is saved and the editor has exited.
It is possible to cancel an update, by not saving the file.

Note: A revision id is added to the configuration file. When the update is committed, 
the revision id is removed from the file.
In case more than one user edits the same configuration file, the revision id is used to identify conflicting changes.

## Usage

```bash
configs edit <id>
```

### Parameters

| Parameter | Description              | Required? | Default Value |
| --------- | ------------------------ | --------- | ------------- |
| `id`      | Configuration identifier | ✔️        | N/A           |

## Examples

```bash
> config edit test
```
