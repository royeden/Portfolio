import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import { AppProps } from 'next/app';
import { useEffect, useMemo } from 'react';

import {
  GithubRepo,
  filterUnwantedRepos,
  sortReposByUpdateDate
} from '../utils/github';
import useDarkMode from '../hooks/useDarkMode';
import Layout from '../components/Layout';
import useToggle from '../hooks/useToggle';

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

  const [initialized, toggleInitialized] = useToggle();

  const [darkModeEnabled, toggleDarkModeEnabled] = useDarkMode();

  useEffect(() => {
    if (!initialized) toggleInitialized();
  }, [initialized, toggleInitialized]);

  const githubRepos = useMemo(() => {
    if (Array.isArray(data)) {
      return (data as Array<GithubRepo>)
        .filter(filterUnwantedRepos)
        .sort(sortReposByUpdateDate);
    } else return false;
  }, [data]);

  return (
    <Layout
      darkModeEnabled={initialized && darkModeEnabled}
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
          --background: ${darkModeEnabled ? '#121212' : '#ffffff'};
          --card-background: ${darkModeEnabled ? '#1d1d1d' : '#ffffff'};
          --card-hover: ${darkModeEnabled ? '#1b1b1b' : '#fafafa'};
          --card-focus: ${darkModeEnabled ? '#292929' : '#ececec'};
          --color: ${darkModeEnabled ? '#ffffff' : '#000000'};
          --link: ${darkModeEnabled ? '#0070f3' : '#0070f3'};
          --nav: ${darkModeEnabled ? '#212121' : '#000000'};
          --nav-shadow: ${darkModeEnabled ? '#21212144' : '#00000044'};
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          background-color: var(--background);
          color: var(--color);
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          transition: background-color 0.4s ease, color 0.4s ease;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Layout>
  );
}

export default App;
