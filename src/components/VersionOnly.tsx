import type { PropVersionMetadata } from '@docusaurus/plugin-content-docs';
import { useDocsVersion } from '@docusaurus/theme-common/internal';
import React from 'react';

export default function VersionOnly({
  allowed,
  children,
}: {
  allowed: string | string[];
  children: React.ReactNode;
}): JSX.Element {
  let versionMetadata: PropVersionMetadata;

  try {
    versionMetadata = useDocsVersion();
  } catch (e) {
    versionMetadata = null;
  }

  return (
    <>
      {(
        Array.isArray(allowed)
          ? allowed.includes(versionMetadata?.version)
          : allowed === versionMetadata?.version
      )
        ? children
        : null}
    </>
  );
}
