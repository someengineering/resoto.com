import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import { isRegexpStringMatch } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useGithubStars } from '@site/src/hooks/useGithubStars';
import IconExternalLink from '@theme/Icon/ExternalLink';
import type { Props } from '@theme/NavbarItem/NavbarNavLink';
import Emoji from 'a11y-react-emoji';

export default function NavbarNavLink({
  activeBasePath,
  activeBaseRegex,
  to,
  href,
  label,
  html,
  isDropdownLink,
  prependBaseUrlToHref,
  ...props
}: Props): JSX.Element {
  const toUrl = useBaseUrl(to);
  const activeBaseUrl = useBaseUrl(activeBasePath);
  const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true });
  const isExternalLink = label && href && !isInternalUrl(href);

  const githubStars = useGithubStars();

  // Link content is set through html XOR label
  const linkContentProps = html
    ? { dangerouslySetInnerHTML: { __html: html } }
    : {
        children: (
          <>
            <span className="link-text">
              {label}
              {isExternalLink && (
                <IconExternalLink
                  {...(isDropdownLink && { width: 12, height: 12 })}
                />
              )}
            </span>
            {label === 'GitHub' && !!githubStars && (
              <span className="button github-stars">
                {githubStars} <Emoji symbol="⭐" label="stars" />
              </span>
            )}
          </>
        ),
      };

  if (href) {
    return (
      <Link
        href={prependBaseUrlToHref ? normalizedHref : href}
        {...props}
        {...linkContentProps}
      />
    );
  }

  return (
    <Link
      to={toUrl}
      isNavLink
      {...((activeBasePath || activeBaseRegex) && {
        isActive: (_match, location) =>
          activeBaseRegex
            ? isRegexpStringMatch(activeBaseRegex, location.pathname)
            : location.pathname.startsWith(activeBaseUrl),
      })}
      {...props}
      {...linkContentProps}
    />
  );
}
