---
sidebar_position: 2
sidebar_label: with Clause
---

# `with` Clause

There are certain scenarios, where nodes need to be selected that have defined relationships and position in the graph without selecting the related nodes.

:::tip Example

Let's say we want to select all ALB target groups where there is no EC2 instance using the ALB.

```bash
    query is(aws_alb_target_group) with (empty, <-- is(aws_ec2_instance))
```

1. The `is(aws_alb_target_group)` part selects all aws_alb_target_groups.
2. The `with` part filters this list by ensuring a defined graph structure.
3. The defined graph structure is described by `(empty, <-- is(aws_ec2_instance))` and says:
   - traverse the graph inbound and filter all aws_ec2_instances
   - count the resulting nodes
   - select the aws_alb_target_group if there are no resulting nodes for this node
   - the result will not have any data from the graph traversal of the with clause

:::

The `with` clause allows for the three forms below.

## No Match

```bash
<filter> with (empty, <navigation> [filter])
```

The first filter will select elements. With every element a graph traversal is done following the navigation and filter in the with clause. No result is allowed in order to select the node.

## Match Any

```bash
<filter> with (any, <navigation> [filter])
```

Same as the `empty` case with the difference: the `with` clause needs to select at least one matching node in order to select the filtered node.

## Match Exact Count

```bash
<filter> with (count==3, <navigation> [filter])
```

Same as the `empty` case with the difference: the with clause needs to select the specified amount of matching nodes in order to select the filtered node.

:::note

The `with` clause can be nested.

Inside a with clause, you can use another with clause for nested expectations. The outermost element is filtered only if the outermost with clause holds, which includes that all inner with clauses have to match as well.

This is a powerful construct to define queries to match a defined graph structure or to select nodes which are not in a predefined graph structure.

:::
