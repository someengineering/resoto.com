---
tags: [release notes]
---

# 3.0.1

## What's Changed

### Features

- [`98c39b5e`](https://github.com/someengineering/resoto/commit/98c39b5e) <span class="badge badge--secondary">resotocore</span> Allow relative time in history command (#1341)
- [`1fc68807`](https://github.com/someengineering/resoto/commit/1fc68807) <span class="badge badge--secondary">resoto</span> Add the actual error message that AWS returns (#1342)
- [`a50e2a0e`](https://github.com/someengineering/resoto/commit/a50e2a0e) <span class="badge badge--secondary">aws</span> Add deferred edge from StackSet to Stack instance (#1337)
- [`b280f2ca`](https://github.com/someengineering/resoto/commit/b280f2ca) <span class="badge badge--secondary">aws</span> Map the policy document version (#1335)
- [`65cc5bff`](https://github.com/someengineering/resoto/commit/65cc5bff) <span class="badge badge--secondary">plugins/aws</span> Add support for Cognito (#1318)

### Fixes

- [`de93193c`](https://github.com/someengineering/resoto/commit/de93193c) <span class="badge badge--secondary">aws</span> Redefine default pool sizes (#1347)
- [`145aca2b`](https://github.com/someengineering/resoto/commit/145aca2b) <span class="badge badge--secondary">aws</span> Add missing collect api (#1346)
- [`1c7fca90`](https://github.com/someengineering/resoto/commit/1c7fca90) <span class="badge badge--secondary">aws</span> Add missing collect api (#1345)
- [`b4c0909a`](https://github.com/someengineering/resoto/commit/b4c0909a) <span class="badge badge--secondary">aws</span> Only collect default policy (#1344)
- [`be754d21`](https://github.com/someengineering/resoto/commit/be754d21) <span class="badge badge--secondary">aws</span> Collection of instances happens in the stack set (#1343)
- [`0799d4e4`](https://github.com/someengineering/resoto/commit/0799d4e4) <span class="badge badge--secondary">aws</span> Remove wrong edge from VolumeType -> Volume (#1339)
- [`03cd9610`](https://github.com/someengineering/resoto/commit/03cd9610) <span class="badge badge--secondary">aws</span> AwsClient handle lists correctly (#1331)
- [`78cd02ea`](https://github.com/someengineering/resoto/commit/78cd02ea) <span class="badge badge--secondary">aws</span> Define missing API calls (#1338)
- [`198602bb`](https://github.com/someengineering/resoto/commit/198602bb) <span class="badge badge--secondary">aws</span> Add required parameter to cognito api call (#1340)

### Chores

- [`31a8a420`](https://github.com/someengineering/resoto/commit/31a8a420) <span class="badge badge--secondary">resoto</span> Remove resoto bundle (#1349)
- [`c2bff20a`](https://github.com/someengineering/resoto/commit/c2bff20a) <span class="badge badge--secondary">resoto</span> Bump 3.0.1 (#1334)

<!--truncate-->

## Docker Images

- `somecr.io/someengineering/resotocore:3.0.1`
- `somecr.io/someengineering/resotoworker:3.0.1`
- `somecr.io/someengineering/resotoshell:3.0.1`
- `somecr.io/someengineering/resotometrics:3.0.1`
