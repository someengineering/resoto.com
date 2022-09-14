import latestRelease from '@site/latestRelease.json';
import React from 'react';

export default function LatestRelease(): JSX.Element {
  return <code>{latestRelease.version ?? 'latest'}</code>;
}
