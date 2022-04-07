# Security overview

By default all Resoto components communicate with each other using TLS (https). The trust between components is established using a Pre-Shared-Key (PSK) that is used to derive a key which in turn is used to sign JWT tokens. `resotocore` is running a Public Key Infrastructure (PKI) including a Certificate Authority (CA). Upon start all components will request a certificate from the CA.

## Pre-Shared-Key (PSK)
Every component takes a `--psk` flag (which can alternatively be supplied using the environment variables `RESOTOCORE_PSK`, `RESOTOWORKER_PSK`, `RESOTOMETRICS_PSK`, `RESOTOSHELL_PSK`). The value of the flag is a pre-shared key. A common passphrase that all components know about. From this passphrase a 256 bit key is derived using PKCS#5 password-based key derivation function 2 with HMAC as its pseudo-random function (PBKDF2-HMAC) and a random salt. This derived key is then used to sign JWT tokens.

### JSON Web Tokens (JWT)
If `--psk` was specified every request that a component makes to `resotocore` must provide a valid `Authentication` header with a JWT signed using the PSK. This is true for encrypted https as well as unencrypted http requests. Meaning even if TLS is turned off (`--no-tls`) but a PSK was specified, the request will still be authenticated (but not encrypted!).

## Certificate Authority (CA)
By default the Resoto builtin CA will be used. Alternatively a custom CA cert and key can be provided to the core using the `--ca-cert` and `--ca-cert-key` flags. Or if you are already running a CA or have externally signed certificates (e.g. letsencrypt) they can be used using the `--ca-cert`, `--cert` and `--cert-key` flags of all components. If the key is protected by a passphrase `--cert-key-pass` can also be specified. The following sections explain the steps Resoto automatically performs when using the builtin CA.

### Establishing trust
`resotocore` has two API endpoints, `/ca/cert` and `/ca/sign`. The former serves the core's public CA root certificate. Upon startup all other components will request this root certificate from the core without validating the TLS connection. However, the core encodes the certificate's SHA256 fingerprint into a JWT which is signed with the previously mentioned PSK. When the component downloads the thus far untrusted root certificate it compares its fingerprint with the one the core has encoded into the JWT. If the fingerprints match the CA's root certificate is stored as a valid root certificate and from then on trusted. The trust is established.

Any https requests between components and `resotocore` from this point forward are validated against the CA root certificate.

### Component certificates
Once the trust is established, each component will request a certificate from the CA. To do so each component creates a private RSA key in memory and creates a CSR (Certificate Signing Request) using it. The CSR is then sent to `/ca/sign`. Like any other request this one includes a JWT signed with the PSK. This way the CA knows to trust the requesting component and return a signed certificate.


## Custom certificates
The Resoto Shell (`resh`) can be used to create custom certificates. This is useful for securing other components like ArangoDB or Prometheus. To create a certificate open `resh` and execute e.g.
```bash
> certificate create --common-name arangodb --dns-names arangodb localhost --ip-addresses 127.0.0.1
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
