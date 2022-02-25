import Link from '@docusaurus/Link';
import { useSidebarBreadcrumbs } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import React, { type ReactNode } from 'react';

// TODO move to design system folder
function BreadcrumbsItemLink({
  children,
  href,
}: {
  children: ReactNode;
  href?: string;
}): JSX.Element {
  const className = 'breadcrumbs__link';
  return href ? (
    <Link className={className} href={href}>
      {children}
    </Link>
  ) : (
    <span className={className}>{children}</span>
  );
}

// TODO move to design system folder
function BreadcrumbsItem({
  children,
}: {
  children: ReactNode;
  active?: boolean;
}): JSX.Element {
  return <li className="breadcrumbs__item">{children}</li>;
}

function HomeBreadcrumbItem() {
  const homeHref = useBaseUrl('/docs');
  return (
    <BreadcrumbsItem>
      <BreadcrumbsItemLink href={homeHref}>Documentation</BreadcrumbsItemLink>
    </BreadcrumbsItem>
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
      <ul className="breadcrumbs breadcrumbs--sm">
        <HomeBreadcrumbItem />
        {breadcrumbs.map((item, idx) => (
          <BreadcrumbsItem key={idx}>
            <BreadcrumbsItemLink href={item.href}>
              {item.label}
            </BreadcrumbsItemLink>
          </BreadcrumbsItem>
        ))}
      </ul>
    </nav>
  );
}
