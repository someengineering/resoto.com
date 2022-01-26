import React, { useEffect, useState } from 'react';
import { getLatestTag } from '../utils/githubHelper';

export default function LatestTag(): JSX.Element {
  const [latestTag, setLatestTag] = useState(null);

  useEffect(() => {
    const getGithubData = async () => {
      setLatestTag(await getLatestTag('someengineering', 'resoto'));
    };

    getGithubData();
  }, []);

  return <code>{latestTag ?? 'latest'}</code>;
}
