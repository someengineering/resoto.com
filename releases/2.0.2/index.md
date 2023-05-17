---
date: 2022-04-22
---

# 2.0.2

## What's Changed

### Features

- [`4f557ec`](https://github.com/someengineering/resoto/commit/4f557ec) <span class="badge badge--secondary">helm</span> Simplify helm chart deployment ([#805](https://github.com/someengineering/resoto/pull/805))
- [`94d4902`](https://github.com/someengineering/resoto/commit/94d4902) <span class="badge badge--secondary">resotocore</span> Improve analytics data ([#800](https://github.com/someengineering/resoto/pull/800))
- [`3eef30b`](https://github.com/someengineering/resoto/commit/3eef30b) <span class="badge badge--secondary">resoto</span> add more script documentation ([#773](https://github.com/someengineering/resoto/pull/773))
- [`9dadc0e`](https://github.com/someengineering/resoto/commit/9dadc0e) <span class="badge badge--secondary">docker</span> Add someengineering/resh container ([#789](https://github.com/someengineering/resoto/pull/789))

### Fixes

- [`fb209b6`](https://github.com/someengineering/resoto/commit/fb209b6) <span class="badge badge--secondary">resotoshell</span> Fix rich dependency
- [`6ffc7f4`](https://github.com/someengineering/resoto/commit/6ffc7f4) <span class="badge badge--secondary">docker</span> Add cache version to cache key for easy invalidation ([#810](https://github.com/someengineering/resoto/pull/810))
- [`3692fcf`](https://github.com/someengineering/resoto/commit/3692fcf) <span class="badge badge--secondary">resotocore</span> Fix rich dependency
- [`82e64d0`](https://github.com/someengineering/resoto/commit/82e64d0) <span class="badge badge--secondary">docker</span> copy ArangoDB dump/restore client binaries ([#806](https://github.com/someengineering/resoto/pull/806))
- [`81fc02d`](https://github.com/someengineering/resoto/commit/81fc02d) <span class="badge badge--secondary">docker</span> Add vi and nano to Docker images ([#804](https://github.com/someengineering/resoto/pull/804))
- [`b087485`](https://github.com/someengineering/resoto/commit/b087485) <span class="badge badge--secondary">resotolib</span> Update TLS certificate files on disk after a certain time has passed ([#803](https://github.com/someengineering/resoto/pull/803))
- [`5bbea70`](https://github.com/someengineering/resoto/commit/5bbea70) <span class="badge badge--secondary">plugins</span> Rename protect_snowflakes -> protector and make plugins restart on enable ([#794](https://github.com/someengineering/resoto/pull/794))
- [`f70079a`](https://github.com/someengineering/resoto/commit/f70079a) <span class="badge badge--secondary">docker</span> Allow docker-compose run resotoshell ([#798](https://github.com/someengineering/resoto/pull/798))
- [`2e2e92f`](https://github.com/someengineering/resoto/commit/2e2e92f) <span class="badge badge--secondary">resotocore</span> write ca bundle periodically to tmp ([#797](https://github.com/someengineering/resoto/pull/797))
- [`7875cc5`](https://github.com/someengineering/resoto/commit/7875cc5) <span class="badge badge--secondary">resotocore</span> No analytics in CI ([#799](https://github.com/someengineering/resoto/pull/799))

### Documentation

- [`0282425`](https://github.com/someengineering/resoto/commit/0282425) <span class="badge badge--secondary">resoto</span> Update rendering script docs ([#796](https://github.com/someengineering/resoto/pull/796))
- [`cdd3f5a`](https://github.com/someengineering/resoto/commit/cdd3f5a) <span class="badge badge--secondary">resoto</span> Add the instruction for the graph rendering script ([#795](https://github.com/someengineering/resoto/pull/795))

### Chores

- [`e4aa797`](https://github.com/someengineering/resoto/commit/e4aa797) <span class="badge badge--secondary">resoto</span> Bump 2.0.2
- [`2f1c040`](https://github.com/someengineering/resoto/commit/2f1c040) <span class="badge badge--secondary">resoto</span> use version 2.0 as docker version in compose
- [`1763105`](https://github.com/someengineering/resoto/commit/1763105) <span class="badge badge--secondary">resoto</span> Add documentation as release note section ([#792](https://github.com/someengineering/resoto/pull/792))

<!--truncate-->

## Docker Images

- `somecr.io/someengineering/resotocore:2.0.2`
- `somecr.io/someengineering/resotoworker:2.0.2`
- `somecr.io/someengineering/resotoshell:2.0.2`
- `somecr.io/someengineering/resotometrics:2.0.2`
