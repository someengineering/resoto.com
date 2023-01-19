---
sidebar_label: Amazon Web Services
---

# Configure Amazon Web Services Access

```mdx-code-block
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
```

The [Amazon Web Services (AWS)](../../reference/data-models/aws/index.md) collector is configured within the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs) in [Resoto Shell](../../concepts/components/shell).

https://youtu.be/6_nxUM0iFx4

## Enabling the Collector

1. Open the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs) in [Resoto Shell](../../concepts/components/shell):

   ```bash
   > config edit resoto.worker
   ```

2. Add `aws` to the list of collectors by modifying the configuration as follows:

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

**Resoto supports the authentication mechanisms described in the [Boto3 SDK documentation](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html).** You can authenticate with [<abbr title="Amazon Web Services">AWS</abbr>](../../reference/data-models/aws/index.md) via an instance profile, an access key, or profiles. These credentials can be defined in the Resoto Worker configuration or as environment variables.

<Tabs groupId="auth-method">
<TabItem value="configuration" label="Resoto Worker Configuration">
<Tabs>
<TabItem value="instance-profile" label="Instance Profile">

1. Configure an [instance profile](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html).

2. Create a file `~/.aws/credentials` with the credentials for the created instance profile:

   ```ini title="~/.aws/credentials"
   [default]
   region = us-west-2

   role_arn = arn:aws:iam::235059640852:role/Resoto
   external_id = a5eMybsyGIowimdZqpZWxxxxxxxxxxxx
   credential_source = Ec2InstanceMetadata
   ```

3. Make your `credentials` file available to Resoto at `/home/resoto/.aws`:

   <Tabs groupId="install-method">
   <TabItem value="docker" label="Docker">

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
     $ docker-compose up -d
     ```

     :::note

     [Docker Compose V2 integrated compose functions in to the Docker platform.](https://docs.docker.com/compose/#compose-v2-and-the-new-docker-compose-command)

     In Docker Compose V2, the command is `docker compose` (no hyphen) instead of `docker-compose`.

     :::

   </TabItem>
   <TabItem value="k8s" label="Kubernetes">

   - Create a secret with the path to the `credentials` file:

     ```bash
     $ kubectl -n resoto create secret generic resoto-home \
       --from-file=credentials=$HOME/.aws/credentials
     ```

   - Update `resoto-values.yaml` as follows:

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

   - Deploy these changes with Helm:

     ```bash
     $ helm upgrade resoto resoto/resoto --set image.tag={{imageTag}} -f resoto-values.yaml
     ```

   </TabItem>
   <TabItem value="pip" label="pip">

   :::info

   This step is not necessary for pip installs. Since Resoto is running on your local machine, it can access the `credentials` file directly.

   :::

   </TabItem>
   </Tabs>

4. Open the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs) in [Resoto Shell](../../concepts/components/shell):

   ```bash
   > config edit resoto.worker
   ```

5. Modify the `aws` section of the configuration as follows, making sure that `aws.access_key_id` and `aws.secret_access_key` are set to `null`:

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

</TabItem>
<TabItem value="access-key" label="Access Key">

:::note

Access keys in the configuration are visible to anyone with access to your Resoto instance. You can alternatively define the access key via environment variables.

:::

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

</TabItem>
<TabItem value="profiles" label="Profiles">

1. Create a file `~/.aws/credentials` with the desired profiles:

   ```ini title="~/.aws/credentials"
   [production]
   aws_xxx = yyy

   [test]
   aws_xxx = yyy

   [dev]
   aws_xxx = yyy

   ...
   ```

2. Make your `credentials` file available to Resoto at `/home/resoto/.aws`:

   <Tabs groupId="install-method">
   <TabItem value="docker" label="Docker">

   - Add the following volume definition to the `resotoworker` service in `docker-compose.yaml`:

     ```yaml title="docker-compose.yaml"
     services:
       ...
       resotoworker:
         image: somecr.io/someengineering/resotoworker:{{imageTag}}
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
     $ docker-compose up -d
     ```

     :::note

     [Docker Compose V2 integrated compose functions in to the Docker platform.](https://docs.docker.com/compose/#compose-v2-and-the-new-docker-compose-command)

     In Docker Compose V2, the command is `docker compose` (no hyphen) instead of `docker-compose`.

     :::

   </TabItem>
   <TabItem value="k8s" label="Kubernetes">

   - Create a secret for the `credentials` file:

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

   - Deploy these changes with Helm:

     ```bash
     $ helm upgrade resoto resoto/resoto --set image.tag={{imageTag}} -f resoto-values.yaml
     ```

   </TabItem>
   <TabItem value="pip" label="pip">

   :::info

   This step is not necessary for pip installs. Since Resoto is running on your local machine, it can access the `credentials` file directly.

   :::

   </TabItem>
   </Tabs>

3. Modify the `aws` section of the configuration as follows, adding one or more profile names from your `~/.aws/credentials` file:

   ```yaml title="Resoto Worker configuration"
   resotoworker:
     ...
   ...
   aws:
     ...
   # highlight-start
     profiles:
       - production
       - test
       - dev
   # highlight-end
   ```

   Profiles can be combined with other <abbr title="Amazon Web Services">AWS</abbr> options, such as `aws.role` and `aws.scrape_org`.

   :::note

   When switching from profiles to another authentication option, be sure to set the value of `aws.profiles` as `null`.

   :::

</TabItem>
</Tabs>
</TabItem>
<TabItem value="environment" label="Environment Variables">

:::note

**Resoto is meant to run unattended on a server using a service account or instance profile.** Resoto supports the same environment variables that the [<abbr title="Amazon Web Services">AWS</abbr> Command-Line Interface](https://aws.amazon.com/cli) does (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_SESSION_TOKEN`, `AWS_ROLE_ARN`, `AWS_WEB_IDENTITY_TOKEN_FILE`, `AWS_ROLE_SESSION_NAME`, etc.).

**When using temporary credentials, however, they should be written to the `credentials` or `config` file and updated out-of-band instead of using environment variables.** This is because the `resotoworker` process starts once and then runs forever (i.e., updated environment variables are only reflected upon restart).

You can specify a profile using `AWS_PROFILE` and, for local testing, SSO authentication would work as well. However, when Resoto is running unattended in a production environment, SSO credentials that require opening a browser window would not work.

:::

1. Set the required environment variables (e.g., `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`):

   <Tabs groupId="install-method">
   <TabItem value="docker" label="Docker">

   - Add environment variable definitions to the `resotoworker` service in `docker-compose.yaml`:

     ```yaml title="docker-compose.yaml"
     services:
       ...
       resotoworker:
     # highlight-start
         environment:
           - AWS_ACCESS_KEY_ID=AKIAZGZKXXXXXXXXXXXX
           - AWS_SECRET_ACCESS_KEY=vO51EW/8ILMGrSBV/Ia9Fov6xZnKxxxxxxxxxxxx
     # highlight-end
       ...
     ...
     ```

   - Recreate the `resotoworker` container with the updated service definition:

     ```bash
     $ docker-compose up -d
     ```

     :::note

     [Docker Compose V2 integrated compose functions in to the Docker platform.](https://docs.docker.com/compose/#compose-v2-and-the-new-docker-compose-command)

     In Docker Compose V2, the command is `docker compose` (no hyphen) instead of `docker-compose`.

     :::

   </TabItem>
   <TabItem value="k8s" label="Kubernetes">

   - Create a secret:

     ```bash
     $ kubectl -n resoto create secret generic resoto-auth \
       --from-literal=AWS_ACCESS_KEY_ID=AKIAZGZKXXXXXXXXXXXX \
       --from-literal=AWS_SECRET_ACCESS_KEY=vO51EW/8ILMGrSBV/Ia9Fov6xZnKxxxxxxxxxxxx
     ```

   - Update `resoto-values.yaml` as follows:

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

   - Deploy these changes with Helm:

     ```bash
     $ helm upgrade resoto resoto/resoto --set image.tag={{imageTag}} -f resoto-values.yaml
     ```

   </TabItem>
   <TabItem value="pip" label="pip">

   - Export the `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` environment variables:

     ```bash
     $ export AWS_ACCESS_KEY_ID=AKIAZGZKXXXXXXXXXXXX
     $ export AWS_SECRET_ACCESS_KEY=vO51EW/8ILMGrSBV/Ia9Fov6xZnKxxxxxxxxxxxx
     ```

   - Restart the `resotoworker` process.

   </TabItem> 
   </Tabs>

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

</TabItem>
</Tabs>

## Authorization

See [How to Roll Out Resoto AWS Permissions with CloudFormation](../../how-to-guides/configuration/roll-out-resoto-aws-permissions-with-cloudformation/index.md) for a step-by-step guide on how to roll out Resoto permissions organization-wide.

If you prefer to deploy the role yourself, the S3 URL of the template to create the ResotoAccess role is <https://resotopublic.s3.amazonaws.com/cf/resoto-role.template>.

## Resource Collection

By default, Resoto performs resource collection each hour. To immediately trigger a collect run, use the [`workflow run` command](../../reference/cli/action-commands/workflows/run.md) in [Resoto Shell](../../concepts/components/shell):

```bash
> workflow run collect
```

Once the collect run completes, you can view a summary of collected <abbr title="Amazon Web Services">AWS</abbr> resources using the following search:

```bash
> search is(aws_resource) | count kind
```
