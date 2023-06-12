import { useDocsVersion } from '@docusaurus/theme-common/internal';
import {
  AwsPolicyName,
  GcpPolicyName,
  Provider,
  actionsByNamespace,
} from '@site/src/utils/iamPolicyHelper';
import versions from '@site/versions.json';
import useStoredJson from '@theme/useStoredJson';
import GithubSlugger from 'github-slugger';
import { sortBy, union } from 'lodash';
import React from 'react';

export default function IamPolicyTable({
  provider,
  policyNames,
}: {
  provider: Provider;
  policyNames: (AwsPolicyName | GcpPolicyName)[];
}): JSX.Element {
  const githubSlugger = new GithubSlugger();
  const versionMetadata = useDocsVersion();
  const version =
    versionMetadata?.version === 'current'
      ? 'edge'
      : versionMetadata?.version ?? versions[0];

  const groupedActions: {
    [policyName: string]: { [namespace: string]: string[] };
  } = policyNames.reduce(
    (acc, policyName) => ({
      ...acc,
      [policyName]: actionsByNamespace(
        provider,
        // TODO: fix this eslint-disable
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useStoredJson(`${provider}-${version}-${policyName}`)
      ),
    }),
    {}
  );

  const namespaces: string[] = sortBy(
    union(
      ...Object.keys(groupedActions).map((policyName) =>
        Object.keys(groupedActions[policyName])
      )
    )
  );

  return (
    <>
      {policyNames.length && namespaces.length ? (
        <table>
          <thead>
            <tr>
              <th>Service Namespace</th>
              {policyNames.map((policyName, idx) => (
                <th key={`policy-${idx}`}>
                  <a href={`#${githubSlugger.slug(policyName)}`}>
                    <code>{policyName}</code>
                  </a>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {namespaces.map((namespace, idx) => (
              <tr key={idx}>
                <td>
                  <code>{namespace}</code>
                </td>
                {policyNames.map((policyName, idx) => (
                  <td key={`${namespace}-${idx}`}>
                    {groupedActions[policyName][namespace]?.length ? (
                      <ul>
                        {groupedActions[policyName][namespace].map(
                          (action, idx) => (
                            <li key={`${policyName}-${namespace}-${idx}`}>
                              <code>{action}</code>
                            </li>
                          )
                        )}
                      </ul>
                    ) : null}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </>
  );
}
