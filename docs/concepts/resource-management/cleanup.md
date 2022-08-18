---
sidebar_label: Cleanup
---

# Resource Cleanup

:::note

By default, [Resoto Worker](../components/worker.md) will _not_ delete resources marked for deletion. Resources marked with `| clean` will stay this way without getting deleted. To enable cleanup, configure `resotoworker.cleanup: true` via `config edit resoto.worker`. See [Clean Resources](../../getting-started/clean-resources.md) for details on performing cleanup.

Cleanup can be performed manually in [Resoto Shell](../components/shell.md), automatically using a [cleanup plugin](../components/plugins/index.md), or via a scheduled [job](../automation/job.md).

:::

Resoto is very good at helping you find problematic resources in your infrastructure. Sometimes, you only want to notify when such resources are found; but other times, you may wish to clean them up.

Let's say that you have a CI account where your CI system is allowed to automatically create worker compute instances. You might have a rule that says, "CI worker compute instances in this account may not live longer than 24 hours." Your CI system usually shuts down long-running instances, but sometimes things go wrong. The cloud API could return an error when trying to shut down the instance, the IaC tool could abort halfway through its run, the API credentials might be expired or unavailable, etc. In these situations, Resoto can serve as a safety net.

The manual search and cleanup in this situation could look something like this:

```bash
> search is(aws_ec2_instance) and name =~ "^jenkins-worker-.*" and age > 24h | clean "instance older than 24h"
```

To automate things you could now create a [job](../automation/job.md) that runs whenever cleanup is planned and searches for compute instances with a certain name that are older than 24h and automatically deletes them.

The same search turned into an automated cleanup job:

```bash
> jobs add --id cleanup_old_ci_workers --wait-for-event cleanup_plan 'search is(aws_ec2_instance) and name =~ "^jenkins-worker-.*" and age > 24h | clean "instance older than 24h"'
```

Additional search criteria like `and /ancestors.account.reported.id = "1234567"` to further restrict the search could be given.

## When Cleanup Is Performed

When a resource is marked for cleanup, it is not immediately deleted. Rather, it is flagged for deletion during the next `collect_and_cleanup` [workflow](../automation/workflow.md) runs (by default every full hour). Resources can only be cleaned up if they are not [protected](./protection.md).
