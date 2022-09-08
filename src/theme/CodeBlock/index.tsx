import { useDocsVersion } from '@docusaurus/theme-common/internal';
import { getLatestRelease } from '@site/src/utils/githubHelper';
import OriginalCodeBlock from '@theme-original/CodeBlock';
import type CodeBlockType from '@theme/CodeBlock';
import React, { useEffect, useState } from 'react';

type Props = ComponentProps<typeof CodeBlockType>;

export default function CodeBlock(props: Props): JSX.Element {
  const [latestRelease, setLatestRelease] = useState(null);
  const versionMetadata = useDocsVersion();

  useEffect(() => {
    if (versionMetadata.version === 'current') {
      setLatestRelease(null);
    } else {
      const getGithubData = async () => {
        setLatestRelease(await getLatestRelease('someengineering', 'resoto'));
      };

      getGithubData();
    }
  }, [versionMetadata]);

  return (
    <OriginalCodeBlock {...props}>
      {props.children
        .toString()
        .replace(/{{imageTag}}/g, latestRelease ?? 'edge')
        .replace(/{{repoBranch}}/g, latestRelease ?? 'main')}
    </OriginalCodeBlock>
  );
}
