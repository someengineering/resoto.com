---
sidebar_label: Amazon Web Services
---

# Configure Amazon Web Services Access

```mdx-code-block
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
```

https://youtu.be/6_nxUM0iFx4

The [Amazon Web Services (AWS)](../../reference/data-models/aws.md) collector is configured within the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs) in [Resoto Shell](../../concepts/components/shell):

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

Resoto supports all the authentication mechanisms described in the [boto3 SDK documentation](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html). You can authenticate with [<abbr title="Amazon Web Services">AWS</abbr>](../../reference/data-models/aws.md) via [environment](#environment), [instance profile](#instance-profile), [access key](#access-key), or [profiles](#profiles).

### Environment

Providing environment variables to Resoto depends on the installation method:

<Tabs groupId="install-method">
<TabItem value="docker" label="Docker">

1. Add the following volume definition to the `resotoworker` service in `docker-compose.yaml`:

   ```yaml title="docker-compose.yaml"
   services:
   ...
     resotoworker:
   # highlight-start
       environment:
         - AWS_ACCESS_KEY_ID=<YOUR_ACCESS_KEY_ID>
         - AWS_SECRET_ACCESS_KEY=<YOUR_SECRET_ACCESS_KEY>
   # highlight-end
   ...
   ...
   ```

2. Recreate the `resotoworker` container with the updated service definition:

   ```bash
   $ docker compose up -d
   ```

</TabItem>
<TabItem value="k8s" label="Kubernetes">

1. Create a secret:

   ```bash
   $ kubectl -n resoto create secret generic resoto-auth \
     --from-literal=AWS_ACCESS_KEY_ID=<your access key ID> \
     --from-literal=AWS_SECRET_ACCESS_KEY=<your access key>
   ```

2. Update the `resoto-values.yaml` file as follows:

   ```yaml title="resoto-values.yaml"
   ...
   resotoworker:
   ...
   # highlight-start
     extraEnv:
       - name: AWS_ACCESS_KEY_ID
         valueFrom:
           secretKeyRef:
             name: resoto-auth
             key: AWS_ACCESS_KEY_ID
       - name: AWS_SECRET_ACCESS_KEY
         valueFrom:
           secretKeyRef:
             name: resoto-auth
             key: AWS_SECRET_ACCESS_KEY
   # highlight-end
   ...
   ```

3. Deploy these changes:

   ```bash
   $ helm upgrade resoto resoto/resoto --set image.tag={{imageTag}} -f resoto-values.yaml
   ```

</TabItem>
<TabItem value="pip" label="pip">

1. Before you start the Resoto Worker, set the following environment variables:

   ```bash
   $ export AWS_ACCESS_KEY_ID=<YOUR_ACCESS_KEY_ID>
   $ export AWS_SECRET_ACCESS_KEY=<YOUR_SECRET_ACCESS_KEY>
   ```

</TabItem> 
</Tabs>

Make sure that `aws.access_key_id` and `aws.secret_access_key` are set to `null` so that Resoto will fall back to loading credentials from the environment: Open the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs) in [Resoto Shell](../../concepts/components/shell):

```bash
> config edit resoto.worker
```

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

You can specify a profile using `AWS_PROFILE` and, for local testing, SSO authentication would work as well. However, when Resoto is running unattended in a production environment, SSO credentials that require opening a browser window would not work.

:::

### Access Key

You can provide the access keys directly in the Resoto configuration:

1. Open the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs) in [Resoto Shell](../../concepts/components/shell):

   ```bash
   > config edit resoto.worker
   ```

2. Modify the `aws` section of the configuration as follows:

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

### Instance Profile

Prerequisites for this access method:

- Setup [AWS credentials files](#using-aws-credentials-files)
- Have an [instance profile](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html) configured for the EC2 instance the process is running on.

1. Define the profile information in the AWS credentials file.

   ```ini title="Example config file"
   [default]
   region = us-west-2

   role_arn = arn:aws:iam::235059640852:role/Resoto
   external_id = a5eMybsyGIowimdZqpZWxxxxxxxxxxxx
   credential_source = Ec2InstanceMetadata
   ```

2. Open the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs) in [Resoto Shell](../../concepts/components/shell):

   ```bash
   > config edit resoto.worker
   ```

3. Modify the `aws` section of the configuration as follows, making sure that `aws.access_key_id` and `aws.secret_access_key` are set to `null`:

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

### Profiles

Prerequisites for this access method:

- Setup [AWS credentials files](#using-aws-credentials-files)
- Have a list of profiles configured in AWS

1. Define the list or profiles in your `~/.aws/credentials` file:

   ```ini title="~/.aws/credentials"
   [production]
   aws_xxx = yyy

   [test]
   aws_xxx = yyy

   [dev]
   aws_xxx = yyy

   ...
   ```

2. Modify the `aws` section of the configuration as follows, adding one or more profile names from your `~/.aws/credentials` file:

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

## Using AWS Credentials files

:::note

Setting up AWS with credentials files is only required for specific authentication methods. This guide explicitly mentions, if it is required for the authentication method you are using. Make sure you fall into this category before proceeding.

:::

The [<abbr title="Amazon Web Services Command Line Interface">AWS</abbr> CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html), will store your credentials in a folder named `.aws` in your home directory and can load a [shared credentials file](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html#shared-credentials-file) named `credentials`.

Depending on your installation method, there are different ways to provide this file to Resoto.

<Tabs groupId="install-method">
<TabItem value="docker" label="Docker">

Inside docker the home directory is `/home/resoto` - so the default location for the `.aws` folder is `/home/resoto/.aws`. To make the local `.aws` folder available to Resoto, you can mount it into the container.

- Add the following volume definition to the `resotoworker` service in `docker-compose.yaml`:

  ```yaml title="docker-compose.yaml"
  services:
    ...
    resotoworker:
      image: somecr.io/someengineering/resotoworker:{{imageTag}}
      container_name: resotoworker
      ...
  # highlight-start
      volumes:
        - $HOME/.aws:/home/resoto/.aws
  # highlight-end
    ...
  ...
  ```

- Recreate the `resotoworker` container with the updated service definition:

  ```bash
  $ docker compose up -d
  ```

</TabItem>
<TabItem value="k8s" label="Kubernetes">

The home directory is `/home/resoto` - so the default location for the `.aws` folder is `/home/resoto/.aws`. Use Helm values `resotoworker.volumes`, and `resotoworker.volumeMounts` to make your `$HOME/.aws` directory available within the `resotoworker` container.

- Create a secret:

  ```bash
  $ kubectl -n resoto create secret generic resoto-home \
    --from-file=credentials=$HOME/.aws/credentials
  ```

- Update the Helm values `resoto-values.yaml` file as follows:

  ```yaml title="resoto-values.yaml"
  ...
  resotoworker:
    ...
  # highlight-start
    volumeMounts:
      - mountPath: /home/resoto/.aws
        name: aws-credentials
    volumes:
      - name: aws-credentials
        secret:
          secretName: resoto-home
  # highlight-end
  ...
  ```

- Deploy these changes:

  ```bash
  $ helm upgrade resoto resoto/resoto --set image.tag={{imageTag}} -f resoto-values.yaml
  ```

</TabItem>
<TabItem value="pip" label="pip">

`pip` is running on the local machine and can directly access your local `.aws` folder. No further setup is required.

</TabItem>
</Tabs>

## Resource Collection

By default, Resoto performs resource collection each hour. To immediately trigger a collect run, use the [`workflow run` command](../../reference/cli/action-commands/workflows/run.md) in [Resoto Shell](../../concepts/components/shell):

```bash
> workflow run collect
```

Once the collect run completes, you can view a summary of collected <abbr title="Amazon Web Services">AWS</abbr> resources using the following search:

```bash
> search is(aws_resource) | count kind
```
