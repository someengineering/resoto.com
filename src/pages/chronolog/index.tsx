import Link from '@docusaurus/Link';
import ContactForm from '@site/src/components/ContactForm';
import ModulePageCTA from '@site/src/components/ModulePage/CTA';
import ModulePageHeader from '@site/src/components/ModulePage/Header';
import ModulePageSection from '@site/src/components/ModulePage/Section';
import headerImage from '@site/src/img/modules/chronolog.webp';
import baseStyles from '@site/src/pages/styles.module.css';
import Layout from '@theme/Layout';
import Balancer from 'react-wrap-balancer';

export default function ChronologPage(): JSX.Element {
  return (
    <>
      <Layout>
        <main className={baseStyles.content}>
          <ModulePageHeader
            moduleName="ChronoLog"
            tagline="Your Cloud Infrastructure Changelog"
            description="Analyze the history and lifecycle of your cloud resources"
            image={headerImage}
          />
          <ModulePageSection>
            <h2>
              <Balancer>
                ChronoLog provides a complete <strong>changelog</strong> of your
                cloud resources.
              </Balancer>
            </h2>
            <p>
              <Balancer>
                Review the <Link to="/docs/reference/cli/history">history</Link>{' '}
                and lifecycle of any cloud resource, from its creation time to
                when it is{' '}
                <Link to="/docs/concepts/resource-management/cleanup">
                  cleaned up
                </Link>
                .
              </Balancer>
            </p>
            <p>
              <Balancer>
                This information can be invaluable for troubleshooting issues,
                understanding how your infrastructure has evolved, and
                identifying potential security risks.
              </Balancer>
            </p>
          </ModulePageSection>
          <ModulePageCTA>
            <h2>
              <Balancer>View the History of Your Infrastructure</Balancer>
            </h2>
            <p>
              <Balancer>
                See a complete record of changes to your cloud resources.
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
