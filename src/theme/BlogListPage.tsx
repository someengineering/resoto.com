import {
  HtmlClassNameProvider,
  PageMetadata,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { getImage } from '@site/src/utils/socialImageUtils';
import BlogLayout from '@theme/BlogLayout';
import type { Props } from '@theme/BlogListPage';
import BlogListPaginator from '@theme/BlogListPaginator';
import BlogPostItems from '@theme/BlogPostItems';
import SearchMetadata from '@theme/SearchMetadata';
import clsx from 'clsx';

function BlogListPageMetadata(props: Props): JSX.Element {
  const { metadata } = props;
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  const { blogDescription, blogTitle, permalink } = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  return (
    <>
      <PageMetadata
        title={title}
        description={blogDescription}
        image={getImage({ title })}
      />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function BlogListPageContent(props: Props): JSX.Element {
  const { metadata, items, sidebar } = props;
  return (
    <BlogLayout sidebar={sidebar}>
      <BlogPostItems items={items} />
      <BlogListPaginator metadata={metadata} />
    </BlogLayout>
  );
}

export default function BlogListPage(props: Props): JSX.Element {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}
    >
      <BlogListPageMetadata {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
