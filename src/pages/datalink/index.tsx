import Link from '@docusaurus/Link';
import ContactForm from '@site/src/components/ContactForm';
import ModulePageCTA from '@site/src/components/ModulePage/CTA';
import ModulePageHeader from '@site/src/components/ModulePage/Header';
import ModulePageSection from '@site/src/components/ModulePage/Section';
import headerImage from '@site/src/img/modules/datalink.webp';
import baseStyles from '@site/src/pages/styles.module.css';
import Layout from '@theme/Layout';
import React from 'react';
import Balancer from 'react-wrap-balancer';

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
                <Link href="https://grafana.com">Grafana</Link>, or{' '}
                <Link href="https://metabase.com">Metabase</Link>.
              </Balancer>
            </p>
            <p>
              <Balancer>
                DataLink supports a wide range of export destinations,
                including:
                <br />
                <Link href="https://sqlite.org">SQLite</Link> files,{' '}
                <Link href="https://mysql.com">MySQL</Link> and{' '}
                <Link href="https://postgresql.org">PostgreSQL</Link> databases,{' '}
                <Link href="https://snowflake.com">Snowflake</Link> cloud data
                warehousing platform, and{' '}
                <abbr title="comma-separated values">CSV</abbr> or{' '}
                <Link href="https://parquet.apache.org">Parquet</Link> columnar
                structure files.
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
                Whether you want to export your asset inventory data to a{' '}
                <abbr title="Structured Query Language">SQL</abbr> database or a
                cloud data warehouse, DataLink makes it easy to connect your
                Resoto data with existing data infrastructure.
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
