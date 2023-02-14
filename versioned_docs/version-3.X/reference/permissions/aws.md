---
sidebar_label: Amazon Web Services
---

# Amazon Web Services Permissions

```mdx-code-block
import AwsPolicy from '@site/src/components/AwsPolicy';
import AwsPolicyComparison from '@site/src/components/AwsPolicyComparison';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
```

Each version of Resoto programmatically generates the specific <abbr title="Identity and Access Management">IAM</abbr> permissions it requires to collect (and optionally, manipulate) AWS resources.

<AwsPolicyComparison policyNames={["ResotoOrgList", "ResotoCollect", "ResotoMutate"]} />

## `ResotoOrgList`

<AwsPolicy policyName="ResotoOrgList" format="code-block" />

## `ResotoCollect`

<AwsPolicy policyName="ResotoCollect" />

## `ResotoMutate`

<AwsPolicy policyName="ResotoMutate" />
