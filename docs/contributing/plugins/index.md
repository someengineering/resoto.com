---
sidebar_label: Collector Plugins
---

# Contributing to Collector Plugins

```mdx-code-block
import DocCardList from '@theme/DocCardList';
```

Collector plugins allow for importing of arbitrary resources into Resoto in graph form. The most common use case is to gather information about cloud accounts and/or resources. However, any data expressible is graph form can be collected—be it social media accounts, software dependency trees, network topology, steps for cooking your favorite food, etc.

Once the graph data is collected and sent to [Resoto Core](../../concepts/components/core.md), the power of Resoto's [search syntax](../../concepts/search/index.md) is at your fingertips.

Plugin source code lives in the [`plugins` directory within the `someengineering/resoto` repository on GitHub](https://github.com/someengineering/resoto/tree/main/plugins). Each plugin is maintained as separate project.

<DocCardList />

## Authoring Changes

Contributions are made via [pull requests to the GitHub repository](https://github.com/someengineering/resoto/pulls). You will first need to [fork](https://docs.github.com/get-started/quickstart/fork-a-repo) the repository.

Pull requests should target a single plugin. Please refer to the [Components contribution guide](../components.md) for details on how to clone the repository, set up a virtual environment, start Resoto, and submit your changes for review.

### Plugin Interface

The collector plugin interface is defined as follows:

```python
def collect(self) -> None:
  """Collects all the Cloud Resources"""
  account_graph = collect_account()
  self.graph.merge(account_graph)
```

The typical flow of the `collect` method is:

1. An instance of a `Graph` class is created and filled with cloud resources.
2. The graph is merged with the plugin's internal graph.

### Resource Graph Structure

Usually, the graph is structured as follows:

1. The top-level node is the cloud itself. It is added by the collector plugin automatically.
2. The next level is the account (e.g., an AWS account, GCP project, DigitalOcean team, etc.).
3. Where applicable, the following level is the region (e.g., US-East-1, US-West-1, etc.).
4. The remaining levels are cloud-specific resources.

### Merging Collected Resources

Resoto uses a thin wrapper on top of [NetworkX](https://networkx.org/) to operate on graphs. The two most used methods in the wrapper are `add_resource` and `add_edge`.

Keep in mind that there are two types of edges, `default` and `delete`.

- `default` edges represent how resources relate to each other—for example, a resource may be represented by a child node of a region node.
- `delete` edges define the order in which resources should be cleaned up, i.e. that an instance needs to be deleted before the volume can be deleted.

Please refer to the [example collector plugin](https://github.com/someengineering/resoto/tree/main/plugins/example_collector) for a model of how to implement this logic.

### Testing Plugins

To test a plugin, simply launch Resoto and trigger the collect action manually by executing `workflows run collect` in the [shell](../../concepts/components/shell.md). Once the collection is complete, you execute `search (<plugin_resource_type>)` to see the newly collected resources.

### Tips

- **Resource properties types must be globally unique.** For example, if there is a property `status: str` defined by some other plugin and you add a property `status: int`, the collection will fail. The reason for such behavior is that all resource properties are indexed for search.
- **Try to not introduce unique property names.** Only do it in event that types are not compatible with existing properties. For example, use `status: str` instead of `plugin_name_resource_name_status: int`.
- **Don't forget to call `sanitize(graph)` before checking its properties in tests.** Please refer to the [DigitalOcean plugin](https://github.com/someengineering/resoto/tree/main/plugins/digitalocean) as an example.
