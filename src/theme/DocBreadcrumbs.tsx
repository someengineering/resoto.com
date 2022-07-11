import Link from '@docusaurus/Link';
import { useSidebarBreadcrumbs } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import React, { type ReactNode } from 'react';

function BreadcrumbsItemLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string | undefined;
}): JSX.Element {
  const className = 'breadcrumbs__link';
  return href ? (
    <Link href={href} itemProp="item" className={className}>
      <span itemProp="name">{children}</span>
    </Link>
  ) : (
    <span className={className}>{children}</span>
  );
}

// TODO move to design system folder
function BreadcrumbsItem({
  children,
  index,
  addMicrodata,
}: {
  children: ReactNode;
  index: number;
  addMicrodata: boolean;
}): JSX.Element {
  return (
    <li
      {...(addMicrodata && {
        itemScope: true,
        itemProp: 'itemListElement',
        itemType: 'https://schema.org/ListItem',
      })}
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
      <Link
        href={useBaseUrl('/docs')}
        className="breadcrumbs__link"
        aria-label={translate({
          id: 'theme.docs.breadcrumbs.home',
          message: 'Documentation',
          description:
            'The ARIA label for the docs home page in the breadcrumbs',
        })}
      >
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
    <nav
      aria-label={translate({
        id: 'theme.docs.breadcrumbs.navAriaLabel',
        message: 'Breadcrumbs',
        description: 'The ARIA label for the breadcrumbs',
      })}
    >
      <ul
        itemScope
        itemType="https://schema.org/BreadcrumbList"
        className="breadcrumbs breadcrumbs--sm"
      >
        <HomeBreadcrumbItem />
        {breadcrumbs.map((item, idx) => (
          <BreadcrumbsItem key={idx} index={idx} addMicrodata={!!item.href}>
            <BreadcrumbsItemLink href={item.href}>
              {item.label}
            </BreadcrumbsItemLink>
          </BreadcrumbsItem>
        ))}
      </ul>
    </nav>
  );
}
