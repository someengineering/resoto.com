# Telemetry

```mdx-code-block
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
```

Resoto collects anonymized telemetry data to inform product development. Telemetry data helps pinpoint roadblocks or issues, and also helps to identify how we can help users get more value out of Resoto.

All data collected is anonymous—**we do not capture or store any personally identifiable information (PII)**. There are no unique identifiers that allow us to correlate a Resoto installation back to an actual person.

## Types of Telemetry Data {#types}

There are currently two types of telemetry data collected.

### Usage Data

Collected usage data includes non-sensitive information on how and what Resoto features are used. This data helps us to measure product adoption and understand how Resoto is used, and informs development of new features. This data does not contain any sensitive or personally identifiable data.

The following are examples of metrics we currently monitor based on this usage data:

- Number of started [`resotocore`](../concepts/components/core.md) instances
- Number of long-running [`resotocore`](../concepts/components/core.md) instances (greater than one hour)
- Number of executed [CLI commands](./cli/README.md)
- Number of executed [jobs](../concepts/automation/job.md)

### Error Reporting

Error reporting aids us in identifying and fixing bugs or issues in Resoto. This reporting does not contain any sensitive or personally identifiable data.

## Disabling Telemetry Reporting {#disabling}

Telemetry can be disabled using the `--analytics-opt-out` command-line flag or the `RESOTOCORE_ANALYTICS_OPT_OUT` environment variable when starting [`resotocore`](../concepts/components/core.md):

<Tabs>
<TabItem value="docker-run" label="docker run Command">

```bash
docker run \
  --name resoto \
  [...]
  -e RESOTOCORE_ANALYTICS_OPT_OUT=true \
  [...]
  somecr.io/someengineering/resoto:{{latestRelease}}
```

</TabItem>
<TabItem value="docker-compose-all-in-one" label="Docker Compose (All-in-One Image)">

```yml title="docker-compose.yml"
[...]

services:
  resoto:
    image: somecr.io/someengineering/resoto:{{latestRelease}}
    container_name: resoto
    environment:
      [...]
      RESOTOCORE_ANALYTICS_OPT_OUT: 'true'
    [...]
```

</TabItem>
<TabItem value="docker-compose-components" label="Docker Compose (Separate Component Images)">

```yml title="docker-compose.yml"
[...]

services:
  [...]

  resotocore:
    image: somecr.io/someengineering/resotocore:{{latestRelease}}
    container_name: resotocore
    [...]
    environment:
      [...]
      RESOTOCORE_ANALYTICS_OPT_OUT: 'true'
    [...]

  [...]
```

</TabItem>
</Tabs>
