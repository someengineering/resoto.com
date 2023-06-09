import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import AwsLogo from '@site/src/assets/providers/aws.svg';
import DigitalOceanLogo from '@site/src/assets/providers/digitalocean.svg';
import GoogleCloudLogo from '@site/src/assets/providers/google-cloud.svg';
import KubernetesLogo from '@site/src/assets/providers/kubernetes.svg';
import ContactForm from '@site/src/components/ContactForm';
import InstallButton from '@site/src/components/InstallButton';
import Layout from '@theme/Layout';
import { clsx } from 'clsx';
import lottie from 'lottie-web';
import React, { useEffect } from 'react';
import Balancer from 'react-wrap-balancer';
import styles from './styles.module.css';

export default function Home(): JSX.Element {
  useEffect(() => {
    const heroAnimation = lottie.loadAnimation({
      container: document.getElementById('heroAnimation'),
      path: '/lottie/resoto.json',
      renderer: 'svg',
      loop: true,
      autoplay: true,
      rendererSettings: {
        progressiveLoad: true,
      },
    });
    heroAnimation.setSubframe(false);
  });

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Resoto by Some Engineering Inc.',
            url: 'https://resoto.com',
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://resoto.com/search?q={search_term_string}',
              },
              'query-input': 'required name=search_term_string',
            },
          })}
        </script>
      </Head>
      <Layout>
        <header className={styles.hero}>
          <div className={styles.inner}>
            <div className={styles.heroLeft}>
              <h1 className={styles.heroTitle}>
                Harness the <br />
                power of <strong>reactive</strong> <br />
                infrastructure
              </h1>
              <h2>
                <Balancer>
                  Improve visibility, control, cost, and compliance in your
                  cloud with Resoto
                </Balancer>
              </h2>
              <div className={styles.buttons}>
                <InstallButton
                  includeVersion
                  className={clsx(styles.button, styles.primaryButton)}
                />
                <Link
                  to="/docs"
                  className={clsx(
                    styles.button,
                    styles.outlinedButton,
                    styles.docsButton
                  )}
                >
                  Explore Docs
                </Link>
              </div>
            </div>
            <div className={styles.heroRight} aria-hidden="true">
              <div>
                <div id="heroAnimation" />
              </div>
            </div>
          </div>
        </header>
        <main className={styles.homeContent}>
          <section className={styles.section}>
            <div className={styles.inner}>
              <h2 className={styles.providersHeading}>
                <Balancer>
                  Resoto is an <strong>infrastructure control plane</strong>{' '}
                  that continuously monitors and maintains your cloud resources.
                </Balancer>
              </h2>
              <div className={styles.logos}>
                <Link to="/docs/how-to-guides/data-sources/collect-aws-resource-data">
                  <AwsLogo />
                </Link>
                <Link to="/docs/how-to-guides/data-sources/collect-google-cloud-resource-data">
                  <GoogleCloudLogo />
                </Link>
                <Link to="/docs/how-to-guides/data-sources/collect-digitalocean-resource-data">
                  <DigitalOceanLogo />
                </Link>
                <Link to="/docs/how-to-guides/data-sources/collect-kubernetes-resource-data">
                  <KubernetesLogo />
                </Link>
              </div>
            </div>
          </section>
          <ContactForm />
        </main>
      </Layout>
    </>
  );
}
