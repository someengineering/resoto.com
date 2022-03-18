import Link from '@docusaurus/Link';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Search Infastructure',
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
    image: 'img/illustrations/sheep-professor.svg',
    description: (
      <>
        Resoto keeps track of and reports infastructure changes over time,
        making it easy to audit resource usage and cleanup.
      </>
    ),
  },
  {
    title: 'Automate Tasks',
    image: 'img/illustrations/sheep-airport.svg',
    description: (
      <>
        Tedious tasks like rule enforcement, resource tagging, and cleanup can
        be automated using{' '}
        <strong>
          <Link to="/docs/concepts/automation/workflow">workflows</Link>
        </strong>
        .
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
