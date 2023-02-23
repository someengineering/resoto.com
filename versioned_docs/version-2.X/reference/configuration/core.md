---
sidebar_label: Core
---

# Resoto Core Configuration

## Network Interfaces

For security reasons, [Resoto Core](../components/core.md) only listens on the loopback interface by default. This can be changed via the `resotocore.api.web_hosts` option in the `resoto.core` configuration.

Execute the following command in [Resoto Shell](../components/shell.md) to open the relevant configuration for editing:

```bash
> config edit resoto.core
```

```yaml title="Configuration to listen on all IPv6 and IPv4 interfaces"
resotocore:
  ...
  # API related properties.
  api:
    ...
# highlight-start
    # TCP host(s) to bind on (default: ['localhost'])
    web_hosts:
      - '::'
      - '0.0.0.0'
    # TCP port to bind on (default: 8900)
    web_port: 8900
# highlight-end
...
```

Alternatively, you can use the [`config set` command](../cli/setup-commands/configs/set.md):

```bash
> config set resoto.core resotocore.api.web_hosts=["::", "0.0.0.0"]
```

## TLS Certificate

Resoto attempts to find all local IP addresses and hostnames and add them to the subject alternative names (SAN) list of the x509 certificate. If your system has additional DNS names, you can add them to the SAN list via the `resotocore.api.host_certificate.san_dns_names` option in the `resoto.core` configuration.

Execute the following command in [Resoto Shell](../components/shell.md) to open the relevant configuration for editing:

```bash
> config edit resoto.core
```

```yaml title="Configuration with additional DNS names on SAN list"
resotocore:
  ...
  # API related properties.
  api:
    ...
# highlight-start
    # The certificate configuration for this server.
    host_certificate:
      # The common name of the certificate
      common_name: 'some.engineering'
      # Include loopback in certificate
      include_loopback: true
      # List of DNS names to include in CSR
      san_dns_names:
        - 'some.engineering'
        - 'resoto.some.engineering'
        - '*.some.engineering'
      # List of IP addresses to include in CSR
      san_ip_addresses: []
# highlight-end
...
```

## Workflow Schedules

By default, the `collect_and_cleanup` workflow runs at the start of each hour. This setting can be configured using [standard cron syntax](https://en.wikipedia.org/wiki/Cron).

Execute the following command in [Resoto Shell](../components/shell.md) to open the relevant configuration for editing:

```bash
> config edit resoto.core
```

```yaml
resotocore:
  ...
  # Workflow related properties.
  workflows:
    ...
    collect_and_cleanup:
# highlight-start
      # Cron expression as schedule for the workflow to run.
      schedule: '0 * * * *'
# highlight-end
...
```

Alternatively, you can use the [`config set` command](../cli/setup-commands/configs/set.md):

```bash title="Configure the collect_and_cleanup workflow to run twice per hour"
> config set resoto.core resotocore.workflows.collect_and_cleanup.schedule="0,30 * * * *"
```
