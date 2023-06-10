import Link from '@docusaurus/Link';
import { PageMetadata } from '@docusaurus/theme-common';
import ContactForm from '@site/src/components/ContactForm';
import baseStyles from '@site/src/pages/styles.module.css';
import { getImage } from '@site/src/utils/socialImageHelper';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import Balancer from 'react-wrap-balancer';
import styles from './styles.module.css';

export default function Pricing(): JSX.Element {
  const title = 'Pricing';
  const description =
    'Run Resoto on your terms—in your infrastructure or ours.';

  return (
    <>
      <PageMetadata
        title={title}
        description={description}
        image={getImage({ title })}
      />
      <Layout title="Pricing" description={description}>
        <main className={baseStyles.content}>
          <section className={baseStyles.section}>
            <div className={baseStyles.inner}>
              <h1 className={clsx(baseStyles.title, styles.title)}>
                <strong>Pricing</strong>
              </h1>
              <p className={clsx(baseStyles.description, styles.description)}>
                <Balancer>{description}</Balancer>
              </p>
              <div className={clsx('row', styles.priceCards)}>
                <div className="col col--4">
                  <div className={styles.priceCard}>
                    <h2>Self-Hosted</h2>
                    <ul>
                      <li>
                        <span>Free, forever</span>
                      </li>
                      <li>
                        <span>
                          Open source (
                          <Link href="https://github.com/someengineering/resoto/blob/main/LICENSE">
                            Apache 2.0
                          </Link>
                          )
                        </span>
                      </li>
                      <li>
                        <span>
                          Community support via{' '}
                          <Link href="https://github.com/someengineering/resoto">
                            Discord
                          </Link>{' '}
                          and{' '}
                          <Link href="https://github.com/someengineering/resoto/issues">
                            GitHub
                          </Link>
                        </span>
                      </li>
                    </ul>
                    <Link
                      to="/docs/getting-started/install-resoto"
                      className={clsx(
                        baseStyles.button,
                        baseStyles.outlinedButton,
                        styles.button
                      )}
                    >
                      Install Now
                    </Link>
                  </div>
                </div>
                <div className="col col--4">
                  <div className={clsx(styles.priceCard, styles.saas)}>
                    <h2>SaaS</h2>
                    <ul>
                      <li>
                        <span>Hosted in a cloud and region of your choice</span>
                      </li>
                      <li>
                        <span>
                          Fully managed Resoto installation and infrastructure
                        </span>
                      </li>
                      <li>
                        <span>
                          Monitoring and performance optimization by Resoto
                          experts
                        </span>
                      </li>
                      <li>
                        <span>Priority support</span>
                      </li>
                    </ul>
                    <div>Coming 2024</div>
                  </div>
                </div>
                <div className="col col--4">
                  <div className={clsx(styles.priceCard, styles.enterprise)}>
                    <h2>Enterprise</h2>
                    <ul>
                      <li>
                        <span>
                          Solution customized for your infrastructure
                          configuration
                        </span>
                      </li>
                      <li>
                        <span>
                          Performance tuning and cloud cost optimization audits
                        </span>
                      </li>
                      <li>
                        <span>
                          Workshops on best practices for leveraging
                          Resoto&rsquo;s features effectively
                        </span>
                      </li>
                      <li>
                        <span>Dedicated support</span>
                      </li>
                    </ul>
                    <Link
                      to="#contact-us"
                      className={clsx(
                        baseStyles.button,
                        baseStyles.outlinedButton,
                        styles.button
                      )}
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <div className={baseStyles.homeContent}>
          <ContactForm />
        </div>
      </Layout>
    </>
  );
}
