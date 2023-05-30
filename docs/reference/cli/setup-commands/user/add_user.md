---
sidebar_label: user add
---

# `user add` Command

:::note

Resoto has user management built-in but is lacking access control. Different roles do not have any effect yet!

:::

The `user add <email> --fullname <name> --password <secret> --role <role> --role <role>` command allows to add a user to Resoto.

## Usage

```bash
user add <email> --fullname <name> --password <secret> --role <role> --role <role>
```

### Parameters

| Parameter    | Description                                                                     | Required? | Default Value |
| ------------ | ------------------------------------------------------------------------------- | --------- | ------------- |
| `email`      | The email address of the user to add.                                           | ✔️        | N/A           |
| `--fullname` | The full name of the user.                                                      | ✔️        | N/A           |
| `--password` | The password of the user.                                                       | ✔️        | N/A           |
| `--role`     | The role of the user. Can be defined multiple times for every role of the user. | ️         | N/A           |

## Examples

```bash
> users add matthias@some.engineering --fullname "Matthias Veit" --role read-only --password awTJxB4vHLQ-VVisN!tc4h9_!
email: matthias@some.engineering
 fullname: Matthias Veit
 roles:
 - read-only
```
