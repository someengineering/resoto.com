import Link from '@docusaurus/Link';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  link: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Search Infrastructure',
    link: '/docs/concepts/search',
    image: 'img/illustrations/sheep-strong.svg',
    description: (
      <>
        Resoto maps out your cloud infrastructure in a{' '}
        <strong>
          <Link to="/docs/concepts/graph">graph</Link>
        </strong>{' '}
        and provides a simple{' '}
        <strong>
          <Link to="/docs/concepts/search">search syntax</Link>
        </strong>{' '}
        .
      </>
    ),
  },
  {
    title: 'Generate Reports',
    link: '/docs/concepts/search/aggregation',
    image: 'img/illustrations/sheep-professor.svg',
    description: (
      <>
        Resoto keeps track of and reports infrastructure changes over time,
        making it easy to audit resource usage and cleanup.
      </>
    ),
  },
  {
    title: 'Automate Tasks',
    link: '/docs/concepts/automation/job',
    image: 'img/illustrations/sheep-airport.svg',
    description: (
      <>
        Tedious tasks like rule enforcement, resource tagging, and cleanup can
        be automated using{' '}
        <strong>
          <Link to="/docs/concepts/automation/job">jobs</Link>
        </strong>
        .
      </>
    ),
  },
];

function Feature({ title, link, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Link to={link} className={styles.featureLink}>
          <img src={image} alt={title} className={styles.featureSvg} />
          <h3>{title}</h3>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
