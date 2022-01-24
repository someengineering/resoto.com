# Graph

You can search your cloud infrastructure and find the resources you are looking for using Resoto's powerful query language.

Resoto maintains its collected data in a graph database. This graph can be accessed via the query language.

:::tip
Sending a query in the [`resh`](../components/resh.md) CLI is done using the [`query`](../../reference/cli/query/README.md) command.

```bash
query is(aws_account)
```

:::

Commands can be connected using a pipe to form complex and deep requests about resources, dependencies and connections in your infrastructure.

To learn about your new superpowers and use them in the best way, it is important to understand the data model and structure.

```mdx-code-block
import { useCurrentSidebarCategory } from '@docusaurus/theme-common';
import DocCardList from '@theme/DocCardList';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
