import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Octokit } from '@octokit/core';
import Layout from '@theme/Layout';
import Emoji from 'a11y-react-emoji';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import HomepageFeatures from '../components/HomepageFeatures';
import GitHubLogo from './github.svg';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [githubStars, setGithubStars] = useState(undefined);

  useEffect(() => {
    const getGithubStars = async () => {
      try {
        const res = await new Octokit().request(
          '/repos/someengineering/resoto'
        );
        setGithubStars(res.data.stargazers_count);
      } catch (err) {
        setGithubStars(undefined);
      }
    };

    getGithubStars();
  });

  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <div className={styles.heroSubtitle}>
          <span>
            <strong>Find</strong> leaky resources, <strong>manage</strong> quota
            limits, <strong>detect</strong> drift, and <strong>clean</strong>{' '}
            up!
          </span>
          <span className={styles.heroButtons}>
            <a
              href="https://github.com/someengineering/resoto"
              target="_blank"
              rel="noreferrer noopener"
              className="button button--primary button--lg"
            >
              <GitHubLogo className={styles.buttonIcon} />
              View on GitHub
            </a>
            {!!githubStars && (
              <a
                href="https://github.com/someengineering/resoto/stargazers"
                target="_blank"
                rel="noreferrer noopener"
                className={clsx('button button--lg', styles.speechButton)}
              >
                {githubStars} <Emoji symbol="⭐" label="stars" />
              </a>
            )}
          </span>
        </div>
        <img
          className={styles.heroLogo}
          src="/img/logo-lg.svg"
          alt="Resoto Logo"
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
