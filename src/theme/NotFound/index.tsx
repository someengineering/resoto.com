import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import ContactForm from '@site/src/components/ContactForm';
import baseStyles from '@site/src/pages/styles.module.css';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import Balancer from 'react-wrap-balancer';
import styles from './styles.module.css';

export default function NotFound(): JSX.Element {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Layout title="Page Not Found">
        <main className={baseStyles.content}>
          <section className={baseStyles.section}>
            <div className={baseStyles.inner}>
              <h1 className={clsx(baseStyles.title, styles.title)}>
                <strong>Page Not Found</strong>
              </h1>
              <p className={clsx(baseStyles.description, styles.description)}>
                <Balancer>
                  Sorry, but we could not find what you were looking for.
                </Balancer>
              </p>
              <div className="text--center">
                <Link
                  to="/docs"
                  className={clsx(
                    baseStyles.button,
                    baseStyles.outlinedButton,
                    baseStyles.docsButton,
                  )}
                >
                  Explore Docs
                </Link>
              </div>
              <div className={styles.sheep} aria-hidden="true" />
            </div>
          </section>
        </main>
        <div className={baseStyles.contentBottom}>
          <ContactForm />
        </div>
      </Layout>
    </>
  );
}
