import useSWR from 'swr';
import { AppProps } from 'next/app';
import { useEffect, useMemo } from 'react';

import Layout from '@components/Layout';
import useDarkMode from '@hooks/useDarkMode';
import useToggle from '@hooks/useToggle';
import {
  GithubRepo,
  filterUnwantedRepos,
  sortReposByUpdateDate
} from '@utils/github';

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
          --background-hover: ${darkModeEnabled ? '#ffffff33' : '#ffffff55'};
          --card-background: ${darkModeEnabled ? '#1d1d1d' : '#ffffff'};
          --card-border: ${darkModeEnabled ? '#444444' : '#eeeeee'};
          --card-hover: ${darkModeEnabled ? '#292929' : '#fcfcfc'};
          --card-focus: ${darkModeEnabled ? '#292929' : '#fcfcfc'};
          --color: ${darkModeEnabled ? '#ffffff' : '#000000'};
          --link: ${darkModeEnabled ? '#0cbaba' : '#0070f3'};
          --link-hover: ${darkModeEnabled ? '#2cf2f2' : '#0056b8'};
          --nav: ${darkModeEnabled ? '#212121' : '#000000'};
          --nav-shadow: ${darkModeEnabled ? '#21212144' : '#00000044'};
        }
        /* TODO change this */
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        span,
        p {
          text-shadow: ${darkModeEnabled ? '1px 1px 3px #00000099' : 'none'};
          transition: text-shadow 0.4s ease;
        }
      `}</style>
      <style jsx global>{`
        /* poppins-300 - latin */
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 300;
          src: local('Poppins Light'), local('Poppins-Light'),
            url('public/Poppins/poppins-v9-latin-300.woff2') format('woff2'),
            /* Chrome 26+, Opera 23+, Firefox 39+ */
              url('public/Poppins/poppins-v9-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
          font-display: swap;
        }
        /* poppins-regular - latin */
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 400;
          src: local('Poppins Regular'), local('Poppins-Regular'),
            url('public/Poppins/poppins-v9-latin-regular.woff2') format('woff2'),
            /* Chrome 26+, Opera 23+, Firefox 39+ */
              url('public/Poppins/poppins-v9-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
          font-display: swap;
        }
        /* poppins-600 - latin */
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 600;
          src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
            url('public/Poppins/poppins-v9-latin-600.woff2') format('woff2'),
            /* Chrome 26+, Opera 23+, Firefox 39+ */
              url('public/Poppins/poppins-v9-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
          font-display: swap;
        }
        /* poppins-800 - latin */
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 800;
          src: local('Poppins ExtraBold'), local('Poppins-ExtraBold'),
            url('public/Poppins/poppins-v9-latin-800.woff2') format('woff2'),
            /* Chrome 26+, Opera 23+, Firefox 39+ */
              url('public/Poppins/poppins-v9-latin-800.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
          font-display: swap;
        }
        html,
        body {
          background-color: var(--background);
          color: var(--color);
          padding: 0;
          margin: 0;
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
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
