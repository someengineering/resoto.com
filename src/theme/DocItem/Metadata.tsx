import { PageMetadata } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/theme-common/internal';
import { getImage } from '@site/src/utils/socialImageUtils';
import { useEffect } from 'react';

export default function DocItemMetadata(): JSX.Element {
  const {
    metadata: { id, title, description },
    frontMatter,
    assets,
  } = useDoc();

  useEffect(() => {
    if (id.startsWith('getting-started/install-resoto')) {
      window.localStorage.setItem(
        'docusaurus.tab.install-method',
        id === 'getting-started/install-resoto/index'
          ? 'docker'
          : id.split('/')[2],
      );
    }
  }, [id]);

  return (
    <PageMetadata
      title={title}
      description={description}
      keywords={frontMatter.keywords}
      image={assets.image ?? frontMatter.image ?? getImage({ title: title })}
    />
  );
}
