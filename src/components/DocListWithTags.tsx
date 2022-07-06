import Link from '@docusaurus/Link';
import { PropSidebarItemLink } from '@docusaurus/plugin-content-docs';
import React from 'react';

export default function DocListWithTags({
  items,
}: {
  items?: PropSidebarItemLink[];
}): JSX.Element {
  return items?.length ? (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
          {(item.customProps?.tags as string[])?.map((tag) => (
            <>
              {' '}
              <span className="badge badge--secondary">{tag}</span>
            </>
          ))}
        </li>
      ))}
    </ul>
  ) : null;
}
