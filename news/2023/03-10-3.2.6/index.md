---
tags: [release notes]
---

# 3.2.6

## What's Changed

### Features

- [`b7520033`](https://github.com/someengineering/resoto/commit/b7520033) <span class="badge badge--secondary">resotocore</span> YAML: support literal blocks for multiline strings (#1497)
- [`c06b5338`](https://github.com/someengineering/resoto/commit/c06b5338) <span class="badge badge--secondary">resotocore</span> Bump UI version to 3.2.6 (#1498)
- [`67c3d75d`](https://github.com/someengineering/resoto/commit/67c3d75d) <span class="badge badge--secondary">gcp</span> Use plain property names and enable mypy (#1488)
- [`7e60de19`](https://github.com/someengineering/resoto/commit/7e60de19) <span class="badge badge--secondary">resotocore</span> Analytics event when a benchmark is performed (#1490)
- [`9ce3d710`](https://github.com/someengineering/resoto/commit/9ce3d710) <span class="badge badge--secondary">aws</span> Use a read/write lock instead of a simple lock (#1494)
- [`5b0e4bb0`](https://github.com/someengineering/resoto/commit/5b0e4bb0) <span class="badge badge--secondary">aws</span> Use a single ExecutorQueue (#1485)
- [`3580ac3f`](https://github.com/someengineering/resoto/commit/3580ac3f) <span class="badge badge--secondary">gcp</span> handling of custom machine types for Gcp Instances (#1466)
- [`a0ae5819`](https://github.com/someengineering/resoto/commit/a0ae5819) <span class="badge badge--secondary">resotocore</span> Bump UI version to 3.2.5 (#1480)

### Fixes

- [`67ce070f`](https://github.com/someengineering/resoto/commit/67ce070f) <span class="badge badge--secondary">resotocore</span> Benchmark refinements (#1496)
- [`bdde3109`](https://github.com/someengineering/resoto/commit/bdde3109) <span class="badge badge--secondary">resotolib</span> Fix the config deletion bug (#1495)
- [`669db039`](https://github.com/someengineering/resoto/commit/669db039) <span class="badge badge--secondary">resotocore</span> Only access first command if defined (#1489)
- [`be9a34c9`](https://github.com/someengineering/resoto/commit/be9a34c9) <span class="badge badge--secondary">resotocore</span> Benchmark should not have a dot in the name (#1493)
- [`f94ce8ff`](https://github.com/someengineering/resoto/commit/f94ce8ff) <span class="badge badge--secondary">resotoshell</span> Write file should overwrite existing file (#1491)
- [`7cf50ca8`](https://github.com/someengineering/resoto/commit/7cf50ca8) <span class="badge badge--secondary">resotocore</span> Only use config roots to validate (#1492)
- [`82738580`](https://github.com/someengineering/resoto/commit/82738580) <span class="badge badge--secondary">resotolib</span> Drop deleted config props (#1486)
- [`9360e7dd`](https://github.com/someengineering/resoto/commit/9360e7dd) <span class="badge badge--secondary">aws</span> ExecutorQueue performs a configurable number of actions per key (#1478)
- [`88b1f0a7`](https://github.com/someengineering/resoto/commit/88b1f0a7) <span class="badge badge--secondary">aws</span> Adjust retry settings to wait max 5 minutes (#1482)
- [`516f6860`](https://github.com/someengineering/resoto/commit/516f6860) <span class="badge badge--secondary">resotolib</span> Correctly apply the default config in resotolib (#1483)
- [`1b7d74fc`](https://github.com/someengineering/resoto/commit/1b7d74fc) <span class="badge badge--secondary">resotolib</span> Fix config env vars resolving (#1481)
- [`8f65b5ef`](https://github.com/someengineering/resoto/commit/8f65b5ef) <span class="badge badge--secondary">resotocore</span> Do not send raw_config by default (#1479)
- [`8b94d99b`](https://github.com/someengineering/resoto/commit/8b94d99b) <span class="badge badge--secondary">aws</span> ElasticIp.id should be PublicIp (#1477)

### Chores

- [`5a145e26`](https://github.com/someengineering/resoto/commit/5a145e26) <span class="badge badge--secondary">resoto</span> Improve devcontainer build times and enable linters by default (#1484)
- [`28b4ac2e`](https://github.com/someengineering/resoto/commit/28b4ac2e) <span class="badge badge--secondary">resoto</span> Bump 3.2.6 (#1476)

<!--truncate-->

## Docker Images

- `somecr.io/someengineering/resotocore:3.2.6`
- `somecr.io/someengineering/resotoworker:3.2.6`
- `somecr.io/someengineering/resotoshell:3.2.6`
- `somecr.io/someengineering/resotometrics:3.2.6`
