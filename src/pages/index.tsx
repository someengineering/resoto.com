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
import AirportSheepIllustration from '@site/src/assets/sheep-airport.svg';
import ConfusedSheepIllustration from '@site/src/assets/sheep-confused.svg';
import DeveloperSheepIllustration from '@site/src/assets/sheep-developer.svg';
import HappySheepIllustration from '@site/src/assets/sheep-happy.svg';
import ProfessorSheepIllustration from '@site/src/assets/sheep-professor.svg';
import SreSheepIllustration from '@site/src/assets/sheep-sre.svg';
import StrongSheepIllustration from '@site/src/assets/sheep-strong.svg';
import WinningSheepIllustration from '@site/src/assets/sheep-winning.svg';
import VmwareLogo from '@site/src/assets/vmware.svg';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout>
      <header className={styles.hero}>
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <h2 className={styles.tagline}>{siteConfig.tagline}</h2>
            <div>
              Resoto creates an <strong>inventory</strong> of your cloud,
              provides deep <strong>visibility</strong>, and reacts to{' '}
              <strong>changes</strong> in your infrastructure.
            </div>
            <div className={styles.cta}>
              <Link
                to="/docs/getting-started/installation"
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
          {/* <img
            className={styles.heroLogo}
            src="/img/logo-lg.svg"
            alt="Resoto Logo"
          /> */}
        </div>
      </header>
      <main>
        <section className={clsx(styles.section, styles.sectionAlt)}>
          <h3 className="text--center">
            Resoto is a meta layer on top of your infrastructure, with support
            for&hellip;
          </h3>
          <div className={styles.sectionLogoContainer}>
            <Link to="/docs/getting-started/configuration/worker#amazon-web-services">
              <AwsLogo />
            </Link>
            <Link to="/docs/getting-started/configuration/worker#digitalocean">
              <DigitalOceanLogo />
            </Link>
            <KubernetesLogo />
            <Link to="/docs/getting-started/configuration/worker#google-cloud-platform">
              <GoogleCloudLogo />
            </Link>
            <VmwareLogo />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionContainer}>
            <div className={styles.flexContainer}>
              <HappySheepIllustration className={styles.sectionImage} />
              <div>
                <span
                  className={clsx(
                    styles.sectionBadge,
                    'badge badge--primary badge--lg'
                  )}
                >
                  Why Resoto?
                </span>
                <h2 className={styles.sectionTitle}>
                  If you don&rsquo;t know what is running in your cloud, it will
                  cost you.
                </h2>
                <p>
                  At some point, you <strong>lose track</strong> of where people
                  put stuff. Spinning up new resources carries little risk, but{' '}
                  cleaning up can have <strong>unforeseen consequences</strong>.
                </p>
                <p>It is no surprise that resource usage tends to grow.</p>
              </div>
            </div>
            <div className={styles.sectionImageContainer}>
              <DeveloperSheepIllustration />
              <SreSheepIllustration />
              <ConfusedSheepIllustration />
            </div>
            {/* <p>
              Resoto allows you to give your engineers liberal permissions
              without losing control of your cloud infrastructure.
            </p> */}
            <blockquote className={styles.quotation}>
              <div>
                <p>
                  I built the first version of Resoto to get a handle on the
                  infrastructure at{' '}
                  <a
                    href="https://d2iq.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    D2iQ
                  </a>
                  . We had around{' '}
                  <strong>
                    two hundred engineers able to spin up resources
                  </strong>{' '}
                  but only a small,{' '}
                  <strong>three-person SRE team responsible</strong> for all
                  cloud usage.
                </p>
                <footer>
                  <strong>Lukas Lösche</strong>, Co-Founder at{' '}
                  <a
                    href="https://some.engineering"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Some Engineering
                  </a>
                </footer>
              </div>
            </blockquote>
          </div>
        </section>
        <section className={clsx(styles.section, styles.sectionAlt)}>
          <div className={styles.sectionContainer}>
            <div className={styles.flexContainer}>
              <StrongSheepIllustration className={styles.sectionImage} />
              <div>
                <span
                  className={clsx(
                    styles.sectionBadge,
                    'badge badge--primary badge--lg'
                  )}
                >
                  Take Control
                </span>
                <h2 className={styles.sectionTitle}>
                  Build infrastructure that moves your company forward.
                </h2>
                <p>
                  No more custom scripts or cron jobs that disappear when your
                  engineers move on to new roles.
                </p>
              </div>
            </div>
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
                  <Link to="/docs/concepts/cleanup">cleaning up</Link> orphaned
                  resources. Resoto also alerts you about expensive resources
                  when they are deployed, so there are no surprises in your
                  cloud bill.
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
            {/* <blockquote className={styles.quotation}>
              <div>
                <p>
                  Since deploying Resoto, our{' '}
                  <strong>cloud bill dropped by over seventy percent</strong>
                  &mdash;saving us millions every year.
                </p>
                <footer>
                  <strong>Tobi Knaup</strong>, CEO at{' '}
                  <a
                    href="https://d2iq.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    D2iQ
                  </a>
                </footer>
              </div>
            </blockquote> */}
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionContainer}>
            <div className={styles.flexContainer}>
              <AirportSheepIllustration className={styles.sectionImage} />
              <div>
                <span
                  className={clsx(
                    styles.sectionBadge,
                    'badge badge--primary badge--lg'
                  )}
                >
                  Leverage for Cloud Engineers
                </span>
                <h2 className={styles.sectionTitle}>
                  Resoto keeps track of your infrastructure and puts all the
                  data at your fingertips.
                </h2>
                <p>
                  <strong>Understand</strong> who is running what,{' '}
                  <strong>answer questions</strong> about your infrastructure,
                  and <strong>ensure efficiency</strong> at scale without
                  slowing down development.
                </p>
                <p>Resoto is like a map when exploring an unfamiliar city.</p>
              </div>
            </div>
            <ul className={styles.sectionItems}>
              <li>
                <Link to="/docs/concepts/search">
                  <h3>
                    <SearchIcon className={styles.sectionItemIcon} />
                    <span>Find</span>
                  </h3>
                </Link>
                <p>
                  Write ad-hoc queries with full-text metadata search across all
                  your cloud accounts or projects using the{' '}
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
                  into regular reports, with fleet-wide metrics you can export
                  to your existing tools and share with colleagues in Product or
                  Finance.
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
                  With <Link to="/docs/concepts/automation/job">jobs</Link>, you
                  can schedule recurring tasks such as identifying non-compliant
                  resources or enforcing{' '}
                  <Link to="/docs/concepts/tagging">tag</Link> structures.
                </p>
              </li>
            </ul>
            {/* <blockquote className={styles.quotation}>
              <div>
                <p>
                  Resoto is useful &hellip; for <strong>ad-hoc queries</strong>{' '}
                  and for the ability to extend it to{' '}
                  <strong>answer questions</strong> that we can&rsquo;t
                  currently answer.
                </p>
                <footer>
                  <strong>Tai Dickerson</strong>, Production Engineering at{' '}
                  <a
                    href="https://shopify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Shopify
                  </a>
                </footer>
              </div>
            </blockquote> */}
          </div>
        </section>
        <section className={clsx(styles.section, styles.sectionAlt)}>
          <div className={styles.sectionContainer}>
            <div className={styles.flexContainer}>
              <ProfessorSheepIllustration className={styles.sectionImage} />
              <div>
                <span
                  className={clsx(
                    styles.sectionBadge,
                    'badge badge--primary badge--lg'
                  )}
                >
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
                  <a
                    href="https://aws.amazon.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Amazon Web Services
                  </a>
                  ,{' '}
                  <a
                    href="https://cloud.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Cloud Platform
                  </a>
                  , and{' '}
                  <a
                    href="https://digitalocean.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DigitalOcean
                  </a>
                  .
                </p>
                <p>
                  In the future, we plan to release a managed cloud solution.
                </p>
              </div>
            </div>
            <ul className={styles.sectionItems}>
              <li>
                <Link to="/docs/getting-started/installation">
                  <h3>
                    <DownloadIcon className={styles.sectionItemIcon} />
                    <span>Install Resoto</span>
                  </h3>
                </Link>
                <p>
                  Get started with Resoto using{' '}
                  <Link to="/docs/getting-started/installation/docker">
                    Docker
                  </Link>
                  ,{' '}
                  <Link to="/docs/getting-started/installation/kubernetes">
                    Kubernetes
                  </Link>
                  , or{' '}
                  <Link to="/docs/getting-started/installation/pip">pip</Link>{' '}
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
                  <Link to="/docs/concepts/cleanup">cleanup</Link> going
                  forward.
                </p>
              </li>
            </ul>
            {/* <blockquote className={styles.quotation}>
              <div>
                <p>
                  I installed Resoto. <strong>Super cool CLI experience</strong>
                  , and I love the <strong>app configuration</strong>&mdash;much
                  better than YAML hunting.
                </p>
                <footer>
                  <strong>Justyn Roberts</strong>, Solutions Engineering at{' '}
                  <a
                    href="https://pagerduty.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PagerDuty
                  </a>
                </footer>
              </div>
            </blockquote> */}
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionContainer}>
            <div className={styles.flexContainer}>
              <WinningSheepIllustration className={styles.sectionImage} />
              <div>
                <span
                  className={clsx(
                    styles.sectionBadge,
                    'badge badge--primary badge--lg'
                  )}
                >
                  Connect and Learn
                </span>
                <h2 className={styles.sectionTitle}>
                  Join us on the forefront of infrastructure intelligence.
                </h2>
                <p>
                  Keep up to date with the latest Resoto news, features, events,
                  and articles.
                </p>
              </div>
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
