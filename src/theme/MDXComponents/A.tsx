import Link from '@docusaurus/Link';
import IconExternalLink from '@theme/Icon/ExternalLink';
import type { Props } from '@theme/MDXComponents/A';
import React from 'react';

export default function MDXA(props: Props): JSX.Element {
  try {
    new URL(props.href); // throws for relative URLs

    return (
      <Link {...props}>
        {props.children}
        <IconExternalLink />
      </Link>
    );
  } catch (e) {
    return <Link {...props} />;
  }
}
