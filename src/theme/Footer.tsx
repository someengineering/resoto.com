import useIsBrowser from '@docusaurus/useIsBrowser';
import FooterLogo from '@site/static/img/someengineering.svg';
import OriginalFooter from '@theme-original/Footer';
import React from 'react';

export default function Footer(): JSX.Element {
  const isBrowser = useIsBrowser();
  const isDev =
    process.env.NODE_ENV == 'development' ||
    (isBrowser && window.location.href.includes('localhost'));

  return (
    <>
      <a
        href="https://some.engineering"
        target="_blank"
        rel="noopener noreferrer"
        className="footer__logolink"
      >
        <FooterLogo className="footer__logo" />
      </a>
      {isDev || !isBrowser ? (
        <OriginalFooter />
      ) : (
        <>
          <img
            src="https://static.scarf.sh/a.png?x-pxid=3b6ccd5c-8a2a-4bf3-94a3-e366b88342d8"
            alt=""
            style={{ height: '1px', width: '1px' }}
          />
          <OriginalFooter />
        </>
      )}
    </>
  );
}
