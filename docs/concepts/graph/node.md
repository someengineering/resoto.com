---
sidebar_label: Node
sidebar_position: 1
---

# Graph Node

A graph node is a JSON document with a well-defined structure and the following top-level properties:

```json
{
  "id": "xxx",
  "reported": { ... },
  "desired": { ... },
  "metadata": { ... },
  "ancestors": { ... }
}
```

Each graph node always has an `id` that is a unique ID created by Resoto.

The `reported` section contains data reported from the specific cloud provider. The content and schema of the `reported` section is defined by the cloud provider and described formally in the :ref:`model`.

The `desired` section can be manipulated by users and tools to mark and trigger an intended change on the specific resource. Cleaning up a resource, for example, is done by setting `clean=true` in the desired section.

The `metadata` section contains additional data about the resource. This data is not from the cloud provider, but added by the Resoto toolchain.

The `ancestors` section contains information about specific ancestors of a node. It makes it very easy to see something like provider, account, region and zone of a resource.

## Kind

Every node has a kind, which describes the structure of this node.

The model supports inheritance: every specific type is also an instance of every more general type of this specific type.

Take a graph node with a type of `aws_ec2_instance` as an example. This type is subtype of the types: `instance`, `aws_resource` and `resource`.
