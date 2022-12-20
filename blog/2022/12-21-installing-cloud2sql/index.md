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

Use the `.schema` command to look at a table's fields. TODO: it is unfortunate that cloud2sql only creates tables that it finds resources for. That way instead of returning an empty result queries that target resources the user doesn't have produce an error.

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

TODO: anonymize data

```
sqlite> SELECT name, expires, account, region from aws_iam_server_certificate WHERE datetime(expires) BETWEEN datetime('now') AND datetime('now', 'start of day', '+30 day');
ext-gmann-cert-2020-09-27T21-29-09-076222-07-00|2023-01-01T04:29:09Z|eng-mesosphere-soak|global
gmann-cert-2020-09-27T21-29-09-12586-07-00|2023-01-01T04:29:09Z|eng-mesosphere-soak|global
int-gmann-cert-2020-09-27T21-29-09-186502-07-00|2023-01-01T04:29:09Z|eng-mesosphere-soak|global
ext-generic-dcos-it-0qNPcEXdQUvi-cert-2020-09-29T15-50-10-280858965Z|2023-01-02T15:50:10Z|eng-mesosphere-ci|global
ext-generic-dcos-it-8VXuMU8iCrHF-cert-2020-10-03T16-23-43-056914163Z|2023-01-06T16:23:43Z|eng-mesosphere-ci|global
ext-generic-dcos-it-elHWVPLz6Y9U-cert-2020-10-01T10-47-49-669678637Z|2023-01-04T10:47:49Z|eng-mesosphere-ci|global
ext-generic-dcos-it-gfDRGRYdqwCp-cert-2020-10-01T10-51-55-797459999Z|2023-01-04T10:51:55Z|eng-mesosphere-ci|global
```

TODO: Maybe the post should end here? Metabase is good for some screenshots but somebody using SQL likely already has a tool of choice to look at their data.

## Graphical exploration

Another fun thing to do is load the database into Metabase. If you have Docker installed run

```
docker run --rm -it -v $PWD/resoto.db:/resoto.db -p 3000:3000 --name metabase metabase/metabase
```

Next open up the WebUI at http://localhost:3000/. Fill in the setup wizard and in Step 3 select SQLite as your database and configure /resoto.db as the filename.
