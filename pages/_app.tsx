import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import { AppProps } from 'next/app';
import { useMemo } from 'react';

import {
  GithubRepo,
  filterUnwantedRepos,
  sortReposByUpdateDate
} from '../utils/github';
import useDarkMode from '../hooks/useDarkMode';
import Layout from '../components/Layout';

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

  const [darkModeEnabled, toggleDarkModeEnabled] = useDarkMode();

  const githubRepos = useMemo(() => {
    if (Array.isArray(data)) {
      return (data as Array<GithubRepo>)
        .filter(filterUnwantedRepos)
        .sort(sortReposByUpdateDate);
    } else return false;
  }, [data]);

  return (
    <Layout
      darkModeEnabled={darkModeEnabled}
      toggleDarkModeEnabled={toggleDarkModeEnabled}
    >
      <Component
        error={error}
        darkModeEnabled={darkModeEnabled}
        toggleDarkModeEnabled={toggleDarkModeEnabled}
        loading={!data}
        githubRepos={githubRepos}
        {...pageProps}
      />
      <style jsx global>{`
        :root {
          --black: #000000;
          --dark-mode-background: #121212;
          --light-mode-background: #eaeaea;
          --white: #ffffff;
          --link: #0070f3;
        }
      `}</style>
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
    </Layout>
  );
}

export default App;
