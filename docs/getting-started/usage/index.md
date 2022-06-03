---
sidebar_position: 3
---

# Usage

```mdx-code-block
import { useCurrentSidebarCategory } from '@docusaurus/theme-common';
import DocCardList from '@theme/DocCardList';
```

<DocCardList items={useCurrentSidebarCategory().items}/>
