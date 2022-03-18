---
hide_table_of_contents: true
---

# API

```mdx-code-block
import Redoc from '@theme/Redoc';
import useSpecData from '@theme/useSpecData';

export const ApiDoc = () => {
  const specData = useSpecData('resotocore');
  return <Redoc {...specData} />;
}
```

<ApiDoc />
