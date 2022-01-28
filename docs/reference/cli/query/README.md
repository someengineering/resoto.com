# `query`

The `query` command allows you to define a search query to filter available nodes.

```bash title="Find accounts across all cloud providers"
$> query is(account)
```

```bash title="Find all AWS accounts"
$> query is(aws_account)
```

Multiple criteria can be combined with `and` and `or`:

```bash title="Find all AWS accounts more than 2 weeks old"
$> query is(aws_account) and age>2w
```

Precedence is defined using parentheses:

```bash title="Find all AWS accounts that are either older than 2 weeks or have more than 10 users"
$> query is(aws_account) and (age>2w or users<10)
```

By default, all resources that satisfy the defined criteria will be returned. However, it is possible to limit the number of results by specifying `limit`:

```bash title="Find 3 AWS accounts that are are either older than 2 weeks or have more than 10 users"
$> query is(aws_account) and (age>2w or users>10) limit 3
```

It is also possible to define the sort order using `sort`:

```bash title="Find the 3 AWS accounts that are more than 2 weeks old with the greatest number of users"
$> query is(aws_account) and age>2w sort users desc limit 3
```
