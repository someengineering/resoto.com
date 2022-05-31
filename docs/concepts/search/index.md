# Search

Resoto comes with a powerful search engine.

It allows you to perform a [full-text search](./search/full-text) to find resources without having to know the exact name of the property. You can filter results using powerful [filter criterias](./search/filters) and traverse the graph using [graph traversals](./search/traversals). Make sure to read how to [sort and limit](./search/sort-and-limit) the results.

The result of a search can be [aggregated](./search/aggregation), so valuable insights can be created from the underlying resource data.

Resoto allows for [merging nodes](./search/merging-nodes), which can be a useful in case the information is not part of the node itself but in a reachable node nearby. It also allows filtering results with a certain graph structure using the [with clause](./search/with-clause).

```mdx-code-block
import { useCurrentSidebarCategory } from '@docusaurus/theme-common';
import DocCardList from '@theme/DocCardList';
```

<DocCardList items={useCurrentSidebarCategory().items}/>
