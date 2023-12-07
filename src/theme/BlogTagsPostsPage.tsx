import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import {
  HtmlClassNameProvider,
  PageMetadata,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import BlogPostItems from '@theme/BlogPostItems';
import type { Props } from '@theme/BlogTagsPostsPage';
import SearchMetadata from '@theme/SearchMetadata';
import clsx from 'clsx';

function useBlogTagsPostsPageTitle(
  tag: Props['tag'],
  blogPath: string,
): string {
  return `${tag.label} ${blogPath.replace(/^\w/, (c) => c.toUpperCase())} ${
    blogPath === 'podcast' ? 'Episodes' : 'Posts'
  }`;
}

function BlogTagsPostsPageMetadata({ title }: { title: string }): JSX.Element {
  return (
    <>
      <PageMetadata title={title} />
      <SearchMetadata tag="blog_tags_posts" />
    </>
  );
}

function BlogTagsPostsPageContent({
  tag,
  items,
  sidebar,
  listMetadata,
}: Props): JSX.Element {
  const blogPath = (sidebar.items[0].permalink
    .replace(/^\//, '')
    .split('/') ?? ['blog'])[0];

  const title = useBlogTagsPostsPageTitle(tag, blogPath);

  return (
    <>
      <BlogTagsPostsPageMetadata title={title} />
      <BlogLayout sidebar={sidebar}>
        <header className="margin-bottom--xl">
          <h1>{title}</h1>

          <Link href={tag.allTagsPath}>
            <Translate
              id="theme.tags.tagsPageLink"
              description="The label of the link targeting the tag list page"
            >
              View All Tags
            </Translate>
          </Link>
        </header>
        <BlogPostItems items={items} />
        <BlogListPaginator metadata={listMetadata} />
      </BlogLayout>
    </>
  );
}
export default function BlogTagsPostsPage(props: Props): JSX.Element {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogTagPostListPage,
      )}
    >
      <BlogTagsPostsPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
