import type { PropVersionMetadata } from '@docusaurus/plugin-content-docs';
import { useDocsVersion } from '@docusaurus/theme-common/internal';
import latestRelease from '@site/latestRelease.json';
import versions from '@site/versions.json';
import React from 'react';

export default function CloudFormationButton({
  versionTag,
}: {
  versionTag?: string;
}): JSX.Element {
  if (!versionTag) {
    let versionMetadata: PropVersionMetadata;

    try {
      versionMetadata = useDocsVersion();
    } catch (e) {
      versionMetadata = null;
    }

    versionTag =
      versionMetadata?.version === 'current'
        ? 'edge'
        : latestRelease[versionMetadata?.version ?? versions[0]].version;
  }

  return (
    <a
      href={`https://eu-central-1.console.aws.amazon.com/cloudformation/home?region=eu-central-1#/stacks/create/review?templateURL=https://resoto-cdk.s3.eu-central-1.amazonaws.com/Resoto_EKS.template&stackName=ResotoEKS&param_ResotoTag=${versionTag}`}
      target="_blank"
      rel="noopener noreferrer"
      className="button button--primary"
    >
      Deploy Resoto {versionTag} to AWS
    </a>
  );
}
