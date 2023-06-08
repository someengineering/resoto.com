import ContactForm from '@site/src/components/ContactForm';
import ModulePageCTA from '@site/src/components/ModulePage/CTA';
import ModulePageHeader from '@site/src/components/ModulePage/Header';
import ModulePageSection from '@site/src/components/ModulePage/Section';
import Layout from '@theme/Layout';
import React from 'react';
import Balancer from 'react-wrap-balancer';

import baseStyles from '@site/src/pages/styles.module.css';

import headerImage from '@site/src/assets/modules/resolve.webp';
import jobsScreenshot from './img/jobs.webp';

export default function ResolvePage(): JSX.Element {
  return (
    <>
      <Layout>
        <main className={baseStyles.content}>
          <ModulePageHeader
            moduleName="Resolve"
            tagline="Automatic Infrastructure Remediation"
            description="Take the hassle out of issue management with automated remediation"
            image={headerImage}
          />
          <ModulePageSection>
            <h2>
              <Balancer>
                Resolve <strong>automatically addresses issues</strong> in your
                cloud infrastructure.
              </Balancer>
            </h2>
            <p>
              <Balancer>
                Other tools report issues and leave it up to you to solve them,
                but Resolve takes it a step further and automates remediation
                actions.
              </Balancer>
            </p>
          </ModulePageSection>
          <ModulePageSection image={jobsScreenshot}>
            <h2>
              <Balancer>
                Define <strong>custom policies</strong> based on your
                organization&rsquo;s requirements.
              </Balancer>
            </h2>
            <p>
              <Balancer>
                For example, set a policy that shuts down all development
                instances at the end of the workweek and starts them back up on
                Monday morning.
              </Balancer>
            </p>
          </ModulePageSection>
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
