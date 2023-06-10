import Link from '@docusaurus/Link';
import ContactForm from '@site/src/components/ContactForm';
import ModulePageCTA from '@site/src/components/ModulePage/CTA';
import ModulePageHeader from '@site/src/components/ModulePage/Header';
import ModulePageSection from '@site/src/components/ModulePage/Section';
import headerImage from '@site/src/img/modules/inventory.webp';
import baseStyles from '@site/src/pages/styles.module.css';
import Layout from '@theme/Layout';
import React from 'react';
import Balancer from 'react-wrap-balancer';
import collectScreenshot from './img/collect.webp';
import searchScreenshot from './img/search.webp';

export default function InventoryPage(): JSX.Element {
  return (
    <>
      <Layout>
        <main className={baseStyles.content}>
          <ModulePageHeader
            moduleName="Inventory"
            tagline="Cloud Asset Inventory Made Easy"
            description="Maintain a complete and up-to-date inventory of your cloud resources"
            image={headerImage}
          />
          <ModulePageSection image={collectScreenshot}>
            <h2>
              <Balancer>
                Inventory creates and maintains an{' '}
                <strong>asset inventory</strong> of your cloud infrastructure.
              </Balancer>
            </h2>
            <p>
              <Balancer>
                Inventory continuously{' '}
                <Link to="/docs/concepts/cloud-data-sync">
                  scans and monitors your cloud infrastructure
                </Link>{' '}
                to ensure your{' '}
                <Link to="/docs/concepts/asset-inventory-graph">inventory</Link>{' '}
                is always up to date, so that you don&rsquo;t have to.
              </Balancer>
            </p>
            <p>
              <Balancer>
                You&rsquo;ll always have an up-to-date view of your
                infrastructure, even as it grows and changes over time.
              </Balancer>
            </p>
          </ModulePageSection>
          <ModulePageSection image={searchScreenshot}>
            <h2>
              <Balancer>
                <strong>Search and filter</strong> assets based on a variety of
                criteria.
              </Balancer>
            </h2>
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
          </ModulePageSection>
          <ModulePageCTA>
            <h2>
              <Balancer>Build Your Cloud Asset Inventory</Balancer>
            </h2>
            <p>
              <Balancer>
                Always have an up-to-date view of your infrastructure, even as
                it grows and changes over time.
              </Balancer>
            </p>
          </ModulePageCTA>
          <ContactForm />
        </main>
      </Layout>
    </>
  );
}
