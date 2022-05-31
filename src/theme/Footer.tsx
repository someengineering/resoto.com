import { useLocation } from '@docusaurus/router';
import useIsBrowser from '@docusaurus/useIsBrowser';
import FooterLogo from '@site/static/img/someengineering.svg';
import OriginalFooter from '@theme-original/Footer';
import type FooterType from '@theme/Footer';
import React, { ComponentProps, useEffect, useState } from 'react';

type Props = ComponentProps<typeof FooterType>;

export default function Footer(props: Props): JSX.Element {
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
      <a
        href="https://some.engineering"
        target="_blank"
        rel="noopener noreferrer"
        className="companyLogoLink"
      >
        <FooterLogo className="companyLogo" />
      </a>
      {isDev ? null : (
        <>
          <img
            src={`https://static.scarf.sh/a.png?x-pxid=3b6ccd5c-8a2a-4bf3-94a3-e366b88342d8&${timestamp}`}
            referrerPolicy="no-referrer-when-downgrade"
            alt=""
            style={{
              height: '1px',
              border: '0',
              marginBottom: '-1px',
            }}
          />
        </>
      )}
      <OriginalFooter {...props} />
    </>
  );
}
