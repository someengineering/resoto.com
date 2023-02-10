import type { PropVersionMetadata } from '@docusaurus/plugin-content-docs';
import { useDocsVersion } from '@docusaurus/theme-common/internal';
import latestRelease from '@site/latestRelease.json';
import versions from '@site/versions.json';
import CodeBlock from '@theme/CodeBlock';
import useStoredData from '@theme/useStoredData';
import React from 'react';
import { AwsPolicyName, awsPolicyUrl } from '../utils/awsPolicyHelper';

export default function AwsPolicy({
  policyName,
}: {
  policyName: AwsPolicyName;
}): JSX.Element {
  let versionMetadata: PropVersionMetadata | null;

  try {
    versionMetadata = useDocsVersion();
  } catch (e) {
    versionMetadata = null;
  }

  const version =
    versionMetadata?.version === 'current'
      ? 'edge'
      : latestRelease[versionMetadata?.version ?? versions[0]].version;

  return (
    <CodeBlock
      language="json"
      title={awsPolicyUrl(version, policyName)}
      showLineNumbers
    >
      {useStoredData(`aws-${version}-ResotoOrgList`)}
    </CodeBlock>
  );
}
