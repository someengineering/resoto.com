---
tags: [release notes]
---

# 2.4.7

## What's Changed

### Features

- [`34c38370`](https://github.com/someengineering/resoto/commit/34c38370) <span class="badge badge--secondary">resoto</span> Remove SQLAlchemy dependency (#1270)

### Fixes

- [`06b4bdc6`](https://github.com/someengineering/resoto/commit/06b4bdc6) <span class="badge badge--secondary">docker</span> Optimize swap space
- [`2d06999c`](https://github.com/someengineering/resoto/commit/2d06999c) <span class="badge badge--secondary">docker</span> Remove Jupyterlite venv cherry-picked from main
- [`59dc535b`](https://github.com/someengineering/resoto/commit/59dc535b) <span class="badge badge--secondary">docker</span> Refactor to use resotopython:1.0.2 (#1280)
- [`4aa83140`](https://github.com/someengineering/resoto/commit/4aa83140) <span class="badge badge--secondary">docker</span> Rebase on resotopython base image and update to Node 16 actions (#1276)
- [`31e30eb9`](https://github.com/someengineering/resoto/commit/31e30eb9) <span class="badge badge--secondary">plugins/digitalocean</span> Bump boto

### Chores

- [`02bf0f2c`](https://github.com/someengineering/resoto/commit/02bf0f2c) <span class="badge badge--secondary">docker</span> Backport workflow_dispatch logic to single image
- [`2173083c`](https://github.com/someengineering/resoto/commit/2173083c) <span class="badge badge--secondary">ci</span> Update/tag respective stable version docs on tag (#1279)
- [`4c3d3bf5`](https://github.com/someengineering/resoto/commit/4c3d3bf5) <span class="badge badge--secondary">resoto</span> Bump 2.4.7
- [`6a88d496`](https://github.com/someengineering/resoto/commit/6a88d496) <span class="badge badge--secondary">resoto</span> Bump 2.4.6
- [`cf9db945`](https://github.com/someengineering/resoto/commit/cf9db945) <span class="badge badge--secondary">ci</span> Update API docs CI (#1267)

<!--truncate-->

## Docker Images

- `somecr.io/someengineering/resotocore:2.4.7`
- `somecr.io/someengineering/resotoworker:2.4.7`
- `somecr.io/someengineering/resotoshell:2.4.7`
- `somecr.io/someengineering/resotometrics:2.4.7`
