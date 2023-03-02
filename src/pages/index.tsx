import Link from '@docusaurus/Link';
import {
  CalendarIcon,
  ChartSquareBarIcon,
  CogIcon,
  CurrencyDollarIcon,
  DownloadIcon,
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
import NewsletterSignupForm from '@site/src/components/NewsletterSignupForm';
import Layout from '@theme/Layout';
import { clsx } from 'clsx';
import React from 'react';
import leverageForCloudEngineersImage from './img/leverage-for-cloud-engineers.png';
import takeControlImage from './img/take-control.png';
import whyResotoImage from './img/why-resoto.png';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <div className={styles.tagline}>
              Metric generation and visual exploration
            </div>
            <h1 className={styles.heroTitle}>Resoto</h1>
            <p>
              Create an <strong>inventory</strong> of your cloud, get deep{' '}
              <strong>visibility</strong>, and <strong>react to changes</strong>{' '}
              in your infrastructure.
            </p>
            <p className={styles.buttons}>
              <InstallButton product="resoto" includeVersion />
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
        <div className={clsx(styles.clouds, styles.cloudsTop)} />
        <section className={clsx(styles.section, styles.cloudSection)}>
          <div className={styles.sectionInner}>
            <h2 className="text--center">
              Resoto is a meta layer on top of your infrastructure, with support
              for&hellip;
            </h2>
            <div className={styles.logos}>
              <Link to="/docs/getting-started/configure-resoto/aws">
                <AwsLogo />
              </Link>
              <Link to="/docs/getting-started/configure-resoto/gcp">
                <GoogleCloudLogo />
              </Link>
              <Link to="/docs/getting-started/configure-resoto/digitalocean">
                <DigitalOceanLogo />
              </Link>
              <Link to="/docs/getting-started/configure-resoto/kubernetes">
                <KubernetesLogo />
              </Link>
            </div>
          </div>
        </section>
        <div className={clsx(styles.clouds, styles.cloudsBottom)} />
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeading}>
              <div className={styles.tagline}>Leverage for Cloud Engineers</div>
              <h2>Resoto puts infrastructure data at your fingertips.</h2>
            </div>
            <p>
              Understand who is running what, answer questions about your
              infrastructure, and ensure efficiency at scale without slowing
              down development.
            </p>
            <img
              src={leverageForCloudEngineersImage}
              loading="lazy"
              alt=""
              className={clsx(styles.sectionImage, styles.overlappedImage)}
            />
            <ul className={styles.cards}>
              <li>
                <Link to="/docs/reference/search">
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
                  Turn your <Link to="/docs/reference/search">searches</Link>{' '}
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
                  <Link to="/docs/concepts/automation#jobs">jobs</Link> that
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
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeading}>
              <div className={styles.tagline}>Take Control</div>
              <h2>Build infrastructure that moves your company forward.</h2>
            </div>
            <p>
              Resoto collects resource metadata and stores that data in a
              directed graph. You get visibility into resources in different
              clouds, organizations, regions, sub-accounts, etc.&mdash;all from
              a single place.
            </p>
            <img
              src={takeControlImage}
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
                  <Link to="/docs/reference/search">finding</Link> and{' '}
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
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeading}>
              <div className={styles.tagline}>Why Resoto?</div>
              <h2>
                Know what&rsquo;s running in your cloud, or it will cost you.
              </h2>
            </div>
            <p>
              Resoto allows you to give your engineers liberal permissions
              without losing control of your cloud infrastructure.
            </p>
            <img
              src={whyResotoImage}
              loading="lazy"
              alt=""
              className={styles.sectionImage}
            />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeading}>
              <div className={styles.tagline}>Say Goodbye to Busywork</div>
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
              <Link to="/docs/getting-started/configure-resoto/aws">
                Amazon Web Services
              </Link>
              ,{' '}
              <Link to="/docs/getting-started/configure-resoto/gcp">
                Google Cloud Platform
              </Link>
              ,{' '}
              <Link to="/docs/getting-started/configure-resoto/digitalocean">
                DigitalOcean
              </Link>
              , and{' '}
              <Link to="/docs/getting-started/configure-resoto/kubernetes">
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
                <Link to="/docs/how-to-guides/automation">
                  <h3>
                    <CalendarIcon className={styles.cardIcon} />
                    <span>Schedule a Job</span>
                  </h3>
                </Link>
                <p>
                  Set up a recurring{' '}
                  <Link to="/docs/concepts/automation#jobs">job</Link> and allow
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
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeading}>
              <div className={styles.tagline}>Connect and Learn</div>
              <h2>Join us on the forefront of infrastructure intelligence.</h2>
            </div>
            <p>
              Keep up to date with the latest{' '}
              <Link to="https://some.engineering">Some Engineering</Link> news,
              features, events, and articles.
            </p>
            <NewsletterSignupForm />
          </div>
        </section>
      </main>
    </Layout>
  );
}
