import OriginalCodeBlock from '@theme-original/CodeBlock';
import type { Props } from '@theme/CodeBlock';
import React, { useEffect, useState } from 'react';
import { getLatestTag } from '../utils/githubHelper';

export default function CodeBlock({
  children,
  className,
  metastring,
  title,
}: Props): JSX.Element {
  const [latestTag, setLatestTag] = useState(null);

  useEffect(() => {
    const getGithubData = async () => {
      setLatestTag(await getLatestTag('someengineering', 'resoto'));
    };

    getGithubData();
  }, []);

  return (
    <OriginalCodeBlock
      className={className}
      metastring={metastring}
      title={title}
    >
      {children.toString().replace(/{{latestTag}}/g, latestTag)}
    </OriginalCodeBlock>
  );
}
