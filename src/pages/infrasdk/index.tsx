import Link from '@docusaurus/Link';
import ContactForm from '@site/src/components/ContactForm';
import ModulePageCTA from '@site/src/components/ModulePage/CTA';
import ModulePageHeader from '@site/src/components/ModulePage/Header';
import ModulePageSection from '@site/src/components/ModulePage/Section';
import headerImage from '@site/src/img/modules/infrasdk.webp';
import baseStyles from '@site/src/pages/styles.module.css';
import Layout from '@theme/Layout';
import React from 'react';
import Balancer from 'react-wrap-balancer';

export default function InfrasdkPage(): JSX.Element {
  return (
    <>
      <Layout>
        <main className={baseStyles.content}>
          <ModulePageHeader
            moduleName="InfraSDK"
            tagline="Custom Cloud Management Solutions"
            description="Extend and customize Resoto to meet your organization&rsquo;s unique cloud infrastructure management needs"
            image={headerImage}
          />
          <ModulePageSection>
            <h2>
              <Balancer>
                InfraSDK empowers you to <strong>extend or customize</strong>{' '}
                Resoto&rsquo;s functionality.
              </Balancer>
            </h2>
            <p>
              <Balancer>
                InfraSDK is built with{' '}
                <Link href="https://python.org">Python</Link>, which offers a
                rich set of libraries and frameworks for building cloud
                management solutions.
              </Balancer>
            </p>
            <p>
              <Balancer>
                This makes it easy to develop custom plugins and integrations
                that leverage the full power of Resoto&rsquo;s cloud
                infrastructure control plane.
              </Balancer>
            </p>
          </ModulePageSection>
          <ModulePageSection>
            <h2>
              <Balancer>
                Create custom plugins that integrate with third-party tools and{' '}
                <strong>automate complex workflows</strong>.
              </Balancer>
            </h2>
            <p>
              <Balancer>
                InfraSDK supports{' '}
                <Link href="https://pandas.pydata.org">Pandas DataFrames</Link>,
                empowering you to build custom dashboards, reports, and
                visualizations that leverage Resoto&rsquo;s asset inventory data
                using frameworks like{' '}
                <Link href="https://plotly.com/dash">Plotly Dash</Link> and{' '}
                <Link href="https://streamlit.io">Streamlit</Link>.
              </Balancer>
            </p>
          </ModulePageSection>
          <ModulePageCTA>
            <h2>
              <Balancer>Customize and Extend Resoto</Balancer>
            </h2>
            <p>
              <Balancer>
                Build powerful, innovative solutions that meet the unique needs
                of your organization.
              </Balancer>
            </p>
          </ModulePageCTA>
        </main>
        <div className={baseStyles.contentBottom}>
          <ContactForm />
        </div>
      </Layout>
    </>
  );
}
