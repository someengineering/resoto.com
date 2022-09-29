---
sidebar_label: Create Jira Issues
sidebar_custom_props:
  tags: [Jira]
---

# How to Create Jira Issues

Resoto constantly monitors your infrastructure, and can alert you to any detected issues.

One way to receive these notifications is via [Jira](https://www.atlassian.com/software/jira). In this guide, we will configure Resoto to create Jira issues in a project board.

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your cloud resources](../../../getting-started/configure-cloud-provider-access/index.md).

## Directions

1. [Create an API Token](https://id.atlassian.com/manage-profile/security/api-tokens) in Jira.

2. Define search criteria that will trigger an alert. For example, let's say we have a test account `test-account` where instances that are older than 4 years are not permitted:

   ```bash
   > search is(instance) and age>4yr
   ```

3. Now that we've defined the alert trigger, we will simply pipe the result of the search query to the `jira` [custom command](../../../reference/cli/index.md#custom-commands), replacing the `title` with your desired issue title and `webhook` with the call to Jiras REST Api. You also need to provide your username, the API Token, the Project Id and your User Id (you will be listed as the Reporter of the Issue):

   ```bash
   > search is(instance) and age>4yr | jira title="Resoto found something!" message="The following instances are older than 4 years:" webhook="https://your-domain.atlassian.net/rest/api/2/issue" username="you@your-team.com" password="xxxxxxxxx" project_id="12345" reporter_id="1111111111111"
   ```

   If the defined condition is currently true, you should see a new Issue in Jira:

   ![Example Jira Issue](./img/resoto-jira-issue.png)

4. For the time being we do not recommend that you set up Jobs for Issue creation as this might result in a deluge of new Issues.

:::tip

For all parameters mentioned above you can specify defaults in the `jira` custom command configuration, so that you can simply execute `jira title="..."`.

:::

## Further Reading

- [Search](../../../concepts/search/index.md)
- [Job](../../../concepts/automation/job.md)
- [Command-Line Interface](../../../reference/cli/index.md)
