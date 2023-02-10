import type { PropVersionMetadata } from '@docusaurus/plugin-content-docs';
import { useDocsVersion } from '@docusaurus/theme-common/internal';
import latestRelease from '@site/latestRelease.json';
import versions from '@site/versions.json';
import CodeBlock from '@theme/CodeBlock';
import useStoredJson from '@theme/useStoredJson';
import React from 'react';
import {
  AwsPolicyName,
  AwsPolicyResponse,
  awsPolicyUrl,
} from '../utils/awsPolicyHelper';

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

  const policy: AwsPolicyResponse = useStoredJson(
    `aws-${version}-ResotoOrgList`
  );

  return (
    <>
      {policy ? (
        <CodeBlock
          language="json"
          title={awsPolicyUrl(version, policyName)}
          showLineNumbers
        >
          {JSON.stringify(policy, null, 2)}
        </CodeBlock>
      ) : null}
    </>
  );
}
