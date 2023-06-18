import Link from '@docusaurus/Link';
import chronologImage from '@site/src/img/modules/chronolog.webp';
import cloudscopeImage from '@site/src/img/modules/cloudscope.webp';
import datalinkImage from '@site/src/img/modules/datalink.webp';
import defragImage from '@site/src/img/modules/defrag.webp';
import infrasdkImage from '@site/src/img/modules/infrasdk.webp';
import inventoryImage from '@site/src/img/modules/inventory.webp';
import metricmateImage from '@site/src/img/modules/metricmate.webp';
import notifyImage from '@site/src/img/modules/notify.webp';
import resolveImage from '@site/src/img/modules/resolve.webp';
import rewindImage from '@site/src/img/modules/rewind.webp';
import sentinelImage from '@site/src/img/modules/sentinel.webp';
import spentwiseImage from '@site/src/img/modules/spentwise.webp';
import tagguardImage from '@site/src/img/modules/tagguard.webp';
import baseStyles from '@site/src/pages/styles.module.css';
import clsx from 'clsx';
import GithubSlugger from 'github-slugger';
import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import styles from './styles.module.css';

export default function HomepageModules(): JSX.Element {
  const githubSlugger = new GithubSlugger();

  const modules: {
    name: string;
    content: JSX.Element;
    image: string;
  }[] = [
    {
      name: 'CloudScope',
      image: cloudscopeImage,
      content: (
        <>
          CloudScope, Resoto&rsquo;s search module, simplifies cloud resource
          management by providing advanced search capabilities to locate
          resources by their metadata, or even fulltext search across your
          entire infrastructure. With the ability to search across clouds,
          accounts, and regions, CloudScope streamlines resource tracking and
          management, removing the need to navigate multiple cloud provider web
          consoles or log in and out of multiple accounts.
        </>
      ),
    },
    {
      name: 'TagGuard',
      image: tagguardImage,
      content: (
        <>
          Resoto TagGuard automates tagging policy enforcement for cloud
          resources, ensuring consistent and accurate tagging based on your
          organization&rsquo;s specific requirements. By reducing human error
          and maintaining compliance with internal and external regulations,
          TagGuard simplifies tracking and organizing resources.
        </>
      ),
    },
    {
      name: 'Sentinel',
      image: sentinelImage,
      content: (
        <>
          Resoto Sentinel provides detailed reports and alerts for any security
          issues that are detected, enabling you to quickly address potential
          threats to your cloud infrastructure. With continuous infrastructure
          security monitoring, you can ensure that your cloud infrastructure
          adheres to security standards and best practices, providing peace of
          mind and reducing the risk of security breaches.
        </>
      ),
    },
    {
      name: 'MetricMate',
      image: metricmateImage,
      content: (
        <>
          Resoto MetricMate offers comprehensive infrastructure metrics and cost
          data for cloud resources, enabling easy monitoring and optimization.
          It exports data to standard systems and provides APIs for custom
          low-code dashboards, assisting with capacity planning and cost
          management.
        </>
      ),
    },
    {
      name: 'Defrag',
      image: defragImage,
      content: (
        <>
          Resoto Defrag automates cloud resource cleanup and expiration tagging,
          helping organizations save costs and maintain tidy cloud
          infrastructures. Customizable policies and automated deletion of
          resources, such as those resulting from broken CI runs or failed IaC
          deployments, reduce the risk of overprovisioning and quota overages.
        </>
      ),
    },
    {
      name: 'SpentWise',
      image: spentwiseImage,
      content: (
        <>
          SpentWise, Resoto&rsquo;s cost tracking module, provides near
          real-time visibility into your cloud compute and storage spending,
          allowing you to identify spikes in usage and track trends over time.
          With detailed metrics and custom alerts, you can make informed
          decisions about your cloud resources and take action immediately when
          unexpected costs arise. By monitoring your cloud costs with SpentWise,
          you can stay on top of your spending and avoid unpleasant surprises at
          the end of the month.
        </>
      ),
    },
    {
      name: 'ChronoLog',
      image: chronologImage,
      content: (
        <>
          Resoto ChronoLog is a module that provides a comprehensive changelog
          for your individual cloud resources. With ChronoLog, you can see the
          entire lifecycle of a cloud resource, including all changes made to it
          over time. This can be invaluable for troubleshooting issues,
          understanding how your infrastructure has evolved, and identifying
          potential security risks.
        </>
      ),
    },
    {
      name: 'DataLink',
      image: datalinkImage,
      content: (
        <>
          DataLink simplifies exporting infrastructure data to existing
          databases and data warehouses, enabling seamless integration with
          tools like Tableau, Grafana, or Metabase. By connecting Resoto data
          with current data infrastructure, organizations can unlock insights
          and make informed decisions about their cloud infrastructure.
        </>
      ),
    },
    {
      name: 'Inventory',
      image: inventoryImage,
      content: (
        <>
          Resoto Inventory addresses the issue of outdated inventory
          documentation by maintaining an up-to-date cloud asset inventory,
          automatically adding resources, and offering search/filter
          capabilities. Data export in JSON, CSV, and SQL formats enables easy
          sharing.
        </>
      ),
    },
    {
      name: 'Notify',
      image: notifyImage,
      content: (
        <>
          Notify is Resoto&rsquo;s alerting module that enables automated alerts
          and incident responses for any undesired change in an
          organization&rsquo;s cloud infrastructure. It integrates with tools
          like Alertmanager or Pagerduty, and can also create Jira tickets or
          trigger custom HTTP endpoints, allowing teams to stay up-to-date and
          respond quickly to incidents. The problem it solves is unexpected
          issues in cloud infrastructure, while the solution is to have Resoto
          react and alert on any change in infrastructure.
        </>
      ),
    },
    {
      name: 'Rewind',
      image: rewindImage,
      content: (
        <>
          Resoto Rewind enables cloud infrastructure snapshots and comparison,
          allowing users to track changes over time and evaluate past states.
          This module aids in understanding infrastructure evolution,
          identifying potential issues, and making informed decisions about
          capacity planning and policy adherence.
        </>
      ),
    },
    {
      name: 'Resolve',
      image: resolveImage,
      content: (
        <>
          Resoto Resolve automates remediation of cloud infrastructure issues by
          defining custom policies that trigger actions based on organizational
          requirements. This module streamlines issue management, improves
          resource efficiency, and reduces costs by incorporating tagging,
          cleanup, and cloud API actions.
        </>
      ),
    },
    {
      name: 'InfraSDK',
      image: infrasdkImage,
      content: (
        <>
          Resoto InfraSDK, built on Python, allows for customizing and extending
          Resoto with custom plugins, APIs, and integrations. It supports
          popular data manipulation libraries like Pandas and data frameworks
          like Streamlit, enabling the creation of tailored dashboards, reports,
          and visualizations for unique organizational needs.
        </>
      ),
    },
  ];

  return (
    <div className={clsx(baseStyles.section, styles.section)}>
      <div className={clsx(baseStyles.inner, styles.inner)}>
        <Tabs className={styles.tabs}>
          <TabList className={clsx(styles.tabList, 'thin-scrollbar')}>
            {modules.map((module) => (
              <Tab
                className={clsx(styles.tab, module.name.toLowerCase())}
                selectedClassName={styles.selectedTab}
                key={`tab-${module.name.toLowerCase()}`}
              >
                {module.name}
              </Tab>
            ))}
          </TabList>
          {modules.map((module) => (
            <TabPanel
              className={styles.panel}
              selectedClassName={styles.selectedPanel}
              key={`tab-panel-${module.name.toLowerCase()}`}
            >
              <div>
                <h2>
                  Resoto <strong>{module.name}</strong>
                </h2>
                {module.content}
                <div>
                  <Link
                    to={`/${githubSlugger.slug(module.name)}`}
                    className={clsx(
                      styles.button,
                      baseStyles.button,
                      baseStyles.outlinedButton,
                      baseStyles.moreButton
                    )}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div
                style={{ backgroundImage: `url(${module.image})` }}
                className={styles.image}
                aria-hidden="true"
              />
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
