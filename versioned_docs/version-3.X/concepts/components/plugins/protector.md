---
sidebar_label: protector
---

# `protector` Plugin

This plugin protects important resources from deletion by Resoto.

## Usage

In `resh` execute

```
> config edit resoto.worker
```

and find the following section

```
plugin_protector:
  # Configuration for the plugin
  # Format:
  #   cloud.id:
  #     account.id:
  #       region.id:
  #         kind:
  #           - resource.id
  config:
    example:
      Example Account:
        us-west:
          example_instance:
            - 'someInstance1'
  # Enable plugin?
  enabled: false
```

### Implementation details

Each Resoto resource has an attributed `/metadata.protected` which takes a boolean value. By default it is set to `false`. Each Resoto resource inherits BaseResource which contains two methods for cleaning up a resource, `cleanup()` and `delete()`. Both those methods will refuse to manipulate a resource once the `protected` attribute has been set to `true`. Meaning if a resource is marked as protected but has also been flagged for cleanup the cleanup will fail because protected resources cannot be deleted.
