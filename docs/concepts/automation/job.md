# Job

You can use the [Resoto Shell](../components/shell.md) to trigger commands in Resoto.

Let's say you want to find all resources that have not been labeled with an owner tag. The following query would do the trick:

```bash
$> query is(resource) and tags.owner==null
```

Let's further assume you want to automatically set the owner tag for such resources. This can be achieved by using the `tag` command, which would update the tags of the elements to the defined value.

```bash
$> query is(resource) and tags.owner==null | tag update owner "John Doe"
```

While this is already an improvement, it will only update resources without tags at the moment. Resources that are created in the future and do not have an owner tag would need to be processed in the same way again.

Jobs allow you to take a defined CLI command and trigger it automatically either on a schedule (cron expression) or by an event.

Let us now assume that we want to ensure there will be never resources without owner tag again. We can use the command we have written above and turn it into a job:

```bash
$> jobs add ensure-owner-tag --wait-for-event post_collect 'query is(resource) and tags.owner==null | tag update owner "John Doe"'
Job ensure-owner-tag added.
```

- The query and tag command is the same that we used before. To not conflict with the `jobs` command line, the job command line is wrapped in single quotes (if we would omit those, we would write: `jobs add ... | tag ...` which is not what we want).
- `jobs add` is used to turn the command line into a job. A job is persisted in the database and will be available until it is deleted explicitly.
- The job is triggered by the occurrence of the event `post_collect`. See ref:`workflow-collect_and_cleanup` where this event is emitted by the default workflow after all resources have been collected. Since this workflow itself is triggered every hour, this job will be called constantly and operate on fresh data.

:::note

The jobs are executed server-side and the resulting output is written to the log file.

It probably does not make a lot of sense to turn commands into jobs that do not have any side effect (side effects would be sending a notification, triggering a REST endpoint, manipulating the resources directly, etc.), since you will only see the result in the log stream.

:::

```bash title="Further examples for job triggers"
# print hello world every minute to the log stream
$> jobs add say-hello --schedule '* * * * *' echo hello world

# print a message when the post_collect event is received
$> jobs add on-collect-done --wait-for-event post_collect echo collect is done!

# print a message when the first post_collect is received after 4 AM
# Under the assumption that the post_collect event will come every hour,
# this job would be only triggered once a day.
$> jobs add early-message --schedule '0 4 * * *' --wait-for-event post_collect echo collect after 4AM is done!
```

The job functionality can be used to automate actions. Here is a list of possible topics that could be natural candidates for automation:

- Encode a set of rules.

  Define rules as queries in a way that all results returned by this query violate the rule.

  The job would run after collect is finished (`post_collect`).

  Ideally, the query will not find a single entry so it will not trigger any further functionality.

  The query should be combined with the `notify` command (coming soon) or the `http` command to call into another system to handle such cases.

- Gather or accumulate data.

  Resoto has advanced aggregation query capabilities. resotometrics is using it to derive and report metrics to prometheus.

  If additional data besides metrics are relevant to you, create a job that gathers and publishes the data.

  You would use `query` aggregation and `http` to implement this functionality.

- Up to date diagrams.

  Did you know that Resoto can provide graph diagrams in dot format?

  Try this in resotoshell (`resh`): `query --include-edges is(graph_root) -[0:2]-> | format --dot | write out.dot`.

  This will query the graph from the root and traverse it 2 levels deep and will also emit all edges.

  The resulting graph will be formatted in `Graphviz <https://graphviz.org>`\_ dot format and written to file out.dot.

  If you have graphviz installed, you can now create a diagram from the dot specification, for example with: `sfdp -Tsvg -o out.svg out.dot`.

  You could automate the generation of diagrams and would always have up-to-date documentation.

- Define resources for cleanup

  Resoto allows you to define resources with an expiration via [custom tags](https://github.com/someengineering/resoto/tree/main/plugins/cleanup_expired#tag-format).

  If you have your idea and logic, to define when resources should be cleaned up, hook a job into `cleanup_plan`.

  Imagine you want to cleanup all compute instances in the load-testing account every Friday night, so they will not run over the weekend.

  ```
  $> jobs add mark-resources-for-cleanup --schedule '0 22 * * 5' --wait-for-event cleanup_plan 'query is(instance) and /ancestors.account.reported.name==load-testing | clean'
  ```

- Enforce tags structure

  Almost all cloud providers offer the ability to annotate resources with tags.

  Those tags are used as metadata store to extend custom functionality.

  It is not an easy task to enforce valid tags, since there is usually nothing from the provider side to help with.

  With Resoto it is easy to query all resource tags with a simple query.

  There is also the `tag` command which allows to update or delete tags.

  So you could set up a job, that notifies people in case the resource does not adhere to a specific format,

  or you can use the `tag` command to directly fix the issue.

- And much more…

This list should give inspiration for possible jobs that can be automated and is by no means complete. We are interested in your use case - so please create a PR and extend this list.
