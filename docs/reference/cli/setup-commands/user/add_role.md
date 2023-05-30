---
sidebar_label: role add
---

# `user role add` Command

:::note

Resoto has user management built-in but is lacking access control. Different roles do not have any effect yet!

:::

The `user role add <email> <role>` command allows to add a role to an existing user.

## Usage

```bash
> user role add <email> <role>
```

## Examples

```bash
> user role add matthias@some.engineering admin
# highlight-start
​email: matthias@some.engineering
​ fullname: Matthias Veit
​ roles:
​ - read-only
​ - admin
# highlight-end
```
