export type GithubRepo = {
  id: number;
  name: string;
  private: boolean;
  html_url: string;
  description: string;
  homepage?: string;
  language: string;
  has_pages: boolean;
  archived: boolean;
  fork: boolean;
  disabled: boolean;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
};

export const sortReposByUpdateDate = (
  repo1: GithubRepo,
  repo2: GithubRepo
): number => Date.parse(repo2.updated_at) - Date.parse(repo1.updated_at);

export const filterUnwantedRepos = ({ archived, fork }: GithubRepo): boolean =>
  Boolean(!(archived || fork));

export const filterHomepages = (exists: boolean) => ({
  homepage
}: GithubRepo): boolean => Boolean(exists ? homepage : !homepage);
