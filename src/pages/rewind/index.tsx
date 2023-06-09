import Link from '@docusaurus/Link';
import ContactForm from '@site/src/components/ContactForm';
import ModulePageCTA from '@site/src/components/ModulePage/CTA';
import ModulePageHeader from '@site/src/components/ModulePage/Header';
import ModulePageSection from '@site/src/components/ModulePage/Section';
import headerImage from '@site/src/img/modules/rewind.webp';
import baseStyles from '@site/src/pages/styles.module.css';
import Layout from '@theme/Layout';
import React from 'react';
import Balancer from 'react-wrap-balancer';

export default function RewindPage(): JSX.Element {
  return (
    <>
      <Layout>
        <main className={baseStyles.content}>
          <ModulePageHeader
            moduleName="Rewind"
            tagline="Cloud Infrastructure Snapshots"
            description="Compare the past and present states of your infrastructure"
            image={headerImage}
          />
          <ModulePageSection>
            <h2>
              <Balancer>
                Rewind takes <strong>snapshots</strong> of your cloud
                infrastructure, so you can compare the state of your cloud today
                to a point in the past.
              </Balancer>
            </h2>
            <p>
              <Balancer>
                Understand how your infrastructure has evolved, identify
                potential issues, and make informed decisions about future
                changes and capacity planing.
              </Balancer>
            </p>
          </ModulePageSection>
          <ModulePageSection>
            <h2>
              <Balancer>
                Want to know how compliance with your tagging policy has{' '}
                <strong>evolved over time</strong>?
              </Balancer>
            </h2>
            <p>
              <Balancer>
                Rewind lets you compare today&rsquo;s{' '}
                <Link to="/blog/effective-cloud-management-tagging-policies">
                  tagging policy
                </Link>{' '}
                to that from any previous point in time.
              </Balancer>
            </p>
          </ModulePageSection>
          <ModulePageCTA>
            <h2>
              <Balancer>
                View and Compare Cloud Infrastructure Snapshots
              </Balancer>
            </h2>
            <p>
              <Balancer>
                See how the state of your cloud infrastructure has changed over
                the last hour, day, week, month, or even year.
              </Balancer>
            </p>
          </ModulePageCTA>
          <ContactForm />
        </main>
      </Layout>
    </>
  );
}
