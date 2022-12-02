---
sidebar_label: certificate
---

# `certificate` Command

The `certificate` command is used to create a new TLS certificate and key pair based on the internal root CA certificate. This can be used to create a self-signed certificate for additional components that communicate with Resoto.

## Usage

```bash
certificate create --common-name <common-name>
   [--dns-names <dns-name>...<dns-name>]
   [--ip-addresses <ip-address>...<ip-address>]
   [--days-valid <days-valid>]
```

### Options

| Option           | Description                                            | Required? | Default Value |
| ---------------- | ------------------------------------------------------ | --------: | ------------: |
| `--common-name`  | Server name protected by the ssl certificate.          |        ✔️ |               |
| `--dns-names`    | DNS names that the certificate should be valid for.    |           |               |
| `--ip-addresses` | IP addresses that the certificate should be valid for. |           |               |
| `--days-valid`   | Number of days the certificate should be valid.        |           |           365 |

## Examples

```bash title="Chunking with size of 2"
> certificate create --common-name example.com --dns-names example.com *.example.com --days-valid 365
​Received a file example.com.key, which is stored to ./example.com.key.
​Received a file example.com.crt, which is stored to ./example.com.crt.
```

## Further Reading

- [Security](../../../concepts/security.md)
