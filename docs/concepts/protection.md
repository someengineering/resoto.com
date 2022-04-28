# Resource Protection

Resoto has a concept of resource protection. The idea being that some resources in an account are important and should never be touched by Resoto even if a user, a plugin or an automated job has flagged them for cleanup.

Think of a CI account where most of the resources are not important and could be deleted except for the CI server itself. In this case you could protect the CI server from accidental deletion.

## Protecting resources

To protect a resource simply perform a search and pipe the result to `| protect`.

```
> search is(aws_ec2_instance) and name = jenkins-master | protect "Jenkins Master"
```

A better way of automatically protecting resources is to use the [`Protector`](components/plugins/protector.md) plugin or by running a job.

## Finding protected resources

```
> search /metadata.protected = true
```

## Unprotecting a resource

By piping a resource to `| set_metadata protected=false` the resource will be unprotected.

Example:

```
> search name = jenkins-master | set_metadata protected=false
```
