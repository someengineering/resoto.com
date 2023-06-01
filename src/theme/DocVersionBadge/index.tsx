import Link from '@docusaurus/Link';
import { DEFAULT_PLUGIN_ID } from '@docusaurus/constants';
import { useActivePlugin } from '@docusaurus/plugin-content-docs/client';
import { useDocsVersion } from '@docusaurus/theme-common/internal';
import type { WrapperProps } from '@docusaurus/types';
import latestRelease from '@site/latestRelease.json';
import DocVersionBadge from '@theme-original/DocVersionBadge';
import type DocVersionBadgeType from '@theme/DocVersionBadge';
import React from 'react';

type Props = WrapperProps<typeof DocVersionBadgeType>;

export default function DocVersionBadgeWrapper(props: Props): JSX.Element {
  const { pluginId } = useActivePlugin();
  const versionMetadata = useDocsVersion();

  return pluginId === DEFAULT_PLUGIN_ID &&
    versionMetadata.version.substring(
      0,
      versionMetadata.version.indexOf('.')
    ) ===
      latestRelease[versionMetadata.version]?.substring(
        0,
        latestRelease[versionMetadata.version]?.indexOf('.')
      ) ? (
    <Link
      to={`/releases/${latestRelease[versionMetadata.version]}`}
      title="View release notes"
    >
      <DocVersionBadge {...props} />
    </Link>
  ) : (
    <DocVersionBadge {...props} />
  );
}
