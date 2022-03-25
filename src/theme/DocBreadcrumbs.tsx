import Link from '@docusaurus/Link';
import { useSidebarBreadcrumbs } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import React, { type ReactNode } from 'react';

function BreadcrumbsItemLink({
  children,
  href,
}: {
  children: ReactNode;
  href?: string;
}): JSX.Element {
  const className = 'breadcrumbs__link';
  return href ? (
    <Link href={href} itemProp="item" className={className}>
      <span itemProp="name">{children}</span>
    </Link>
  ) : (
    <span itemProp="item name" className={className}>
      {children}
    </span>
  );
}

function BreadcrumbsItem({
  children,
  index,
}: {
  children: ReactNode;
  index: number;
}): JSX.Element {
  return (
    <li
      itemScope
      itemProp="itemListElement"
      itemType="https://schema.org/ListItem"
      className="breadcrumbs__item"
    >
      {children}
      <meta itemProp="position" content={String(index + 1)} />
    </li>
  );
}

function HomeBreadcrumbItem() {
  return (
    <li className="breadcrumbs__item">
      <Link href={useBaseUrl('/docs')} className="breadcrumbs__link">
        Documentation
      </Link>
    </li>
  );
}

export default function DocBreadcrumbs(): JSX.Element | null {
  const breadcrumbs = useSidebarBreadcrumbs();

  if (!breadcrumbs || !breadcrumbs.length) {
    return null;
  }

  breadcrumbs.pop();

  return (
    <nav aria-label="breadcrumbs">
      <ul
        itemScope
        itemType="https://schema.org/BreadcrumbList"
        className="breadcrumbs breadcrumbs--sm"
      >
        <HomeBreadcrumbItem />
        {breadcrumbs.map((item, idx) => (
          <BreadcrumbsItem key={idx} index={idx}>
            <BreadcrumbsItemLink href={item.href}>
              {item.label}
            </BreadcrumbsItemLink>
          </BreadcrumbsItem>
        ))}
      </ul>
    </nav>
  );
}
