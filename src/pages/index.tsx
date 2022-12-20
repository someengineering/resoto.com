import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import NewsletterSignupForm from '@site/src/components/NewsletterSignupForm';
import Layout from '@theme/Layout';
import 'asciinema-player/dist/bundle/asciinema-player.css';
import { clsx } from 'clsx';
import React from 'react';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout>
      <header className={styles.hero}>
        <h1 className={styles.siteTitle}>{siteConfig.title}</h1>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <div className={styles.tagline}>{siteConfig.tagline}</div>
            <h2 className={styles.heroTitle}>
              Sync infrastructure data to a <strong>single place</strong>.
            </h2>
            <p>
              Consolidate resource data across your clouds, regions, and
              accounts.
            </p>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div className={clsx(styles.clouds, styles.cloudsTop)} />
        <section className={clsx(styles.section, styles.cloudSection)}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeading}>
              <div className={styles.tagline}>
                Understand Your Infrastructure
              </div>
              <h2>
                Data pipelines that collect and normalize fragmented cloud data,{' '}
                out of the box.
              </h2>
            </div>
            <ul className={clsx(styles.cards, styles.products)}>
              <li>
                <h3>
                  <Link to="/cloud2sql">Cloud2SQL</Link>
                  <span className={clsx('badge', styles.badge)}>Free</span>
                  <span className={clsx('badge', styles.badge)}>
                    Open Source
                  </span>
                </h3>
                <p>
                  <strong>Command-line tool</strong> that exports cloud
                  infrastructure data to{' '}
                  <abbr title="Structured Query Language">SQL</abbr> databases.
                </p>
                <ul>
                  <li>Export to your data lake or cloud warehouse</li>
                  <li>
                    <span>
                      Security &amp; compliance checks in{' '}
                      <abbr title="Structured Query Language">SQL</abbr>
                    </span>
                  </li>
                  <li>Visualization in your favorite dashboards</li>
                </ul>
                <Link
                  to="/cloud2sql"
                  className="button button--primary button--lg"
                >
                  Explore Cloud2SQL
                </Link>
              </li>
              <li>
                <h3>
                  <Link to="/resoto">Resoto</Link>
                  <span className={clsx('badge', styles.badge)}>Free</span>
                  <span className={clsx('badge', styles.badge)}>
                    Open Source
                  </span>
                </h3>
                <p>
                  <strong>Data integration platform</strong> that combines data
                  pipelines, dashboards, and search.
                </p>
                <ul>
                  <li>Human-friendly display of resource data</li>
                  <li>Full-text search across your entire cloud inventory</li>
                  <li>Custom dashboards and metrics</li>
                </ul>
                <Link
                  to="/resoto"
                  className="button button--primary button--lg"
                >
                  Explore Resoto
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <div className={clsx(styles.clouds, styles.cloudsBottom)} />
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeading}>
              <h2>What&rsquo;s happening in infrastructure data?</h2>
            </div>
            <p>
              Keep up with the latest Resoto news&mdash;get product updates,
              blog posts, and more!
            </p>
            <NewsletterSignupForm />
          </div>
        </section>
      </main>
    </Layout>
  );
}
