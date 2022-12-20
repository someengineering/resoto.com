---
authors: [lukas]
tags: [cloud, sql, cloud2sql, postgresql, mysql, snowflake, parquet]
---

# Installing cloud2sql

## Installation

To install cloud2sql all you need is Python 3.9 or newer. Create a new virtual environment and install the package using

```
pip3 install --user cloud2sql[all]
```

If you only require support for a specific database, instead of `cloud2sql[all]` you can choose between `cloud2sql[snowflake]`, `cloud2sql[parquet]`, `cloud2sql[postgresql]`, `cloud2sql[mysql]`.

## Configuration

cloud2sql supports all sources Resoto supports. By default it ships with AWS, Google Cloud, DigitalOcean and Kubernetes source plugins pre-installed.

In this example we are going to configure AWS and export the data to a local SQLite database file.

For authentication we have all options that aws-cli supports. You can either export AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY or create a profile in your aws config file and export AWS_PROFILE.

Next let's load some AWS data into a local SQLite database file. Create a file `myconfig.yaml` with the following content:

```title="myconfig.yaml"
sources:
  aws:
destinations:
  sqlite:
    database: resoto.db
```

This tells cloud2sql to load the AWS collector. Within the aws section there could be additional configuration options, but they are all optional.

Look at [the config template](https://github.com/someengineering/cloud2sql/blob/main/config-template.yaml) for a list of all supported config options.

:::tip

When collecting multiple accounts the `role` and `scrape_org` options make cloud2sql fetch the list of all organization accounts and specify which role to assume.

The option `account_pool_size` controls the number of accounts that are being collected in parallel. Increasing the value uses more CPU cores and memory but also makes the collection of multiple accounts finish faster.

:::

## Resource Collection

Now run cloud2sql using

```
cloud2sql --config myconfig.yaml
```

You are going to see output similar to this:

```
(venv) minimi:cloud2sql lukas$ cloud2sql --config myconfig.yml
Progress
└── aws
    └── someengineering-production (434236089377)
        ├── 🔄 ap-northeast-1 in_progress
        ├── 🔄 ap-northeast-2 in_progress
        ├── 🔄 ap-northeast-3 in_progress
        ├── 🔄 ap-south-1 in_progress
        ├── 🔄 ap-southeast-1 in_progress
        ├── 🔄 ap-southeast-2 in_progress
        ├── 🔄 ca-central-1 in_progress
        ├── ✅ eu-central-1 done
        ├── ✅ eu-north-1 done
        ├── ✅ eu-west-1 done
        ├── ✅ eu-west-2 done
        ├── ✅ eu-west-3 done
        ├── ✅ global done
        ├── 🔄 sa-east-1 in_progress
        ├── 🔄 us-east-1 in_progress
        ├── 🔄 us-east-2 in_progress
        ├── 🔄 us-west-1 in_progress
        └── 🔄 us-west-2 in_progress
```

That's it! After a couple of minutes, when the collection is done, you will have a copy of your cloud infrastructure in the file resoto.db.

## Exploration

Now let's open the sqlite database we just created using the command.

```
​​sqlite3 resoto.db
```

:::tip

If the sqlite3 command is not already installed on your machine, the package name in most distributions as well as homebrew (MacOS) and Chocolatey (Windows) is sqlite or sqlite3.

:::

Using the `.tables` command lists all the tables that were created during cloud2sql's collect run.

Use the `.schema` command to look at a table's fields.

For instance, if you have any IAM server certificates we can list the schema of the aws_iam_server_certificate table.

```
sqlite> .schema aws_iam_server_certificate
CREATE TABLE IF NOT EXISTS "aws_iam_server_certificate" (
	_id VARCHAR NOT NULL,
	arn VARCHAR,
	path VARCHAR,
	id VARCHAR,
	tags JSON,
	name VARCHAR,
	ctime VARCHAR,
	mtime VARCHAR,
	atime VARCHAR,
	expires VARCHAR,
	dns_names JSON,
	sha1_fingerprint VARCHAR,
	cloud VARCHAR,
	account VARCHAR,
	region VARCHAR,
	zone VARCHAR,
	PRIMARY KEY (_id)
);
```

Next we could find all the certificates that are going to expire in the next 30 days.

```
sqlite> SELECT name, expires, account from aws_iam_server_certificate WHERE datetime(expires) BETWEEN datetime('now') AND datetime('now', 'start of day', '+30 day');
test-cert-2020-09-27T21-29-09-12586-07-00|2023-01-01T04:29:09Z|someengineering
```
