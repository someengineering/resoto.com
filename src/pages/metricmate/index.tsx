import Link from '@docusaurus/Link';
import ContactForm from '@site/src/components/ContactForm';
import ModulePageCTA from '@site/src/components/ModulePage/CTA';
import ModulePageHeader from '@site/src/components/ModulePage/Header';
import ModulePageSection from '@site/src/components/ModulePage/Section';
import headerImage from '@site/src/img/modules/metricmate.webp';
import baseStyles from '@site/src/pages/styles.module.css';
import Layout from '@theme/Layout';
import React from 'react';
import Balancer from 'react-wrap-balancer';
import configScreenshot from './img/config.webp';
import dashboardsScreenshot from './img/dashboards.webp';

export default function MetricmatePage(): JSX.Element {
  return (
    <>
      <Layout>
        <main className={baseStyles.content}>
          <ModulePageHeader
            moduleName="MetricMate"
            tagline="Comprehensive Infrastructure Monitoring"
            description="Track infrastructure metrics to optimize performance and cost"
            image={headerImage}
          />
          <ModulePageSection image={dashboardsScreenshot}>
            <h2>
              <Balancer>
                MetricMate monitors and exports cloud resource{' '}
                <strong>infrastructure metrics</strong>.
              </Balancer>
            </h2>
            <p>
              <Balancer>
                Stay informed about your cloud infrastructure&rsquo;s health to
                facilitate identification of issues and opportunities for
                improvement.
              </Balancer>
            </p>
          </ModulePageSection>
          <ModulePageSection image={configScreenshot}>
            <h2>
              <Balancer>
                Integrate with <strong>popular database systems</strong> and
                build custom dashboards.
              </Balancer>
            </h2>
            <p>
              <Balancer>
                MetricMate exports{' '}
                <Link to="/blog/actionable-cloud-infrastructure-metrics">
                  metrics
                </Link>{' '}
                to <Link href="https://prometheus.io">Prometheus</Link>,{' '}
                <Link href="https://datadoghq.com">Datadog</Link>, or{' '}
                <abbr title="Structured Query Language">SQL</abbr> databases.
              </Balancer>
            </p>
            <p>
              <Balancer>
                MetricMate also seamlessly integrates your data into frameworks
                like <Link href="https://streamlit.io">Streamlit</Link> and{' '}
                <Link href="https://plotly.com/dash">Plotly Dash</Link>,
                empowering you to build custom, low-code infrastructure
                dashboards.
              </Balancer>
            </p>
          </ModulePageSection>
          <ModulePageSection>
            <h2>
              <Balancer>
                Track cloud spending and identify{' '}
                <strong>cost savings opportunities</strong>.
              </Balancer>
            </h2>
            <p>
              <Balancer>
                MetricMate goes beyond{' '}
                <Link to="/blog/actionable-cloud-infrastructure-metrics">
                  metrics
                </Link>
                &mdash;it also provides cloud resource cost data. Keep a close
                eye on your cloud spending to ensure that you stay within your
                budget.
              </Balancer>
            </p>
          </ModulePageSection>
          <ModulePageCTA>
            <h2>
              <Balancer>Identify Infrastructure Trends and Patterns</Balancer>
            </h2>
            <p>
              <Balancer>
                MetricMate empowers you to take control and make informed
                decisions for capacity planning and optimization.
              </Balancer>
            </p>
          </ModulePageCTA>
          <ContactForm />
        </main>
      </Layout>
    </>
  );
}
