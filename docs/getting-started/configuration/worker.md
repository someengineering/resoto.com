---
sidebar_label: Worker
sidebar_position: 2
---

# Configuring Resoto Worker

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

The setting `resotoworker.pool_size` determines how many collectors (Amazon Web Services, Google Cloud Platform, DigitalOcean, Kubernetes, etc.) are run concurrently. `aws.account_pool_size` and `gcp.project_pool_size` are used to determine how many accounts or projects respectively are collected concurrently. Within Amazon Web Services, the setting `aws.region_pool_size` is used to determine how many regions per account are collected concurrently.
