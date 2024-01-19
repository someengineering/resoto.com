import { useWindowSize } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/theme-common/internal';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import { getImage } from '@site/src/utils/socialImageUtils';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import DocItemContent from '@theme/DocItem/Content';
import DocItemFooter from '@theme/DocItem/Footer';
import type { Props } from '@theme/DocItem/Layout';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocVersionBanner from '@theme/DocVersionBanner';
import clsx from 'clsx';
import styles from './styles.module.css';

/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
  const { frontMatter, toc } = useDoc();
  const windowSize = useWindowSize();

  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;

  const mobile = canRender ? <DocItemTOCMobile /> : undefined;

  const desktop =
    canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (
      <DocItemTOCDesktop />
    ) : undefined;

  return {
    hidden,
    mobile,
    desktop,
  };
}

export default function DocItemLayout({ children }: Props): JSX.Element {
  const docTOC = useDocTOC();
  const { withBaseUrl } = useBaseUrlUtils();
  const {
    frontMatter,
    assets,
    metadata: { title, description },
  } = useDoc();
  const image = assets.image ?? frontMatter.image ?? getImage({ title });

  return (
    <div className="row">
      <div className={clsx('col', !docTOC.hidden && styles.docItemCol)}>
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article itemScope itemType="http://schema.org/Article">
            {title && <meta itemProp="headline" content={title} />}
            {description && (
              <meta itemProp="description" content={description} />
            )}
            {image && (
              <link
                itemProp="image"
                href={withBaseUrl(image, { absolute: true })}
              />
            )}
            {frontMatter.keywords?.length > 0 && (
              <meta
                itemProp="keywords"
                content={frontMatter.keywords.join(',')}
              />
            )}
            <div
              itemProp="publisher"
              itemScope
              itemType="https://schema.org/Organization"
            >
              <meta itemProp="name" content="Some Engineering Inc." />
              <link itemProp="url" href="https://some.engineering" />
            </div>
            <DocBreadcrumbs />
            <DocVersionBadge />
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <div
              className={clsx('col', frontMatter['api'] ? 'col--7' : 'col--12')}
            >
              <DocItemFooter />
            </div>
          </article>
          <div
            className={clsx('col', frontMatter['api'] ? 'col--7' : 'col--12')}
          >
            <DocItemPaginator />
          </div>
        </div>
      </div>
      {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
    </div>
  );
}
