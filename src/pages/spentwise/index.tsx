import Link from '@docusaurus/Link';
import ContactForm from '@site/src/components/ContactForm';
import ModulePageCTA from '@site/src/components/ModulePage/CTA';
import ModulePageHeader from '@site/src/components/ModulePage/Header';
import ModulePageSection from '@site/src/components/ModulePage/Section';
import Layout from '@theme/Layout';
import React from 'react';
import Balancer from 'react-wrap-balancer';

import baseStyles from '@site/src/pages/styles.module.css';

import headerImage from '@site/src/pages/img/modules/spentwise.webp';

export default function SpentwisePage(): JSX.Element {
  return (
    <>
      <Layout>
        <main className={baseStyles.content}>
          <ModulePageHeader
            moduleName="SpentWise"
            tagline="Cloud Spending Insights"
            description="Track cloud costs and identify spending spikes and anomalies"
            image={headerImage}
          />
          <ModulePageSection>
            <h2>
              <Balancer>
                SpentWise reveals details about your{' '}
                <strong>cloud spending</strong>.
              </Balancer>
            </h2>
            <p>
              <Balancer>
                Make informed decisions about how to allocate your cloud budget
                and resources.
              </Balancer>
            </p>
          </ModulePageSection>
          <ModulePageSection>
            <h2>
              <Balancer>
                Get <strong>near-real-time visibility</strong> into cloud costs
                and usage.
              </Balancer>
            </h2>
            <p>
              <Balancer>
                See detailed{' '}
                <Link to="/blog/actionable-cloud-infrastructure-metrics">
                  metrics
                </Link>{' '}
                about how your cloud spending is trending over time.
              </Balancer>
            </p>
            <p>
              <Balancer>
                You can also set up{' '}
                <Link to="/docs/how-to-guides/alerting">alerts</Link> for when
                costs exceed a defined threshold, or when spending spikes or
                drops unexpectedly.
              </Balancer>
            </p>
          </ModulePageSection>
          <ModulePageSection>
            <h2>
              <Balancer>
                <strong>No more surprises</strong> when the bill arrives.
              </Balancer>
            </h2>
            <p>
              <Balancer>
                Take immediate action when someone accidentally spins up an
                expensive high-core-count instance.
              </Balancer>
            </p>
          </ModulePageSection>
          <ModulePageCTA>
            <h2>
              <Balancer>Make Smarter Decisions About Cloud Spending</Balancer>
            </h2>
            <p>
              <Balancer>
                Start proactively tracking cloud costs to identify spending
                spikes and anomalies.
              </Balancer>
            </p>
          </ModulePageCTA>
          <ContactForm />
        </main>
      </Layout>
    </>
  );
}
