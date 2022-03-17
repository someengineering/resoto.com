---
sidebar_label: Documentation
---

# Writing collector plugins

Here we will try to understand what it takes to write a collector plugin.

## What is a Collector Plugin?

Collector plugin allows importing arbitrary resources into Resoto in a graph form. It is mainly used for collecting information about clouds and resources, but it is in no way limited to only that. You can collect literally everything which can be expressed as a graph, be it social media accounts, a software dependency tree, a network topology, steps for cooking you favourite food, etc.

Once the graph is collected and sent to resotocore, the power of resoto search syntax is at the tip of your fingers.

## Plugin interface

The plugin interface is defined by the following method:

```python
    def collect(self) -> None:
        """Collects all the Cloud Resources"""
        ...
```

That's it. What usually happens in the `collect` method is:

1. An instance of the `Graph` class is created and resources are added to it.
2. The graph then is merged with the plugin's internal graph.

After the graph is merged, it is ready to be processed by the resotoworker and sent to the resotocore.

## Typical structure of a resoto cloud resources graph

Usually, when a cloud is collected by a collector plugin, the graph will look like this:

1. The top level node is the cloud itself. It is added by the collector plugin automatically.
2. Next level is accounts. For example, it might be an AWS account, a GCP project, a DigitalOcean team, etc.
3. Following comes the regions (if any). For example, it might be the US-East-1, US-West-1, etc.
4. The resources on the levels below would be cloud specific.

## Collecting resources and merging them into the graph

Resoto uses a thin wrapper on top of networkx to operate on graphs. Two most used methods in the wrapper are `add_resource` and `add_edge`.

The goal of the plugin creators is to build the graph with resources using those methods. As an example, one can look at the DigitalOcean plugin and the Example plugin.

## Advice about writing a collector plugin

- Resource propreties' types MUST be globaly unique. That means it there is a property `status: str` defined by some other plugin, and you add a proprety called `status: int`, the collection will fail. The reason for such behaviour is that later all resource properties will be indexed for search, and having the same name across several plugins will make the search easier.
- Try to not introduce unique proprety names. Only do it in case the types are not compatible with the existing propreties. Doing so will make searching them later harder. E.g. use `status: str` instead of `plugin_name_resource_name_status: int`.
- Don't forget to sanitize graph before checking it's properties in tests. See the DigitalOcean plugin for an example.
