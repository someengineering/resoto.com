---
sidebar_position: 2
sidebar_label: Traversals
---

# Search Traversals

`<--` traverses the graph inbound, `-->` traverses the graph outbound.

![Traversal Selectors Diagram](./img/graph_query_inout.png)

## Outbound

`-->` traverses the graph outbound to the next level.

:::tip Example

```bash title="Select AWS accounts and traverse the graph outbound"
> query is(aws_account) -->
```

This query would return a list of all matching regions.

![Outbound Traversal Example Query Diagram](./img/graph_query_outbound_example.png)

:::

## Inbound

`<--` traverses the graph inbound to the next level.

:::tip Example

```bash title="Select AWS EC2 instances, traverse the graph inbound, and filter to only return the aws_regions"
> query is(aws_ec2_instance) <-- is(aws_region)
```

![Inbound Traversal Example Query Diagram](./img/graph_query_inbound_example.png)

:::

## Including the Current Node

`-[0:1]->` traverses the graph outbound, starting from the current node **(0)** until the next level **(1)**. The result will contain the current node plus all nodes one level outbound. The same applies for inbound with this statement `<-[0:1]-`.

:::tip Example

```bash title="Return all resources "under" an aws_region together with the matching aws_region"
> query is(aws_region) -[0:1]->`
```

![Example Query Diagram](./img/graph_query_01.png)

:::

:::tip Example

```bash title="Return all aws_regions with name global, together with all accounts"
> query is(aws_region) and name==global <-[0:1]-
```

:::

## By Depth

### Range

`-[start:until]->` traverses the graph outbound starting from a user defined depth to a user defined depth. The graph will be traversed from the current node according to this specification. All matching nodes will be returned. The same applies for inbound traversals with `<-[start:until]-`.

![Traversal by Depth Diagram](./img/graph_query_startuntil.png)

:::tip Example

The following query answers the question, "Which instance profile is used for ec2 instances connected to an alb target group?"

```bash title="Select aws_alb_target_groups, traverse 2 levels inbound, and filter for aws_iam_instance_profiles"
> query is(aws_alb_target_groups) <-[2:2]- is(aws_iam_instance_profile)
```

:::

### One-Sided Range

`-[start:]->` traverses the graph outbound starting from a user defined depth to the leafs of the graph. The graph will be traversed from the current node according to this specification. All matching nodes will be returned. The same applies for inbound traversals with `<-[start:]-`.

.. admonition:: Example

`query is(aws_account) and name==sunshine -[0:]->`

This query will select the aws account with name `sunshine` and then select all nodes outbound to this node. This will select everything Resoto knows about nodes in this account.

### Bi-Directional

`<-[start:until]->` traverses the graph inbound and outbound starting from a user defined depth to a user defined depth. The graph will be traversed from the current node according to this specification. All matching nodes will be returned.

:::tip Example

```bash title="Select nodes with the name sunset connected on any depth to the AWS account"
> query name="sunset" and is(aws_account) <-[0:]->
```

:::

## Abbreviations

There are abbreviations for the most common traversal selectors.

| Abbreviated Selector | Unabbreviated Selector |
| -------------------- | ---------------------- |
| `-->`                | `-[1:1]->`             |
| `<--`                | `<-[1:1]-`             |
| `<-->`               | `<-[1:1]->`            |
| `<-[x]-`             | `<-[x:x]-`             |

:::tip Examples

| Abbreviated                    | Unabbreviated                    |
| ------------------------------ | -------------------------------- |
| `query is(aws_account) -->`    | `query is(aws_account) -[1:1]->` |
| `query is(aws_region) <-->`    | `query is(aws_region) <-[1:1]->` |
| `<-[x]-`                       | `<-[x:x]-`                       |
| `query is(aws_region) <-[3]->` | `query is(aws_region) <-[3:3]->` |

:::

## Commands

There are also commands to perform a traversal selection, to which input can be piped:

| Command                                               | Traversal Selector  |
| ----------------------------------------------------- | ------------------- |
| [`predecessors`](../../reference/cli/predecessors.md) | `<--` or `<-[1:1]-` |
| [`successors`](../../reference/cli/successors.md)     | `-->` or `-[1:1]->` |
| [`ancestors`](../../reference/cli/ancestors.md)       | `<-[1:]-`           |
| [`descendants`](../../reference/cli/descendants.md)   | `-[1:]->`           |
