import { PropSidebar } from '@docusaurus/plugin-content-docs';
import { useLocation } from '@docusaurus/router';
import { useDocsSidebar } from '@docusaurus/theme-common';
import React from 'react';

function useBreadCrumbs(): { label: string; href: string }[] {
  const sidebar = useDocsSidebar();
  const { pathname } = useLocation();
  const breadcrumbs: { label: string; href: string }[] = [
    { label: 'Documentation', href: '/docs' },
  ];

  function find(sidebar: PropSidebar) {
    for (const item of sidebar) {
      if (item.href.replace(/\/$/, '') === pathname.replace(/\/$/, '')) {
        breadcrumbs.push({ label: item.label, href: item.href });
        return true;
      }

      if (item.type === 'category') {
        breadcrumbs.push({ label: item.label, href: item.href });

        const res = find(item.items);
        if (!res) {
          breadcrumbs.pop();
        } else {
          return true;
        }
      }
    }

    return false;
  }

  find(sidebar);
  breadcrumbs.pop();

  return breadcrumbs;
}

export default function DocVersionBadge(): JSX.Element {
  const breadcrumbs = useBreadCrumbs();

  if (!breadcrumbs.length) {
    return null;
  }

  return (
    <nav aria-label="breadcrumbs">
      <ul className="breadcrumbs breadcrumbs--sm">
        {breadcrumbs.map((breadcrumb, index) => (
          <li className="breadcrumbs__item" key={index}>
            <a
              className="breadcrumbs__link breadcrumbs__item--active"
              href={`${breadcrumb.href}/`}
            >
              {breadcrumb.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
