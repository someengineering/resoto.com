import type { WrapperProps } from '@docusaurus/types';
import DocSidebarItem from '@theme-original/DocSidebarItem';
import type DocSidebarItemType from '@theme/DocSidebarItem';
import React from 'react';
import styles from './styles.module.css';

type Props = WrapperProps<typeof DocSidebarItemType>;

export default function DocSidebarItemWrapper(props: Props): JSX.Element {
  if (
    props.item.type !== 'html' &&
    props.item.label === props.item.label.toLowerCase()
  ) {
    props.item.className = styles.code;
  }

  return (
    <>
      <DocSidebarItem {...props} />
    </>
  );
}
