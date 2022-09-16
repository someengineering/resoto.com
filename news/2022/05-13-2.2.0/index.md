---
tags: [release notes]
---

# 2.2.0

## What's Changed

### Features

- [`4cefca9`](https://github.com/someengineering/resoto/commit/4cefca9) <span class="badge badge--secondary">resoto</span> Release 2.2.0
- [`4379cbe`](https://github.com/someengineering/resoto/commit/4379cbe) <span class="badge badge--secondary">resotocore</span> Add separate sort and limit commands ([#862](https://github.com/someengineering/resoto/pull/862))
- [`788a4ba`](https://github.com/someengineering/resoto/commit/788a4ba) <span class="badge badge--secondary">digitalocean</span> Rename Network -> VPC ([#860](https://github.com/someengineering/resoto/pull/860))
- [`2ba8c2c`](https://github.com/someengineering/resoto/commit/2ba8c2c) <span class="badge badge--secondary">resoto</span> Add possible successors to the model ([#853](https://github.com/someengineering/resoto/pull/853))
- [`f2eb950`](https://github.com/someengineering/resoto/commit/f2eb950) <span class="badge badge--secondary">plugins/aws</span> Fetch S3 bucket tag sets in parallel ([#851](https://github.com/someengineering/resoto/pull/851))
- [`fccbcae`](https://github.com/someengineering/resoto/commit/fccbcae) <span class="badge badge--secondary">plugins/aws</span> Allow fetching and updating of S3 bucket tags ([#847](https://github.com/someengineering/resoto/pull/847))
- [`f1dcc0a`](https://github.com/someengineering/resoto/commit/f1dcc0a) <span class="badge badge--secondary">resotoshell</span> Load metadata from core ([#833](https://github.com/someengineering/resoto/pull/833))
- [`be10bb4`](https://github.com/someengineering/resoto/commit/be10bb4) <span class="badge badge--secondary">resoto</span> pypy 3.9 and bump minimal version ([#835](https://github.com/someengineering/resoto/pull/835))
- [`41e652a`](https://github.com/someengineering/resoto/commit/41e652a) <span class="badge badge--secondary">resotoshell</span> select mode if stdin is not a tty ([#831](https://github.com/someengineering/resoto/pull/831))
- [`b9b28d2`](https://github.com/someengineering/resoto/commit/b9b28d2) <span class="badge badge--secondary">pypi</span> Publish to PyPI ([#832](https://github.com/someengineering/resoto/pull/832))

### Fixes

- [`edc3ae4`](https://github.com/someengineering/resoto/commit/edc3ae4) <span class="badge badge--secondary">resoto</span> Build and push to PyPI on tag push ([#865](https://github.com/someengineering/resoto/pull/865))
- [`080441d`](https://github.com/someengineering/resoto/commit/080441d) <span class="badge badge--secondary">resotocore</span> format also supports yaml which was not listed ([#863](https://github.com/someengineering/resoto/pull/863))
- [`3eab4e2`](https://github.com/someengineering/resoto/commit/3eab4e2) <span class="badge badge--secondary">plugins</span> Use Gb instead of Mb for DO instances ([#861](https://github.com/someengineering/resoto/pull/861))
- [`69749ef`](https://github.com/someengineering/resoto/commit/69749ef) <span class="badge badge--secondary">resoto</span> Escape inputs to mute snyk ([#859](https://github.com/someengineering/resoto/pull/859))
- [`449d79b`](https://github.com/someengineering/resoto/commit/449d79b) <span class="badge badge--secondary">resotoworker</span> Better logging of cleanup ([#858](https://github.com/someengineering/resoto/pull/858))
- [`21b60af`](https://github.com/someengineering/resoto/commit/21b60af) <span class="badge badge--secondary">resotolib</span> Send action reply via object ref not local ([#856](https://github.com/someengineering/resoto/pull/856))
- [`190d2fb`](https://github.com/someengineering/resoto/commit/190d2fb) <span class="badge badge--secondary">resotolib</span> Handle failure to save config after load gracefully ([#854](https://github.com/someengineering/resoto/pull/854))
- [`5116ab1`](https://github.com/someengineering/resoto/commit/5116ab1) <span class="badge badge--secondary">resotolib</span> Change severity of auto-recovering info and error messages ([#848](https://github.com/someengineering/resoto/pull/848))
- [`923aaaf`](https://github.com/someengineering/resoto/commit/923aaaf) <span class="badge badge--secondary">resotoshell</span> handle wrong PSK ([#846](https://github.com/someengineering/resoto/pull/846))
- [`0f7284b`](https://github.com/someengineering/resoto/commit/0f7284b) <span class="badge badge--secondary">resotocore</span> Handle connection errors more gracefully ([#844](https://github.com/someengineering/resoto/pull/844))
- [`a09e53d`](https://github.com/someengineering/resoto/commit/a09e53d) <span class="badge badge--secondary">resotolib</span> Use debug instead of error log severity ([#842](https://github.com/someengineering/resoto/pull/842))
- [`44a5a54`](https://github.com/someengineering/resoto/commit/44a5a54) <span class="badge badge--secondary">resotoshell</span> Graceful exception handling ([#843](https://github.com/someengineering/resoto/pull/843))
- [`9ffb7b2`](https://github.com/someengineering/resoto/commit/9ffb7b2) <span class="badge badge--secondary">resotocore</span> CLI info for all commands ([#841](https://github.com/someengineering/resoto/pull/841))
- [`a4440ba`](https://github.com/someengineering/resoto/commit/a4440ba) <span class="badge badge--secondary">resoto</span> Remove type ignores for pypy 3.8 ([#836](https://github.com/someengineering/resoto/pull/836))
- [`60c92ce`](https://github.com/someengineering/resoto/commit/60c92ce) <span class="badge badge--secondary">resotocore</span> Revert bumping arangodb driver ([#840](https://github.com/someengineering/resoto/pull/840))
- [`c7a7165`](https://github.com/someengineering/resoto/commit/c7a7165) <span class="badge badge--secondary">resotoshell</span> shutdown the client thread ([#839](https://github.com/someengineering/resoto/pull/839))
- [`95fd4d2`](https://github.com/someengineering/resoto/commit/95fd4d2) <span class="badge badge--secondary">resotoshell</span> Bump resotoclient ([#838](https://github.com/someengineering/resoto/pull/838))
- [`ee17313`](https://github.com/someengineering/resoto/commit/ee17313) <span class="badge badge--secondary">resotoshell</span> Fix sort suggestion and improve option information ([#829](https://github.com/someengineering/resoto/pull/829))
- [`d59e0c7`](https://github.com/someengineering/resoto/commit/d59e0c7) <span class="badge badge--secondary">plugins</span> Remove \_ from plugin package names ([#830](https://github.com/someengineering/resoto/pull/830))
- [`22cba64`](https://github.com/someengineering/resoto/commit/22cba64) <span class="badge badge--secondary">resotolib</span> close fds more targeted during restart ([#827](https://github.com/someengineering/resoto/pull/827))

### Chores

- [`d9304b1`](https://github.com/someengineering/resoto/commit/d9304b1) <span class="badge badge--secondary">docker</span> Use nano as default editor in Docker 🤷 ([#857](https://github.com/someengineering/resoto/pull/857))
- [`ca6ebbf`](https://github.com/someengineering/resoto/commit/ca6ebbf) <span class="badge badge--secondary">plugins/aws</span> Bump boto3 1.22.6 -> 1.22.11 ([#855](https://github.com/someengineering/resoto/pull/855))
- [`2b2a9ef`](https://github.com/someengineering/resoto/commit/2b2a9ef) <span class="badge badge--secondary">resoto</span> Bump libs ([#834](https://github.com/someengineering/resoto/pull/834))
- [`95137fe`](https://github.com/someengineering/resoto/commit/95137fe) <span class="badge badge--secondary">resotolib</span> rename package resotolib.logging and resotolib.signal ([#828](https://github.com/someengineering/resoto/pull/828))
- [`12dea08`](https://github.com/someengineering/resoto/commit/12dea08) <span class="badge badge--secondary">resoto</span> Bump 2.2.0a0 ([#826](https://github.com/someengineering/resoto/pull/826))

<!--truncate-->

## Docker Images

- `somecr.io/someengineering/resotocore:2.2.0`
- `somecr.io/someengineering/resotoworker:2.2.0`
- `somecr.io/someengineering/resotoshell:2.2.0`
- `somecr.io/someengineering/resotometrics:2.2.0`
