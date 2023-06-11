import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import useIsBrowser from '@docusaurus/useIsBrowser';
import Admonition from '@theme/Admonition';
import React, { useEffect, useState } from 'react';

export default function PlausibleExclude(): JSX.Element {
  const [isExcluded, setIsExcluded] = useState<boolean>(false);
  const isProd =
    useIsBrowser() && new URL(window.location.href).hostname === 'resoto.com';
  const location = useLocation();

  useEffect(
    () =>
      setIsExcluded(window.localStorage.getItem('plausible_ignore') === 'true'),
    []
  );

  return (
    <BrowserOnly>
      {() =>
        isProd ? (
          <>
            <p>
              <strong>
                You <em>{isExcluded ? 'are curently' : 'are currently not'}</em>{' '}
                excluding your visits.
              </strong>
            </p>
            <p>
              <button
                onClick={() => {
                  if (isExcluded) {
                    window.localStorage.removeItem('plausible_ignore');
                  } else {
                    window.localStorage.setItem('plausible_ignore', 'true');
                  }

                  setIsExcluded(!isExcluded);
                }}
                className={`button button--primary${
                  isExcluded ? ' button--outline' : ''
                }`}
              >
                {isExcluded ? 'Stop Excluding My Visits' : 'Exclude My Visits'}
              </button>
            </p>
          </>
        ) : (
          <Admonition type="note">
            <p>
              You are not currently browsing{' '}
              <Link href="https://resoto.com">
                <code>resoto.com</code>
              </Link>
              .{' '}
              <strong>
                <Link href={`http://resoto.com${location}`}>
                  Click here to view this page on <code>resoto.com</code>.
                </Link>
              </strong>
            </p>
          </Admonition>
        )
      }
    </BrowserOnly>
  );
}
