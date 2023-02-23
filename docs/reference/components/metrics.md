---
sidebar_position: 4
sidebar_label: Metrics
---

# Resoto Metrics

[Resoto Metrics (`resotometrics`)](https://github.com/someengineering/resoto/tree/main/resotometrics) takes [Resoto Core](./core.md) graph data and runs aggregation functions on the data.

The aggregated metrics are then exposed in a [Prometheus](https://prometheus.io)-compatible format.

```bash title="Resoto Metrics Docker image"
somecr.io/someengineering/resotometrics:{{imageTag}}
```

## Usage

Once started `resotometrics` will register for `generate_metrics` core events. When such an event is received it will generate Resoto metrics and provide them at the `/metrics` endpoint.

A Prometheus config could look like this:

```yaml
scrape_configs:
  - job_name: "resotometrics"
    static_configs:
      - targets: ["localhost:9955"]
```

### Options

| Option                                               | Description                         | Default                  |
| ---------------------------------------------------- | ----------------------------------- | ------------------------ |
| `--subscriber-id <SUBSCRIBER_ID>`                    | Unique subscriber ID                | `resoto.worker`          |
| `--psk <PSK>`                                        | Pre-shared key                      |                          |
| `--verbose`, `-v`                                    | Verbose logging                     |                          |
| `--quiet`                                            | Only log errors                     |                          |
| `--resotocore-uri <RESOTOCORE_URI>`                  | [Resoto Core](./core.md) URI        | `https://localhost:8900` |
| `--override CONFIG_OVERRIDE [<CONFIG_OVERRIDE> ...]` | Override config attribute(s)        |                          |
| `--ca-cert <CA_CERT>`                                | Path to custom CA certificate file  |                          |
| `--cert <CERT>`                                      | Path to custom certificate file     |                          |
| `--cert-key <CERT_KEY>`                              | Path to custom certificate key file |                          |
| `--cert-key-pass <CERT_KEY_PASS>`                    | Passphrase for certificate key file |                          |
| `--no-verify-certs`                                  | Turn off certificate verification   |                          |

### Environment Variables

CLI options can also be set via environment variables. The environment variable name is the same as the option name, but in uppercase with the prefix `RESOTOMETRICS_` and dashes replaced by underscores.

For example, `--verbose` would become `RESOTOMETRICS_VERBOSE=true`.

## Details

Resoto Core supports aggregated queries to produce metrics. The common library `resotolib` defines a number of base resources that are common to a lot of cloud proviers, like say compute instances, subnets, routers, load balancers, and so on. All of those ship with a standard set of metrics specific to each resource.

For example, instances have CPU cores and memory, so they define default metrics for those attributes. Right now metrics are hard coded and read from the base resources, but future versions of Resoto will allow you to define your own metrics in `resotocore` and have `resotometrics` export them.

## Example

Enter the following command into Resoto Shell:

```bash
> search aggregate(/ancestors.cloud.reported.name as cloud, /ancestors.account.reported.name as account, /ancestors.region.reported.name as region, instance_type as type : sum(1) as instances_total, sum(instance_cores) as cores_total, sum(instance_memory*1024*1024*1024) as memory_bytes): is(instance)
```

If your graph contains any compute instances the resulting output will look something like this

```yaml
---
group:
  cloud: aws
  account: someengineering-platform
  region: us-west-2
  type: m5.2xlarge
instances_total: 6
cores_total: 24
memory_bytes: 96636764160
---
group:
  cloud: aws
  account: someengineering-platform
  region: us-west-2
  type: m5.xlarge
instances_total: 8
cores_total: 64
memory_bytes: 257698037760
---
group:
  cloud: gcp
  account: someengineering-dev
  region: us-west1
  type: n1-standard-4
instances_total: 12
cores_total: 48
memory_bytes: 193273528320
```

Let us dissect the above command:

- `aggregate(/ancestors.cloud.reported.name as cloud, /ancestors.account.reported.name as account, /ancestors.region.reported.name as region, instance_type as type` aggregate the instance metrics by `cloud`, `account`, and `region` name as well as `instance_type` (think `GROUP_BY` in SQL).
- `sum(1) as instances_total, sum(instance_cores) as cores_total, sum(instance_memory*1024*1024*1024) as memory_bytes):` sum up the total number of instances, number of instance cores and memory. The later is stored in GB and here we convert it to bytes as is customary in Prometheus exporters.
- `is(instance)` search all the resources that inherit from base kind `instance`. This would be compute instances like `aws_ec2_instance` or `gcp_instance`.

### Taking It One Step Further

```bash
> search aggregate(/ancestors.cloud.reported.name as cloud, /ancestors.account.reported.name as account, /ancestors.region.reported.name as region, instance_type as type : sum(/ancestors.instance_type.reported.ondemand_cost) as instances_hourly_cost_estimate): is(instance) and instance_status = running
```

Outputs something like

```yaml
---
group:
  cloud: gcp
  account: maestro-229419
  region: us-central1
  type: n1-standard-4
instances_hourly_cost_estimate: 0.949995
```

What did we do here? We told Resoto to find all resource of type compute instance (`is(instance)`) with a status of `running` and then merge the result with ancestors (parents and parent parents) of type `cloud`, `account`, `region` and now also `instance_type`.

Let us look at two things here. First, in the previous example we already aggregated by `instance_type`. However this was the string attribute called `instance_type` that is part of every instance resource and contains strings like `m5.xlarge` (AWS) or `n1-standard-4` (GCP).

Example

```
> search is(instance) | tail -1 | format {kind} {name} {instance_type}
# highlight-next-line
aws_ec2_instance i-039e06bb2539e5484 t2.micro
```

What we did now was ask Resoto to go up the graph and find the directly connected resource of kind `instance_type`.

An `instance_type` resource looks something like this

```bash
> search is(instance_type) | tail -1 | dump
​reported:
​  kind: aws_ec2_instance_type
​  id: t2.micro
​  tags: {}
​  name: t2.micro
​  instance_type: t2.micro
​  instance_cores: 1
​  instance_memory: 1
​  ondemand_cost: 0.0116
​  ctime: '2021-09-28T13:10:08Z'
```

As you can see, the instance type resource has a float attribute called `ondemand_cost` which is the hourly cost a cloud provider charges for this particular type of compute instance. In our aggregation query we now sum up the hourly cost of all currently running compute instances and export them as a metric named `instances_hourly_cost_estimate`. If we now export this metric into a timeseries DB like Prometheus we are able to plot our instance cost over time.
