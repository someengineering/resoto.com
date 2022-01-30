import clsx from 'clsx';
import React from 'react';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  // image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Resource Graph',
    // image: require('../../static/img/_.svg').default,
    description: (
      <>
        Resoto indexes resources, captures dependencies, and maps out your
        infrastructure in a human-friendly graph view with metrics for each
        resource.
      </>
    ),
  },
  {
    title: 'Search and Automation',
    // image: require('../../static/img/_.svg').default,
    description: (
      <>
        Developers and SREs can search the graph with a query language, and
        create alerting and cleanup workflows.
      </>
    ),
  },
  {
    title: 'Metrics',
    // image: require('../../static/img/_.svg').default,
    description: (
      <>
        Data can be aggregated and exported to a time series database such as
        Prometheus!
      </>
    ),
  },
];

function Feature({ title, /*image,*/ description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div> */}
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
