---
tags: [release notes]
---

# 2.1.0

## What's Changed

### Features

- [`e878522`](https://github.com/someengineering/resoto/commit/e878522) <span class="badge badge--secondary">resoto</span> Bump 2.1.0
- [`0aad50b`](https://github.com/someengineering/resoto/commit/0aad50b) <span class="badge badge--secondary">resotoshell</span> Add aggregate completer ([#825](https://github.com/someengineering/resoto/pull/825))
- [`2d0aa6a`](https://github.com/someengineering/resoto/commit/2d0aa6a) <span class="badge badge--secondary">resoto</span> Use json as logging output format ([#824](https://github.com/someengineering/resoto/pull/824))
- [`f6aea4a`](https://github.com/someengineering/resoto/commit/f6aea4a) <span class="badge badge--secondary">resotoshell</span> Use resotoclient in resotoshell ([#822](https://github.com/someengineering/resoto/pull/822))
- [`121709d`](https://github.com/someengineering/resoto/commit/121709d) <span class="badge badge--secondary">resotoshell</span> Check resotocore returned filename for invalid path element ([#821](https://github.com/someengineering/resoto/pull/821))
- [`2952fe9`](https://github.com/someengineering/resoto/commit/2952fe9) <span class="badge badge--secondary">resotoshell</span> Better startup error messages ([#820](https://github.com/someengineering/resoto/pull/820))
- [`140b06b`](https://github.com/someengineering/resoto/commit/140b06b) <span class="badge badge--secondary">resotoshell</span> Improve search completion ([#816](https://github.com/someengineering/resoto/pull/816))
- [`bdb1585`](https://github.com/someengineering/resoto/commit/bdb1585) <span class="badge badge--secondary">resotoshell</span> Add debug output containing the http error code on resh error ([#819](https://github.com/someengineering/resoto/pull/819))
- [`1206f52`](https://github.com/someengineering/resoto/commit/1206f52) <span class="badge badge--secondary">resotolib</span> Send regular pings over websocket ([#818](https://github.com/someengineering/resoto/pull/818))
- [`8fc5688`](https://github.com/someengineering/resoto/commit/8fc5688) <span class="badge badge--secondary">resotoshell</span> Add autocomplete in interactive shell session ([#811](https://github.com/someengineering/resoto/pull/811))
- [`c968f88`](https://github.com/someengineering/resoto/commit/c968f88) <span class="badge badge--secondary">resotocore</span> Export available command line arguments ([#813](https://github.com/someengineering/resoto/pull/813))
- [`9f9c03d`](https://github.com/someengineering/resoto/commit/9f9c03d) <span class="badge badge--secondary">helm</span> Simplify helm chart deployment ([#805](https://github.com/someengineering/resoto/pull/805))
- [`7c808a7`](https://github.com/someengineering/resoto/commit/7c808a7) <span class="badge badge--secondary">resotocore</span> Improve analytics data ([#800](https://github.com/someengineering/resoto/pull/800))
- [`90c6905`](https://github.com/someengineering/resoto/commit/90c6905) <span class="badge badge--secondary">resoto</span> add more script documentation ([#773](https://github.com/someengineering/resoto/pull/773))
- [`7cd260d`](https://github.com/someengineering/resoto/commit/7cd260d) <span class="badge badge--secondary">docker</span> Add someengineering/resh container ([#789](https://github.com/someengineering/resoto/pull/789))

### Fixes

- [`9cb6277`](https://github.com/someengineering/resoto/commit/9cb6277) <span class="badge badge--secondary">resotocore</span> Validate tarfile content ([#823](https://github.com/someengineering/resoto/pull/823))
- [`f13e8cc`](https://github.com/someengineering/resoto/commit/f13e8cc) <span class="badge badge--secondary">resoto</span> Add .dccache to .gitignore ([#817](https://github.com/someengineering/resoto/pull/817))
- [`860ec68`](https://github.com/someengineering/resoto/commit/860ec68) <span class="badge badge--secondary">plugins</span> Fix aws excluded accounts default and update gcp severity ([#815](https://github.com/someengineering/resoto/pull/815))
- [`c494d90`](https://github.com/someengineering/resoto/commit/c494d90) <span class="badge badge--secondary">resotoshell</span> Compare config checksum instead of ctime/mtime ([#814](https://github.com/someengineering/resoto/pull/814))
- [`a143f57`](https://github.com/someengineering/resoto/commit/a143f57) <span class="badge badge--secondary">resoto</span> Define the UI by default in helm chart ([#812](https://github.com/someengineering/resoto/pull/812))
- [`cce1444`](https://github.com/someengineering/resoto/commit/cce1444) <span class="badge badge--secondary">resotocore</span> Use resotoclient in tests ([#809](https://github.com/someengineering/resoto/pull/809))
- [`dee2cd9`](https://github.com/someengineering/resoto/commit/dee2cd9) <span class="badge badge--secondary">docker</span> Add cache version to cache key for easy invalidation ([#810](https://github.com/someengineering/resoto/pull/810))
- [`e471bbb`](https://github.com/someengineering/resoto/commit/e471bbb) <span class="badge badge--secondary">docker</span> copy ArangoDB dump/restore client binaries ([#806](https://github.com/someengineering/resoto/pull/806))
- [`1bcf470`](https://github.com/someengineering/resoto/commit/1bcf470) <span class="badge badge--secondary">docker</span> Add vi and nano to Docker images ([#804](https://github.com/someengineering/resoto/pull/804))
- [`35467b7`](https://github.com/someengineering/resoto/commit/35467b7) <span class="badge badge--secondary">resotolib</span> Update TLS certificate files on disk after a certain time has passed ([#803](https://github.com/someengineering/resoto/pull/803))
- [`32e3923`](https://github.com/someengineering/resoto/commit/32e3923) <span class="badge badge--secondary">plugins</span> Rename protect_snowflakes -> protector and make plugins restart on enable ([#794](https://github.com/someengineering/resoto/pull/794))
- [`dff92da`](https://github.com/someengineering/resoto/commit/dff92da) <span class="badge badge--secondary">docker</span> Allow docker-compose run resotoshell ([#798](https://github.com/someengineering/resoto/pull/798))
- [`89f509a`](https://github.com/someengineering/resoto/commit/89f509a) <span class="badge badge--secondary">resotocore</span> write ca bundle periodically to tmp ([#797](https://github.com/someengineering/resoto/pull/797))
- [`c04aec0`](https://github.com/someengineering/resoto/commit/c04aec0) <span class="badge badge--secondary">resotocore</span> No analytics in CI ([#799](https://github.com/someengineering/resoto/pull/799))
- [`4248c8a`](https://github.com/someengineering/resoto/commit/4248c8a) <span class="badge badge--secondary">resotocore</span> Not should affect only the next simple term ([#793](https://github.com/someengineering/resoto/pull/793))
- [`6d51d8b`](https://github.com/someengineering/resoto/commit/6d51d8b) <span class="badge badge--secondary">docs</span> Update all plugin READMEs ([#790](https://github.com/someengineering/resoto/pull/790))
- [`3ddd92a`](https://github.com/someengineering/resoto/commit/3ddd92a) <span class="badge badge--secondary">docker</span> Use released 2.0.0 version in docker-compose ([#787](https://github.com/someengineering/resoto/pull/787))

### Documentation

- [`8a87218`](https://github.com/someengineering/resoto/commit/8a87218) <span class="badge badge--secondary">resoto</span> fix typo in render_dot readme ([#807](https://github.com/someengineering/resoto/pull/807))
- [`e048ae3`](https://github.com/someengineering/resoto/commit/e048ae3) <span class="badge badge--secondary">resoto</span> Update rendering script docs ([#796](https://github.com/someengineering/resoto/pull/796))
- [`f82e3ea`](https://github.com/someengineering/resoto/commit/f82e3ea) <span class="badge badge--secondary">resoto</span> Add the instruction for the graph rendering script ([#795](https://github.com/someengineering/resoto/pull/795))

### Chores

- [`74533b3`](https://github.com/someengineering/resoto/commit/74533b3) <span class="badge badge--secondary">resoto</span> Add documentation as release note section ([#792](https://github.com/someengineering/resoto/pull/792))
- [`9d57191`](https://github.com/someengineering/resoto/commit/9d57191) <span class="badge badge--secondary">ci</span> remove individual Docker images from generated release notes ([#791](https://github.com/someengineering/resoto/pull/791))
- [`0a27e8a`](https://github.com/someengineering/resoto/commit/0a27e8a) <span class="badge badge--secondary">docker</span> Update compose file for 2.0.0 ([#788](https://github.com/someengineering/resoto/pull/788))
- [`edc9e22`](https://github.com/someengineering/resoto/commit/edc9e22) <span class="badge badge--secondary">resoto</span> Bump 2.1.0a0 ([#786](https://github.com/someengineering/resoto/pull/786))

<!--truncate-->

## Docker Images

- `somecr.io/someengineering/resotocore:2.1.0`
- `somecr.io/someengineering/resotoworker:2.1.0`
- `somecr.io/someengineering/resotoshell:2.1.0`
- `somecr.io/someengineering/resotometrics:2.1.0`
