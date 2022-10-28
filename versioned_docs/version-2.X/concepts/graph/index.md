# Graph

```mdx-code-block
import DocCardList from '@theme/DocCardList';
```

Resoto stores collected data in a graph database consisting of [nodes](./node.md) representing resources and [edges](./edge.md) representing the relationships between resources.

This graph can be accessed to find resources via Resoto's powerful [search](../search.md).

<DocCardList />

:::info

Search in the Resoto [command-line interface (CLI)](../../reference/cli/index.md) is performed using the [`search` command](../../reference/cli/search-commands/search.md).

```bash
> search is(aws_account)
```

Commands can be piped to form complex and deep requests about resources, dependencies, and connections in your infrastructure.

:::
