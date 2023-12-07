import latestRelease from '@site/latestRelease.json';
import versions from '@site/versions.json';

export default function LatestRelease(): JSX.Element {
  return <code>{latestRelease[versions[0]] ?? 'latest'}</code>;
}
