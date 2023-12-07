import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import isInternalUrl from '@docusaurus/isInternalUrl';
import type {
  PropSidebarItemCategory,
  PropSidebarItemLink,
} from '@docusaurus/plugin-content-docs';
import {
  findFirstSidebarItemLink,
  useDocById,
} from '@docusaurus/theme-common/internal';
import type { Props } from '@theme/DocCard';
import clsx from 'clsx';
import { type ReactNode } from 'react';
import styles from './styles.module.css';

function CardContainer({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <Link
      href={href}
      className={clsx('card padding--lg', styles.cardContainer, className)}
    >
      {children}
    </Link>
  );
}

function CardLayout({
  href,
  icon,
  title,
  description,
  className,
}: {
  href: string;
  icon: ReactNode;
  title: string;
  description?: string;
  className?: string;
}): JSX.Element {
  return (
    <CardContainer href={href} className={className}>
      {className?.includes('api-method') ? null : (
        <div className={styles.cardIcon}>{icon}</div>
      )}
      <div>
        <h2 className={styles.cardTitle} title={title}>
          {title}
        </h2>
        {description && (
          <p
            className={clsx('text--truncate', styles.cardDescription)}
            title={description}
          >
            {description.replace(/<br\/>/g, '')}
          </p>
        )}
      </div>
    </CardContainer>
  );
}

function CardCategory({
  item,
}: {
  item: PropSidebarItemCategory;
}): JSX.Element | null {
  const href = findFirstSidebarItemLink(item);

  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null;
  }

  return (
    <CardLayout
      href={href}
      icon="🗃️"
      title={item.label}
      description={
        item.description ??
        translate(
          {
            message: '{count} items',
            id: 'theme.docs.DocCard.categoryDescription',
            description:
              'The default description for a category card in the generated index about how many items this category includes',
          },
          { count: item.items.length },
        )
      }
      className={item.className}
    />
  );
}

function CardLink({ item }: { item: PropSidebarItemLink }): JSX.Element {
  const icon = isInternalUrl(item.href) ? '📄️' : '🔗';
  const doc = useDocById(item.docId ?? undefined);
  return (
    <CardLayout
      href={item.href}
      icon={icon}
      title={item.label}
      description={item.description ?? doc?.description}
      className={item.className}
    />
  );
}

export default function DocCard({ item }: Props): JSX.Element {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />;
    case 'category':
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
