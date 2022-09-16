---
sidebar_label: Cleanup
---

# Resource Cleanup

Resoto is very good at helping you find problematic resources in your infrastructure. Sometimes, you only want to notify when such resources are found; but other times, you may wish to clean them up.

:::info

By default, [Resoto Worker](../components/worker.md) does not delete resources marked for deletion. Resources marked with `| clean` will stay this way without getting deleted unless [cleanup is enabled](#enabling-cleanup).

Cleanup can be performed manually in [Resoto Shell](../components/shell.md), automatically using a [cleanup plugin](../components/plugins/index.md), or via a scheduled [job](../automation/job.md).

See [Cleanup How-To Guides](../../how-to-guides/cleanup/index.md) for step-by-step instructions to clean up various types of resources.

:::

Let's say that you have a CI account where your CI system is allowed to automatically create worker compute instances. You might have a rule that says, "CI worker compute instances in this account may not live longer than 24 hours." Your CI system usually shuts down long-running instances, but sometimes things go wrong. The cloud API could return an error when trying to shut down the instance, the IaC tool could abort halfway through its run, the API credentials might be expired or unavailable, etc. In these situations, Resoto can serve as a safety net.

A manual search and cleanup in this situation could look like this:

```bash
> search is(aws_ec2_instance) and name =~ "^jenkins-worker-.*" and age > 24h | clean "instance older than 24h"
```

To automate things, you could create a [job](../automation/job.md) that runs whenever cleanup is planned and searches for compute instances with a certain name that are older than 24 hours and automatically deletes them.

The same search turned into an automated cleanup job:

```bash
> jobs add --id cleanup_old_ci_workers --wait-for-event cleanup_plan 'search is(aws_ec2_instance) and name =~ "^jenkins-worker-.*" and age > 24h | clean "instance older than 24h"'
```

Additional search criteria like `and /ancestors.account.reported.id = "1234567"` to further restrict the search could be given.

See [Cleanup How-To Guides](../../how-to-guides/cleanup/index.md) for step-by-step instructions to clean up various types of resources.

:::tip

Make a mistake in marking resources for cleanup? To remove clean markers from all resources, execute:

```bash
> search /desired.clean = true | set_desired clean=false
```

You can also target specific resources to un-mark. For example, to quickly undo of marking all `aws_ec2_volumes`:

```bash
> search is(aws_ec2_volume) | set_desired clean=false
```

:::

## Enabling Cleanup

When a resource is marked for cleanup, it is not immediately deleted. Rather, it is flagged for deletion during the `collect_and_cleanup` [workflow](../automation/workflow.md), which runs each hour by default.

:::info

Resources can only be cleaned up if they are not [protected](./protection.md).

:::

To enable cleanup, execute the following command in [Resoto Shell](../components/shell.md) to open the [Resoto Worker](../components/worker.md) configuration for editing:

```bash
> config edit resoto.worker
```

Then, modify the `resotoworker` section of the configuration as follows:

```yaml
resotoworker:
# highlight-start
  # Enable cleanup of resources
  cleanup: true
  # Do not actually cleanup resources, just create log messages
  cleanup_dry_run: false
# highlight-end
  # How many cleanup threads to run in parallel
  cleanup_pool_size: 16
```

When cleanup is enabled, marked resources will be deleted as a part of the `collect_and_cleanup` [workflow](../../concepts/automation/workflow.md), which runs each hour by default.

:::tip

Set `cleanup_dry_run` to `true` to simulate cleanup without actually deleting resources.

:::
