import { getLatestRelease } from '@site/src/utils/githubHelper';
import OriginalCodeBlock from '@theme-original/CodeBlock';
import type CodeBlockType from '@theme/CodeBlock';
import React, { useEffect, useState } from 'react';

type Props = ComponentProps<typeof CodeBlockType>;

export default function CodeBlock(props: Props): JSX.Element {
  const [latestRelease, setLatestRelease] = useState(null);

  useEffect(() => {
    const getGithubData = async () => {
      setLatestRelease(await getLatestRelease('someengineering', 'resoto'));
    };

    getGithubData();
  }, []);

  return (
    <OriginalCodeBlock {...props}>
      {props.children.toString().replace(/{{latestRelease}}/g, latestRelease)}
    </OriginalCodeBlock>
  );
}
