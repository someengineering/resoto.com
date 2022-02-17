import { getLatestRelease } from '@site/src/utils/githubHelper';
import React, { useEffect, useState } from 'react';

export default function LatestRelease(): JSX.Element {
  const [latestRelease, setLatestRelease] = useState(null);

  useEffect(() => {
    const getGithubData = async () => {
      setLatestRelease(await getLatestRelease('someengineering', 'resoto'));
    };

    getGithubData();
  }, []);

  return <code>{latestRelease ?? 'latest'}</code>;
}
