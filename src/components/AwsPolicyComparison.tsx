import type { PropVersionMetadata } from '@docusaurus/plugin-content-docs';
import { useDocsVersion } from '@docusaurus/theme-common/internal';
import latestRelease from '@site/latestRelease.json';
import versions from '@site/versions.json';
import GithubSlugger from 'github-slugger';
import { union } from 'lodash';
import React, { useEffect, useMemo, useState } from 'react';
import {
  actionsByNamespace,
  AwsPolicyName,
  AwsPolicyResponse,
  fetchAwsPolicy,
} from '../utils/awsPolicyHelper';

export default function AwsPolicyComparison({
  policyNames,
}: {
  policyNames: AwsPolicyName[];
}): JSX.Element {
  const githubSlugger = new GithubSlugger();
  const [policies, setPolicies] = useState<{
    [policyName: string]: AwsPolicyResponse | null;
  }>({});
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

  useEffect(() => {
    const getAwsPolicies = async () => {
      setPolicies(
        (
          await Promise.all(
            policyNames.map(async (policyName) => ({
              [policyName]: await fetchAwsPolicy(version, policyName),
            }))
          )
        ).reduce(
          (acc, policy) => ({
            ...acc,
            ...policy,
          }),
          {}
        )
      );
    };

    getAwsPolicies();
  }, [policyNames]);

  const groupedActions: {
    [policyName: string]: { [namespace: string]: string[] };
  } = useMemo(
    () =>
      policyNames.reduce(
        (acc, policyName) => ({
          ...acc,
          [policyName]: actionsByNamespace(policies[policyName]),
        }),
        {}
      ),
    [policies]
  );

  const namespaces: string[] = useMemo(
    () =>
      union(
        ...Object.keys(groupedActions).map((policyName) =>
          Object.keys(groupedActions[policyName])
        )
      ),
    [groupedActions]
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
