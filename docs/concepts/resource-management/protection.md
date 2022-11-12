---
sidebar_label: Protection
---

# Resource Protection

Some resources may be important and should never be touched by Resoto even if a user, plugin, or automated job flags them for cleanup.

Imagine a CI account where most of the resources are not important and could be deleted, aside from the CI server itself. In this case, you could protect the CI server from accidental deletion.

## Protecting Resources

To protect a resource, simply perform a search and pipe the result to [`protect`](../../reference/cli/action-commands/protect.md).

```bash
> search is(aws_ec2_instance) and name = jenkins-master | protect "Jenkins Master"
```

A better way of automatically protecting resources is to use the [`protector` plugin](../components/plugins/protector.md) or by running a job.

## Finding Protected Resources

```bash
> search /metadata.protected = true
```

## Unprotecting a Resource

Pipe a resource to [`set_metadata protected=false`](../../reference/cli/action-commands/set_metadata.md) to unprotect a resource.

Example:

```bash
> search name = jenkins-master | set_metadata protected=false
```
