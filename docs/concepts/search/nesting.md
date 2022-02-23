---
sidebar_position: 4
sidebar_label: Merge nodes
---

# Merge Nodes via nested search

While it is possible to query and retrieve a filtered part of the graph, it is sometimes helpful to retrieve structural graph data as part of the node.

This approach merges multiple nodes in a graph into one node. This combined node can simplify processing the node.

![Example Merge Diagram](./img/merge_nodes.png)

The nested searches is executed for every node in the result. The result of the nested search is then merged with the original node data.

:::tip Example

Most cloud resources are maintained in an account. Accounts are modeled as [nodes](../graph/node.md) in Resoto.

Resources reference the region node, while the region node references the account node. In order to retrieve the account, the graph has to be traversed inbound from the resource node until the account node is found. While this is possible, it might be more convenient to get the account information as part of the node!

In this example, we query nodes of kind `volume`. For every element that is returned, a nested search is executed, which will traverse the graph inbound until it finds a node of kind `account`.

```bash
> query is(volume) { account: <-[0:]- is(account) } limit 1 | dump
// highlight-start
reported:
    .
    .
account:
    reported:
        .
        .
// highlight-end
```

The result of this nested search is merged with the volume node on root level under the name account.

The complete information about the account is then available as part of the volume node:

![Example Merge Diagram](./img/merge_nodes_1.png)

*Note*: If you interact with the CLI, you will notice, that the account (and cloud, region and zone) is displayed
automatically for every resource. The data is available in the `/ancestors` node section. 
:::

A nested search is a complete, standalone query and can use the features of any other query.

The result of a nested search is merged with the original node under the given merge name.

If the merge name is a simple literal, zero or one result of the nested search is expected. This also means, that the graph traversal of the nested search stops, when the first matching element is found.

If the expected result of the nested search is a list, than the merge name has to be defined with square brackets.

:::tip Example

The following query will traverse inbound on every element and collect all predecessors under the name `predecessors`).
Please note the square brackets in the name `predecessors[]` - which will tell the search engine to return all predecessors, not only the first one.
As a result the node is returned with a new property, which contains the list of all predecessors.
```bash
> query is(volume) { predecessors[]: <-- all } limit 1 | dump
// highlight-start
reported:
    .
    .
predecessors:
- reported:
    .
    .
- reported:
    .
    .
// highlight-end
```

:::

It is also possible to define multiple merge queries in one query statement.

:::tip Example

As a result every node that is returned has two additional properties: `account` holds the complete data of the account node,
as well `region`, which contains the related region node.
```bash
> query is(volume) { account: <-[0:]- is(account), region: <-[0:]- is(region) } limit 1 | dump
// highlight-start
reported:
    .
    .
account:
    reported:
        .
        .
region:
    reported:
        .
        .
// highlight-end
```

![Example Merge Diagram](./img/merge_nodes.png)


*Note*: If you interact with the CLI, you will notice, that the account and region (and cloud and zone) is displayed
automatically for every resource. The data is available in the `/ancestors` node section.
:::

A nested search can even be defined using nested searches:

```bash
> query = <pre_filter> { <merge_name_1>: <query>, .., <merge_name_n>: <query> } <post_filter>
```

:::note

Be aware that a nested search is executed for every node of the original query and might be expensive and time intensive to compute.

:::

## ancestors and descendants

Nested search criteria can be defined as complex as necessary.
We identified a rather simple case that is used very often: walk the hierarchy until you find a node of specific kind and merge it with the current node.
Prominent example: cloud, account, region and zone of every resource is modelled as parent node using the default edge type.
In order to retrieve the related information, you would need a nested merge query.

To simplify such common case, Resoto provides the `ancestors` and `descendants` section as part of every resource.
Assume we want to filter resources of a specific account by its identifier, we can simply add a filter expression like this: 

```bash
> query is(volume) and /ancestors/account/reported/id==dev limit 1
```

Let us clarify how this filter criteria needs to be interpreted:
- it starts with a `/`. Remember that Resoto interprets property path by default relative to the `reported` section.
  Since we want to access a property on the object root level, we need to prefix the path with a `/`.
- `ancestors` this part of the path defines the direction to traverse: `ancestors` will traverse inbound to all 
  ancestors of the current node, while `descendants` would traverse outbound to all descendants of the current node.
- `account` defines the kind of the node to look for. It is possible to define any other kind here: `account` is just an example. 
   Please note: the related node is purely selected by kind and no other criteria.
- `reported.id` defines the property path in the target node (here the account node). The path in this notation is always absolute. 
  This is the reason we have to write `reported.id` explicitly. 

It is possible to access every property of every parent or child resource that way. You can use this notation
everywhere you can define a property path: as filter, aggregation, with clause and in subsequent commands.
Resoto is clever enough to create nested merge queries on demand, when a property is defined that way.

Just for reference: the nested merge query that is added on demand looks like this:
```bash
> query is(volume) {/ancestors.account: <-[1:]- is(account)} /ancestors.account.reported.id==dev
```

### cloud, account, region, zone

Nested merge queries are powerful, and the shorthand notation using `/ancestors` or `/descendants` allows accessing
properties of any kind in the hierarchy easily.

To simplify life even further, Resoto already provides information as part of every resource node without any additional effort.
- `/ancestors/cloud` the cloud provider with reported `id` and `name`
- `/ancestors/account` the related account of the resource with reported `id` and `name`
- `/ancestors/region` the related region (if applicable) with reported `id` and `name`
- `/ancestors/zone` the related zone (if applicable) with reported `id` and `name`

We consider this data as highly relevant to provide it always, no matter which query has been performed.
The output on the CLI by default uses `list`, which always prints above data, if available.

Please note: the above data is resolved during import time and duplicated to every node. 
There is zero performance penalty using this data as filter, in aggregations or output.  








