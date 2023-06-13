import { PageMetadata } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/theme-common/internal';
import { getImage } from '@site/src/utils/socialImageUtils';
import React, { useEffect } from 'react';

export default function DocItemMetadata(): JSX.Element {
  const { metadata, frontMatter, assets } = useDoc();

  useEffect(() => {
    if (
      metadata.unversionedId.startsWith('getting-started/install-resoto') &&
      metadata.unversionedId !== 'getting-started/install-resoto/index'
    ) {
      window.localStorage.setItem(
        'docusaurus.tab.install-method',
        metadata.unversionedId.split('/')[2]
      );
    }
  }, [metadata.unversionedId]);

  return (
    <PageMetadata
      title={metadata.title}
      description={metadata.description}
      keywords={frontMatter.keywords}
      image={
        assets.image ?? frontMatter.image ?? getImage({ title: metadata.title })
      }
    />
  );
}
