import { useCurrentSidebarCategory } from '@docusaurus/theme-common';
import DocCardList from '@theme/DocCardList';

# Components

- [Resoto Core (`resotocore`)](./resotocore.md) is the platform maintaining the [directed multigraph](<https://en.wikipedia.org/wiki/Multigraph#Directed_multigraph_(edges_with_own_identity)>).
- [Resoto Worker (`resotoworker`)](./resotoworker.md) provides workers that load [plugins](https://github.com/someengineering/resoto/tree/main/plugins) to perform collect and cleanup operations.
- [Resoto Shell (`resh`)](./resh.md) allows for interactions with `resotocore`.
- [Resoto Metrics (`resotometrics`)](./resotometrics.md) is a [Prometheus exporter](https://prometheus.io/docs/instrumenting/exporters).

![Resoto Component Graph](./img/component_graph.png)

<DocCardList items={useCurrentSidebarCategory().items}/>
