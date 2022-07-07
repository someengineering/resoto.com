import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  CalendarIcon,
  ChartSquareBarIcon,
  ChatIcon,
  CodeIcon,
  CogIcon,
  CurrencyDollarIcon,
  DownloadIcon,
  LinkIcon,
  SearchIcon,
  ShieldCheckIcon,
  TerminalIcon,
  TruckIcon,
} from '@heroicons/react/outline';
import AwsLogo from '@site/src/assets/aws.svg';
import DigitalOceanLogo from '@site/src/assets/digitalocean.svg';
import GoogleCloudLogo from '@site/src/assets/google-cloud.svg';
import KubernetesLogo from '@site/src/assets/kubernetes.svg';
import Layout from '@theme/Layout';
import { clsx } from 'clsx';
import lottie from 'lottie-web';
import React, { useEffect } from 'react';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    lottie.loadAnimation({
      container: document.getElementById('heroAnimation'),
      path: 'lottie/heroAnimation.json',
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });
  });

  return (
    <Layout>
      <header className={styles.hero}>
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <div className={styles.heroInner}>
          <div className={styles.flexContainer}>
            <div className={styles.heroText}>
              <h2 className={styles.tagline}>{siteConfig.tagline}</h2>
              <div>
                Resoto creates an inventory of your cloud, provides deep
                visibility, and reacts to changes in your infrastructure.
              </div>
            </div>
            <div id="heroAnimation" className={styles.heroAnimation} />
          </div>
          <div className={styles.cta}>
            <Link
              to="/docs/getting-started/installing-resoto"
              className="button button--primary button--lg"
            >
              Install Now
            </Link>
            <ul>
              <li>Open-source</li>
              <li>Self-hosted</li>
              <li>Always free</li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        <section className={clsx(styles.section, styles.sectionAlt)}>
          <h3 className="text--center">
            Resoto is a meta layer on top of your infrastructure, with support
            for&hellip;
          </h3>
          <div className={styles.sectionLogoContainer}>
            <Link to="/docs/getting-started/configuring-resource-collection/aws">
              <AwsLogo />
            </Link>
            <Link to="/docs/getting-started/configuring-resource-collection/gcp">
              <GoogleCloudLogo />
            </Link>
            <Link to="/docs/getting-started/configuring-resource-collection/digitalocean">
              <DigitalOceanLogo />
            </Link>
            <Link to="/docs/getting-started/configuring-resource-collection/kubernetes">
              <KubernetesLogo />
            </Link>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionContainer}>
            <div>
              <span className={styles.sectionBadge}>
                Leverage for Cloud Engineers
              </span>
              <h2 className={styles.sectionTitle}>
                Resoto puts infrastructure data at your fingertips.
              </h2>
              <p>
                Understand who is running what, answer questions about your
                infrastructure, and ensure efficiency at scale without slowing
                down development.
              </p>
            </div>
            <img
              src="img/illustrations/leverage-for-cloud-engineers.png"
              loading="lazy"
              alt=""
              className={clsx(styles.sectionImage, styles.overlappedImage)}
            />
            <ul className={styles.sectionItems}>
              <li>
                <Link to="/docs/concepts/search">
                  <h3>
                    <SearchIcon className={styles.sectionItemIcon} />
                    <span>Search</span>
                  </h3>
                </Link>
                <p>
                  Write ad-hoc queries with full-text metadata search across all
                  your cloud accounts using the{' '}
                  <Link to="/docs/reference/cli">command-line interface</Link>.
                </p>
              </li>
              <li>
                <Link to="/docs/concepts/search/aggregation">
                  <h3>
                    <ChartSquareBarIcon className={styles.sectionItemIcon} />
                    <span>Report</span>
                  </h3>
                </Link>
                <p>
                  Turn your <Link to="/docs/concepts/search">searches</Link>{' '}
                  into regular reports with fleet-wide, actionable metrics that
                  you can export to popular tools and share with colleagues in
                  Product or Finance.
                </p>
              </li>
              <li>
                <Link to="/docs/concepts/automation">
                  <h3>
                    <CogIcon className={styles.sectionItemIcon} />
                    <span>Automate</span>
                  </h3>
                </Link>
                <p>
                  Automate your work with{' '}
                  <Link to="/docs/concepts/automation/job">jobs</Link> that
                  execute recurring tasks, such as identifying and cleaning up
                  orphaned resources and enforcing{' '}
                  <Link to="/docs/concepts/resource-management/tagging">
                    tag
                  </Link>{' '}
                  structures.
                </p>
              </li>
            </ul>
            <div className={styles.cta}>
              <Link
                to="/docs/getting-started/installing-resoto"
                className="button button--primary button--lg"
              >
                Install Now
              </Link>
              <p>Resoto is open source and free to use.</p>
            </div>
          </div>
        </section>
        <section className={clsx(styles.section, styles.sectionAlt)}>
          <div className={styles.sectionContainer}>
            <div>
              <span className={styles.sectionBadge}>Take Control</span>
              <h2 className={styles.sectionTitle}>
                Build infrastructure that moves your company forward.
              </h2>
              <p>
                Resoto collects resource metadata and stores that data in a
                directed graph. You get visibility into resources in different
                clouds, organizations, regions, sub-accounts, etc.&mdash;all
                from a single place.
              </p>
            </div>
            <img
              src="img/illustrations/take-control.png"
              loading="lazy"
              alt=""
              className={clsx(styles.sectionImage, styles.fadingImage)}
            />
            <ul className={styles.sectionItems}>
              <li>
                <h3>
                  <TruckIcon className={styles.sectionItemIcon} />
                  <span>Ship More</span>
                </h3>
                <p>
                  Resoto runs in the background and{' '}
                  <Link to="/docs/concepts/automation">automates</Link> the
                  grunt work of infrastructure maintenance, so you can spend
                  your time building features that help developers ship more
                  product.
                </p>
              </li>
              <li>
                <h3>
                  <CurrencyDollarIcon className={styles.sectionItemIcon} />
                  <span>Spend Less</span>
                </h3>
                <p>
                  Resoto reverses your cost curve by{' '}
                  <Link to="/docs/concepts/search">finding</Link> and{' '}
                  <Link to="/docs/concepts/resource-management/cleanup">
                    cleaning up
                  </Link>{' '}
                  orphaned resources. Resoto also alerts you about expensive
                  resources when they are deployed, so there are no surprises in
                  your cloud bill.
                </p>
              </li>
              <li>
                <h3>
                  <ShieldCheckIcon className={styles.sectionItemIcon} />
                  <span>Stay Secure</span>
                </h3>
                <p>
                  Resoto provides a &ldquo;God View&rdquo; of asset changes and
                  policy violations across all of your clouds, projects, and
                  accounts.
                </p>
              </li>
            </ul>
            <div className={styles.cta}>
              <Link
                to="/docs/getting-started/installing-resoto"
                className="button button--primary button--lg"
              >
                Install Now
              </Link>
              <p>Resoto is open source and free to use.</p>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionContainer}>
            <div>
              <span className={styles.sectionBadge}>Why Resoto?</span>
              <h2 className={styles.sectionTitle}>
                Know what&rsquo;s running in your cloud, or it will cost you.
              </h2>
              <p>
                Resoto allows you to give your engineers liberal permissions
                without losing control of your cloud infrastructure.
              </p>
            </div>
            <img
              src="img/illustrations/why-resoto.png"
              loading="lazy"
              alt=""
              className={styles.sectionImage}
            />
            <div className={styles.cta}>
              <Link
                to="/docs/getting-started/installing-resoto"
                className="button button--primary button--lg"
              >
                Install Now
              </Link>
              <p>Resoto is open source and free to use.</p>
            </div>
          </div>
        </section>
        <section className={clsx(styles.section, styles.sectionAlt)}>
          <div className={styles.sectionContainer}>
            <div>
              <span className={styles.sectionBadge}>
                Say Goodbye to Busywork
              </span>
              <h2 className={styles.sectionTitle}>
                It&rsquo;s time to automate your infrastructure tasks.
              </h2>
              <p>
                Resoto is{' '}
                <a
                  href="https://github.com/someengineering/resoto/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  open source
                </a>{' '}
                and completely free to use, with out-of-the-box support for{' '}
                <Link to="/docs/getting-started/configuring-resource-collection/aws">
                  Amazon Web Services
                </Link>
                ,{' '}
                <Link to="/docs/getting-started/configuring-resource-collection/gcp">
                  Google Cloud Platform
                </Link>
                ,{' '}
                <Link to="/docs/getting-started/configuring-resource-collection/digitalocean">
                  DigitalOcean
                </Link>
                , and{' '}
                <Link to="/docs/getting-started/configuring-resource-collection/kubernetes">
                  Kubernetes
                </Link>
                .
              </p>
            </div>
            <ul className={styles.sectionItems}>
              <li>
                <Link to="/docs/getting-started/installing-resoto">
                  <h3>
                    <DownloadIcon className={styles.sectionItemIcon} />
                    <span>Install Resoto</span>
                  </h3>
                </Link>
                <p>
                  Get started with Resoto using{' '}
                  <Link to="/docs/getting-started/installing-resoto/docker">
                    Docker
                  </Link>
                  ,{' '}
                  <Link to="/docs/getting-started/installing-resoto/kubernetes">
                    Kubernetes
                  </Link>
                  , or{' '}
                  <Link to="/docs/getting-started/installing-resoto/pip">
                    pip
                  </Link>{' '}
                  in just five minutes!
                </p>
              </li>
              <li>
                <Link to="/docs/concepts/search">
                  <h3>
                    <TerminalIcon className={styles.sectionItemIcon} />
                    <span>Perform a Search</span>
                  </h3>
                </Link>
                <p>
                  Check out the Resoto documentation for{' '}
                  <Link to="/docs/concepts/search">explanations</Link> and{' '}
                  <Link to="/docs/concepts/search/examples">examples</Link>.
                </p>
              </li>
              <li>
                <Link to="/docs/concepts/automation/job">
                  <h3>
                    <CalendarIcon className={styles.sectionItemIcon} />
                    <span>Schedule a Job</span>
                  </h3>
                </Link>
                <p>
                  Set up a recurring{' '}
                  <Link to="/docs/concepts/automation/job">job</Link> and allow
                  Resoto to take care of resource{' '}
                  <Link to="/docs/concepts/resource-management/cleanup">
                    cleanup
                  </Link>{' '}
                  going forward.
                </p>
              </li>
            </ul>
            <div className={styles.cta}>
              <Link
                to="/docs/getting-started/installing-resoto"
                className="button button--primary button--lg"
              >
                Install Now
              </Link>
              <p>Resoto is open source and free to use.</p>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionContainer}>
            <div>
              <span className={styles.sectionBadge}>Connect and Learn</span>
              <h2 className={styles.sectionTitle}>
                Join us on the forefront of infrastructure intelligence.
              </h2>
              <p>
                Keep up to date with the latest Resoto news, features, events,
                and articles.
              </p>
            </div>
            <ul className={styles.sectionItems}>
              <li>
                <a
                  href="https://github.com/someengineering/resoto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>
                    <CodeIcon className={styles.sectionItemIcon} />
                    <span>GitHub</span>
                  </h3>
                </a>
                <p>
                  Watch the{' '}
                  <a
                    href="https://github.com/someengineering/resoto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <code>someengineering/resoto</code> repository
                  </a>{' '}
                  and be the first to know about new features and releases. Bug
                  reports, feature requests, and pull requests are always
                  welcome!
                </p>
              </li>
              <li>
                <a
                  href="https://discord.gg/someengineering"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>
                    <ChatIcon className={styles.sectionItemIcon} />
                    <span>Discord</span>
                  </h3>
                </a>
                <p>
                  Get help with Resoto and connect with a growing community of
                  cloud engineers in the{' '}
                  <a
                    href="https://discord.gg/someengineering"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Some Engineering Discord server
                  </a>
                  .
                </p>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/someengineering"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>
                    <LinkIcon className={styles.sectionItemIcon} />
                    <span>LinkedIn</span>
                  </h3>
                </a>
                <p>
                  Follow{' '}
                  <a
                    href="https://linkedin.com/company/someengineering"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Some Engineering on LinkedIn
                  </a>{' '}
                  for news, insights, podcast episodes, sneak peeks, and more.
                </p>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
}
