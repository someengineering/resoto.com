import ContactForm from '@site/src/components/ContactForm';
import ModulePageCTA from '@site/src/components/ModulePage/CTA';
import ModulePageHeader from '@site/src/components/ModulePage/Header';
import Layout from '@theme/Layout';
import React from 'react';
import Balancer from 'react-wrap-balancer';

import baseStyles from '@site/src/pages/styles.module.css';

import headerImage from '@site/src/pages/img/modules/resolve.webp';

export default function ResolvePage(): JSX.Element {
  return (
    <>
      <Layout>
        <main className={baseStyles.content}>
          <ModulePageHeader
            moduleName="Resolve"
            tagline="Automated Infrastructure Remediation"
            description="Automatically fix cloud infrastructure issues to keep your cloud environment in a healthy state"
            image={headerImage}
          />
          <ModulePageCTA>
            <h2>
              <Balancer>
                Automatically Address Cloud Infrastructure Issues
              </Balancer>
            </h2>
            <p>
              <Balancer>
                Automating the remediation process helps to ensure efficient
                resource usage and reduces cloud costs.
              </Balancer>
            </p>
          </ModulePageCTA>
          <ContactForm />
        </main>
      </Layout>
    </>
  );
}
