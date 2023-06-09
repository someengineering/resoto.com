import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import type { Props } from '@theme/BlogSidebar/Desktop';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

export default function BlogSidebarDesktop({ sidebar }: Props): JSX.Element {
  return (
    <aside className="col col--3">
      <nav
        className={clsx(styles.sidebar, 'thin-scrollbar')}
        aria-label={translate({
          id: 'theme.blog.sidebar.navAriaLabel',
          message: `${sidebar.title} navigation`,
          description: 'The ARIA label for recent posts in the blog sidebar',
        })}
      >
        <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>
          {sidebar.title}
        </div>
        <ul className={clsx(styles.sidebarItemList, 'clean-list')}>
          {sidebar.items.map((item) => (
            <li key={item.permalink} className={styles.sidebarItem}>
              <Link
                isNavLink
                to={item.permalink}
                className={styles.sidebarItemLink}
                activeClassName={styles.sidebarItemLinkActive}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to={`/${
            sidebar.title.toLowerCase().includes('releases')
              ? 'releases'
              : sidebar.title.toLowerCase().includes('episodes')
              ? 'podcast'
              : 'blog'
          }/archive`}
          className="button button--block button--outline button--primary"
        >
          View More
        </Link>
      </nav>
    </aside>
  );
}
