import { useDocsVersion } from '@docusaurus/theme-common/internal';
import {
  AwsPolicyName,
  GcpPolicyName,
  Provider,
  policyUrl,
} from '@site/src/utils/iamPolicyUtils';
import versions from '@site/versions.json';
import CodeBlock from '@theme/CodeBlock';
import useStoredJson from '@theme/useStoredJson';
import React from 'react';
import YAML from 'yaml';

export default function IamPolicyDocument({
  provider,
  policyName,
}: {
  provider: Provider;
  policyName: AwsPolicyName | GcpPolicyName;
}): JSX.Element {
  const versionMetadata = useDocsVersion();
  const version =
    versionMetadata?.version === 'current'
      ? 'edge'
      : versionMetadata?.version ?? versions[0];
  const policy = useStoredJson(`${provider}-${version}-${policyName}`);

  return (
    <CodeBlock
      language={provider === 'aws' ? 'json' : 'yaml'}
      title={policyUrl(provider, version, policyName)}
      showLineNumbers
    >
      {provider === 'aws'
        ? JSON.stringify(policy, null, 2)
        : YAML.stringify(policy)}
    </CodeBlock>
  );
}
