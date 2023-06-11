import { GithubProvider } from '@site/src/context/GithubContext';
import React from 'react';

export default function Root({ children }: { children: React.ReactNode }) {
  return <GithubProvider>{children}</GithubProvider>;
}
