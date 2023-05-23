---
sidebar_label: run
---

# `apps run` Command

The `apps run` command runs an app.

## Usage

```bash
app run <app_name> [--dry-run] [--config <config_name>]
```

### Parameters

| Parameter   | Description       | Required? | Default Value |
| ----------- | ----------------- | --------- | ------------- |
| `app_name`  | App identifier    | ✔️        | N/A           |
| `--dry-run` | Dry run the app   |           | N/A           |
| `--config`  | Config identifier |           | N/A           |

When using the `--dry-run` argument the app will not be executed, but the commands that would be executed will be shown instead.

## Examples

```bash title="Dry run an app"
> app run --dry-run cleanup-untagged
# highlight-next-line
search /metadata.protected == false and /metadata.phantom == false and /metadata.cleaned == false and is(["aws_ec2_instance", "aws_ec2_volume", "aws_vpc", "aws_cloudformation_stack", "aws_elb", "aws_alb", "aws_alb_target_group", "aws_eks_cluster", "aws_eks_nodegroup", "example_instance", "example_network"]) and not(has_key(tags, ["owner", "expiration"])) and ((/ancestors.cloud.reported.id == "aws" and /ancestors.account.reported.id == "068564737731" and age > 7d) or (/ancestors.cloud.reported.id == "aws" and /ancestors.account.reported.id == "575584959047" and age > 2h)) | clean "Missing one or more of required tags owner, expiration and age more than threshold"
```
