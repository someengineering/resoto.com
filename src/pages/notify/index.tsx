import Link from '@docusaurus/Link';
import ContactForm from '@site/src/components/ContactForm';
import ModulePageCTA from '@site/src/components/ModulePage/CTA';
import ModulePageHeader from '@site/src/components/ModulePage/Header';
import ModulePageSection from '@site/src/components/ModulePage/Section';
import Layout from '@theme/Layout';
import React from 'react';
import Balancer from 'react-wrap-balancer';

import baseStyles from '@site/src/pages/styles.module.css';

import headerImage from '@site/src/pages/img/modules/notify.webp';

export default function NotifyPage(): JSX.Element {
  return (
    <>
      <Layout>
        <main className={baseStyles.content}>
          <ModulePageHeader
            moduleName="Notify"
            tagline="Cloud Infrastructure Alerts"
            description="Automate incident responses for your cloud resources"
            image={headerImage}
          />
          <ModulePageSection>
            <h2>
              <Balancer>
                Notify automates <strong>alerts and incident responses</strong>{' '}
                for changes to your cloud infrastructure.
              </Balancer>
            </h2>
            <p>
              <Balancer>
                Stay on top of critical changes and events, even when
                you&rsquo;re away from your desk.
              </Balancer>
            </p>
          </ModulePageSection>
          <ModulePageSection>
            <h2>
              <Balancer>
                Notify <strong>integrates with tools</strong> like{' '}
                <Link to="/docs/how-to-guides/alerting/send-prometheus-alertmanager-alerts">
                  Alertmanager
                </Link>{' '}
                and{' '}
                <Link to="/docs/how-to-guides/alerting/create-pagerduty-alerts">
                  PagerDuty
                </Link>
                , allowing you to receive alerts via email, SMS, or phone call.
              </Balancer>
            </h2>
            <p>
              <Balancer>
                You can also use Notify to{' '}
                <Link to="/docs/how-to-guides/alerting/create-jira-issues">
                  create Jira tickets
                </Link>{' '}
                or send data to custom HTTP endpoints, so your team can respond
                quickly to any incident.
              </Balancer>
            </p>
          </ModulePageSection>
          <ModulePageCTA>
            <h2>
              <Balancer>
                React and Alert on Changes to Your Infrastructure
              </Balancer>
            </h2>
            <p>
              <Balancer>
                Automate notifications and incident responses for your cloud
                resources.
              </Balancer>
            </p>
          </ModulePageCTA>
          <ContactForm />
        </main>
      </Layout>
    </>
  );
}
