---
sidebar_label: role delete
---

# `user role delete` Command

:::note

Resoto has user management built-in but is lacking access control. Different roles do not have any effect yet!

:::

The `user role delete <email> <role>` command allows to remove a role from an existing user.

## Usage

```bash
> user role delete <email> <role>
```

## Examples

```bash
> user role delete matthias@some.engineering admin
# highlight-start
​email: matthias@some.engineering
​ fullname: Matthias Veit
​ roles:
​ - read-only
# highlight-end
```
