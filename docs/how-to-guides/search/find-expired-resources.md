---
sidebar_label: Find Expired Resources
sidebar_custom_props:
  tags: [AWS, GCP, DigitalOcean, Kubernetes]
---

# How to Find Expired Resources

A resource can be tagged with an [expiration](../../concepts/resource-management/expiration.md) tag that instructs Resoto to clean it up at a defined time. This can serve as a safety net for when a CI job fails or the IaC tool aborts halfway through its run, or even as the primary means of managing resource lifecycles.

Resoto calculates the expiration time of a resource based on its expiration tag and stores the result as the value of the `metadata.expires` property.

## Prerequisites

This guide assumes that you have already [installed](../../getting-started/install-resoto/index.md) and configured Resoto to [collect your cloud resources](../../getting-started/configure-cloud-provider-access/index.md).

## Directions

Execute the following search in [Resoto Shell](../../concepts/components/shell.md) to list all expired resources:

```bash
> search /metadata.expires < "@utc@"
```

:::note

This search finds all resources that have an `expires` property that is less than the current time. Resoto automatically expands `@utc@` to the current date and time. See `help placeholders` for more information on placeholder strings.

:::

## Related How-To Guides

- [How to Clean Up Expired Resources](../cleanup/clean-up-expired-resources.md)

## Further Reading

- [Resource Expiration](../../concepts/resource-management/expiration.md)
- [Search](../../concepts/search/index.md)
- [Command-Line Interface](../../reference/cli/index.md)
