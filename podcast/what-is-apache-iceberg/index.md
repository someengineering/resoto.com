---
date: 2022-01-12
authors:
  - lars
  - name: Jason Reid
    title: Co-Founder & Head of Product at Tabular
    url: https://linkedin.com/in/jasonreid
tags: [analytics]
image: ./img/banner-social.jpg
---

# Episode 14: What Is Apache Iceberg?

**[Apache Iceberg](https://iceberg.apache.org) is a new table format that offers both the simplicity of <abbr title="Structured Query Language">SQL</abbr> and separation of storage and compute.** The Iceberg table format works with any compute engine, so users are not limited to working with a single engine. Popular engines (e.g., [Spark](https://spark.apache.org), [Trino](https://trino.io), [Flink](https://flink.apache.org), and [Hive](https://hive.apache.org)) and modern cloud warehouses (e.g., [Snowflake](https://snowflake.com), [Redshift](https://aws.amazon.com/redshift), and [BigQuery](https://cloud.google.com/bigquery)) can work with Iceberg tables at the same time.

A table format is a layer that sits between the file format and database. Iceberg is an abstraction layer above file formats like [Parquet](https://parquet.apache.org), [Avro](https://avro.apache.org), and [<abbr title="Optimized Row Columnar">ORC</abbr>](https://orc.apache.org) born out of necessity at [Netflix](https://netflix.com). Like many other companies at the time, Netflix shifted from <abbr title="massively parallel processing">MPP</abbr> data warehouses to the [Hadoop](https://hadoop.apache.org) ecosystem in the 2010s. <abbr title="massively parallel processing">MPP</abbr> warehouses like [Teradata](https://teradata.com) were hitting scale limitations and becoming too expensive at Netflix's scale.

The Hadoop ecosystem abandoned the table abstraction layer in favor of scale. In Hadoop, we deal directly with file systems like [<abbr title="Hadoop Distributed File System">HDFS</abbr>](https://hadoop.apache.org/docs/r1.2.1/hdfs_design.html). The conventional wisdom at the time was that bringing compute to storage was easier than moving the data to compute. Hadoop scales compute and disk together, which turned out to be incredibly hard to manage in the on-premise world.

Early on, Netflix shifted to the cloud and started storing data in [Amazon S3](https://aws.amazon.com/s3) instead, which separated storage from compute. Snowflake, the cloud warehouse, also picked up on that principle, bringing back <abbr title="Structured Query Language">SQL</abbr> semantics and tables from "old" data warehouses.

Netflix wanted to separate storage/compute and <abbr title="Structured Query Language">SQL</abbr> table semantics. They wanted to add, remove, and rename columns without S3 paths. But rather than going with another proprietary vendor, Netflix wanted to stay in open source and open formats. And thus, Iceberg was developed and eventually donated to the [Apache Foundation](https://apache.org). Today, Iceberg is also in use at companies like [Apple](https://apple.com) and [LinkedIn](https://linkedin.com).

**[Tabular](https://tabular.io) commercializes Apache Iceberg.** Working with open-source Iceberg tables still requires understanding of object stores and distributed data processing engines and how various components interact with each other. Tabular lowers the bar for adoption and removes the heavy lifting.

[**Jason Reid**](https://linkedin.com/in/jasonreid) is a co-founder and heads Product at Tabular. In this episode, Jason walks us through the benefits of using an open table format like Iceberg and how it works with existing analytics infrastructure and tooling of the modern data stack like [dbt](../data-integration-with-dbt/index.md).

https://youtu.be/ya3JNFzVbWI
