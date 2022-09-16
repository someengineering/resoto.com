/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Link from '@docusaurus/Link';
import type {
  PropVersionMetadata,
  VersionBanner,
} from '@docusaurus/plugin-content-docs';
import {
  useActivePlugin,
  useDocVersionSuggestions,
  type GlobalVersion,
} from '@docusaurus/plugin-content-docs/client';
import { ThemeClassNames } from '@docusaurus/theme-common';
import {
  useDocsPreferredVersion,
  useDocsVersion,
} from '@docusaurus/theme-common/internal';
import type { Props } from '@theme/DocVersionBanner';
import clsx from 'clsx';
import React, { type ComponentType } from 'react';

type BannerLabelComponentProps = {
  versionMetadata: PropVersionMetadata;
};

function UnreleasedVersionLabel({
  versionMetadata,
}: BannerLabelComponentProps) {
  return (
    <>
      You are currently viewing documentation for the{' '}
      <code>
        {versionMetadata.label.startsWith('edge')
          ? 'edge'
          : versionMetadata.label}
      </code>{' '}
      version of Resoto. This documentation may reflect changes that have yet to
      be released.
    </>
  );
}

function UnmaintainedVersionLabel({
  versionMetadata,
}: BannerLabelComponentProps) {
  return (
    <>
      You are currently viewing documentation for version{' '}
      <code>{versionMetadata.label}</code> of Resoto. This documentation is no
      longer actively maintained.
    </>
  );
}

const BannerLabelComponents: {
  [banner in VersionBanner]: ComponentType<BannerLabelComponentProps>;
} = {
  unreleased: UnreleasedVersionLabel,
  unmaintained: UnmaintainedVersionLabel,
};

function BannerLabel(props: BannerLabelComponentProps) {
  const BannerLabelComponent =
    BannerLabelComponents[props.versionMetadata.banner!];
  return <BannerLabelComponent {...props} />;
}

function LatestVersionSuggestionLabel({
  versionLabel,
  to,
  onClick,
}: {
  to: string;
  onClick: () => void;
  versionLabel: string;
}) {
  return (
    <strong>
      <Link to={to} onClick={onClick}>
        Click here to view documentation for the latest stable release (
        {<code>{versionLabel}</code>}).
      </Link>
    </strong>
  );
}

function DocVersionBannerEnabled({
  className,
  versionMetadata,
}: Props & {
  versionMetadata: PropVersionMetadata;
}): JSX.Element {
  const { pluginId } = useActivePlugin({ failfast: true })!;

  const getVersionMainDoc = (version: GlobalVersion) =>
    version.docs.find((doc) => doc.id === version.mainDocId)!;

  const { savePreferredVersionName } = useDocsPreferredVersion(pluginId);

  const { latestDocSuggestion, latestVersionSuggestion } =
    useDocVersionSuggestions(pluginId);

  // Try to link to same doc in latest version (not always possible), falling
  // back to main doc of latest version
  const latestVersionSuggestedDoc =
    latestDocSuggestion ?? getVersionMainDoc(latestVersionSuggestion);

  return (
    <div
      className={clsx(
        className,
        ThemeClassNames.docs.docVersionBanner,
        'alert alert--warning margin-bottom--md'
      )}
      role="alert"
    >
      <div>
        <BannerLabel versionMetadata={versionMetadata} />
      </div>
      <div className="margin-top--md">
        <LatestVersionSuggestionLabel
          versionLabel={latestVersionSuggestion.label}
          to={latestVersionSuggestedDoc.path}
          onClick={() => savePreferredVersionName(latestVersionSuggestion.name)}
        />
      </div>
    </div>
  );
}

export default function DocVersionBanner({
  className,
}: Props): JSX.Element | null {
  const versionMetadata = useDocsVersion();
  if (versionMetadata.banner) {
    return (
      <DocVersionBannerEnabled
        className={className}
        versionMetadata={versionMetadata}
      />
    );
  }
  return null;
}
