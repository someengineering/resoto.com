import { useDocsSidebar } from '@docusaurus/theme-common/internal';
import ContactForm from '@site/src/components/ContactForm';
import baseStyles from '@site/src/pages/styles.module.css';
import BackToTopButton from '@theme/BackToTopButton';
import type { Props } from '@theme/DocRoot/Layout';
import DocRootLayoutMain from '@theme/DocRoot/Layout/Main';
import DocRootLayoutSidebar from '@theme/DocRoot/Layout/Sidebar';
import { useState } from 'react';
import styles from './styles.module.css';

export default function DocRootLayout({ children }: Props): JSX.Element {
  const sidebar = useDocsSidebar();
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
  return (
    <>
      <div className={styles.docsWrapper}>
        <BackToTopButton />
        <div className={styles.docRoot}>
          {sidebar && (
            <DocRootLayoutSidebar
              sidebar={sidebar.items}
              hiddenSidebarContainer={hiddenSidebarContainer}
              setHiddenSidebarContainer={setHiddenSidebarContainer}
            />
          )}
          <DocRootLayoutMain hiddenSidebarContainer={hiddenSidebarContainer}>
            {children}
          </DocRootLayoutMain>
        </div>
      </div>
      <div className={baseStyles.contentBottom}>
        <ContactForm />
      </div>
    </>
  );
}
