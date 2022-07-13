# Telemetry

Resoto collects anonymized telemetry data to inform product development. Telemetry data helps pinpoint roadblocks or issues, and also helps to identify how we can help users get more value out of Resoto.

All data collected is anonymous—**we do not capture or store any personally identifiable information (PII)**. There are no unique identifiers that allow us to correlate a Resoto installation back to an actual person.

## Types of Telemetry Data {#types}

There are currently two types of telemetry data collected.

### Usage Data

Collected usage data includes non-sensitive information on how and what Resoto features are used. This data helps us to measure product adoption and understand how Resoto is used, and informs development of new features. This data does not contain any sensitive or personally identifiable data.

The following are examples of metrics we currently monitor based on this usage data:

- Number of started [`resotocore`](../concepts/components/core.md) instances
- Number of long-running [`resotocore`](../concepts/components/core.md) instances (greater than one hour)
- Number of executed [CLI commands](./cli/index.md)
- Number of executed [jobs](../concepts/automation/job.md)

### Error Reporting

Error reporting aids us in identifying and fixing bugs or issues in Resoto. This reporting does not contain any sensitive or personally identifiable data.

## Disabling Telemetry Reporting {#disabling}

Telemetry can be disabled via the `resotocore.runtime.usage_metrics` [Resoto Core configuration](./configuration/core.md) option.
