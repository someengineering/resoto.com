import Link from '@docusaurus/Link';
import ContactForm from '@site/src/components/ContactForm';
import ModulePageCTA from '@site/src/components/ModulePage/CTA';
import ModulePageHeader from '@site/src/components/ModulePage/Header';
import ModulePageSection from '@site/src/components/ModulePage/Section';
import Layout from '@theme/Layout';
import React from 'react';
import Balancer from 'react-wrap-balancer';

import baseStyles from '@site/src/pages/styles.module.css';

import headerImage from '@site/src/pages/img/modules/tagguard.webp';

export default function TagguardPage(): JSX.Element {
  return (
    <>
      <Layout>
        <main className={baseStyles.content}>
          <ModulePageHeader
            moduleName="TagGuard"
            tagline="Automated Tag Enforcement"
            description="Ensure resources have consistent and compliant tags"
            image={headerImage}
          />
          <ModulePageSection>
            <h2>
              <Balancer>
                TagGuard automates the enforcement of your organization&rsquo;s
                cloud resource <strong>tagging policy</strong>.
              </Balancer>
            </h2>
            <p>
              <Balancer>
                Ensure that all cloud resources are consistently and cleanly
                labeled with{' '}
                <Link to="/docs/concepts/resource-management/tagging">
                  tags
                </Link>
                &mdash;such as owner, project, and cost center&mdash;so you can
                accurately allocate usage and costs to teams, customers, and
                projects.
              </Balancer>
            </p>
          </ModulePageSection>
          <ModulePageSection>
            <h2>
              <Balancer>
                Automatically apply tags to resources based on{' '}
                <strong>rules</strong>.
              </Balancer>
            </h2>
            <p>
              <Balancer>
                TagGuard saves you time and minimizes the risk of human error.
              </Balancer>
            </p>
            <p>
              <Balancer>
                And when{' '}
                <Link to="/docs/how-to-guides/search/find-untagged-resources">
                  untagged resources are found
                </Link>
                , TagGuard can{' '}
                <Link to="/docs/how-to-guides/alerting">report</Link> them to
                you or just{' '}
                <Link to="/docs/how-to-guides/cleanup/clean-up-untagged-resources">
                  delete them
                </Link>{' '}
                outright.
              </Balancer>
            </p>
          </ModulePageSection>
          <ModulePageCTA>
            <h2>
              <Balancer>
                Ensure Compliance with Internal Policies and External
                Regulations
              </Balancer>
            </h2>
            <p>
              <Balancer>
                TagGuard ensures your cloud resources are tagged correctly and
                consistently.
              </Balancer>
            </p>
          </ModulePageCTA>
          <ContactForm />
        </main>
      </Layout>
    </>
  );
}
