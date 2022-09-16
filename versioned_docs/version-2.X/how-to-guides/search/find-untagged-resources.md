---
sidebar_label: Find Untagged Resources
sidebar_custom_props:
  tags: [AWS, GCP, DigitalOcean, Kubernetes]
---

# How to Find Untagged Resources

A resource can be tagged with an [expiration](../../concepts/resource-management/expiration.md) tag that instructs Resoto to clean it up at a defined time. This can serve as a safety net for when a CI job fails or the IaC tool aborts halfway through its run, or even as the primary means of managing resource lifecycles.

Resoto calculates the expiration time of a resource based on its expiration tag and stores the result as the value of the `metadata.expires` property.

## Prerequisites

This guide assumes that you have already [installed](../../getting-started/install-resoto/index.md) and configured Resoto to [collect your cloud resources](../../getting-started/configure-cloud-provider-access/index.md).

## Directions

Execute the following search in [Resoto Shell](../../concepts/components/shell.md) to find all instances and volumes that are not tagged with both `owner` and `expiration` within 2 hours of creation:

```bash
> search is(instance,volume) and age > 2h and (tags.owner = null or tags.expiration = null)
```

## Related How-To Guides

- [How to Clean Up Untagged Resources](../cleanup/clean-up-expired-resources.md)

## Further Reading

- [Resource Tagging](../../concepts/resource-management/tagging.md)
- [Search](../../concepts/search/index.md)
- [Command-Line Interface](../../reference/cli/index.md)
