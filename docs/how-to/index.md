---
sidebar_position: 2
---

# How-To Guides

```mdx-code-block
import { useCurrentSidebarCategory } from '@docusaurus/theme-common';
import DocListWithTags from '@site/src/components/DocListWithTags';
```

This section of the documentation provides instructions for specific use cases and scenarios.

## Alerting

<DocListWithTags items={useCurrentSidebarCategory().items.find((i) => i.type === 'category' && i.label === 'Alerting')?.items} />

## Automation

<DocListWithTags items={useCurrentSidebarCategory().items.find((i) => i.type === 'category' && i.label === 'Automation')?.items} />

## Security

<DocListWithTags items={useCurrentSidebarCategory().items.find((i) => i.type === 'category' && i.label === 'Security')?.items} />
