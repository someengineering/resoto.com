---
sidebar_label: update
---

# `tag update`

The `tag update` command updates a tag (or creates a tag if it does not exist).

## Usage

```bash
tag update [--nowait] <tag_name> <tag_value>
```

### Options

| Option     | Description                              |
| ---------- | ---------------------------------------- |
| `--nowait` | Execute asynchronously in the background |

### Parameters

| Parameter   | Description               | Required? | Default Value |
| ----------- | ------------------------- | --------- | ------------- |
| `tag_name`  | Name of tag to delete     | ✔️        | N/A           |
| `tag_value` | New value to store in tag | ✔️        | N/A           |

## Examples

```bash title="Update a tag using a format template"
> query is(volume) and tags.owner == null limit 1 | tag update owner "gen_{/ancestors.account.reported.name}_{name}"
// highlight-next-line
kind=gcp_disk, id=123, name=gke-1, age=5mo27d, cloud=gcp, account=eng, region=us-central1, zone=us-central1-c
```
