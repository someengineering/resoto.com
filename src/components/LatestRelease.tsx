import React, { useEffect, useState } from 'react';
import { getLatestRelease } from '../utils/githubHelper';

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
