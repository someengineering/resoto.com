import Link from '@docusaurus/Link';
import type { Props } from '@theme/Tag';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

export default function Tag({ permalink, label, count }: Props): JSX.Element {
  return (
    <Link
      href={permalink}
      className={clsx(
        styles.tag,
        count ? styles.tagWithCount : styles.tagRegular
      )}
      rel="tag"
    >
      {label}
      {count && <span>{count}</span>}
    </Link>
  );
}
