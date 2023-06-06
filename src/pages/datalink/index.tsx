import Link from '@docusaurus/Link';
import ContactForm from '@site/src/components/ContactForm';
import ModulePageCTA from '@site/src/components/ModulePage/CTA';
import ModulePageHeader from '@site/src/components/ModulePage/Header';
import ModulePageSection from '@site/src/components/ModulePage/Section';
import Layout from '@theme/Layout';
import React from 'react';
import Balancer from 'react-wrap-balancer';

import baseStyles from '@site/src/pages/styles.module.css';

import headerImage from '@site/src/pages/img/modules/datalink.webp';

export default function DatalinkPage(): JSX.Element {
  return (
    <>
      <Layout>
        <main className={baseStyles.content}>
          <ModulePageHeader
            moduleName="DataLink"
            tagline="Infrastructure Data Sync"
            description="Export cloud asset inventory data to a data lakes and warehouses"
            image={headerImage}
          />
          <ModulePageSection>
            <h2>
              <Balancer>
                DataLink exports your asset inventory data to your favorite{' '}
                <strong>database or cloud data warehouse</strong>.
              </Balancer>
            </h2>
            <p>
              <Balancer>
                View your infrastructure data in tools like{' '}
                <Link href="https://tableau.com">Tableau</Link>,{' '}
                <Link href="https://grafana.com">Grafana</Link>, or Metabase.
              </Balancer>
            </p>
            <p>
              <Balancer>
                DataLink supports a wide range of export destinations,
                including:
                <br />
                SQLite files, MySQL and PostgreSQL databases, Snowflake
                cloud-based data warehousing platform, and CSV or Parquet
                columnar structure files (which can be uploaded to S3-compatible
                storage or Google Cloud Storage).
              </Balancer>
            </p>
            {/* TO-DO: List supported export options in a bulleted list */}
            {/* <ul>
              <li>SQLite files</li>
              <li>MySQL and MariaDB databases</li>
              <li>PostgreSQL databases</li>
              <li>Snowflake cloud-based data warehousing platform</li>
              <li>
                CSV or Parquet columnar structure files (which can be uploaded
                to S3-compatible storage or Google Cloud Storage).
              </li>
            </ul> */}
          </ModulePageSection>
          <ModulePageSection>
            <h2>
              <Balancer>
                DataLink gives you the <strong>flexibility</strong> to choose
                the tools that work best for your organization or team.
              </Balancer>
            </h2>
            <p>
              <Balancer>
                Use exported data to generate reports, build custom dashboards,
                or perform complex analytics.
              </Balancer>
            </p>
            <p>
              <Balancer>
                Whether you want to export your asset inventory data to a SQL
                database or a cloud data warehouse, DataLink makes it easy to
                connect your Resoto data with your existing data infrastructure.
              </Balancer>
            </p>
          </ModulePageSection>
          <ModulePageCTA>
            <h2>
              <Balancer>Unlock New Insights About Your Infrastructure</Balancer>
            </h2>
            <p>
              <Balancer>
                Integrate Resoto&rsquo;s cloud asset inventory data into your
                existing data infrastructure.
              </Balancer>
            </p>
          </ModulePageCTA>
          <ContactForm />
        </main>
      </Layout>
    </>
  );
}
