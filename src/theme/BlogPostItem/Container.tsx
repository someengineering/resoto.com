import { useBlogPost } from '@docusaurus/theme-common/internal';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import { getImage } from '@site/src/utils/socialImageUtils';
import type { Props } from '@theme/BlogPostItem/Container';
import React from 'react';

export default function BlogPostItemContainer({
  children,
  className,
}: Props): JSX.Element {
  const { frontMatter, assets, metadata } = useBlogPost();
  const { withBaseUrl } = useBaseUrlUtils();

  const { title, description, authors, formattedDate, readingTime, tags } =
    metadata;
  const image =
    assets.image ??
    frontMatter.image ??
    getImage({
      title,
      metadata: formattedDate
        ? `${formattedDate}${
            readingTime ? ` · ${Math.ceil(readingTime)} min read` : ''
          }`
        : null,
      authors,
    });

  return (
    <article
      className={className}
      itemProp="blogPost"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      {description && <meta itemProp="description" content={description} />}
      {image && (
        <meta
          itemProp="image"
          content={withBaseUrl(image, { absolute: true })}
        />
      )}
      {tags.length > 0 && (
        <meta
          itemProp="keywords"
          content={tags.map((tag) => tag.label).join(',')}
        />
      )}
      {children}
    </article>
  );
}
