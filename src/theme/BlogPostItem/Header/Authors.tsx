import { useBlogPost } from '@docusaurus/theme-common/internal';
import type { WrapperProps } from '@docusaurus/types';
import Authors from '@theme-original/BlogPostItem/Header/Authors';
import type AuthorsType from '@theme/BlogPostItem/Header/Authors';
import React from 'react';

type Props = WrapperProps<typeof AuthorsType>;

export default function AuthorsWrapper(props: Props): JSX.Element {
  const {
    metadata: { authors },
  } = useBlogPost();

  return (
    <>
      <div
        itemProp={`publisher${authors.length === 0 ? ' author' : ''}`}
        itemScope
        itemType="https://schema.org/Organization"
      >
        <meta itemProp="name" content="Some Engineering Inc." />
        <link itemProp="url" href="https://some.engineering" />
      </div>
      <Authors {...props} />
    </>
  );
}
