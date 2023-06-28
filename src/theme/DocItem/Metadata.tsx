import { PageMetadata } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/theme-common/internal';
import { getImage } from '@site/src/utils/socialImageUtils';
import React, { useEffect } from 'react';

export default function DocItemMetadata(): JSX.Element {
  const {
    metadata: { title, description, unversionedId },
    frontMatter,
    assets,
  } = useDoc();

  useEffect(() => {
    if (
      unversionedId.startsWith('getting-started/install-resoto') &&
      unversionedId !== 'getting-started/install-resoto/index'
    ) {
      window.localStorage.setItem(
        'docusaurus.tab.install-method',
        unversionedId.split('/')[2]
      );
    }
  }, [unversionedId]);

  return (
    <PageMetadata
      title={title}
      description={description}
      keywords={frontMatter.keywords}
      image={assets.image ?? frontMatter.image ?? getImage({ title: title })}
    />
  );
}
