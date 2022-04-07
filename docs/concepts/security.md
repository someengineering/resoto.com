# Security overview

By default all [Resoto components](components/index.md) communicate with each other via HTTPS using Transport Layer Security (TLS). The trust between components is established using a Pre-Shared-Key (PSK) that is used to derive a key which in turn is used to sign JWT tokens. [Resoto Core](components/core.md) is running a Public Key Infrastructure (PKI) including a Certificate Authority (CA). Upon start all components will request a certificate from the CA.

## Pre-Shared-Key (PSK)
Every component takes a `--psk` flag (which can alternatively be supplied using the environment variables `RESOTOCORE_PSK`, `RESOTOWORKER_PSK`, `RESOTOMETRICS_PSK` and `RESOTOSHELL_PSK`). The value of the flag is a pre-shared key. A common passphrase that all components know about. From this passphrase a 256 bit key is derived using PKCS#5 password-based key derivation function 2 with HMAC as its pseudo-random function (PBKDF2-HMAC) and a random salt. This derived key is then used to sign JWT tokens.

### JSON Web Tokens (JWT)
If `--psk` was specified every request that a component makes to `resotocore` must provide a valid `Authentication` header with a JWT signed using the PSK. This is true for encrypted https as well as unencrypted http requests. Meaning even if TLS is turned off (`--no-tls`) but a PSK was specified, the request will still be authenticated (but not encrypted!).

## Certificate Authority (CA)
By default the Resoto builtin CA will be used. Alternatively a custom CA cert and key can be provided to the core using the `--ca-cert` and `--ca-cert-key` flags. Or if you are already running a CA or have externally signed certificates (e.g. letsencrypt) they can be used using the `--ca-cert`, `--cert` and `--cert-key` flags of all components. If the key is protected by a passphrase `--cert-key-pass` can also be specified. The following sections explain the steps Resoto automatically performs when using the builtin CA.

### Establishing trust
`resotocore` has two API endpoints, `/ca/cert` and `/ca/sign`. The former serves the core's public CA root certificate. Upon startup all other components will request this root certificate from the core without validating the TLS connection. However, the core encodes the certificate's SHA256 fingerprint into a JWT which is signed with the previously mentioned PSK. When the component downloads the thus far untrusted root certificate it compares its fingerprint with the one the core has encoded into the JWT. If the fingerprints match the CA's root certificate is stored as a valid root certificate and from then on trusted. The trust is established.

Any https requests between components and `resotocore` from this point forward are validated against the CA root certificate.

### Component certificates
Once the trust is established, each component will request a certificate from the CA. To do so each component creates a private RSA key in memory and a Certificate Signing Request (CSR) using that key. The CSR is then sent to `/ca/sign` which returns a signed certificate. Like any other request this one includes a JWT signed with the PSK. This way the CA knows it can trust the requesting component before returning a signed certificate.


## Custom certificates
The [Resoto Shell (`resh`)](components/shell.md) can be used to create custom certificates. This is useful for securing the connection to other components like ArangoDB or Prometheus. To create a certificate open `resh` and execute e.g.
```
> certificate create --common-name arangodb.local --dns-names arangodb.local localhost --ip-addresses 127.0.0.1
Received a file arangodb.key, which is stored to ./arangodb.key.
Received a file arangodb.crt, which is stored to ./arangodb.crt.
```

See `help certificate` for details.


### Securing ArangoDB
Create a certificate as described above and combine the two resulting files into a single PEM file.
```bash
$ cat arangodb.crt arangodb.key > arangodb.pem
$ chmod 600 arangodb.pem
```

Copy the certificate to a directory of choice and start ArangoDB using the flags
```bash
--server.endpoint ssl://localhost:8530 --ssl.keyfile /path/to/arangodb.pem
```

Adjust `resotocore` startup flags to use https and the new port
```bash
--graphdb-server https://localhost:8530
```

## Advanced integration
For advanced users who would like to communicate with Resoto APIs here are some pointers of how to integrate with `resotocore` using the same transport encryption and authentication Resoto's components use when communicating with each other.

### Retrieving and validating the CA cert
In a Python REPL with [`resotolib`](components/library.md) installed execute
```python
>>> from resotolib.core.ca import get_ca_cert
>>> from resotolib.x509 import write_cert_to_file
>>> ca_cert = get_ca_cert(resotocore_uri="https://localhost:8900", psk="changeme")
>>> write_cert_to_file(cert=ca_cert, cert_path="./resoto_ca.crt")
```

Alternatively the CA cert can be retrieved without verifying it using:
```bash
$ curl -k https://localhost:8900/ca/cert > resoto_ca.crt
```

### Generate a JWT
The following will return http headers that contain a valid JWT for the provided PSK.

```python
>>> from resotolib.jwt import encode_jwt_to_headers
>>> encode_jwt_to_headers(http_headers={}, payload={}, psk="changeme", expire_in=3600)
{'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsInNhbHQiOiJuSVEzU3M5TGVNS1JHYUNQUEJxMnlBPT0ifQ.eyJleHAiOjE2NDkzNzI1MTR9.KXAmijfSsV-taO3890qJNzXKXng1u38eU6PTrDYTgVs'}
```


### Make a curl request that executes a Resoto CLI command
```bash
header="Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsInNhbHQiOiJuSVEzU3M5TGVNS1JHYUNQUEJxMnlBPT0ifQ.eyJleHAiOjE2NDkzNzI1MTR9.KXAmijfSsV-taO3890qJNzXKXng1u38eU6PTrDYTgVs"
data="search is(resource) | count"
curl --cacert resoto_ca.crt -H "$header" -H "Content-Type: text/plain" -H "Accept: application/json" -X POST -d "$data" https://localhost:8900/cli/execute
```
