import { Octokit } from '@octokit/core';
import { useEffect, useState } from 'react';

export const useGithub = (): { stars: number | null } => {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    const getStars = async () => {
      try {
        const res = await new Octokit().request(
          `/repos/someengineering/resoto`
        );
        setStars(res.data.stargazers_count);
      } catch (err) {
        setStars(null);
      }
    };

    getStars();
  }, []);

  return { stars };
};
