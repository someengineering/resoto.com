import type { Props } from '@theme/Footer/Layout';
import clsx from 'clsx';
import React from 'react';

export default function FooterLayout({
  style,
  links,
  logo,
  copyright,
}: Props): JSX.Element {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}
    >
      <div className="container container-fluid">
        {links}
        {(logo || copyright) && (
          <div
            className="footer__bottom text--center"
            itemProp="copyrightNotice"
          >
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
}
