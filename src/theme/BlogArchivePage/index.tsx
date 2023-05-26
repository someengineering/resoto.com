import { translate } from '@docusaurus/Translate';
import { PageMetadata } from '@docusaurus/theme-common';
import ContactForm from '@site/src/components/ContactForm';
import { getImage } from '@site/src/utils/socialImageHelper';
import type { ArchiveBlogPost, Props } from '@theme/BlogArchivePage';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import { orderBy } from 'lodash';
import React from 'react';

import homepageStyles from '@site/src/pages/index.module.css';
import styles from './styles.module.css';

type YearProp = {
  year: string;
  posts: ArchiveBlogPost[];
};

function Year({ year, posts }: YearProp) {
  return (
    <>
      <h2 className={styles.year}>{year}</h2>
      {posts.map((post) => (
        <article className="margin-bottom--lg" key={post.metadata.date}>
          <a
            href={post.metadata.permalink}
            className={clsx('card padding--sm', styles.cardContainer)}
            style={{ marginBottom: '2em' }}
          >
            <div className="card__body">
              <h3 className={styles.title} itemProp="headline">
                {post.metadata.title}
              </h3>
              <div className={clsx(styles.date, 'margin-vert--md')}>
                <time dateTime={post.metadata.date} itemProp="datePublished">
                  {post.metadata.formattedDate}
                </time>
                {post.metadata.readingTime
                  ? ` · ${Math.ceil(post.metadata.readingTime)} min read`
                  : null}
              </div>
              <div className={clsx(styles.info, 'row')}>
                {post.metadata.authors.map((author) => (
                  <div
                    className={clsx(
                      'avatar margin-top--md col col--6',
                      styles.authorCol
                    )}
                    key={author.email}
                  >
                    {author.imageURL ? (
                      <img
                        className="avatar__photo avatar__photo--sm"
                        src={author.imageURL}
                        alt=""
                      />
                    ) : null}
                    <div className="avatar__intro">
                      <div className={styles.authorName}>{author.name}</div>
                      <small>{author.title}</small>
                    </div>
                  </div>
                ))}
                {post.metadata.tags.length ? (
                  <div className="col col--9 margin-top--md">
                    <b>Tags:</b>
                    <ul
                      className={clsx(
                        styles.tags,
                        'padding--none margin-left--sm'
                      )}
                    >
                      {post.metadata.tags.map((tag) => (
                        <li
                          className={styles.tag}
                          key={`${post.metadata.date}-${tag.label}`}
                        >
                          <a className={styles.tagLink} href={tag.permalink}>
                            {tag.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </a>
        </article>
      ))}
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
        <header className={styles.hero}>
          <div className={homepageStyles.inner}>
            <h1 className={homepageStyles.heroTitle}>{title}</h1>
          </div>
        </header>
        <main>{years.length > 0 && <YearsSection years={years} />}</main>
        <div className={homepageStyles.content}>
          <ContactForm />
        </div>
      </Layout>
    </>
  );
}
