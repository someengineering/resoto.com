import type { PropVersionMetadata } from '@docusaurus/plugin-content-docs';
import { useDocsVersion } from '@docusaurus/theme-common/internal';
import latestRelease from '@site/latestRelease.json';
import React from 'react';

export default function CloudFormationButton(): JSX.Element {
  let versionMetadata: PropVersionMetadata;

  try {
    // versionMetadata: {pluginId: "default", version: "2.X" .... }
    // version is either "current" or major.X version number
    versionMetadata = useDocsVersion();
  } catch (e) {
    versionMetadata = null;
  }

  // Make sure we always have a sane fallback
  let versionTag = 'edge';
  if (
    versionMetadata &&
    versionMetadata.version &&
    versionMetadata.version in latestRelease &&
    latestRelease[versionMetadata.version].version
  ) {
    // latestRelease: { "2.X": { "version": "2.4.7", "link": "/news/2022/11/17/2.4.7" } }
    versionTag = latestRelease[versionMetadata.version].version;
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
