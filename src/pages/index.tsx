import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import ContactForm from '@site/src/components/ContactForm';
import HomepageModules from '@site/src/components/HomepageModules';
import InstallButton from '@site/src/components/InstallButton';
import AwsLogo from '@site/src/img/providers/aws.svg';
import DigitalOceanLogo from '@site/src/img/providers/digitalocean.svg';
import GoogleCloudLogo from '@site/src/img/providers/google-cloud.svg';
import KubernetesLogo from '@site/src/img/providers/kubernetes.svg';
import heroAnimationPlaceholder from '@site/src/pages/img/hero/discover.webp';
import Layout from '@theme/Layout';
import { clsx } from 'clsx';
import lottie from 'lottie-web';
import React, { useCallback, useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';
import Balancer from 'react-wrap-balancer';
import styles from './styles.module.css';

export default function Home(): JSX.Element {
  const [windowLoaded, setWindowLoaded] = useState(false);
  const [heroAnimationLoaded, setHeroAnimationLoaded] = useState(false);
  const [heroAnimationData, setHeroAnimationData] = useState<object>(null);
  const [isMobile, setIsMobile] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [animationDisabled, setAnimationDisabled] = useState(false);
  const mobileMaxWidth = 576;

  const loadHeroAnimationData = useCallback(async () => {
    setHeroAnimationData(await import('@site/src/lottie/hero.json'));
    lottie.setQuality('low');
  }, []);
  const onLoad = useCallback(() => setWindowLoaded(true), []);
  const onResize = useCallback(
    () => setIsMobile(window.innerWidth <= mobileMaxWidth),
    []
  );
  const onReducedMotion = useCallback(() => setPrefersReducedMotion(true), []);

  useEffect(
    () =>
      setAnimationDisabled(
        window.localStorage.getItem('heroAnimation') === 'false'
      ),
    []
  );

  useEffect(() => {
    if (
      windowLoaded &&
      !heroAnimationData &&
      !animationDisabled &&
      !isMobile &&
      !prefersReducedMotion
    ) {
      loadHeroAnimationData();
    }
  }, [
    windowLoaded,
    heroAnimationData,
    animationDisabled,
    isMobile,
    prefersReducedMotion,
    loadHeroAnimationData,
  ]);

  useEffect(() => {
    window.addEventListener('load', onLoad);

    setIsMobile(window.innerWidth <= mobileMaxWidth);
    window.addEventListener('resize', onResize);

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', onReducedMotion);

    return () => {
      window.removeEventListener('load', onLoad);
      window.removeEventListener('resize', onResize);
      mediaQuery.removeEventListener('change', onReducedMotion);
    };
  }, [onLoad, onResize, onReducedMotion]);

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
        <link
          rel="preload"
          href={heroAnimationPlaceholder}
          as="image"
          type="image/webp"
        />
      </Head>
      <Layout>
        <header className={styles.hero}>
          <div className={styles.inner}>
            <div className={styles.heroLeft}>
              <h1 className={styles.title}>
                Harness the <br />
                power of <strong>reactive</strong> <br />
                infrastructure
              </h1>
              <p className={styles.description}>
                <Balancer>
                  Improve visibility, control, cost, and compliance in your
                  cloud with Resoto
                </Balancer>
              </p>
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
            <div className={styles.heroRight}>
              {!isMobile ? (
                <Lottie
                  animationData={
                    animationDisabled || prefersReducedMotion
                      ? null
                      : heroAnimationData
                  }
                  useSubframes={false}
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  /* @ts-ignore */
                  renderer="canvas"
                  rendererSettings={{
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    /* @ts-ignore */
                    runExpressions: false,
                  }}
                  play
                  loop
                  className={clsx(
                    styles.heroAnim,
                    animationDisabled || prefersReducedMotion
                      ? styles.heroAnimReducedMotion
                      : !heroAnimationLoaded
                      ? styles.heroAnimPlaceholder
                      : ''
                  )}
                  onLoad={() => setHeroAnimationLoaded(true)}
                  aria-hidden="true"
                />
              ) : null}
            </div>
          </div>
        </header>
        <main className={styles.contentBottom}>
          <section className={styles.section}>
            <div className={styles.inner}>
              <h2>
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
          <HomepageModules />
          <ContactForm />
        </main>
      </Layout>
    </>
  );
}
