# Resoto vs. AWS Config

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

**Resoto is an open-source alternative to [AWS Config](https://aws.amazon.com/config).**

AWS Config provides an overview of the configuration of AWS resources in your AWS account, including an overview of how resources are related to one another.

## Similarities Between Resoto and AWS Config

**Both AWS Config and Resoto offer cloud asset inventory functionality to assess, audit, and evaluate configurations of your AWS resources.**

With either tool, you can:

- Create an inventory of your AWS resources
- Track changes and manage compliance
- Filter and find resources that match different criteria
- Automate remediation

## Differences Between Resoto and AWS Config

AWS Config is a native AWS service, and as such it only covers AWS resources and is optimized for integrating with the AWS product ecosystem.

|  | Resoto | AWS Config |
| --- | --- | --- |
| **Coverage** | Offers support for over 200 [AWS resources](/docs/reference/data-models/aws) and supports all AWS regions. | Only covers 120 AWS resources, not all of which are supported in every AWS region. |
| **Multi-Cloud** | Cloud agnostic and can be used as a single control plane for multiple clouds.<br />Open source and offers an SDK that makes it easy to add support for additional platforms and resources (e.g., on-prem or SaaS). | Purpose-built for AWS. |
| **Full-Text Search** | Creates an [inventory](/docs/concepts/asset-inventory-graph) of discovered resources and offers [full-text search](/docs/reference/search/full-text) as an easy way to explore your cloud inventory. | Does not offer full-text search. |
| **Resource Visualization** | Offers [dashboards](/docs/reference/user-interface/dashboards) for visual exploration of resources and their relationships.<br />Also includes a graph view, which depicts how resources are connected. | Part of the general [AWS Console](https://aws.amazon.com/console) experience.<br />To visualize data, needs to be integrated with S3 for storage, Athena for querying, and Quicksight for dashboards. |
| **Remediation** | Integrates analytics and governance into a single product to enforce policies and [perform actions on resources](/docs/concepts/resource-management).<br /> Offers [commands](/docs/reference/cli) and [jobs](/docs/concepts/automation#jobs) to automate remediation.<br />Can be used to write custom code and rules for any resource in a cloud-agnostic way. | Offers remediation in combination with [AWS Systems Manager](https://aws.amazon.com/systems-manager) and [AWS Security Hub](https://aws.amazon.com/security-hub).<br />Requires writing custom or using predefined runbooks maintained by AWS. |
| **Pricing** | Open-source and free to use.<br />To [deploy Resoto to AWS](/docs/getting-started/install-resoto/aws), you just need an EKS cluster running on an EC2 instance. | Complex pricing matrix based on the number of configuration items recorded, rules evaluated, and conformance packs enabled.<br />There are additional costs for data storage in S3, notifications through Amazon SNS, running custom rules using AWS Lambda, and usage of QuickSight dashboards. |
| **Limits** | No limits on the number of accounts to collect [inventory data](/docs/concepts/asset-inventory-graph) from or the number of [searches](/docs/reference/search), checks, and [jobs](/docs/concepts/automation#jobs) you can run on the inventory. | Has hard and soft quota limits (see [AWS Config Service Limits <span class="badge badge--secondary" aria-hidden="true">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html)).<br /><br /><details><summary>Hard quotas that cannot be increased</summary><div><table><thead><tr><th>Limit Description</th><th>Maximum</th></tr></thead><tbody><tr><td>Accounts in an aggregator</td><td>10,000</td></tr><tr><td>Conformance packs per account</td><td>50</td></tr><tr><td>AWS Config Rules per conformance pack</td><td>130</td></tr><tr><td>AWS Config Rules per Region per account across all conformance packs</td><td>150</td></tr><tr><td>Conformance packs per organization</td><td>50</td></tr><tr><td>AWS Config Rules per organization conformance pack</td><td>130</td></tr><tr><td>AWS Config Rules per Region per account across all organization conformance packs</td><td>350</td></tr></tbody></table></div></details> |
