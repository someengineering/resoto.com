---
sidebar_position: 2
pagination_prev: getting-started/usage/search
---

# Cleaning Resources

:::danger

Please act with caution when selecting and filtering resources for cleanup.

If you run `search is(aws_ec2_volume) | clean`, it marks _all_ `aws_ec2_volume` resources in your cloud for deletion.

:::

By default, [Resoto Worker](../../concepts/components/worker.md) will _not_ delete resources marked for deletion. Resources marked with `| clean` will stay this way without deleting them.

[Resoto Worker](../../concepts/components/worker.md) will only delete marked resources when `cleanup: true` is configured. To enable cleanup, execute the following in [Resoto Shell](../../concepts/components/shell.md):

```bash
> config edit resoto.worker
```

Then, edit this section of the displayed configuration as follows:

```yaml
resotoworker:
  # Enable cleanup of resources
  cleanup: false
  # Do not actually cleanup resources, just create log messages
  cleanup_dry_run: true
  # How many cleanup threads to run in parallel
  cleanup_pool_size: 16
```

When started with cleanup enabled, marked resources will be cleaned whenever the `collect_and_cleanup` [workflow](../../concepts/automation/workflow.md) runs (by default every full hour).

You can provide `cleanup_dry_run: true` to output the resources that would be deleted (without actually performing the deletion).

When doing a resource cleanup selection for the first time, it is good practice to confirm the list of selected resources for plausibility using something like `search /desired.clean = true | count`.

To quickly undo marking all `aws_ec2_volumes` for cleanup, use `search is(aws_ec2_volume) | set_desired clean=false`.

To remove clean markers from all resources, you can use `search /desired.clean = true | set_desired clean=false`.

Deletion of resources via Resoto is done in two phases:

## Marking Resources for Deletion

Marking resources for deletion is very easy. Just pipe your matched resources to the `clean` command.

This will add `desired.clean = true` to all matched resources.

Optionally, you can provide a reason for marking the matched resources for the next cleanup run:

```bash title="Mark all unused AWS EBS volume older than 30 days that had no IO in the past 7d"
> search is(aws_ec2_volume) and volume_status = available and age > 30d and last_access > 7d and last_update > 7d | clean "older than 30d with more then 7d of not being used"
```

## Pruning Resources Marked for Deletion

Resources in Resoto will only be deleted if you started a [`resotoworker`](../../concepts/components/worker.md) with the `cleanup: true` config. If done so, there will be an automatic cleanup whenever the `collect_and_cleanup` [workflow](../../concepts/automation/workflow.md) runs (by default every full hour).

Instant cleanup can alternatively be triggered via starting the corresponding [workflow](../../concepts/automation/workflow.md).

```bash
> workflow run cleanup
```
