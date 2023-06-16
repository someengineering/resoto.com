import { GithubProvider } from '@site/src/context/GithubContext';
import React from 'react';
import { Provider as BalancerProvider } from 'react-wrap-balancer';

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <BalancerProvider>
      <GithubProvider>{children}</GithubProvider>
    </BalancerProvider>
  );
}
