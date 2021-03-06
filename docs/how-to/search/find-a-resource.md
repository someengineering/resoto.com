---
sidebar_label: Find a Resource
sidebar_custom_props:
  tags: [AWS, GCP, DigitalOcean, Kubernetes]
---

# How to Find a Resource

## Introduction

Resoto builds a cloud asset inventory by collecting resource metadata and is equipped with a full-text search index that allows you to discover, monitor, and analyze resources.

Resoto's search can find resources by name, tag, label, ID, or other metadata such as IP address or DNS name.

## Prerequisites

This guide assumes that you have already [installed](../../getting-started/install-resoto/index.md) and configured Resoto to [collect your cloud resources](../../getting-started/configure-cloud-provider-access/index.md).

## Finding Resources

1. Execute the [`search` command](../../reference/cli/search.md) in [Resoto Shell](../../concepts/components/shell.md) with your search term in double quotes:

   ```bash
   > search "poweruser"
   # highlight-start
   ​kind=kubernetes_pod, ..., region=resoto-poweruser
   ​kind=aws_iam_policy, name=rotator-support-PowerUser ...
   ​kind=aws_iam_role, name=eng-se-demo-PowerUser, ...
   ​kind=gcp_service, ..., account=poweruser-team
   # highlight-end
   ```

   The above example searches resource metadata for the substring `poweruser`.

   :::note

   Searches are case-insensitive.

   :::

2. To view resource details, use the [`dump` command](../../reference/cli/dump.md):

   ```bash
   > search "poweruser" | dump
   # highlight-start
   ​reported:
   ​  ctime: '2022-04-30T15:11:35Z'
   ​  id: 9d133e05-c8bb-4da3-b98b-e8033d075d5c
   ​  labels:
   ​    alertmanager: prometheus-kube-prometheus-alertmanager
   ​    app.kubernetes.io/instance: prometheus-kube-prometheus-alertmanager
   ​    app.kubernetes.io/managed-by: prometheus-operator
   ​  name: alertmanager-prometheus-kube-prometheus-alertmanager-0
   ​  namespace: resoto-poweruser
   ​  pod_spec:
     ...
   # highlight-end
   ```

## Further Reading

- [Search](../../concepts/search/index.md)
- [Command-Line Interface](/docs/reference/cli)
- [Resource Data Models](/docs/reference/data-models)
