import type { WrapperProps } from '@docusaurus/types';
import DocVersionBadge from '@theme-original/DocVersionBadge';
import type DocVersionBadgeType from '@theme/DocVersionBadge';
import React from 'react';

type Props = WrapperProps<typeof DocVersionBadgeType>;

export default function DocVersionBadgeWrapper(props: Props): JSX.Element {
  return (
    <span className="sm-screens-only">
      <DocVersionBadge {...props} />
    </span>
  );
}
