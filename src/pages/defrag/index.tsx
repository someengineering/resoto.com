import Link from '@docusaurus/Link';
import headerImage from '@site/src/assets/modules/defrag.webp';
import ContactForm from '@site/src/components/ContactForm';
import ModulePageCTA from '@site/src/components/ModulePage/CTA';
import ModulePageHeader from '@site/src/components/ModulePage/Header';
import ModulePageSection from '@site/src/components/ModulePage/Section';
import baseStyles from '@site/src/pages/styles.module.css';
import Layout from '@theme/Layout';
import React from 'react';
import Balancer from 'react-wrap-balancer';

export default function DefragPage(): JSX.Element {
  return (
    <>
      <Layout>
        <main className={baseStyles.content}>
          <ModulePageHeader
            moduleName="Defrag"
            tagline="Automated Resource Cleanup"
            description="Keep your cloud infrastructure neat and tidy with automatic, rule-based cleanup and expiration tagging"
            image={headerImage}
          />
          <ModulePageSection>
            <h2>
              <Balancer>
                Defrag finds and <strong>automatically cleans up</strong>{' '}
                unwanted cloud resources.
              </Balancer>
            </h2>
            <p>
              <Balancer>
                Define custom cleanup policies to delete resources based on your
                organization&rsquo;s requirements.
              </Balancer>
            </p>
            <p>
              <Balancer>
                For example, automatically delete rsources that have been
                abandoned for more than a week&mdash;like{' '}
                <Link to="/docs/how-to-guides/cleanup/clean-up-aws-load-balancers">
                  load balancers
                </Link>{' '}
                without backend servers, or{' '}
                <Link to="/docs/how-to-guides/cleanup/clean-up-aws-ebs-volumes">
                  unmounted storage volumes
                </Link>{' '}
                without recent I/O activity.
              </Balancer>
            </p>
          </ModulePageSection>
          <ModulePageSection>
            <h2>
              <Balancer>
                Tag resources with <strong>expiration dates</strong>.
              </Balancer>
            </h2>
            <p>
              <Balancer>
                Set a specific date or time period after which a resource will
                be{' '}
                <Link to="/docs/how-to-guides/cleanup/clean-up-expired-resources">
                  automatically deleted
                </Link>
                .
              </Balancer>
            </p>
            <p>
              <Balancer>
                For example,{' '}
                <Link to="/docs/concepts/resource-management/tagging">tag</Link>{' '}
                temporary development instances with an{' '}
                <Link to="/docs/concepts/resource-management/expiration">
                  expiration
                </Link>{' '}
                of 24 hours&mdash;and never worry again about forgetting to{' '}
                <Link to="/docs/how-to-guides/cleanup/clean-up-expired-resources">
                  clean them up
                </Link>
                .
              </Balancer>
            </p>
          </ModulePageSection>
          <ModulePageSection>
            <h2>
              <Balancer>
                <strong>Reduce cloud costs</strong> by deleting resources that
                are no longer needed.
              </Balancer>
            </h2>
            <p>
              <Balancer>
                <Link to="/docs/how-to-guides/search/find-a-resource">
                  Find
                </Link>{' '}
                and <Link to="/docs/how-to-guides/cleanup">clean up</Link>{' '}
                resources created during failed CI runs or IaC deployments.
              </Balancer>
            </p>
            <p>
              <Balancer>
                This can be especially useful in development and sandbox
                environments, where resources are created and deleted
                frequently.
              </Balancer>
            </p>
          </ModulePageSection>
          <ModulePageCTA>
            <h2>
              <Balancer>Keep Your Infrastructure Neat and Tidy</Balancer>
            </h2>
            <p>
              <Balancer>
                Automate your cloud resource cleanup process to reduce the risk
                of overprovisioning and exceeding your cloud provider&rsquo;s
                quota limits.
              </Balancer>
            </p>
          </ModulePageCTA>
          <ContactForm />
        </main>
      </Layout>
    </>
  );
}
