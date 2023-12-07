import baseStyles from '@site/src/pages/styles.module.css';
import clsx from 'clsx';
import { type ReactNode } from 'react';
import styles from './styles.module.css';

export default function ModulePageSection({
  children,
  image,
}: {
  children: ReactNode;
  image?: string;
}): JSX.Element {
  return (
    <div className={clsx(baseStyles.section, styles.section)}>
      <div className={clsx(baseStyles.inner, styles.inner)}>
        <div className={image ? null : 'text--center'}>{children}</div>
        {image ? (
          <img
            src={image}
            alt=""
            className={styles.image}
            aria-hidden="true"
            loading="lazy"
          />
        ) : null}
      </div>
    </div>
  );
}
