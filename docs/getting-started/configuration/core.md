---
sidebar_label: Core
---

# Configuring Resoto Core

## Network Interfaces

For security reasons, [Resoto Core](../../concepts/components/core.md) only listens on the loopback interface by default. This can be changed via the `resotocore.api.web_hosts` option in the `resoto.core` configuration.

Execute the following command in [Resoto Shell](../../concepts/components/shell.md) to open the relevant configuration for editing:

```
> config edit resoto.core
```

```yaml title="Configuration to listen on all IPv6 and IPv4 interfaces"
resotocore:
  # API related properties.
  api:
    # TCP host(s) to bind on (default: ['localhost'])
    web_hosts:
      - '::'
      - '0.0.0.0'
    # TCP port to bind on (default: 8900)
    web_port: 8900
[...]
```

Alternatively, you can use the [`config set` command](../../reference/cli/configs/set.md):

```
> config set resoto.core resotocore.api.web_hosts=["::", "0.0.0.0"]
```

## TLS Certificate

Resoto attempts to find all local IP addresses and hostnames and add them to the subject alternative names (SAN) list of the x509 certificate. If your system has additional DNS names, you can add them to the SAN list via the `resotocore.api.host_certificate.san_dns_names` option in the `resoto.core` configuration.

Execute the following command in [Resoto Shell](../../concepts/components/shell.md) to open the relevant configuration for editing:

```
> config edit resoto.core
```

```yaml title="Configuration with additional DNS names on SAN list"
resotocore:
  # API related properties.
  api:
    [...]
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
  [...]
```
