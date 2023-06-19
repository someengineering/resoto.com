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
    tagline: string;
    content: JSX.Element;
    image: string;
  }[] = [
    {
      name: 'CloudScope',
      tagline: 'Effortless Resource Discovery',
      image: cloudscopeImage,
      content: (
        <>
          <p>
            CloudScope simplifies cloud resource management by providing
            advanced{' '}
            <Link to="/docs/reference/search">search capabilities</Link> to{' '}
            <Link to="/docs/how-to-guides/search/find-a-resource">
              locate resources
            </Link>
            .
          </p>
          <p>
            CloudScope streamlines resource tracking and management by removing
            the need to navigate cloud provider web consoles where resources may
            span multiple accounts.
          </p>
        </>
      ),
    },
    {
      name: 'TagGuard',
      tagline: 'Automated Tag Enforcement',
      image: tagguardImage,
      content: (
        <>
          <p>
            TagGuard automates{' '}
            <Link to="/blog/effective-cloud-management-tagging-policies">
              tagging policy
            </Link>{' '}
            enforcement to ensure consistent and accurate tagging based on your
            organization&rsquo;s specific requirements.
          </p>
        </>
      ),
    },
    {
      name: 'Sentinel',
      tagline: 'Continuous Security Monitoring',
      image: sentinelImage,
      content: (
        <>
          <p>
            Sentinel continously monitors your cloud resources for security
            issues, so you can quickly address potential threats to your cloud
            infrastructure.
          </p>
          <p>
            Sentinel ensures that your cloud infrastructure adheres to security
            standards and best practices.
          </p>
        </>
      ),
    },
    {
      name: 'MetricMate',
      tagline: 'Comprehensive Infrastructure Monitoring',
      image: metricmateImage,
      content: (
        <>
          <p>
            MetricMate tracks infrastructure{' '}
            <Link to="/blog/actionable-cloud-infrastructure-metrics">
              metrics
            </Link>{' '}
            and cloud resource cost data.
          </p>
          <p>
            MetricMate exports data to popular database systems and offers APIs
            for custom low-code dashboards. management.
          </p>
        </>
      ),
    },
    {
      name: 'Defrag',
      tagline: 'Automated Resource Cleanup',
      image: defragImage,
      content: (
        <>
          <p>
            Defrag automates{' '}
            <Link to="/docs/concepts/resource-management/cleanup">
              cloud resource cleanup
            </Link>{' '}
            to help organizations reduce cloud costs and maintain tidy cloud
            infrastructures.
          </p>
          <p>
            Customizable cleanup policies delete resources based on your
            organization&rsquo;s requirements and reduce the risk of
            overprovisioning and quota overages.
          </p>
        </>
      ),
    },
    {
      name: 'SpentWise',
      tagline: 'Cloud Spending Insights',
      image: spentwiseImage,
      content: (
        <>
          <p>
            SpentWise offers near-real-time visibility visibility into cloud
            costs and usage, so you can identify spikes in usage and track
            trends over time.
          </p>
          <p>
            With detailed{' '}
            <Link to="/blog/actionable-cloud-infrastructure-metrics">
              metrics
            </Link>{' '}
            and custom <Link to="/docs/how-to-guides/alerting">alerts</Link>,
            make informed decisions about your cloud resources and take
            immediate action when unexpected costs arise.
          </p>
        </>
      ),
    },
    {
      name: 'ChronoLog',
      tagline: 'Your Cloud Infrastructure Changelog',
      image: chronologImage,
      content: (
        <>
          <p>
            ChronoLog provides a comprehensive changelog of your cloud
            resources.
          </p>
          <p>
            Review the entire lifecycle of any cloud resource, from its creation
            time to when it is cleaned up.
          </p>
        </>
      ),
    },
    {
      name: 'DataLink',
      tagline: 'Infrastructure Data Sync',
      image: datalinkImage,
      content: (
        <>
          <p>
            DataLink exports cloud asset inventory data to your favorite
            database or cloud data warehouse.
          </p>
          <p>
            Integrate with tools like{' '}
            <Link href="https://tableau.com">Tableau</Link>,{' '}
            <Link href="https://grafana.com">Grafana</Link>, or{' '}
            <Link href="https://metabase.com">Metabase</Link> to unlock insights
            and make informed decisions about your cloud infrastructure.
          </p>
        </>
      ),
    },
    {
      name: 'Inventory',
      tagline: 'Cloud Asset Inventory Made Easy',
      image: inventoryImage,
      content: (
        <>
          <p>
            Inventory maintains an{' '}
            <Link to="/docs/concepts/asset-inventory-graph">
              asset inventory
            </Link>{' '}
            of your cloud infrastructure.
          </p>
          <p>
            Inventory makes it easy to{' '}
            <Link to="/docs/how-to-guides/search/find-a-resource">
              find specific resources or groups of resources
            </Link>
            , even in large and complex cloud environments.
          </p>
          <p>
            You can also export inventory data to a variety of formats,
            including <abbr title="JavaScript Object Notation">JSON</abbr>,{' '}
            <abbr title="comma-separated values">CSV</abbr>, and{' '}
            <abbr title="Structured Query Language">SQL</abbr>.
          </p>
        </>
      ),
    },
    {
      name: 'Notify',
      tagline: 'Cloud Infrastructure Alerts',
      image: notifyImage,
      content: (
        <>
          <p>
            Notify automates alerts and incident responses for changes to your
            cloud infrastructure.
          </p>
          <p>
            Notify integrates with tools like{' '}
            <Link to="/docs/how-to-guides/alerting/send-prometheus-alertmanager-alerts">
              Alertmanager
            </Link>{' '}
            and{' '}
            <Link to="/docs/how-to-guides/alerting/create-pagerduty-alerts">
              PagerDuty
            </Link>
            , and can{' '}
            <Link to="/docs/how-to-guides/alerting/create-jira-issues">
              create Jira tickets
            </Link>{' '}
            or send data to custom HTTP endpoints, so your team can respond
            quickly to any incident.
          </p>
        </>
      ),
    },
    {
      name: 'Rewind',
      tagline: 'Cloud Infrasturcture Snapshots',
      image: rewindImage,
      content: (
        <>
          <p>
            Rewind takes snapshots of your cloud infrastructure, so you can
            track changes over time.
          </p>
          <p>
            Rewind aids in understanding infrastructure evolution, identifying
            potential issues, and making informed decisions about capacity
            planning and policy adherence.
          </p>
        </>
      ),
    },
    {
      name: 'Resolve',
      tagline: 'Automated Infrastructure Remediation',
      image: resolveImage,
      content: (
        <>
          <p>
            Resolve automatically addresses issues in your cloud infrastructure
            based on custom policies that trigger actions based on
            organizational requirements.
          </p>
          <p>
            Improve resource efficiency and reduce costs by incorporating
            tagging, cleanup, and cloud API actions.
          </p>
        </>
      ),
    },
    {
      name: 'InfraSDK',
      tagline: 'Custom Cloud Management Solutions',
      image: infrasdkImage,
      content: (
        <>
          <p>
            InfraSDK empowers you to extend or customize Resoto&rsquo;s
            functionality.
          </p>
          <p>
            InfraSDK is built with <Link href="https://python.org">Python</Link>{' '}
            and supports popular data manipulation libraries like{' '}
            <Link href="https://pandas.pydata.org">Pandas DataFrames</Link> and
            frameworks like <Link href="https://streamlit.io">Streamlit</Link>,
            empowering you to create tailored dashboards, reports, and
            visualizations.
          </p>
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
              forceRender
              className={styles.panel}
              selectedClassName={styles.selectedPanel}
              key={`tab-panel-${module.name.toLowerCase()}`}
            >
              <div>
                <h2>
                  <span>
                    Resoto <strong>{module.name}</strong>:
                  </span>
                  <br />
                  {module.tagline}
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
