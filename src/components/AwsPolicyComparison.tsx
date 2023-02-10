import type { PropVersionMetadata } from '@docusaurus/plugin-content-docs';
import { useDocsVersion } from '@docusaurus/theme-common/internal';
import latestRelease from '@site/latestRelease.json';
import versions from '@site/versions.json';
import useStoredJson from '@theme/useStoredJson';
import GithubSlugger from 'github-slugger';
import { union } from 'lodash';
import React from 'react';
import {
  actionsByNamespace,
  AwsPolicyName,
  AwsPolicyResponse,
} from '../utils/awsPolicyHelper';

export default function AwsPolicyComparison({
  policyNames,
}: {
  policyNames: AwsPolicyName[];
}): JSX.Element {
  const githubSlugger = new GithubSlugger();
  let versionMetadata: PropVersionMetadata | null;

  try {
    versionMetadata = useDocsVersion();
  } catch (e) {
    versionMetadata = null;
  }

  const version =
    versionMetadata?.version === 'current'
      ? 'edge'
      : latestRelease[versionMetadata?.version ?? versions[0]].version;

  const policies: { [policyName: string]: AwsPolicyResponse } = policyNames
    .map((policyName) => ({
      [policyName]: useStoredJson(
        `aws-${version}-${policyName}`
      ) as AwsPolicyResponse,
    }))
    .reduce(
      (acc, policy) => ({
        ...acc,
        ...policy,
      }),
      {}
    );

  const groupedActions: {
    [policyName: string]: { [namespace: string]: string[] };
  } = policyNames.reduce(
    (acc, policyName) => ({
      ...acc,
      [policyName]: actionsByNamespace(policies[policyName]),
    }),
    {}
  );

  const namespaces: string[] = union(
    ...Object.keys(groupedActions).map((policyName) =>
      Object.keys(groupedActions[policyName])
    )
  );

  return (
    <>
      {policyNames.length ? (
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
