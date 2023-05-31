import Link from '@docusaurus/Link';
import ContactForm from '@site/src/components/ContactForm';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import Balancer from 'react-wrap-balancer';

import homepageStyles from '../index.module.css';
import styles from './index.module.css';

export default function Pricing(): JSX.Element {
  return (
    <>
      <Layout>
        <main className={styles.content}>
          <section className={homepageStyles.section}>
            <div className={homepageStyles.inner}>
              <h1 className={styles.pageTitle}>
                <span>Pricing</span>
              </h1>
              <p className={styles.pageDescription}>
                <Balancer>
                  Run Resoto on your terms&mdash;in your infrastructure or ours.
                </Balancer>
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
                        <span>Regular software updates and bug fixes</span>
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
                        homepageStyles.button,
                        homepageStyles.outlinedButton,
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
                    <div>Coming Soon</div>
                  </div>
                </div>
                <div className="col col--4">
                  <div className={clsx(styles.priceCard, styles.enterprise)}>
                    <h2>Enterprise</h2>
                    <ul>
                      <li>
                        <span>Flexible pricing</span>
                      </li>
                      <li>
                        <span>
                          Custom solution designed for your infrastructure
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
                        homepageStyles.button,
                        homepageStyles.outlinedButton,
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
          <ContactForm />
        </main>
      </Layout>
    </>
  );
}
