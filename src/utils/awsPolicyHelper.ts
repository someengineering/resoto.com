export interface AwsPolicyResponse {
  Version: string;
  Statement: { Effect: string; Resource: string; Action: string[] }[];
}

export type AwsPolicyName = 'ResotoOrgList' | 'ResotoCollect' | 'ResotoMutate';

export const awsPolicyUrl = (version: string, name: AwsPolicyName): string => {
  return `https://cdn.some.engineering/resoto/aws/${version}/${name}.json`;
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
