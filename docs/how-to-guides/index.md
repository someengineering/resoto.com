---
sidebar_position: 2
---

# How-To Guides

```mdx-code-block
import { useCurrentSidebarCategory } from '@docusaurus/theme-common';
import DocListWithTags from '@site/src/components/DocListWithTags';
```

This section of the documentation provides step-by-step instructions for performing various tasks within Resoto.

## Alerting

<DocListWithTags items={useCurrentSidebarCategory().items.find((i) => i.type === 'category' && i.label === 'Alerting')?.items} />

## Cleanup

<DocListWithTags items={useCurrentSidebarCategory().items.find((i) => i.type === 'category' && i.label === 'Cleanup')?.items} />

## Data Export

<DocListWithTags items={useCurrentSidebarCategory().items.find((i) => i.type === 'category' && i.label === 'Data Export')?.items} />

## Search

<DocListWithTags items={useCurrentSidebarCategory().items.find((i) => i.type === 'category' && i.label === 'Search')?.items} />
