import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';
import HomepageFeatures from '../components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <img
          className={styles.heroLogo}
          src="/img/logo-lg.svg"
          alt="Resoto Logo"
        />
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <span
          className={styles.heroSubtitle}
          dangerouslySetInnerHTML={{
            __html:
              '<strong>Find</strong> leaky resources, <strong>manage</strong> quota limits, <strong>detect</strong> drift, and <strong>clean</strong> up!',
          }}
        />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
