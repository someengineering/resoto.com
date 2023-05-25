import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import { PageMetadata } from '@docusaurus/theme-common';
import ContactForm from '@site/src/components/ContactForm';
import { getImage } from '@site/src/utils/socialImageHelper';
import type { ArchiveBlogPost, Props } from '@theme/BlogArchivePage';
import Layout from '@theme/Layout';
import { orderBy } from 'lodash';
import React from 'react';

import homepageStyles from '@site/src/pages/index.module.css';

type YearProp = {
  year: string;
  posts: ArchiveBlogPost[];
};

function Year({ year, posts }: YearProp) {
  return (
    <>
      <h3>{year}</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.metadata.date}>
            <Link to={post.metadata.permalink}>
              {post.metadata.formattedDate} - {post.metadata.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

function YearsSection({ years }: { years: YearProp[] }) {
  return (
    <section className={homepageStyles.section}>
      <div className={homepageStyles.inner}>
        <div className="row">
          {orderBy(years, 'year', 'desc').map((_props, idx) => (
            <div key={idx} className="col col--6 margin-vert--lg">
              <Year {..._props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function listPostsByYears(blogPosts: readonly ArchiveBlogPost[]): YearProp[] {
  const postsByYear = blogPosts.reduceRight((posts, post) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const year = post.metadata.date.split('-')[0]!;
    const yearPosts = posts.get(year) ?? [];
    return posts.set(year, [post, ...yearPosts]);
  }, new Map<string, ArchiveBlogPost[]>());

  return Array.from(postsByYear, ([year, posts]) => ({
    year,
    posts,
  }));
}

export default function BlogArchive({ archive }: Props): JSX.Element {
  const title = translate({
    id: 'theme.blog.archive.title',
    message: 'Archive',
    description: 'The page & hero title of the blog archive page',
  });
  const years = listPostsByYears(archive.blogPosts);
  return (
    <>
      <PageMetadata title={title} image={getImage({ title })} />
      <Layout>
        <header className={homepageStyles.hero}>
          <div className={homepageStyles.inner}>
            <h1 className={homepageStyles.heroTitle}>{title}</h1>
          </div>
        </header>
        <main style={{ padding: '30px 0' }}>
          {years.length > 0 && <YearsSection years={years} />}
        </main>
        <div className={homepageStyles.content}>
          <ContactForm />
        </div>
      </Layout>
    </>
  );
}
