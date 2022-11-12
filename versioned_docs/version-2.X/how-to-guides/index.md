# How-To Guides

```mdx-code-block
import { useCurrentSidebarCategory } from '@docusaurus/theme-common';
import DocCardList from '@theme/DocCardList';
```

This section of the documentation provides step-by-step instructions for performing various tasks within Resoto.

## Alerting

<DocCardList items={useCurrentSidebarCategory().items.find((i) => i.type === 'category' && i.label === 'Alerting')?.items} />

## Cleanup

<DocCardList items={useCurrentSidebarCategory().items.find((i) => i.type === 'category' && i.label === 'Cleanup')?.items} />

## Data Export

<DocCardList items={useCurrentSidebarCategory().items.find((i) => i.type === 'category' && i.label === 'Data Export')?.items} />

## Search

<DocCardList items={useCurrentSidebarCategory().items.find((i) => i.type === 'category' && i.label === 'Search')?.items} />
