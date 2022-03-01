---
hide_table_of_contents: true
---

# API

```mdx-code-block
import { getLatestRelease } from '@site/src/utils/githubHelper';
import Redoc from '@theme/Redoc';
import { useEffect, useState } from 'react';

export const ApiDoc = () => {
  const [latestRelease, setLatestRelease] = useState(null);
  useEffect(() => {
    const getGithubData = async () => {
      setLatestRelease(await getLatestRelease('someengineering', 'resoto'));
    };
    getGithubData();
  }, []);
  return latestRelease ? (<Redoc specUrl={`https://raw.githubusercontent.com/someengineering/resoto/${latestRelease}/resotocore/resotocore/static/api-doc.yaml`} />) : null;
}
```

<ApiDoc />
