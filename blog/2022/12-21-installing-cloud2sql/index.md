---
authors: [lukas]
tags: [cloud, sql, cloud2sql, postgresql, mysql, snowflake, parquet]
---

# Installing cloud2sql

```mdx-code-block
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
```

Welcome to our tutorial on installing and configuring [cloud2sql](https://cloud2sql.com). As mentioned in the [previous post](/blog/2022/12/20/integrating-cloud-data-into-existing-sql-workflows-with-cloud2sql), cloud2sql is a powerful tool based on [Resoto's](https://resoto.com/resoto) collector plugins, that allows users to collect data from various cloud infrastructure sources and export it directly to a database like [Snowflake](https://www.snowflake.com/), [PostgreSQL](https://www.postgresql.org/), [MariaDB](https://mariadb.org/) or [MySQL](https://www.mysql.com/) or write it as [Parquet](https://parquet.apache.org/), [SQLite](https://www.sqlite.org/) or [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) files for ingestion in your data lake.

In this post, we will guide you through the process of installing cloud2sql and demonstrate how to export data from AWS to a local SQLite database file.

Whether you are looking to integrate cloud data into your existing SQL workflows or simply want an easy way to access and analyze data from multiple cloud sources, cloud2sql is an excellent tool to consider. Let's get started!

![cloud2sql](./img/cloud2sql.gif)

<!--truncate-->

## Installation

To install cloud2sql all you need is Python 3.9 or newer. Create a new virtual environment and install the package using

```bash
$ pip3 install --user cloud2sql[all]
```

If you only require support for a specific database, instead of `cloud2sql[all]` you can choose between `cloud2sql[snowflake]`, `cloud2sql[parquet]`, `cloud2sql[postgresql]`, `cloud2sql[mysql]`.

## Configuration

cloud2sql supports all sources Resoto supports. By default it ships with AWS, Google Cloud, DigitalOcean and Kubernetes source plugins pre-installed.

The configuration file is a [YAML](https://yaml.org/spec/1.2.2/) file that specifies which sources to load from and which destinations to export the data to.

In this example we are going to configure AWS and export the data to a local SQLite database file.

For authentication we have all options that aws-cli supports. You can either export `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` or create a profile in your aws config file and export `AWS_PROFILE`.

Next let's load some AWS data into a local SQLite database file. Create a file `myconfig.yaml` with the following content:

```yaml title="myconfig.yaml"
sources:
  aws:
destinations:
  sqlite:
    database: resoto.db
```

This tells cloud2sql to load the AWS collector. Within the aws section there could be additional configuration options, but they are all optional.

<details>
<summary>More advanced configuration examples</summary>

<Tabs>
<TabItem value="awssnowflake" label="AWS, K8S & Snowflake">

```yaml
sources:
  aws:
    # IAM role name to assume
    role: ResotoAccess
    # List of AWS profiles to collect
    profiles: someengineering-production
    # List of AWS Regions to collect (null for all)
    region:
    - us-east-1
    - us-west-2
    - eu-central-1
    # Scrape the entire AWS organization
    scrape_org: true
    # Assume given role in current account
    assume_current: true
    # Do not scrape current account
    do_not_scrape_current: true
k8s:
    # Configure access to k8s clusters.
    # Structure:
    # - name: 'k8s-cluster-name'
    #   certificate_authority_data: 'CERT'
    #   server: 'https://k8s-cluster-server.example.com'
    #   token: 'TOKEN'
    configs: []
    # Configure access via kubeconfig files.
    # Structure:
    #   - path: "/path/to/kubeconfig"
    #     all_contexts: false
    #     contexts: ["context1", "context2"]
    config_files:
    - path: /path/to/kubeconfig
      all_contexts: true
destinations:
  snowflake:
    host: myorg-myaccount
    user: cloud2sql
    password: changeme
    database: cloud2sql/public
    args:
      warehouse: compute_wh
      role: accountadmin
```

</TabItem>
<TabItem value="gcppostgres" label="GCP & PostgreSQL">

```yaml
sources:
gcp:
  # GCP service account file(s)
  # Empty string to use the default service account e.g.:
  # service_account: [""]
  service_account:
  - /path/to/service-account1.json
  - /path/to/service-account2.json
destinations:
  posgresql:
    host: 127.0.0.1
    port: 5432
    user: postgres
    password: changeme
    database: cloud2sql
```

</TabItem>
<TabItem value="doparquet" label="DigitalOcean & Parquet">

```yaml
sources:
  digitalocean:
    # DigitalOcean API tokens for the teams to be collected
    api_tokens:
    - 'dop_v1_e5c759260e6a43f003f3b53e2cfec79cxxxxxxxxx'
destinations:
  file:
    path: /path/to/parquet/files/
    format: parquet
    batch_size: 100_000
```

</TabItem>
</Tabs>

</details>

Look at [the config template](https://github.com/someengineering/cloud2sql/blob/main/config-template.yaml) for a list of all supported config options.

:::tip

When collecting multiple accounts the `role` and `scrape_org` options make cloud2sql fetch the list of all organization accounts and specify which role to assume. Alternatively you can specify the list of accounts to collect using the `profiles` option if those profiles have been defined in your [aws-cli config file](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html).

The option `account_pool_size` controls the number of accounts that are being collected in parallel. Increasing the value uses more CPU cores and memory but also makes the collection of multiple accounts finish faster.

:::

## Resource Collection

Now run cloud2sql using

```bash
$ cloud2sql --config myconfig.yml
# highlight-start
​Progress
​└── aws
​    └── someengineering-production (434236089377)
​        ├── 🔄 ap-northeast-1 in_progress
​        ├── 🔄 ap-northeast-2 in_progress
​        ├── 🔄 ap-northeast-3 in_progress
​        ├── 🔄 ap-south-1 in_progress
​        ├── 🔄 ap-southeast-1 in_progress
​        ├── 🔄 ap-southeast-2 in_progress
​        ├── 🔄 ca-central-1 in_progress
​        ├── ✅ eu-central-1 done
​        ├── ✅ eu-north-1 done
​        ├── ✅ eu-west-1 done
​        ├── ✅ eu-west-2 done
​        ├── ✅ eu-west-3 done
​        ├── ✅ global done
​        ├── 🔄 sa-east-1 in_progress
​        ├── 🔄 us-east-1 in_progress
​        ├── 🔄 us-east-2 in_progress
​        ├── 🔄 us-west-1 in_progress
​        └── 🔄 us-west-2 in_progress
# highlight-end
```

That's it! After a couple of minutes, when the collection is done, you will have a copy of your cloud infrastructure in the file resoto.db.

## Exploration

Now let's open the sqlite database we just created using the command.

```bash
$ sqlite3 resoto.db
```

:::tip

If the sqlite3 command is not already installed on your machine, the package name in most Linux distributions as well as homebrew (MacOS) and Chocolatey (Windows) is `sqlite` or `sqlite3`.

:::

Using the `.tables` command lists all the tables that were created during cloud2sql's collect run.

Use the `.schema` command to look at a table's fields.

For instance, if you have any IAM server certificates we can list the schema of the aws_iam_server_certificate table.

```sql
> .schema aws_iam_server_certificate
# highlight-start
​CREATE TABLE IF NOT EXISTS "aws_iam_server_certificate" (
​	_id VARCHAR NOT NULL,
​	arn VARCHAR,
​	path VARCHAR,
​	id VARCHAR,
​	tags JSON,
​	name VARCHAR,
​	ctime VARCHAR,
​	mtime VARCHAR,
​	atime VARCHAR,
​	expires VARCHAR,
​	dns_names JSON,
​	sha1_fingerprint VARCHAR,
​	cloud VARCHAR,
​	account VARCHAR,
​	region VARCHAR,
​	zone VARCHAR,
​	PRIMARY KEY (_id)
​);
# highlight-end
```

Next we could find all the certificates that are going to expire in the next 30 days.

```sql
> SELECT name, expires, account from aws_iam_server_certificate WHERE datetime(expires) BETWEEN datetime('now') AND datetime('now', 'start of day', '+30 day');
# highlight-start
​test-cert-2020-09-27T21-29-09-12586-07-00|2023-01-01T04:29:09Z|someengineering
# highlight-end
```

You can find the full list of resources that are currently supported in the [Resoto documentation](/docs/reference/data-models).

## Conclusion

Now that you have a good understanding of how to install and configure [cloud2sql](https://cloud2sql.com), why not give it a try and see how it can help you streamline your cloud data management and analysis processes? Simply follow the steps outlined in this tutorial to get started, and feel free to reach out to us on [Discord](https://discord.gg/someengineering) if you have any questions or encounter any issues along the way. We're always happy to help!
