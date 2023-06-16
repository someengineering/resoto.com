import Link from '@docusaurus/Link';
import IconExternalLink from '@theme/Icon/ExternalLink';
import type { Props } from '@theme/MDXComponents/A';
import React from 'react';

export default function MDXA(props: Props): JSX.Element {
  try {
    new URL(props.href); // throws for relative URLs

    return (
      <Link
        {...props}
        rel={
          props.href.includes('localhost')
            ? 'noopener noreferrer nofollow'
            : 'noopener noreferrer'
        }
      >
        {props.children}
        {React.isValidElement(props.children) ? null : <IconExternalLink />}
      </Link>
    );
  } catch (e) {
    return <Link {...props} />;
  }
}
