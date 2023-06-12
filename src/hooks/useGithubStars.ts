import { GithubContext } from '@site/src/context/GithubContext';
import { useContext } from 'react';

export const useGithubStars = (): number | null => {
  const { stars } = useContext(GithubContext);
  return stars;
};
