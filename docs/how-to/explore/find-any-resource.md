---
sidebar_label: Find any resource
sidebar_custom_props:
  tags: [AWS, GCP, DigitalOcean, Kubernetes]
---

# How to quickly find any resource

## Introduction

Resoto maintains an asset inventory of your infrastructure metadata. It is equipped with a full-text search index that can be leveraged to find any resource, no matter which cloud provider, account, region or service the resource belongs to.

Examples where this approach might be helpful:

- Finding resources with a certain name or tag or label
- Lookup resources by a provider specific ID
- Finding resources with an IP Address or DNS name

## Prerequisites

This guide assumes that you have already [installed](../../getting-started/installation/index.md) and configured Resoto to [collect your cloud resources](../../getting-started/configuration/cloud-providers/index.md).

## Finding resources

1. Open ResotoShell:

   Depending on your installation method this action might differ.

   - Docker Compose:

     ```bash
     $ docker compose run --rm resotoshell
     ```

   - Local Installation:
     ```bash
     $ resh --resotocore-uri https://<host and port to resoto> --psk <private shared key>
     ```

2. Use the search command and put your search term in quotes:

   ```bash
   > search "poweruser"
   ​kind=kubernetes_pod, ..., region=resoto-poweruser
   ​kind=aws_iam_policy, name=rotator-support-PowerUser ...
   ​kind=aws_iam_role, name=eng-se-demo-PowerUser, ...
   ​kind=gcp_service, ..., account=poweruser-team
   ```

   This will search all resource metadata for the term "poweruser". Please note that the search term only needs to be included in the matching term: `poweruser` matches the term `PowerUser-team` since the term is included and the case is ignored.

   Any resource that matches this term will be returned as one line of output.

3. Show details of the resources returned:

   In case you want to see more details about a resource, you can use the `dump` command which will show all metadata that has been collected for that resource.

   ```bash
   > search "poweruser" | dump
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
   ​     ... cutted for brevity ...
   ```

## Reference

- [Search Reference](/docs/concepts/search) for more detailed queries and examples.
- [CLI Command Reference](/docs/reference/cli) showing available CLI commands that can used in combination with the `search` command.
- [Resource Reference](/docs/reference/data-models) showing available resource types and their attributes.
