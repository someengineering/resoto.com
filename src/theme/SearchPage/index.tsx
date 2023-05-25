import type { WrapperProps } from '@docusaurus/types';
import ContactForm from '@site/src/components/ContactForm';
import SearchPage from '@theme-original/SearchPage';
import type SearchPageType from '@theme/SearchPage';
import React from 'react';

import homepageStyles from '@site/src/pages/index.module.css';

type Props = WrapperProps<typeof SearchPageType>;

export default function SearchPageWrapper(props: Props): JSX.Element {
  return (
    <>
      <SearchPage {...props} />
      <div className={homepageStyles.content}>
        <ContactForm />
      </div>
    </>
  );
}
