---
sidebar_label: Amazon Web Services
---

# Configure Amazon Web Services Access

https://youtu.be/6_nxUM0iFx4

The [Amazon Web Services (AWS)](../../reference/data-models/aws.md) collector is configured within the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/configs) in [Resoto Shell](../../concepts/components/shell):

```bash
> config edit resoto.worker
```

Add `aws` to the list of collectors by modifying the configuration as follows:

```yaml
resotoworker:
  ...
  # List of collectors to run
  collector:
# highlight-next-line
    - 'aws'
    ...
...
```

## Authentication

You can authenticate with [<abbr title="Amazon Web Services">AWS</abbr>](../../reference/data-models/aws.md) via [environment](#environment), [instance profile](#instance-profile), [access key](#access-key), or [profiles](#profiles).

### Environment

Resoto supports all the authentication mechanisms described in the [boto3 SDK documentation](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html).

[Configure the <abbr title="Amazon Web Services">AWS</abbr> Command-Line Interface](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html). The <abbr title="Amazon Web Services">AWS</abbr> <abbr title="Command-Line Interface">CLI</abbr> will store your credentials in a folder named `.aws` in your home directory.

:::note

If you installed Resoto using [Docker](../install-resoto/docker.md) or [Kubernetes](../configure-cloud-provider-access/kubernetes.md), you will need to volume mount `$HOME/.aws` to `/home/resoto/.aws` inside the `resotoworker` container. If your configuration contains multiple profiles, be sure to also set `AWS_PROFILE` for the `resotoworker` container.

:::

Resoto expects to find the [shared credentials file](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html#shared-credentials-file) at `/home/resoto/.aws/credentials`, but you can change this location using the `AWS_SHARED_CREDENTIALS_FILE` environment variable.

```ini title="Minimal example of the shared credentials file."
[default]
aws_access_key_id=foo
aws_secret_access_key=bar
aws_session_token=baz
```

Boto3 can also [load credentials from `/home/resoto/.aws/config`](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html#aws-config-file). You can also change this default location with the `AWS_CONFIG_FILE` environment variable.

Next, open the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/configs) in [Resoto Shell](../../concepts/components/shell):

```bash
> config edit resoto.worker
```

Modify the `aws` section of the configuration as follows, making sure that `aws.access_key_id` and `aws.secret_access_key` are set to `null` (Resoto will fall back to loading credentials from the environment/home directory):

```yaml title="Resoto Worker configuration"
resotoworker:
  ...
...
aws:
# highlight-start
  # AWS Access Key ID (null to load from env - recommended)
  access_key_id: null
  # AWS Secret Access Key (null to load from env - recommended)
  secret_access_key: null
# highlight-end
  ...
```

:::note

Resoto is meant to run unattended on a server using a service account or instance profile. Resoto supports the same environment variables that the [<abbr title="Amazon Web Services">AWS</abbr> Command-Line Interface](https://aws.amazon.com/cli) does (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_SESSION_TOKEN`, `AWS_ROLE_ARN`, `AWS_WEB_IDENTITY_TOKEN_FILE`, `AWS_ROLE_SESSION_NAME`, etc.).

When using temporary credentials, however, they should be written to the `credentials` or `config` file and updated out-of-band instead of using environment variables, because the `resotoworker` process starts once and then runs forever (updated environment variables are only reflected upon restart).

You can specify a profile using `AWS_PROFILE` and for local testing SSO authentication would work as well. However when Resoto is running unattended in a production environment, SSO credentials that require opening a browser window would not work.

:::

### Instance Profile

First, [set up an instance profile](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html). Then, volume mount a file (or in Kubernetes, a secret) `/home/resoto/.aws/config` containing the role ARN and external ID into the `resotoworker` container.

```ini
[default]
region = us-west-2

role_arn = arn:aws:iam::235059640852:role/Cloudkeeper
external_id = a5eMybsyGIowimdZqpZWxxxxxxxxxxxx
credential_source = Ec2InstanceMetadata
```

Next, open the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/configs) in [Resoto Shell](../../concepts/components/shell):

```bash
> config edit resoto.worker
```

Modify the `aws` section of the configuration as follows, making sure that `aws.access_key_id` and `aws.secret_access_key` are set to `null`:

```yaml title="Resoto Worker configuration"
resotoworker:
  ...
...
aws:
# highlight-start
  # AWS Access Key ID (null to load from env - recommended)
  access_key_id: null
  # AWS Secret Access Key (null to load from env - recommended)
  secret_access_key: null
# highlight-end
  ...
```

### Access Key

:::note

Using a static access key is only recommended for testing.

:::

Open the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/configs) in [Resoto Shell](../../concepts/components/shell):

```bash
> config edit resoto.worker
```

Modify the `aws` section of the configuration as follows:

```yaml title="Resoto Worker configuration"
resotoworker:
  ...
...
aws:
# highlight-start
  # AWS Access Key ID (null to load from env - recommended)
  access_key_id: 'AKIAZGZKXXXXXXXXXXXX'
  # AWS Secret Access Key (null to load from env - recommended)
  secret_access_key: 'vO51EW/8ILMGrSBV/Ia9Fov6xZnKxxxxxxxxxxxx'
# highlight-end
  ...
```

### Profiles

[Configure the <abbr title="Amazon Web Services">AWS</abbr> Command-Line Interface](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html). The <abbr title="Amazon Web Services">AWS</abbr> <abbr title="Command-Line Interface">CLI</abbr> will store your credentials in a folder named `.aws` in your home directory.

:::note

If you installed Resoto using [Docker](../install-resoto/docker.md) or [Kubernetes](../configure-cloud-provider-access/kubernetes.md), you will need to volume mount `$HOME/.aws` to `/home/resoto/.aws` inside the `resotoworker` container.

:::

Next, open the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/configs) in [Resoto Shell](../../concepts/components/shell):

```bash
> config edit resoto.worker
```

Modify the `aws` section of the configuration as follows, adding one or more profile names from your `~/.aws/credentials` file:

```yaml title="Resoto Worker configuration"
resotoworker:
  ...
...
aws:
# highlight-start
  profiles:
    - production
    - test
    - dev
# highlight-end
  ...
```

Profiles can be combined with other <abbr title="Amazon Web Services">AWS</abbr> options, such as `aws.role` and `aws.scrape_org`.

:::note

When switching from profiles to another authentication option, be sure to set the value of `aws.profiles` as `null`.

:::

## Resource Collection

By default, Resoto performs resource collection each hour. To immediately trigger a collect run, use the [`workflow run` command](../../reference/cli/workflows/run.md) in [Resoto Shell](../../concepts/components/shell):

```bash
> workflow run collect
```

Once the collect run completes, you can view a summary of collected <abbr title="Amazon Web Services">AWS</abbr> resources using the following search:

```bash
> search is(aws_resource) | count kind
```
