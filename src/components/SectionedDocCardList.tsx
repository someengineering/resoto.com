import {
  filterDocCardListItems,
  useCurrentSidebarCategory,
} from '@docusaurus/theme-common';
import type { Props } from '@theme/DocCardList';
import DocCardList from '@theme/DocCardList';
import Heading from '@theme/Heading';
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
  const slugger = new GithubSlugger();

  return (
    <>
      <DocCardList
        items={filteredItems.filter((item) => item.type !== 'category')}
        className={className}
      />
      {filteredItems.map((item, index) =>
        item.type === 'category' ? (
          <div key={index}>
            <Heading as="h2" id={slugger.slug(item.label)}>
              {item.label}
            </Heading>
            <DocCardList items={item.items} className={className} />
          </div>
        ) : null
      )}
    </>
  );
}
