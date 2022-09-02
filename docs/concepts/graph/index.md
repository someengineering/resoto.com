# Graph

You can search your cloud infrastructure and find the resources you are looking for using Resoto's powerful search syntax.

Resoto maintains its collected data in a graph database. This graph can be accessed via the search syntax.

:::tip

Performing a search in the [Resoto Shell](../components/shell.md) [command-line interface (CLI)](../../reference/cli/index.md) is done using the [`search`](../../reference/cli/search.md) command.

```bash
> search is(aws_account)
```

:::

Commands can be connected using a pipe to form complex and deep requests about resources, dependencies and connections in your infrastructure.

To learn about your new superpowers and use them in the best way, it is important to understand the data model and structure.

<DocCardList />
