import Link from '@docusaurus/Link';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useDocsVersion } from '@docusaurus/theme-common/internal';
import type { WrapperProps } from '@docusaurus/types';
import latestRelease from '@site/latestRelease.json';
import DocSidebarItems from '@theme-original/DocSidebarItems';
import NavbarItem from '@theme-original/NavbarItem';
import type DocSidebarItemsType from '@theme/DocSidebarItems';
import clsx from 'clsx';
import React from 'react';

type Props = WrapperProps<typeof DocSidebarItemsType>;

export default function DocSidebarItemsWrapper(props: Props): JSX.Element {
  const versionMetadata = useDocsVersion();

  return (
    <>
      {props.level === 1 ? (
        <li
          className={clsx(
            ThemeClassNames.docs.docSidebarItemLink,
            'theme-doc-sidebar-item-link-level-1',
            'version-selector',
            'shadow--lw',
            'margin-bottom--md'
          )}
        >
          <strong>Version:</strong>
          <NavbarItem
            type="docsVersionDropdown"
            dropdownItemsBefore={[]}
            dropdownItemsAfter={[]}
          />
          {versionMetadata.version.substring(
            0,
            versionMetadata.version.indexOf('.')
          ) ===
          latestRelease.version.substring(
            0,
            latestRelease.version.indexOf('.')
          ) ? (
            <Link
              to={latestRelease.link}
              className="button button--outline button--sm button--primary"
            >
              Release Notes
            </Link>
          ) : null}
        </li>
      ) : null}
      <DocSidebarItems {...props} />
    </>
  );
}
