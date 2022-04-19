# Resource Cleanup

:::note

By default, [`resotoworker`](components/worker.md) will _not_ delete resources marked for deletion. Resources marked with `| clean` will stay this way without getting deleted. To enable cleanup configure `resotoworker.cleanup: true` via `config edit resoto.worker`. See [the Getting Started section](../getting-started/cleanup.md) for details on getting started with cleanup.

Cleanup can be performed manually on the [`resotoshell`](components/shell.md) or automatically using a [cleanup plugin](plugins/index.md) or via a scheduled [job](../reference/cli/jobs/index.md).

:::

The idea of cleanup is that Resoto is very good at helping you find problematic resources in your infrastructure. Sometimes you may only want to notify when such resources are found. But other times you may want to clean them up automatically.

Say for instance you have a CI account where your CI system is allowed to automatically create worker compute instances. You might have a rule that says "CI worker compute instances in this account may not live longer than 24 hours". Usually your CI system will shut down instances by itself. But sometimes things go wrong, the cloud API might return an error when trying to shut down the instance, the IaC code that does the teardown could be intermittently broken, the API credentials might be expired or temporarily unavailable, etc. In these situations Resoto can act as a safety net.

The manual search and cleanup in this situation could look something like this:

```
> search is(aws_ec2_instance) and name =~ "^jenkins-worker-.*" and age > 24h | clean "instance older than 24h"
```

To automate things you could now create a job that runs whenever cleanup is planned and searches for compute instances with a certain name that are older than 24h and automatically deletes them.

The same search turned into an automated cleanup job:

```
> jobs add --id cleanup_old_ci_workers --wait-for-event cleanup_plan 'search is(aws_ec2_instance) and name =~ "^jenkins-worker-.*" and age > 24h | clean "instance older than 24h"'
```

Additional search criteria like `and /ancestors.account.reported.id = "1234567"` to further restrict the search could be given.

## When cleanup is performed

When a resource is marked for cleanup it is not immediately deleted. Instead, it is flagged and will be deleted when the `collect_and_cleanup` [workflow](automation/workflow.md) runs (by default every full hour). It can only be cleaned up if it is not [protected](protection.md). Meaning the `/metadata.protected` field is not set to `true`.
