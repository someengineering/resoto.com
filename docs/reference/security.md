# Security

By default, all [Resoto components](../concepts/components/index.md) communicate with each other via HTTPS using Transport Layer Security (TLS).

The trust between components is established using a Pre-Shared-Key (PSK) that is used to derive a key which in turn is used to sign JWT tokens.

[Resoto Core](../concepts/components/core.md) is running a Public Key Infrastructure (PKI) including a Certificate Authority (CA). Upon start, all components will request a certificate from the CA.

## Pre-Shared Key (PSK) {#pre-shared-key}

Every component takes a `--psk` flag (which can alternatively be supplied using the environment variables `RESOTOCORE_PSK`, `RESOTOWORKER_PSK`, `RESOTOMETRICS_PSK` and `RESOTOSHELL_PSK`). The value of the flag is a pre-shared key—a common passphrase that all components know about.

From this passphrase, a 256 bit key is derived using PKCS#5 password-based key derivation function 2 with HMAC as its pseudo-random function (PBKDF2-HMAC) and a random salt. This derived key is then used to sign JWT tokens.

### JSON Web Token (JWT) {#json-web-token}

If `--psk` was specified, every request that a component makes to [Resoto Core](../concepts/components/core.md) must provide a valid `Authentication` header with a JWT signed using the PSK.

This is true for encrypted HTTPS and unencrypted HTTP requests, meaning that if TLS is turned off (`--no-tls`) but a PSK was specified, the request will still be authenticated (just not encrypted!).

## Certificate Authority (CA) {#certificate-authority}

By default, the Resoto built-in CA will be used.

Alternatively, a custom CA cert and key can be provided to [Resoto Core](../concepts/components/core.md) using the `--ca-cert` and `--ca-cert-key` flags.

Or, if you are already running a CA or have externally signed certificates (e.g., [Let's Encrypt](https://letsencrypt.org)) they can be used using the `--ca-cert`, `--cert` and `--cert-key` flags for all components. If the key is protected by a passphrase, `--cert-key-pass` can also be specified.

The following sections explain the steps Resoto automatically performs when using the built-in CA:

### Establishing Trust

[Resoto Core](../concepts/components/core.md) has two API endpoints, [`/ca/cert`](./api/retrieve-the-certificate-authorities-public-certificate) and [`/ca/sign`](./api/sign-a-certificate-request).

The former serves the core's public CA root certificate. Upon startup, all other components will request this root certificate from [Resoto Core](../concepts/components/core.md) without validating the TLS connection.

However, [Resoto Core](../concepts/components/core.md) encodes the certificate's SHA256 fingerprint into a JWT which is signed with the previously mentioned PSK. When the component downloads the thus far untrusted root certificate it compares its fingerprint with the one the core has encoded into the JWT. If the fingerprints match the CA's root certificate is stored as a valid root certificate and from then on trusted. The trust is established.

Any HTTPS requests between components and [Resoto Core](../concepts/components/core.md) from this point forward are validated against the CA root certificate.

### Component Certificates

Once the trust is established, each component will request a certificate from the CA.

To do so, each component creates a private RSA key in memory and a Certificate Signing Request (CSR) using that key. The CSR is then sent to [`/ca/sign`](./api/sign-a-certificate-request), which returns a signed certificate. Like any other request, this one includes a JWT signed with the PSK. This way, the CA knows it can trust the requesting component before returning a signed certificate.

Components will automatically renew their certificates a day before they expire.

## Custom Certificates

[Resoto Shell (`resh`)](../concepts/components/shell.md) can be used to create custom certificates. This is useful for securing the connection to other components like [ArangoDB](https://arangodb.com) or [Prometheus](https://prometheus.io).

To create a certificate, open [Resoto Shell](../concepts/components/shell.md) and execute:

```bash
> certificate create --common-name arangodb.local --dns-names arangodb.local localhost --ip-addresses 127.0.0.1
# highlight-start
​Received a file arangodb.key, which is stored to ./arangodb.key.
​Received a file arangodb.crt, which is stored to ./arangodb.crt.
# highlight-end
```

See [`certificate` Command](./cli/setup-commands/certificate.md) for details.

### Securing ArangoDB

1. Create a certificate as described above and combine the two resulting files into a single PEM file:

   ```bash
   $ cat arangodb.crt arangodb.key > arangodb.pem
   $ chmod 600 arangodb.pem
   ```

2. Copy the certificate to a directory of choice and start ArangoDB using the following flags:

   ```bash
   --server.endpoint ssl://localhost:8530 --ssl.keyfile /path/to/arangodb.pem
   ```

3. Adjust `resotocore` startup flags to use HTTPS and the new port:

   ```bash
   --graphdb-server https://localhost:8530
   ```

## Advanced

For advanced users who would like to communicate with [Resoto APIs](./api/index.md), here are some pointers of how to integrate with [Resoto Core](../concepts/components/core.md) using the same transport encryption and authentication [Resoto's components](../concepts/components/index.md) use when communicating with each other.

### Retrieving and Validating the CA Certificate

The Resoto CA certificate can be retrieved at <https://localhost:8900/ca/cert> (replace `localhost` with the hostname or IP where [Resoto Core](../concepts/components/core.md) is running).

In a Python 3 REPL with [`resotolib`](../concepts/components/library.md) installed execute the following:

```python
>>> from resotolib.core.ca import get_ca_cert
>>> from resotolib.x509 import write_cert_to_file
>>> ca_cert = get_ca_cert(resotocore_uri="https://localhost:8900", psk="changeme")
>>> write_cert_to_file(cert=ca_cert, cert_path="./resoto_ca.crt")
```

Alternatively, the CA cert can be retrieved without verifying it.

```bash
$ curl -k https://localhost:8900/ca/cert > resoto_ca.crt
```

### Generating a JSON Web Token

The following will return http headers that contain a valid JWT for the provided PSK:

```python
>>> from resotolib.jwt import encode_jwt_to_headers
>>> encode_jwt_to_headers(http_headers={}, payload={}, psk="changeme", expire_in=3600)
# highlight-next-line
​{'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsInNhbHQiOiJuSVEzU3M5TGVNS1JHYUNQUEJxMnlBPT0ifQ.eyJleHAiOjE2NDkzNzI1MTR9.KXAmijfSsV-taO3890qJNzXKXng1u38eU6PTrDYTgVs'}
```

### Executing Resoto CLI Commands with `curl`

Use the retrieved CA cert and generated http headers with `curl` in a shell to talk to the Resoto API:

```bash
$ auth_header="Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsInNhbHQiOiJuSVEzU3M5TGVNS1JHYUNQUEJxMnlBPT0ifQ.eyJleHAiOjE2NDkzNzI1MTR9.KXAmijfSsV-taO3890qJNzXKXng1u38eU6PTrDYTgVs"
$ resoto_command="search is(resource) | count"
$ curl --cacert resoto_ca.crt -H "$auth_header" -H "Content-Type: text/plain" -H "Accept: application/json" -X POST -d "$resoto_command" https://localhost:8900/cli/execute
```
