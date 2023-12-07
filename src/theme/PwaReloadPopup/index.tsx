import type { Props } from '@theme/PwaReloadPopup';
import clsx from 'clsx';
import { useState } from 'react';
import styles from './styles.module.css';

export default function PwaReloadPopup({
  onReload,
}: Props): JSX.Element | false {
  const [isVisible, setIsVisible] = useState(true);

  return (
    isVisible && (
      <div className={clsx('alert', 'alert--secondary', styles.popup)}>
        <p>The site has been updated</p>
        <div className={styles.buttonContainer}>
          <button
            className="button button--link"
            type="button"
            onClick={() => {
              setIsVisible(false);
              onReload();
            }}
          >
            Reload
          </button>

          <button
            aria-label="Close"
            className="close"
            type="button"
            onClick={() => setIsVisible(false)}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
      </div>
    )
  );
}
