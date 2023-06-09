import Link from '@docusaurus/Link';
import headerImage from '@site/src/assets/modules/sentinel.webp';
import ContactForm from '@site/src/components/ContactForm';
import ModulePageCTA from '@site/src/components/ModulePage/CTA';
import ModulePageHeader from '@site/src/components/ModulePage/Header';
import ModulePageSection from '@site/src/components/ModulePage/Section';
import baseStyles from '@site/src/pages/styles.module.css';
import Layout from '@theme/Layout';
import React from 'react';
import Balancer from 'react-wrap-balancer';
import cliScreenshot from './img/cli.webp';
import uiScreenshot from './img/ui.webp';

export default function SentinelPage(): JSX.Element {
  return (
    <>
      <Layout>
        <main className={baseStyles.content}>
          <ModulePageHeader
            moduleName="Sentinel"
            tagline="Continuous Security Monitoring"
            description="Ensure your infrastructure adheres to security standards"
            image={headerImage}
          />
          <ModulePageSection image={cliScreenshot}>
            <h2>
              <Balancer>
                Sentinel <strong>continuously monitors</strong> the security of
                your cloud resources.
              </Balancer>
            </h2>
            <p>
              <Balancer>
                With Sentinel, you ensure your cloud infrastructure adheres to
                security standards and best practices.
              </Balancer>
            </p>
          </ModulePageSection>
          <ModulePageSection image={uiScreenshot}>
            <h2>
              <Balancer>
                Sentinel ships with support for{' '}
                <strong>industry-standard benchmarks</strong> like AWS CIS 1.5.
              </Balancer>
            </h2>
            <p>
              <Balancer>
                Round-the-clock comparison of the state of your infrastructure
                to{' '}
                <Link to="/blog/cloud-resource-security-benchmarks">
                  industry-standard benchmarks
                </Link>{' '}
                ensures your cloud is safe and secure.
              </Balancer>
            </p>
          </ModulePageSection>
          <ModulePageCTA>
            <h2>
              <Balancer>Gain Insights into Potential Security Issues</Balancer>
            </h2>
            <p>
              <Balancer>
                Sentinel provides detailed reports and alerts for detected
                security issues, allowing you to easily address potential
                threats to your infrastructure before they impact your business.
              </Balancer>
            </p>
          </ModulePageCTA>
          <ContactForm />
        </main>
      </Layout>
    </>
  );
}
