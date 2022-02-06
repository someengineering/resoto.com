import clsx from 'clsx';
import React from 'react';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Resource Graph',
    image: 'img/sheep-professor.svg',
    description: (
      <>
        Resoto indexes resources, captures dependencies, and maps out your
        infrastructure in a <strong>human-friendly graph view</strong>.
      </>
    ),
  },
  {
    title: 'Search and Automation',
    image: 'img/sheep-airport.svg',
    description: (
      <>
        Developers and SREs can search the graph with a{' '}
        <strong>query language</strong>, and create alerting and cleanup{' '}
        <strong>workflows</strong>.
      </>
    ),
  },
  {
    title: 'Metrics',
    image: 'img/sheep-strong.svg',
    description: (
      <>
        Data can be aggregated and exported to a{' '}
        <strong>time series database</strong> such as Prometheus!
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
