# Tagging in Resoto

Resoto is able to create, update and delete tags for resources that support it.

Tags are typically key/value pairs allowing the user to add arbitrary metadata to a resource. In clouds where tags are a list of strings Resoto encodes the value - if one was given - into the string using a double dash.

To perform tagging pipe the result of a search into [the `tag` command](../reference/cli/tag/index.md).

## The concept of tagging in Resoto

Tags are a useful way to organize and categorize resources. Resoto allows for very efficient tagging and tag validation of thousands of resources. You could have a tag called `owner` indicating the owner of the resource.

To tag a resource with an owner you could do something like this:

```
> search is(aws_ec2_instance) and name = jenkins-master | tag update owner jenkins
```

Finding resources that are missing the `owner` tag:

```
> search tags.owner = null
```

Tagging all resources that are missing the `owner` tag with a default owner:

```
> search tags.owner = null | tag update owner "default owner"
```

Tagging all instances that are missing the `owner` tag with a owner that corresponds to the account name:

```
> search is(instance) and tags.owner = null | tag update owner {/ancestors.account.reported.name}
```

## How tagging is performed

When a resource is tagged on the [Resoto Shell](components/shell.md), [Resoto Core](components/core.md) creates a tagging task that is dispatched to a [Worker](components/worker.md).

By default the `tag` command waits for that task to complete and returns the result of the tagging operation (success/failure). If the `--nowait` flag is given, the command will return immediately.
