---
sidebar_label: Worker
---

# Resoto Worker Configuration

## Multi-Core Machines

Resoto resource collection speed depends heavily on the number of CPU cores available to the worker. When collecting hundreds of accounts, [Resoto Worker](../../concepts/components/worker.md) can easily saturate 64 cores or more.

The amount of RAM required depends on the number of resources in each account. As a rule of thumb, estimate 512 MB of RAM and 0.5 CPU cores per account concurrently collected, with a minimum of 4 cores and 16 GB for a production setup.

The following settings specify how many [Worker](../../concepts/components/worker.md) threads Resoto starts:

```yaml
resotoworker:
  ...
# highlight-start
  # How many cleanup threads to run in parallel
  cleanup_pool_size: 16
  # Collector thread/process pool size
  pool_size: 5
# highlight-end
aws:
  ...
# highlight-start
  # Account thread/process pool size
  account_pool_size: 32
  # Region thread pool size
  region_pool_size: 20
# highlight-end
gcp:
  ...
# highlight-start
  # GCP project thread/process pool size
  project_pool_size: 32
# highlight-end
...
```

- The `resotoworker.pool_size` setting determines how many collectors (Amazon Web Services, Google Cloud Platform, DigitalOcean, Kubernetes, etc.) are run concurrently.
- `aws.account_pool_size` and `gcp.project_pool_size` are used to determine how many accounts or projects respectively are collected concurrently.
- Within Amazon Web Services, `aws.region_pool_size` is used to determine how many regions per account are collected concurrently.

:::caution

At peak, Resoto creates concurrent network connections for each region in every account. With a single cloud with 32 accounts and 20 regions per account, for example, there will be a maximum of 32 × 20 = 640 connections.

This is not a problem in a data center or with a <abbr title="small office / home office">SOHO</abbr> router, where hundreds of thousands (or even millions) of new connections per second are supported. However, if you are testing Resoto at home using a consumer-grade router, you should be conservative when configuring thread pool sizes.

:::
