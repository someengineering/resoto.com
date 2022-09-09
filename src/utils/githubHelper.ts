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
