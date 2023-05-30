---
sidebar_label: password
---

# `user password` Command

:::note

Resoto has user management built-in but is lacking access control. Different roles do not have any effect yet!

:::

The `user password <email> <password>` command allows to update the password of an existing user.

## Usage

```bash
> user password matthias@some.engineering awT
```

## Examples

```bash
> user password matthias@some.engineering awTJxB4vHLQ-VVisN!tc4h9_!
# highlight-start
​Password for matthias@some.engineering updated
# highlight-end
```
