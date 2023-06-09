import Link from '@docusaurus/Link';
import headerImage from '@site/src/assets/modules/cloudscope.webp';
import ContactForm from '@site/src/components/ContactForm';
import ModulePageCTA from '@site/src/components/ModulePage/CTA';
import ModulePageHeader from '@site/src/components/ModulePage/Header';
import ModulePageSection from '@site/src/components/ModulePage/Section';
import baseStyles from '@site/src/pages/styles.module.css';
import Layout from '@theme/Layout';
import React from 'react';
import Balancer from 'react-wrap-balancer';
import discoveryScreenshot from './img/discovery.webp';
import searchScreenshot from './img/search.webp';

export default function CloudscopePage(): JSX.Element {
  return (
    <>
      <Layout>
        <main className={baseStyles.content}>
          <ModulePageHeader
            moduleName="CloudScope"
            tagline="Effortless Resource Discovery"
            description="Get a comprehensive overview of your infrastructure with advanced search capabilities"
            image={headerImage}
          />
          <ModulePageSection image={discoveryScreenshot}>
            <h2>
              <Balancer>
                CloudScope makes it easy to <strong>locate and manage</strong>{' '}
                your cloud resources.
              </Balancer>
            </h2>
            <p>
              <Balancer>
                <Link to="/docs/how-to-guides/search/find-a-resource">
                  Find resources
                </Link>{' '}
                by name, ID, tag, metadata properties, or any combination of{' '}
                <Link to="/docs/reference/search/filters">filters</Link>.
              </Balancer>
            </p>
            <p>
              <Balancer>
                Alternatively, perform a{' '}
                <Link to="/docs/reference/search/full-text">
                  full-text search
                </Link>{' '}
                across your entire infrastructure.
              </Balancer>
            </p>
          </ModulePageSection>
          <ModulePageSection image={searchScreenshot}>
            <h2>
              <Balancer>
                Search across clouds, accounts, and regions to{' '}
                <strong>easily locate any resource</strong>.
              </Balancer>
            </h2>
            <p>
              <Balancer>
                With CloudScope, track of all your resources in one
                place&mdash;no need to tediously navigate cloud provider web
                consoles or log in and out of multiple accounts.
              </Balancer>
            </p>
          </ModulePageSection>
          <ModulePageCTA>
            <h2>
              <Balancer>Streamline Cloud Resource Management</Balancer>
            </h2>
            <p>
              <Balancer>
                CloudScope provides advanced search capabilities and a
                comprehensive overview of your cloud infrastructure.
              </Balancer>
            </p>
          </ModulePageCTA>
          <ContactForm />
        </main>
      </Layout>
    </>
  );
}
