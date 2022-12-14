import Link from '@docusaurus/Link';
import latestRelease from '@site/latestRelease.json';
import { getLatestRelease } from '@site/src/utils/githubHelper';
import versions from '@site/versions.json';
import React, { useEffect } from 'react';

export default function InstallButton({
  product,
  className,
}: {
  product: 'resoto' | 'cloud2sql';
  className?: string;
}): JSX.Element {
  const [version, setVersion] = React.useState<string>();

  useEffect(() => {
    if (product === 'resoto') {
      setVersion(latestRelease[versions[0]].version);
    } else {
      const getGithubData = async () => {
        setVersion(await getLatestRelease('someengineering', 'cloud2sql'));
      };

      getGithubData();
    }
  }, []);

  return (
    <Link
      to={
        product === 'resoto'
          ? '/docs/getting-started/install-resoto'
          : 'https://github.com/someengineering/cloud2sql#installation'
      }
      className={`button button--primary button--lg ${className}`}
    >
      Install {product === 'resoto' ? 'Resoto' : 'cloud2sql'}
      {version ? ` ${version}` : ''}
    </Link>
  );
}
