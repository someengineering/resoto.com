---
tags: [release notes]
---

# 3.2.2

## What's Changed

### Features

- [`84714244`](https://github.com/someengineering/resoto/commit/84714244) <span class="badge badge--secondary">resotocore</span> AliasTenplate: use default args syntax instead of key/value (#1452)
- [`23e015c1`](https://github.com/someengineering/resoto/commit/23e015c1) <span class="badge badge--secondary">resotocore</span> Bump UI to 3.2.2 (#1454)
- [`257d91e7`](https://github.com/someengineering/resoto/commit/257d91e7) <span class="badge badge--secondary">resoto</span> no error handling in base resource class (#1449)
- [`48907b5f`](https://github.com/someengineering/resoto/commit/48907b5f) <span class="badge badge--secondary">docker</span> Add user requested text editors to base image (#1451)
- [`7c761e3d`](https://github.com/someengineering/resoto/commit/7c761e3d) <span class="badge badge--secondary">gcp</span> collect child resources from GcpSqlDatabaseInstance and connect them (#1446)

### Fixes

- [`41826ed3`](https://github.com/someengineering/resoto/commit/41826ed3) <span class="badge badge--secondary">resotocore</span> Fix pagerduty alert. (#1453)
- [`7d0c15d0`](https://github.com/someengineering/resoto/commit/7d0c15d0) <span class="badge badge--secondary">resotocore</span> Fix datetime parsing in credentials report (#1455)
- [`d67edbc8`](https://github.com/someengineering/resoto/commit/d67edbc8) <span class="badge badge--secondary">plugins/aws</span> Add new permissions for cloudformation stack listing (#1450)
- [`45c2e6f2`](https://github.com/someengineering/resoto/commit/45c2e6f2) <span class="badge badge--secondary">aws</span> EFS Share is a network share not a volume (#1448)

### Chores

- [`72811cb6`](https://github.com/someengineering/resoto/commit/72811cb6) <span class="badge badge--secondary">ci</span> Write AWS policy JSON to resoto.com repo (#1445)
- [`a7ec1150`](https://github.com/someengineering/resoto/commit/a7ec1150) <span class="badge badge--secondary">gcp</span> Housekeeping (#1447)
- [`c58b77d2`](https://github.com/someengineering/resoto/commit/c58b77d2) <span class="badge badge--secondary">resoto</span> Bump 3.2.2 (#1444)

## Known Issues

### Resoto UI

- On macOS, opening a dashboard and adding a new world map widget results in a WebGL context crash, requiring to reload the browser tab. (The widget works as expected in Windows environments.)

<!--truncate-->

## Docker Images

- `somecr.io/someengineering/resotocore:3.2.2`
- `somecr.io/someengineering/resotoworker:3.2.2`
- `somecr.io/someengineering/resotoshell:3.2.2`
- `somecr.io/someengineering/resotometrics:3.2.2`
