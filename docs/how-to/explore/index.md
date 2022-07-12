---
sidebar_label: Explore
---

# Get the information you are looking for

```mdx-code-block
import { useCurrentSidebarCategory } from '@docusaurus/theme-common';
import DocListWithTags from '@site/src/components/DocListWithTags';
```

<DocListWithTags items={useCurrentSidebarCategory().items} />
