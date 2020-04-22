import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import { AppProps } from 'next/app';

import { GithubRepo } from '../utils/api';

export type AppPageProps = {
  error: undefined | Error;
  githubRepos: undefined | GithubRepo[];
  loading: boolean;
};

function fetcher(
  url: string
): Promise<object | Array<object | string | number>> {
  return fetch(url).then(response => response.json());
}

function App({ Component, pageProps }: AppProps): JSX.Element {
  const { data, error } = useSWR('/api/get-repos', fetcher);

  return (
    <Component
      // error={error}
      // githubRepos={data}
      // loading={!data}
      {...pageProps}
    />
  );
}

export default App;
