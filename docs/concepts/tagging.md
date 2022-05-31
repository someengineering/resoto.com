# Tagging

Resoto is able to create, update, and delete tags for resources that support tags.

Tags are key-value pairs that allow for the addition of arbitrary metadata to a resource. In clouds where tags are a list of strings, Resoto encodes given values into the string using double dashes.

To perform tagging, simply pipe the result of a [search](./search/index.md) into [the `tag` command](../reference/cli/tag/index.md).

## Concept

Tags are a useful way to organize and categorize resources. Resoto allows for very efficient tagging and tag validation of thousands of resources. You could have a tag called `owner` indicating the owner of the resource.

```bash title="Tag resource with an owner"
> search is(aws_ec2_instance) and name = jenkins-master | tag update owner jenkins
```

```bash title="Find resources that are missing the owner tag"
> search tags.owner = null
```

```bash title="Tag all resources missing the owner tag with a default owner"
> search tags.owner = null | tag update owner "default owner"
```

```bash title="Tag all instances missing the owner tag with an owner that corresponds to the account name"
> search is(instance) and tags.owner = null | tag update owner {/ancestors.account.reported.name}
```

## How Tagging Is Performed

When a resource is tagged on the [Resoto Shell](./components/shell.md), [Resoto Core](./components/core.md) creates a tagging task that is dispatched to a [Worker](./components/worker.md).

By default the `tag` command waits for that task to complete and returns the result of the tagging operation (success/failure). If the `--nowait` flag is given, the command will return immediately.
