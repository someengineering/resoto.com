import Link from '@docusaurus/Link';
import { DEFAULT_PLUGIN_ID } from '@docusaurus/constants';
import { useActivePlugin } from '@docusaurus/plugin-content-docs/client';
import { useSidebarBreadcrumbs } from '@docusaurus/theme-common/internal';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { type ReactNode } from 'react';

function BreadcrumbsItemLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string | undefined;
}): JSX.Element {
  return href ? (
    <Link className="breadcrumbs__link" href={href} itemProp="item">
      <span itemProp="name">{children}</span>
    </Link>
  ) : (
    // TODO Google search console doesn't like breadcrumb items without href.
    // The schema doesn't seem to require `id` for each `item`, although Google
    // insist to infer one, even if it's invalid. Removing `itemProp="item
    // name"` for now, since I don't know how to properly fix it.
    // See https://github.com/facebook/docusaurus/issues/7241
    <span className="breadcrumbs__link">{children}</span>
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

export default function DocBreadcrumbs(): JSX.Element | null {
  const breadcrumbs = useSidebarBreadcrumbs();
  const { pluginId, pluginData } = useActivePlugin();
  const href = useBaseUrl(pluginData.path);

  if (!breadcrumbs || !breadcrumbs.length) {
    return null;
  }

  breadcrumbs.pop();

  breadcrumbs.unshift({
    type: 'link',
    href,
    label:
      pluginId === DEFAULT_PLUGIN_ID
        ? 'Documentation'
        : pluginId.replace(/^\w/, (c) => c.toUpperCase()),
  });

  return (
    <nav aria-label="Breadcrumbs">
      <ul
        className="breadcrumbs breadcrumbs--sm"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {breadcrumbs.map((item, idx) => (
          <BreadcrumbsItem key={idx} index={idx} addMicrodata={!!item.href}>
            <BreadcrumbsItemLink href={item.href}>
              {item.label.replace(/^\d+\.\s*/, '')}
            </BreadcrumbsItemLink>
          </BreadcrumbsItem>
        ))}
      </ul>
    </nav>
  );
}
