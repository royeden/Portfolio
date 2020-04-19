import fetch from 'isomorphic-unfetch';

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
  forked: boolean;
  disabled: boolean;
  created_at: string;
  updated_at: string;
  [key: string]: any;
};

export async function getGithubRepos(
  user: string
): Promise<GithubRepo[] | never> {
  try {
    const response = await fetch(`https://api.github.com/users/${user}/repos`);
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
}
