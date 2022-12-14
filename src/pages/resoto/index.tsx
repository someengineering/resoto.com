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
import InstallButton from '@site/src/components/InstallButton';
import Layout from '@theme/Layout';
import { clsx } from 'clsx';
import React from 'react';
import baseStyles from '../index.module.css';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout>
      <header className={baseStyles.hero}>
        <h1 className={baseStyles.siteTitle}>{siteConfig.title}</h1>
        <div className={baseStyles.heroInner}>
          <div className={baseStyles.heroText}>
            <div className={baseStyles.tagline}>
              Metric generation and visual exploration
            </div>
            <h2 className={baseStyles.heroTitle}>Resoto</h2>
            <p>
              Create an <strong>inventory</strong> of your cloud, get deep{' '}
              <strong>visibility</strong>, and <strong>react to changes</strong>{' '}
              in your infrastructure.
            </p>
            <p className={baseStyles.buttons}>
              <InstallButton product="resoto" className={baseStyles.button} />
              <Link
                to="/docs"
                className="button button--outline button--primary button--lg"
              >
                Explore Docs
              </Link>
            </p>
          </div>
        </div>
      </header>
      <main>
        <div className={clsx(baseStyles.clouds, baseStyles.cloudsTop)} />
        <section className={clsx(baseStyles.section, baseStyles.cloudSection)}>
          <div className={baseStyles.sectionInner}>
            <h2 className="text--center">
              Resoto is a meta layer on top of your infrastructure, with support
              for&hellip;
            </h2>
            <div className={styles.logos}>
              <Link to="/docs/getting-started/configure-cloud-provider-access/aws">
                <AwsLogo />
              </Link>
              <Link to="/docs/getting-started/configure-cloud-provider-access/gcp">
                <GoogleCloudLogo />
              </Link>
              <Link to="/docs/getting-started/configure-cloud-provider-access/digitalocean">
                <DigitalOceanLogo />
              </Link>
              <Link to="/docs/getting-started/configure-cloud-provider-access/kubernetes">
                <KubernetesLogo />
              </Link>
            </div>
          </div>
        </section>
        <div className={clsx(baseStyles.clouds, baseStyles.cloudsBottom)} />
        <section className={baseStyles.section}>
          <div className={baseStyles.sectionInner}>
            <div className={baseStyles.sectionHeading}>
              <div className={baseStyles.tagline}>
                Leverage for Cloud Engineers
              </div>
              <h2>Resoto puts infrastructure data at your fingertips.</h2>
            </div>
            <p>
              Understand who is running what, answer questions about your
              infrastructure, and ensure efficiency at scale without slowing
              down development.
            </p>
            <img
              src="img/illustrations/leverage-for-cloud-engineers.png"
              loading="lazy"
              alt=""
              className={clsx(styles.sectionImage, styles.overlappedImage)}
            />
            <ul className={styles.cards}>
              <li>
                <Link to="/docs/concepts/search">
                  <h3>
                    <SearchIcon className={styles.cardIcon} />
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
                <Link to="/docs/reference/search/aggregation">
                  <h3>
                    <ChartSquareBarIcon className={styles.cardIcon} />
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
                    <CogIcon className={styles.cardIcon} />
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
          </div>
        </section>
        <section className={baseStyles.section}>
          <div className={baseStyles.sectionInner}>
            <div className={baseStyles.sectionHeading}>
              <div className={baseStyles.tagline}>Take Control</div>
              <h2>Build infrastructure that moves your company forward.</h2>
            </div>
            <p>
              Resoto collects resource metadata and stores that data in a
              directed graph. You get visibility into resources in different
              clouds, organizations, regions, sub-accounts, etc.&mdash;all from
              a single place.
            </p>
            <img
              src="img/illustrations/take-control.png"
              loading="lazy"
              alt=""
              className={clsx(styles.sectionImage, styles.fadingImage)}
            />
            <ul className={styles.cards}>
              <li>
                <h3>
                  <TruckIcon className={styles.cardIcon} />
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
                  <CurrencyDollarIcon className={styles.cardIcon} />
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
                  <ShieldCheckIcon className={styles.cardIcon} />
                  <span>Stay Secure</span>
                </h3>
                <p>
                  Resoto provides a &ldquo;God View&rdquo; of asset changes and
                  policy violations across all of your clouds, projects, and
                  accounts.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className={baseStyles.section}>
          <div className={baseStyles.sectionInner}>
            <div className={baseStyles.sectionHeading}>
              <div className={baseStyles.tagline}>Why Resoto?</div>
              <h2>
                Know what&rsquo;s running in your cloud, or it will cost you.
              </h2>
            </div>
            <p>
              Resoto allows you to give your engineers liberal permissions
              without losing control of your cloud infrastructure.
            </p>
            <img
              src="img/illustrations/why-resoto.png"
              loading="lazy"
              alt=""
              className={styles.sectionImage}
            />
          </div>
        </section>
        <section className={baseStyles.section}>
          <div className={baseStyles.sectionInner}>
            <div className={baseStyles.sectionHeading}>
              <div className={baseStyles.tagline}>Say Goodbye to Busywork</div>
              <h2>It&rsquo;s time to automate your infrastructure tasks.</h2>
            </div>
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
              <Link to="/docs/getting-started/configure-cloud-provider-access/aws">
                Amazon Web Services
              </Link>
              ,{' '}
              <Link to="/docs/getting-started/configure-cloud-provider-access/gcp">
                Google Cloud Platform
              </Link>
              ,{' '}
              <Link to="/docs/getting-started/configure-cloud-provider-access/digitalocean">
                DigitalOcean
              </Link>
              , and{' '}
              <Link to="/docs/getting-started/configure-cloud-provider-access/kubernetes">
                Kubernetes
              </Link>
              .
            </p>
            <ul className={styles.cards}>
              <li>
                <Link to="/docs/getting-started/install-resoto">
                  <h3>
                    <DownloadIcon className={styles.cardIcon} />
                    <span>Install Resoto</span>
                  </h3>
                </Link>
                <p>
                  <Link to="/docs/getting-started/install-resoto/aws">
                    Deploy Resoto to Amazon Web Services
                  </Link>{' '}
                  or install Resoto locally using{' '}
                  <Link to="/docs/getting-started/install-resoto/docker">
                    Docker
                  </Link>
                  ,{' '}
                  <Link to="/docs/getting-started/install-resoto/kubernetes">
                    Kubernetes
                  </Link>
                  , or{' '}
                  <Link to="/docs/getting-started/install-resoto/pip">pip</Link>
                  !
                </p>
              </li>
              <li>
                <Link to="/docs/reference/search">
                  <h3>
                    <TerminalIcon className={styles.cardIcon} />
                    <span>Perform a Search</span>
                  </h3>
                </Link>
                <p>
                  Check out the Resoto documentation for{' '}
                  <Link to="/docs/reference/search">explanations</Link> and{' '}
                  <Link to="/docs/reference/search/examples">examples</Link>.
                </p>
              </li>
              <li>
                <Link to="/docs/concepts/automation/job">
                  <h3>
                    <CalendarIcon className={styles.cardIcon} />
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
          </div>
        </section>
        <section className={baseStyles.section}>
          <div className={baseStyles.sectionInner}>
            <div className={baseStyles.sectionHeading}>
              <div className={baseStyles.tagline}>Connect and Learn</div>
              <h2>Join us on the forefront of infrastructure intelligence.</h2>
            </div>
            <p>
              Keep up to date with the latest Resoto news, features, events, and
              articles.
            </p>
            <ul className={styles.cards}>
              <li>
                <a
                  href="https://github.com/someengineering/resoto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>
                    <CodeIcon className={styles.cardIcon} />
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
                    <ChatIcon className={styles.cardIcon} />
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
                    <LinkIcon className={styles.cardIcon} />
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
