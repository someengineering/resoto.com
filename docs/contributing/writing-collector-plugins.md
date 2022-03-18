---
sidebar_label: Documentation
---

# Writing collector plugins

Here we will try to understand what it takes to write a collector plugin.

## What is a Collector Plugin?

The collector plugin allows importing arbitrary resources into Resoto in a graph form. It is mainly used for collecting information about clouds and resources, but it is in no way limited to only that. You can collect literally everything which can be expressed as a graph, be it social media accounts, a software dependency tree, a network topology, steps for cooking your favorite food, etc.

Once the graph is collected and sent to resotocore, the power of resoto search syntax is at the tip of your fingers.

## Plugin interface

The plugin interface is defined by the following method:

```python
    def collect(self) -> None:
        """Collects all the Cloud Resources"""
        account_graph = collect_account()
        self.graph.merge(account_graph)

```

That's it. What usually happens in the `collect` method is:

1. An instance of a `Graph` class is created and then it is filled with cloud resources.
2. The graph is then merged with the plugin's internal graph.

After the graph is merged, it is ready to be processed by the resotoworker and sent to the resotocore.

## Typical structure of a resoto cloud resources graph

Usually, when a cloud is collected by a collector plugin, the graph will look like this:

1. The top-level node is the cloud itself. It is added by the collector plugin automatically.
2. Next level is account. For example, it might be an AWS account, a GCP project, a DigitalOcean team, etc.
3. Following comes the regions (if any). For example, it might be the US-East-1, US-West-1, etc.
4. The resources on the levels below would be cloud-specific.

## Collecting resources and merging them into the graph

Resoto uses a thin wrapper on top of [networkx](https://networkx.org/) to operate on graphs. The two most used methods in the wrapper are `add_resource` and `add_edge`. Keep in mind that there are two types of edges: a `default` edge and a `delete` edge. The default edges represent how resources relate to each other, e.g. an instance can be a child of a region, but not the other way. The delete edges define an order of deleting resources, e.g. an instance should be deleted before the volume can be deleted.

The goal of the plugin creators is to build the graph with resources using those methods. As an example, one can look at the DigitalOcean plugin and the Example plugin.

## Advice about writing a collector plugin

- Resource properties types MUST be globally unique. If there is a property `status: str` defined by some other plugin, and you add a property called `status: int`, the collection will fail. The reason for such behavior is that later all resource properties will be indexed for search, and having the same name across several plugins will make the search easier.
- Try to not introduce unique property names. Only do it in case the types are not compatible with the existing properties. Doing so will make searching for them later harder. E.g. use `status: str` instead of `plugin_name_resource_name_status: int`.
- Don't forget to call `sanitize(graph)` before checking its properties in tests. See the DigitalOcean plugin for an example.
