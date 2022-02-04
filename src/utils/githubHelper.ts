import { Octokit } from '@octokit/core';

export const getGithubStars = async (
  owner: string,
  repository: string
): Promise<number | null> => {
  try {
    const res = await new Octokit().request(`/repos/${owner}/${repository}`);

    return res.data.stargazers_count;
  } catch (err) {
    return null;
  }
};

export const getLatestRelease = async (
  owner: string,
  repository: string
): Promise<string | null> => {
  try {
    const res = await new Octokit().request(
      `/repos/${owner}/${repository}/releases?per_page=1`
    );

    return res.data[0].name;
  } catch (err) {
    return null;
  }
};
