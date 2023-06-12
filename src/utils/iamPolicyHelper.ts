import latestRelease from '@site/latestRelease.json';

export type Provider = 'aws' | 'gcp';

export type AwsPolicyName = 'ResotoOrgList' | 'ResotoCollect' | 'ResotoMutate';
export interface AwsPolicy {
  Version: string;
  Statement: { Effect: string; Resource: string; Action: string[] }[];
}

export type GcpPolicyName = 'resoto_access' | 'resoto_mutate';
export interface GcpPolicy {
  title: string;
  description: string;
  stage: string;
  includedPermissions: string[];
}

export const policyUrl = (
  provider: Provider,
  version: string,
  name: AwsPolicyName | GcpPolicyName
): string => {
  const directory = version === 'edge' ? 'edge' : latestRelease[version];

  return directory
    ? `https://cdn.some.engineering/resoto/${provider}/${directory}/${name}.${
        provider === 'aws' ? 'json' : 'yaml'
      }`
    : null;
};

export const actionsByNamespace = (
  provider: Provider,
  policy: AwsPolicy | GcpPolicy | null
): { [namespace: string]: string[] } => {
  return (
    provider === 'aws'
      ? ((policy as AwsPolicy)?.Statement[0].Action ?? []).map((action) => {
          const [namespace, name] = action.split(':');

          return {
            namespace,
            name,
          };
        })
      : ((policy as GcpPolicy)?.includedPermissions ?? []).map((action) => {
          const split = action.split('.');

          return {
            namespace: split.shift(),
            name: split.join('.'),
          };
        })
  ).reduce(
    (acc, action) => ({
      ...acc,
      [action.namespace]: [...(acc[action.namespace] || []), action.name],
    }),
    {}
  );
};
