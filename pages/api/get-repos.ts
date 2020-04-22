import { NextApiRequest, NextApiResponse } from 'next';

import { GithubRepo, getGithubRepos } from '../../utils/api';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<undefined> => {
  const repos: GithubRepo[] = await getGithubRepos('royeden');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(repos));
  return;
};
