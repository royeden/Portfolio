import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import { AppProps } from 'next/app';
import { useMemo } from 'react';

import {
  GithubRepo,
  filterUnwantedRepos,
  sortReposByUpdateDate
} from '../utils/github';

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

  const githubRepos = useMemo(() => {
    if (Array.isArray(data)) {
      return (data as Array<GithubRepo>)
        .filter(filterUnwantedRepos)
        .sort(sortReposByUpdateDate);
    } else return false;
  }, [data]);

  return (
    <>
      <Component
        error={error}
        githubRepos={githubRepos}
        loading={!data}
        {...pageProps}
      />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}

export default App;
