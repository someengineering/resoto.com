---
authors: [lukas]
tags: [metrics, graph, aggregation]
---

# 1. Collect , 2. Aggregate , 3. ..., 4. Profit!

## Cloud Infrastructure Metrics

Let's begin with a question: At this very moment, do you know how many compute instances are running in your infrastructure and what you are paying for them?

If the answer is "No, not exactly", then my next question would be: Why not? Compute and storage are typically the most expensive items on your cloud bill. Compute and storage are also the most critical pieces of infrastructure for most businesses.

With Resoto we give you a picture of the current state of your cloud infrastructure. You can search that state and have Resoto automatically react to state changes. Resoto also lets you [aggregate this data](https://resoto.com/blog/2022/03/03/aggregating-search-data) as my Co-Founder Matthias explained in [his March Blog post](https://resoto.com/blog/2022/03/03/aggregating-search-data).

Building on that knowledge, we can take the aggregated data and ingest it into a time series database like Prometheus. We can then use this information to build diagrams to for example show the evolution of cloud resources like compute instances and storage over time. We can also [alert on trends](https://prometheus.io/docs/alerting/latest/alertmanager/), like if we are going to run out of quota or about to hit a spend limit.

![Metrics Overview](img/metrics_overview.png)

Resoto comes with a handy dandy metrics component called [Resoto Metrics](https://resoto.com/docs/concepts/components/metrics) that does just that. It takes aggregation results and exports them to [Prometheus](https://prometheus.io/). In this post we will show you how to use Resoto's metrics component to build a simple metrics dashboard using Resoto Metrics, Prometheus and Grafana.

<!--truncate-->

## Getting Started

If you are new to Resoto, [start the Resoto stack](https://resoto.com/docs/getting-started/installing-with-docker) and [configure it to collect some of your cloud accounts](https://resoto.com/docs/getting-started/configuring-resoto#configuring-cloud-providers).

To checkout the Resoto Metrics generated data open [`https://localhost:9955/metrics`](https://localhost:9955/metrics) in your browser (replacing `localhost` with the IP address or hostname of the machine where `resotometrics` is running). This should show an output similar to this:

![List of metrics](img/resotometrics_browser.png)

That is the raw metrics data Prometheus will ingest. If you are using our Docker stack you do not have to do anything, Prometheus is already pre-configured. If you are using your own Prometheus installation, configure it to scrape this metrics endpoint. The config will look something like this:

```yml title="prometheus.yml"
scrape_configs:
  - job_name: "resotometrics"
    scheme: https
    tls_config:
      insecure_skip_verify: true
    static_configs:
      - targets: ["localhost:9955"]
```

Instead of skipping verification of the TLS certificate, you can also [download the Resoto CA certificate](https://resoto.com/docs/concepts/security#retrieving-and-validating-the-ca-certificate) and [configure Prometheus to use it](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#tls_config).

## Querying a Metric

Open up your Prometheus installation (in our Docker stack it is running at [`https://localhost:9090`](https://localhost:9090)) and you should see the following:

![Empty Prometheus](img/empty_prometheus.png)

Let's start with a very simple expression:

```
resoto_instances_total
```

That's it, that's the query. If you have any instances collected in Resoto the output will look something like this:

![Prometheus listing metrics](img/prometheus_metrics_list.png)

Here is one of those metrics from the list:

```
resoto_instances_total{cloud="aws", account="eng-production", region="us-west-2", status="running", type="m5.xlarge", instance="localhost:9955", job="resotometrics"} 17
```

The key=value pairs inside those curly brackets are called labels. We can filter by label. Update the query to:

```
resoto_instances_total{status="running"}
```

Now we are only seeing compute instances that we are actually paying for at the moment.This information is a bit more interesting, but we could get the same from within the Resoto Shell. What would be really interesting, is how the number of compute instances has changed over the last week or two.

Click on the `Graph` tab, choose a `2w` period and click the `Show stacked graph` button. We are getting closer to what we'd like to see. But what are these speckles? Why aren't we seeing solid lines?

![Prometheus raw graph data](img/prometheus_raw_graph.png)

By default Resoto collects data once per hour. Let's tell Prometheus to create an average over time over one hour by changing the query to:

```
avg_over_time(resoto_instances_total{status="running"}[1h])
```

![Prometheus summed metrics](img/prometheus_avg_over_time.png)

Good, the data points are connected and averaged over time. However the amount of labels is a bit overwhelming. Right now we are seeing one stacked chart per unique label combination. Let's try to reduce the amount of labels by summing them:

```
sum(avg_over_time(resoto_instances_total{status="running"}[1h]))
```

![Prometheus summed metrics](img/prometheus_summed_metrics.png)

Nice, we see how the number of compute instances has changed over time. However we lost absolutely all labels. No more accounts, region and instance type information. To get some information back, let's group the summed up averages by account.

```
sum(avg_over_time(resoto_instances_total{status="running"}[1h])) by (account)
```

![Prometheus summed metrics by account](img/prometheus_summed_metrics_by_account.png)

Neat, we see how the number of compute instances has changed over time for each account.

Want to see how storage has changed over time? Just change `resoto_instances_total` to `resoto_volume_bytes`. Want to see $$$ spent per hour? `resoto_instances_hourly_cost_estimate` is the metric you are looking for.

## How Metrics are made

Now Prometheus' Web UI will provide syntax help and auto-complete for the available metric names. However you might be wondering, how are you supposed to know which metrics exist? How do you know what other metrics there are and where something like `resoto_instances_total` is coming from? Glad you asked. All Metrics are defined in the `resoto.metrics` [config](https://resoto.com/docs/getting-started/configuring-resoto). Within [Resoto Shell (`resh`)](https://resoto.com/docs/concepts/components/shell) run:

```
> config edit resoto.metrics
```

```yaml
resotometrics:
  metrics:
...
...
    instances_total:
      # Metric help text
      help: 'Number of Instances'
      # Aggregation search to run
      search: 'aggregate(/ancestors.cloud.reported.name as cloud, /ancestors.account.reported.name as account, /ancestors.region.reported.name as region, instance_type as type, instance_status as status: sum(1) as instances_total): is(instance)'
      # Type of metric (gauge or counter)
      type: 'gauge'
...
...
```

Here you can add your own metrics. This config can be updated at runtime. Next time the `metrics` [workflow](https://resoto.com/docs/concepts/automation/workflow) is run (`workflow run metrics`) Resoto Metrics will generate the new metric and provide it to Prometheus.

## WIP I was promised a Metrics Dashboard! WIP

So now we have learned how to get metrics from Resoto into Prometheus, how to query them and how to create new ones. But what about the dashboard?

Right, fasten your seatbelt. This will go fast.

1. Run the Grafana Docker container

```
$ docker run -d -p 3000:3000 -v grafana-data:/var/lib/grafana -v grafana-etc:/etc/grafana grafana/grafana-oss
```

2. Open up the Grafana UI (e.g. [http://localhost:3000](http://localhost:3000))

3. Login as `admin` with password `admin` and set a new password.

4. Go to Settings > Data Sources > Add Data Source > Prometheus

5. In the URL field, enter the Prometheus URL e.g. `http://tsdb.docker.internal:9090`

![Add Prometheus Data Source to Grafana](img/grafana_setup1.png)

6. Scroll down and click `Save & test`. Make sure it replies with "Data source is working".

![Save Data Source](img/grafana_setup2.png)

7. On the left click on the `+` button and select `Create Dashboard`.

8. On the top click on `Settings` > `Variables` and `Add variable`.

![Add Variable](img/grafana_add_variable.png)

9. As Name choose `Cloud`, as Query enter `label_values(cloud)` and select `Multi-value`. Make sure that the `Preview of values` shows the available clouds and click `Update`.

![Configure Variable](img/grafana_configure_variable.png)

10. Repeat Step 9 for "Account/account" and "Region/region".

11. Hit `ESC` and on the top of the page click on `Add a new panel`.

![Add a new panel](img/grafana_add_new_panel.png)

12. On the right in `Panel Options` enter Title `Instances Total`.

13.

```
sum(avg_over_time(resoto_instances_total{cloud=~"$cloud", region=~"$region", account=~"$account", status="running"}[$__interval]))
```
