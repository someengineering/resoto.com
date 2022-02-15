# `query`

The `query` command allows you to search the graph using filters, traversals, and functions.

## Usage

```bash
query [--include-edges] [--explain] <query>
```

### Options

| Option            | Description                                      |
| ----------------- | ------------------------------------------------ |
| `--include-edges` | Return edges in addition to nodes                |
| `--explain`       | Instead of executing the query, analyze its cost |

### Parameters

| Parameter | Description      | Required? | Default Value |
| --------- | ---------------- | --------- | ------------- |
| `query`   | Query to execute | ✔️        | N/A           |

### Aliases

- `match`

## Examples

```bash title="Find accounts across all cloud providers"
> query is(account)
```

```bash title="Find all AWS accounts"
> query is(aws_account)
```

```bash title="Find all AWS accounts more than 2 weeks old"
> query is(aws_account) and age>2w
```

```bash title="Find all AWS accounts that are either older than 2 weeks or have more than 10 users"
> query is(aws_account) and (age>2w or users<10)
```

```bash title="Find 3 AWS accounts that are are either older than 2 weeks or have more than 10 users"
> query is(aws_account) and (age>2w or users>10) limit 3
```

```bash title="Find the 3 AWS accounts that are more than 2 weeks old with the greatest number of users"
> query is(aws_account) and age>2w sort users desc limit 3
```
