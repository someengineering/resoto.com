---
sidebar_position: 5
pagination_prev: getting-started/performing-searches
---

# Pruning Resources

:::danger

Please act with caution when selecting and filtering resources for cleanup.

If you run `search is(aws_ec2_volume) | clean`, it marks _all_ `aws_ec2_volume` resources in your cloud for deletion.

:::

By default, [`resotoworker`](../concepts/components/worker.md) will _not_ delete resources marked for deletion. Resources marked with `| clean` will stay this way without deleting them.

[`resotoworker`](../concepts/components/worker.md) will only delete marked resources when started with the `--cleanup` command. When started in this way, marked resources will be cleaned every full hour via a [workflow](../concepts/automation/workflow.md).

You can provide `--cleanup-dry-run` at [`resotoworker`](../concepts/components/worker.md) startup to output the resources that would be deleted (without actually performing the deletion).

When doing a resource cleanup selection for the first time, it is good practice to confirm the list of selected resources for plausibility using something like `desired clean = true | count`.

To quickly undo marking all `aws_ec2_volumes` for cleanup, use `search is(aws_ec2_volume) | set_desired clean=false`.

To remove clean markers from all resources, you can use `desired clean=true | set_desired clean=false`.

Deletion of resources via Resoto is done in two phases.

## Mark Resources for Deletion

Marking ressources for deletion is very easy. Just pipe your matched ressources to the `clean` command.

This will add `desired.clean = true` to all matched ressources.

Optionally, you can provide a reason for marking the matched ressources for the next cleanup run:

```bash title="Mark all unused EBS volume older than 30 days that had no IO in the past 7d"
> search is(volume) and ctime < -30d and atime < -7d and mtime < -7d and volume_status = available | clean "older than 30d with more then 7d of not beeing used"
```

## Prune Resources Marked for Deletion

Resources in Resoto will only be deleted if you started a [`resotoworker`](../concepts/components/worker.md) with the `--cleanup` parameter. If done so, there will be an automatic cleanup every full hour. Otherwise, the `cleanup` will only be simulated without actually being deleted.

Instant cleanup can alternatively be triggered via starting the corresponding [workflow](../concepts/automation/workflow.md).
