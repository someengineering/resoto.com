import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import GitHubLogo from '@site/src/assets/github.svg';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { getGithubStars, getLatestRelease } from '@site/src/utils/githubHelper';
import Layout from '@theme/Layout';
import Emoji from 'a11y-react-emoji';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [resotoVersion, setResotoVersion] = useState<string | null>(null);
  const [githubStars, setGithubStars] = useState<number | null>(null);

  useEffect(() => {
    const getGithubData = async () => {
      setResotoVersion(await getLatestRelease('someengineering', 'resoto'));
      setGithubStars(await getGithubStars('someengineering', 'resoto'));
    };

    getGithubData();
  }, []);

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
            {resotoVersion && (
              <>
                <a
                  href={`https://github.com/someengineering/resoto/releases/tag/${resotoVersion}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--primary button--lg"
                >
                  <GitHubLogo className={styles.buttonIcon} />
                  {resotoVersion.startsWith('v')
                    ? resotoVersion
                    : `v${resotoVersion}`}
                </a>
                {!!githubStars && (
                  <a
                    href="https://github.com/someengineering/resoto/stargazers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={clsx('button button--lg', styles.speechButton)}
                  >
                    {githubStars} <Emoji symbol="⭐" label="stars" />
                  </a>
                )}
              </>
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
