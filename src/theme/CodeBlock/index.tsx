import type { PropVersionMetadata } from '@docusaurus/plugin-content-docs';
import { useDocsVersion } from '@docusaurus/theme-common/internal';
import latestRelease from '@site/latestRelease.json';
import versions from '@site/versions.json';
import OriginalCodeBlock from '@theme-original/CodeBlock';
import type CodeBlockType from '@theme/CodeBlock';
import React, { ComponentProps } from 'react';

type Props = ComponentProps<typeof CodeBlockType>;

export default function CodeBlock(props: Props): JSX.Element {
  let versionMetadata: PropVersionMetadata;

  try {
    versionMetadata = useDocsVersion();
  } catch (e) {
    versionMetadata = null;
  }

  const versionTag =
    !versionMetadata || versionMetadata.version === 'current'
      ? null
      : latestRelease[versionMetadata.version].version;

  return (
    <OriginalCodeBlock {...props}>
      {props.children
        .toString()
        .replace(/{{imageTag}}/g, versionTag ?? 'edge')
        .replace(
          /{{nonEdgeImageTag}}/g,
          versionTag ?? latestRelease[versions[0]].version
        )
        .replace(/{{repoBranch}}/g, versionTag ?? 'main')}
    </OriginalCodeBlock>
  );
}
