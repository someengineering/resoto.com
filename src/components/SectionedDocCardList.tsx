import {
  filterDocCardListItems,
  useCurrentSidebarCategory,
} from '@docusaurus/theme-common';
import type { Props } from '@theme/DocCardList';
import DocCardList from '@theme/DocCardList';
import GithubSlugger from 'github-slugger';
import React from 'react';

function SectionedDocCardListForCurrentSidebarCategory({ className }: Props) {
  const category = useCurrentSidebarCategory();
  return <SectionedDocCardList items={category.items} className={className} />;
}

export default function SectionedDocCardList(props: Props): JSX.Element {
  const { items, className } = props;
  if (!items) {
    return <SectionedDocCardListForCurrentSidebarCategory {...props} />;
  }

  const filteredItems = filterDocCardListItems(items);
  const githubSlugger = new GithubSlugger();

  return (
    <>
      <DocCardList
        items={filteredItems.filter((item) => item.type !== 'category')}
        className={className}
      />
      {filteredItems.map((item, index) =>
        item.type === 'category' ? (
          <div key={index}>
            <h2 className="anchor anchorWithHideOnScrollNavbar_node_modules-@docusaurus-theme-classic-lib-theme-Heading-styles-module">
              {item.label}
              <a
                className="hash-link"
                href={`#${githubSlugger.slug(item.label)}`}
                title="Direct link to heading"
              >
                {'​'}
              </a>
            </h2>
            <DocCardList items={item.items} className={className} />
          </div>
        ) : null
      )}
    </>
  );
}
