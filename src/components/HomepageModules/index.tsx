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
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Balancer from 'react-wrap-balancer';
import LeftCaret from './img/caret-left.svg';
import RightCaret from './img/caret-right.svg';
import styles from './styles.module.css';

export default function HomepageModules(): JSX.Element {
  const githubSlugger = new GithubSlugger();
  const tabListRef = useRef<HTMLDivElement>(null);
  const [scrollStart, setScrollStart] = useState(true);
  const [scrollEnd, setScrollEnd] = useState(false);

  const onScroll = useCallback(() => {
    setScrollStart(tabListRef.current.scrollLeft === 0);
    setScrollEnd(
      tabListRef.current.scrollLeft >=
        tabListRef.current.scrollWidth - tabListRef.current.clientWidth - 1
    );
  }, []);

  useEffect(() => {
    tabListRef.current.addEventListener('scroll', onScroll);
  }, [tabListRef, onScroll]);

  const scroll = (direction: 'left' | 'right') => {
    const distance = 100;
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      tabListRef.current.scrollLeft =
        tabListRef.current.scrollLeft +
        ((direction === 'left' ? -1 : 1) * distance) / 10;
      onScroll();

      scrollAmount += distance / 10;
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, 25);
  };

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
            <Balancer>
              CloudScope simplifies cloud resource management by providing
              advanced{' '}
              <Link to="/docs/reference/search">search capabilities</Link> to{' '}
              <Link to="/docs/how-to-guides/search/find-a-resource">
                locate resources
              </Link>
              .
            </Balancer>
          </p>
          <p>
            <Balancer>
              CloudScope streamlines resource tracking and management by
              removing the need to navigate cloud provider web consoles where
              resources may span multiple accounts.
            </Balancer>
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
            <Balancer>
              TagGuard automates{' '}
              <Link to="/blog/effective-cloud-management-tagging-policies">
                tagging policy
              </Link>{' '}
              enforcement to ensure consistent and accurate tagging based on
              your organization&rsquo;s specific requirements.
            </Balancer>
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
            <Balancer>
              Sentinel continously monitors your cloud resources for security
              issues, so you can quickly address potential threats to your cloud
              infrastructure.
            </Balancer>
          </p>
          <p>
            <Balancer>
              Sentinel ensures that your cloud infrastructure adheres to{' '}
              <Link to="/blog/cloud-resource-security-benchmarks">
                security standards
              </Link>{' '}
              and best practices.
            </Balancer>
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
            <Balancer>
              MetricMate tracks infrastructure{' '}
              <Link to="/blog/actionable-cloud-infrastructure-metrics">
                metrics
              </Link>{' '}
              and cloud resource cost data.
            </Balancer>
          </p>
          <p>
            <Balancer>
              MetricMate exports data to popular database systems and offers
              APIs for custom low-code dashboards. management.
            </Balancer>
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
            <Balancer>
              Defrag automates{' '}
              <Link to="/docs/concepts/resource-management/cleanup">
                cloud resource cleanup
              </Link>{' '}
              to help organizations reduce cloud costs and maintain tidy cloud
              infrastructures.
            </Balancer>
          </p>
          <p>
            <Balancer>
              Customizable cleanup policies delete resources based on your
              organization&rsquo;s requirements and reduce the risk of
              overprovisioning and quota overages.
            </Balancer>
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
            <Balancer>
              SpentWise offers near-real-time visibility into cloud costs and
              usage, so you can identify spikes in usage and track trends over
              time.
            </Balancer>
          </p>
          <p>
            <Balancer>
              With detailed{' '}
              <Link to="/blog/actionable-cloud-infrastructure-metrics">
                metrics
              </Link>{' '}
              and custom <Link to="/docs/how-to-guides/alerting">alerts</Link>,
              make informed decisions about your cloud resources and take
              immediate action when unexpected costs arise.
            </Balancer>
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
            <Balancer>
              ChronoLog provides a comprehensive changelog of your cloud
              resources.
            </Balancer>
          </p>
          <p>
            <Balancer>
              Review the{' '}
              <Link to="/docs/reference/cli/search-commands/history">
                history
              </Link>{' '}
              and lifecycle of any cloud resource, from its creation time to
              when it is{' '}
              <Link to="/docs/concepts/resource-management/cleanup">
                cleaned up
              </Link>
              .
            </Balancer>
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
            <Balancer>
              DataLink exports cloud asset inventory data to your favorite
              database or cloud data warehouse.
            </Balancer>
          </p>
          <p>
            <Balancer>
              Integrate with tools like{' '}
              <Link href="https://tableau.com">Tableau</Link>,{' '}
              <Link href="https://grafana.com">Grafana</Link>, or{' '}
              <Link href="https://metabase.com">Metabase</Link> to unlock
              insights and make informed decisions about your cloud
              infrastructure.
            </Balancer>
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
            <Balancer>
              Inventory maintains an{' '}
              <Link to="/docs/concepts/asset-inventory-graph">
                asset inventory
              </Link>{' '}
              of your cloud infrastructure.
            </Balancer>
          </p>
          <p>
            <Balancer>
              Inventory makes it easy to{' '}
              <Link to="/docs/how-to-guides/search/find-a-resource">
                find specific resources or groups of resources
              </Link>
              , even in large and complex cloud environments.
            </Balancer>
          </p>
          <p>
            <Balancer>
              You can also export inventory data to a variety of formats,
              including <abbr title="JavaScript Object Notation">JSON</abbr>,{' '}
              <abbr title="comma-separated values">CSV</abbr>, and{' '}
              <abbr title="Structured Query Language">SQL</abbr>.
            </Balancer>
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
            <Balancer>
              Notify automates alerts and incident responses for changes to your
              cloud infrastructure.
            </Balancer>
          </p>
          <p>
            <Balancer>
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
            </Balancer>
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
            <Balancer>
              Rewind takes snapshots of your cloud infrastructure, so you can
              track changes over time.
            </Balancer>
          </p>
          <p>
            <Balancer>
              Rewind aids in understanding infrastructure evolution, identifying
              potential issues, and making informed decisions about capacity
              planning and policy adherence.
            </Balancer>
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
            <Balancer>
              Resolve automatically addresses issues in your cloud
              infrastructure based on custom policies that trigger actions based
              on organizational requirements.
            </Balancer>
          </p>
          <p>
            <Balancer>
              Improve resource efficiency and reduce costs by incorporating
              tagging, cleanup, and cloud API actions.
            </Balancer>
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
            <Balancer>
              InfraSDK empowers you to extend or customize Resoto&rsquo;s
              functionality.
            </Balancer>
          </p>
          <p>
            <Balancer>
              InfraSDK is built with{' '}
              <Link href="https://python.org">Python</Link> and supports popular
              data manipulation libraries like{' '}
              <Link href="https://pandas.pydata.org">Pandas DataFrames</Link>{' '}
              and frameworks like{' '}
              <Link href="https://streamlit.io">Streamlit</Link>, empowering you
              to create tailored dashboards, reports, and visualizations.
            </Balancer>
          </p>
        </>
      ),
    },
  ];

  return (
    <div className={clsx(baseStyles.section, styles.section)}>
      <div className={clsx(baseStyles.inner, styles.inner)}>
        <Tabs className={styles.tabs}>
          <div className={styles.tabListContainer}>
            <button
              aria-label="Scroll left"
              className={styles.scrollButton}
              onClick={() => scroll('left')}
              disabled={scrollStart}
            >
              <LeftCaret />
            </button>
            <div className="thin-scrollbar" ref={tabListRef}>
              <TabList className={styles.tabList}>
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
            </div>
            <button
              aria-label="Scroll right"
              className={styles.scrollButton}
              onClick={() => scroll('right')}
              disabled={scrollEnd}
            >
              <RightCaret />
            </button>
          </div>
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
                    Discover {module.name}
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
