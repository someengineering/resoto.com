---
sidebar_position: 5
sidebar_label: Cleanup AWS CloudWatch Alarms
---

# Cleanup AWS CloudWatch Alarms

This plugin marks all orphaned AWS CloudWatch instance alarms for cleanup. I.e. alarms associated with an EC2 instance that no longer exists.

The following resources are currently being marked for cleanup

- Instance Alarms

## Usage

In `resh` execute

```
> config edit resoto.worker
```

and find the following section

```
plugin_cleanup_aws_alarms:
  # Dictionary of key cloud with list of account IDs for which the plugin should be active as value
  config:
    aws:
      - '1234567'
      - '567890'
  # Enable plugin?
  enabled: false
```
