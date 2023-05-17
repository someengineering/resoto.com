import latestRelease from '@site/latestRelease.json';

export interface AwsPolicyResponse {
  Version: string;
  Statement: { Effect: string; Resource: string; Action: string[] }[];
}

export type AwsPolicyName = 'ResotoOrgList' | 'ResotoCollect' | 'ResotoMutate';

export const awsPolicyUrl = (version: string, name: AwsPolicyName): string => {
  const directory = version === 'edge' ? 'edge' : latestRelease[version];

  return directory
    ? `https://cdn.some.engineering/resoto/aws/${directory}/${name}.json`
    : null;
};

export const actionsByNamespace = (
  policy: AwsPolicyResponse | null
): { [namespace: string]: string[] } => {
  return (policy?.Statement[0].Action ?? [])
    .map((action) => {
      const [namespace, name] = action.split(':');

      return {
        namespace,
        name,
      };
    })
    .reduce(
      (acc, action) => ({
        ...acc,
        [action.namespace]: [...(acc[action.namespace] || []), action.name],
      }),
      {}
    );
};
