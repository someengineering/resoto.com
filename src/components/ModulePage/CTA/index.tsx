import Link from '@docusaurus/Link';
import InstallButton from '@site/src/components/InstallButton';
import baseStyles from '@site/src/pages/styles.module.css';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

export default function ModulePageCTA({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className={baseStyles.section}>
      <div className={baseStyles.inner}>
        <div className={styles.inner}>
          {children}
          <div className={clsx(baseStyles.buttons, styles.buttons)}>
            <InstallButton
              includeVersion
              className={clsx(baseStyles.button, baseStyles.primaryButton)}
            />
            <Link
              to="/docs"
              className={clsx(
                baseStyles.button,
                baseStyles.outlinedButton,
                baseStyles.docsButton
              )}
            >
              Explore Docs
            </Link>
          </div>
          <div className={styles.sheep} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
