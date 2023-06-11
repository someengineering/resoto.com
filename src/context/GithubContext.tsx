import { useGithub } from '@site/src/hooks/useGithub';
import React, { createContext } from 'react';

export const GithubContext = createContext<{ stars: number | null }>({
  stars: null,
});

export const GithubProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const github = useGithub();

  return (
    <GithubContext.Provider value={github}>{children}</GithubContext.Provider>
  );
};
