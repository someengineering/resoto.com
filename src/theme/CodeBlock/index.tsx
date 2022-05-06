import { getLatestRelease } from '@site/src/utils/githubHelper';
import OriginalCodeBlock from '@theme-original/CodeBlock';
import type { Props } from '@theme/CodeBlock';
import React, { useEffect, useState } from 'react';

export default function CodeBlock({
  children,
  className,
  metastring,
  title,
}: Props): JSX.Element {
  const [latestRelease, setLatestRelease] = useState(null);

  useEffect(() => {
    const getGithubData = async () => {
      setLatestRelease(await getLatestRelease('someengineering', 'resoto'));
    };

    getGithubData();
  }, []);

  return (
    <OriginalCodeBlock
      className={className}
      metastring={metastring}
      title={title}
    >
      {children.toString().replace(/{{latestRelease}}/g, latestRelease)}
    </OriginalCodeBlock>
  );
}
