import Link from '@docusaurus/Link';
import type { WrapperProps } from '@docusaurus/types';
import latestRelease from '@site/latestRelease.json';
import DocVersionBadge from '@theme-original/DocVersionBadge';
import type DocVersionBadgeType from '@theme/DocVersionBadge';
import React from 'react';

type Props = WrapperProps<typeof DocVersionBadgeType>;

export default function DocVersionBadgeWrapper(props: Props): JSX.Element {
  return (
    <Link
      to={latestRelease.link}
      title="View release notes"
      className="sm-screens-only"
    >
      <DocVersionBadge {...props} />
    </Link>
  );
}
