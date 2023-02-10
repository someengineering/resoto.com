import type { PropVersionMetadata } from '@docusaurus/plugin-content-docs';
import { useDocsVersion } from '@docusaurus/theme-common/internal';
import latestRelease from '@site/latestRelease.json';
import versions from '@site/versions.json';
import CodeBlock from '@theme/CodeBlock';
import React, { useEffect, useState } from 'react';
import {
  AwsPolicyName,
  AwsPolicyResponse,
  awsPolicyUrl,
  fetchAwsPolicy,
} from '../utils/awsPolicyHelper';

export default function AwsPolicy({
  policyName,
}: {
  policyName: AwsPolicyName;
}): JSX.Element {
  const [policy, setPolicy] = useState<AwsPolicyResponse | null>(null);
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

  useEffect(() => {
    const getAwsPolicy = async () => {
      setPolicy(await fetchAwsPolicy(version, policyName));
    };

    getAwsPolicy();
  }, []);

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
