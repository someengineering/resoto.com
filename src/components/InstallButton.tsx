import Link from '@docusaurus/Link';
import latestRelease from '@site/latestRelease.json';
import versions from '@site/versions.json';
import React from 'react';

export default function InstallButton({
  includeVersion,
  className,
}: {
  includeVersion?: boolean;
  className?: string;
}): JSX.Element {
  return (
    <Link
      to="/docs/getting-started/install-resoto"
      className={`button button--primary button--lg ${className}`}
    >
      Install Resoto
      {includeVersion ? ` ${latestRelease[versions[0]].version}` : ''}
    </Link>
  );
}
