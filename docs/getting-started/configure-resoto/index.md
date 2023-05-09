---
sidebar_label: "3. Configure Resoto"
sidebar_position: 3
pagination_prev: getting-started/launch-resoto/index
pagination_next: getting-started/explore-resoto/index
---

# Configure Resoto

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
```

Resoto needs to be configured to authenticate with your cloud providers so it can access your resources.

## Setup Wizard

When you open Resoto UI for the first time, you will see a [Setup Wizard](../../reference/user-interface/setup-wizard.md) that will guide you through the initial setup process. The [Setup Wizard](../../reference/user-interface/setup-wizard.md) allows you to configure one or more cloud providers.

![Resoto UI Setup Wizard](./img/setup-wizard.png)

:::note

**Resoto requires a [set of required permissions](../../reference/permissions/aws.md) to access AWS resources.**

We provide a CloudFormation template that creates a role with the required permissions. You can use this template to roll out the permissions to your entire organization.

See [How to Roll Out Resoto AWS Permissions with CloudFormation](../../how-to-guides/configuration/roll-out-resoto-aws-permissions-with-cloudformation/index.md) for step-by-step directions on how to use the template.

:::

:::info

**The [Setup Wizard](../../reference/user-interface/setup-wizard.md) provides simplified configuration options to aid in the initial setup of a new Resoto install.**

More complex configuration options are available in the [Configuration Editor](../../reference/user-interface/configuration-editor.md):

![Configuration Editor](./img/configuration-editor.png)

See [Data Sources How-To Guides](../../how-to-guides/data-sources/index.md) for detailed step-by-step directions on how to configure cloud providers.

:::
