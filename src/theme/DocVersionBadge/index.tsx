import { ThemeClassNames } from '@docusaurus/theme-common';
import { useDocsVersion } from '@docusaurus/theme-common/internal';
import Translate from '@docusaurus/Translate';
import type { Props } from '@theme/DocVersionBadge';
import clsx from 'clsx';
import React from 'react';

export default function DocVersionBadge({
  className,
}: Props): JSX.Element | null {
  const versionMetadata = useDocsVersion();
  if (versionMetadata.badge) {
    return (
      <span
        className={clsx(
          className,
          ThemeClassNames.docs.docVersionBadge,
          'badge badge--secondary sm-screens-only'
        )}
      >
        <Translate
          id="theme.docs.versionBadge.label"
          values={{ versionLabel: versionMetadata.label }}
        >
          {'Version: {versionLabel}'}
        </Translate>
      </span>
    );
  }
  return null;
}
