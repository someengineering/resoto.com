import { ThemeClassNames } from '@docusaurus/theme-common';
import type { WrapperProps } from '@docusaurus/types';
import DocSidebarItems from '@theme-original/DocSidebarItems';
import NavbarItem from '@theme-original/NavbarItem';
import type DocSidebarItemsType from '@theme/DocSidebarItems';
import clsx from 'clsx';
import React from 'react';

type Props = WrapperProps<typeof DocSidebarItemsType>;

export default function DocSidebarItemsWrapper(props: Props): JSX.Element {
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
          <span>Version:</span>
          <NavbarItem
            type="docsVersionDropdown"
            dropdownItemsBefore={[]}
            dropdownItemsAfter={[]}
          />
        </li>
      ) : null}
      <DocSidebarItems {...props} />
    </>
  );
}
