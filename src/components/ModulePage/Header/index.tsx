import { PageMetadata } from '@docusaurus/theme-common';
import baseStyles from '@site/src/pages/styles.module.css';
import { getImage } from '@site/src/utils/socialImageUtils';
import clsx from 'clsx';
import React from 'react';
import Balancer from 'react-wrap-balancer';
import styles from './styles.module.css';

export default function ModulePageHeader({
  moduleName,
  tagline,
  description,
  image,
}: {
  moduleName: string;
  tagline: string;
  description: string;
  image: string;
}): JSX.Element {
  const title = moduleName;

  return (
    <>
      <PageMetadata
        title={`Resoto ${moduleName}`}
        description={`${tagline}. ${description}.`}
        image={getImage({ title, metadata: tagline })}
      />
      <div className={baseStyles.section}>
        <div className={clsx(baseStyles.inner, styles.inner)}>
          <div>
            <h1 className={clsx(baseStyles.title, styles.title)}>
              <span>
                Resoto <strong>{moduleName}</strong>:
              </span>
              <br />
              {tagline}
            </h1>
            <p className={baseStyles.description}>
              <Balancer>{description}</Balancer>
            </p>
          </div>
          <div
            style={{ backgroundImage: `url(${image})` }}
            className={styles.image}
            aria-hidden="true"
          />
        </div>
      </div>
    </>
  );
}
