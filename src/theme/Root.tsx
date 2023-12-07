import { GithubProvider } from '@site/src/context/GithubContext';
import { type ReactNode } from 'react';
import { Provider as BalancerProvider } from 'react-wrap-balancer';

export default function Root({ children }: { children: ReactNode }) {
  return (
    <BalancerProvider>
      <GithubProvider>{children}</GithubProvider>
    </BalancerProvider>
  );
}
