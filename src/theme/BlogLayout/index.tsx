import ContactForm from '@site/src/components/ContactForm';
import BlogSidebar from '@theme/BlogSidebar';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';

import type { Props } from '@theme/BlogLayout';

import homepageStyles from '@site/src/pages/index.module.css';

export default function BlogLayout(props: Props): JSX.Element {
  const { sidebar, toc, children, ...layoutProps } = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;

  return (
    <Layout {...layoutProps}>
      <div className="container margin-top--lg">
        <div className="row">
          <BlogSidebar sidebar={sidebar} />
          <main
            className={clsx(
              'col',
              {
                'col--7': hasSidebar,
                'col--9 col--offset-1': !hasSidebar,
              },
              'padding-bottom--lg'
            )}
            itemScope
            itemType="http://schema.org/Blog"
          >
            {children}
          </main>
          {toc && <div className="col col--2">{toc}</div>}
        </div>
      </div>
      <div className={homepageStyles.content}>
        <ContactForm />
      </div>
    </Layout>
  );
}
