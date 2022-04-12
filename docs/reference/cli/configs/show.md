---
sidebar_label: show
---

# `configs show`

The `configs show` command shows the specified configuration.

## Usage

```bash
configs show <id>
```

### Parameters

| Parameter | Description              | Required? | Default Value |
| --------- | ------------------------ | --------- | ------------- |
| `id`      | Configuration identifier | ✔️        | N/A           |


## Examples

```bash
> configs show resoto.core
resotocore:
  # API related properties.
  api:
    # The certificate configuration for this server.
    host_certificate:
      # The common name of the certificate
      common_name: resoto.domain.com
      # Include loopback in certificate
      include_loopback: true
      # List of DNS names to include in CSR
      san_dns_names: []
      # List of IP addresses to include in CSR
      san_ip_addresses: []
    # The url to the time series database. This path will be served under /tsdb/.
    tsdb_proxy_url: null
    # The directory where the UI is installed. This directory will be served under 
    ui_path: null
    # TCP host(s) to bind on (default: ['localhost'])
    web_hosts:
      - localhost
    # Web path root (default: /).
    # This should only be required, if you are running a proxy server, that is not able to handle a sub-path.
    web_path: /
    # TCP port to bind on (default: 8900)
    web_port: 8900
  # CLI related properties.
  cli:
    # Use this graph for CLI actions, if no graph is specified explicitly.
    default_graph: resoto
    # Use this graph section by default, if no section is specified.
    # Relative paths will be interpreted with respect to this section.
    default_section: reported
  # Properties for updating the graph.
  graph_update:
    # If a graph update takes longer than this duration, the update is aborted.
    abort_after_seconds: 14400
    # Max waiting time to complete a merge graph action.
    merge_max_wait_time_seconds: 3600
  # Runtime related properties.
  runtime:
    # Stop collecting analytics data.
    analytics_opt_out: false
    # Enable debug logging and exception tracing.
    debug: false
    # Log level (default: info)
    log_level: info
    # PlantUML server URI for UML image rendering.
    plantuml_server: http://plantuml.resoto.org:8080
    # Start the collect workflow, when the first handling actor connects to the system.
    start_collect_on_subscriber_connect: true
  workflows:
    collect_and_cleanup:
      schedule: '0 * * * *'
``` 
