import { useDocsVersion } from '@docusaurus/theme-common/internal';
import { type ReactNode } from 'react';

export default function VersionOnly({
  allowed,
  children,
}: {
  allowed: string | string[];
  children: ReactNode;
}): JSX.Element {
  const versionMetadata = useDocsVersion();

  return (
    <>
      {versionMetadata &&
      (Array.isArray(allowed)
        ? allowed.includes(versionMetadata.version)
        : allowed === versionMetadata.version)
        ? children
        : null}
    </>
  );
}
