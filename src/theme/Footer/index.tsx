import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import type { WrapperProps } from '@docusaurus/types';
import useIsBrowser from '@docusaurus/useIsBrowser';
import FooterLogo from '@site/static/img/someengineering.svg';
import Footer from '@theme-original/Footer';
import type FooterType from '@theme/Footer';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  const isBrowser = useIsBrowser();
  const isDev =
    process.env.NODE_ENV === 'development' ||
    !isBrowser ||
    new URL(window.location.href).hostname !== 'resoto.com';

  const [timestamp, setTimestamp] = useState(new Date().getTime());
  const location = useLocation();
  useEffect(() => {
    setTimestamp(new Date().getTime());
  }, [location]);

  return (
    <>
      <Link href="https://some.engineering" className={styles.logoLink}>
        <FooterLogo className={styles.logo} />
      </Link>
      {isDev ? null : (
        <img
          src={`https://static.scarf.sh/a.png?x-pxid=3b6ccd5c-8a2a-4bf3-94a3-e366b88342d8&${timestamp}`}
          referrerPolicy="no-referrer-when-downgrade"
          alt=""
          className={styles.scarf}
          style={{
            height: '1px',
            border: '0',
            marginBottom: '-1px',
          }}
        />
      )}
      <Footer {...props} />
    </>
  );
}
