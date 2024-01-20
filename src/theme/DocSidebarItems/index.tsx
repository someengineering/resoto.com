import Link from '@docusaurus/Link';
import { DEFAULT_PLUGIN_ID } from '@docusaurus/constants';
import type { PropVersionMetadata } from '@docusaurus/plugin-content-docs';
import { useActivePlugin } from '@docusaurus/plugin-content-docs/client';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useDocsVersion } from '@docusaurus/theme-common/internal';
import type { WrapperProps } from '@docusaurus/types';
import latestRelease from '@site/latestRelease.json';
import DocSidebarItems from '@theme-original/DocSidebarItems';
import NavbarItem from '@theme-original/NavbarItem';
import type DocSidebarItemsType from '@theme/DocSidebarItems';
import clsx from 'clsx';
import styles from './styles.module.css';

type Props = WrapperProps<typeof DocSidebarItemsType>;

export default function DocSidebarItemsWrapper(props: Props): JSX.Element {
  let versionMetadata: PropVersionMetadata;

  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    versionMetadata = useDocsVersion();
  } catch (e) {
    versionMetadata = null;
  }

  const { pluginId } = useActivePlugin();

  return (
    <>
      {pluginId == DEFAULT_PLUGIN_ID && props.level === 1 ? (
        <li
          className={clsx(
            ThemeClassNames.docs.docSidebarItemLink,
            'theme-doc-sidebar-item-link-level-1',
            styles.versionSelector,
            'shadow--lw',
            'margin-bottom--md',
          )}
        >
          <strong>Version:</strong>
          <NavbarItem
            type="docsVersionDropdown"
            dropdownItemsBefore={[]}
            dropdownItemsAfter={[]}
          />
          {versionMetadata &&
          versionMetadata.version.substring(
            0,
            versionMetadata.version.indexOf('.'),
          ) ===
            latestRelease[versionMetadata.version]?.substring(
              0,
              latestRelease[versionMetadata.version]?.indexOf('.'),
            ) ? (
            <Link
              to={`/releases/${latestRelease[versionMetadata.version]}`}
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
