import { useDocsSidebar } from '@docusaurus/theme-common/internal';
import ContactForm from '@site/src/components/ContactForm';
import BackToTopButton from '@theme/BackToTopButton';
import type { Props } from '@theme/DocPage/Layout';
import DocPageLayoutMain from '@theme/DocPage/Layout/Main';
import DocPageLayoutSidebar from '@theme/DocPage/Layout/Sidebar';
import Layout from '@theme/Layout';
import React, { useState } from 'react';

import baseStyles from '@site/src/pages/styles.module.css';
import styles from './styles.module.css';

export default function DocPageLayout({ children }: Props): JSX.Element {
  const sidebar = useDocsSidebar();
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
  return (
    <Layout wrapperClassName={styles.docsWrapper}>
      <BackToTopButton />
      <div className={styles.docPage}>
        {sidebar && (
          <DocPageLayoutSidebar
            sidebar={sidebar.items}
            hiddenSidebarContainer={hiddenSidebarContainer}
            setHiddenSidebarContainer={setHiddenSidebarContainer}
          />
        )}
        <DocPageLayoutMain hiddenSidebarContainer={hiddenSidebarContainer}>
          {children}
        </DocPageLayoutMain>
      </div>
      <div className={baseStyles.homeContent}>
        <ContactForm />
      </div>
    </Layout>
  );
}
