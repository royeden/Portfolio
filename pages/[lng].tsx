import Head from 'next/head';
import useTranslation from '@hooks/useTranslation';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { contentLanguageMap, defaultLanguage, languages } from '@lib/i18n';
import { useMemo } from 'react';

import Card from '@components/Card';
import ExternalLink from '@components/ExternalLink';
import PageHeader from '@components/PageHeader';
import { GithubRepo } from '@utils/github';

import { AppPageProps } from './_app';

const Home: NextPage<AppPageProps> = ({ loading, githubRepos }) => {
  const { activeLocale, t } = useTranslation();
  const currentProject: GithubRepo | false | undefined = useMemo(
    () => Boolean(githubRepos?.length) && (githubRepos as GithubRepo[])[0],
    [githubRepos]
  );
  const languagesList = useMemo(
    () => languages.filter(language => language !== activeLocale),
    [activeLocale]
  );
  return (
    <>
      <Head>
        <meta
          httpEquiv="content-language"
          content={contentLanguageMap[activeLocale]}
        />
      </Head>
      <PageHeader page="Home" title={t('home.welcome')} />
      <section>
        <Card className="bio">
          <img alt={t('home.bio.pic')} className="bio__pic" src="/me.jpeg" />
          <div className="bio__extract">
            <p>
              {t('home.bio.extract.intro')}{' '}
              <span aria-label="smiley-face" role="img">
                😁️
              </span>
            </p>
            <ul className="bio__extract__list">
              <li>
                {t('home.bio.extract.programmer')}{' '}
                <span aria-label="laptop" role="img">
                  💻️
                </span>
              </li>
              <li>
                {t('home.bio.extract.arts')}{' '}
                <span aria-label="music" role="img">
                  🎵️
                </span>{' '}
                <span aria-label="video" role="img">
                  📽️
                </span>{' '}
                <span aria-label="theathre" role="img">
                  🎭️
                </span>
              </li>
              <li>
                {t('home.bio.extract.learning')}{' '}
                <span aria-label="books" role="img">
                  📚️
                </span>
              </li>
              <li>
                {t('home.bio.extract.teaching')}{' '}
                <span aria-label="paper clip" role="img">
                  📎️
                </span>
              </li>
            </ul>
          </div>
        </Card>
      </section>
      <section>
        <p>
          <i>{t('home.siteUnderConstruction')}</i>
        </p>
      </section>
      <section className="current">
        <header>
          <h1>{t('home.projects.current')}</h1>
          {loading ? (
            <Card loading />
          ) : currentProject ? (
            <Card
              aria-label={t('home.projects.currentLink', {
                name: currentProject.name
              })}
              href={currentProject.html_url}
            >
              <h1>{currentProject.name.toUpperCase()}</h1>
              {currentProject.description && (
                <p>{currentProject.description}</p>
              )}
              <p style={{ textAlign: 'center' }}>
                {t('home.projects.checkItOut')}
                <span aria-label="This element" role="img">
                  ☝️
                </span>
              </p>
            </Card>
          ) : (
            <Card>
              <h1 style={{ textAlign: 'center' }}>
                {t('home.projects.errorLoading')}{' '}
                <span aria-label="Surprised face" role="img">
                  😮️
                </span>
              </h1>
            </Card>
          )}
          <p>
            {t('home.projects.showcase1')}{' '}
            <ExternalLink
              aria-label={t('home.projects.showcaseLink')}
              href="https://github.com/royeden"
            >
              {t('home.projects.showcase2')}
            </ExternalLink>
          </p>
        </header>
      </section>
      <section>
        {languagesList.map(language => (
          <Card
            key={language}
            link={{
              href: `/${language}`,
              prefetch: false
            }}
          >
            {t('home.viewSiteIn', { language: t(`common.${language}`) })}
          </Card>
        ))}
      </section>
      <style jsx>{`
        section {
          align-items: center;
          display: flex;
          justify-content: center;
        }
        :global(.card.card__bio) {
          align-items: center;
          justify-content: center;
          max-height: 100vh;
          flex-basis: auto;
        }

        .bio__extract {
          display: inline;
          font-weight: 500;
        }

        .bio__extract__list {
          font-style: italic;
        }

        .bio__extract__list li {
          margin: 0.5rem 0;
        }

        .bio__extract span,
        .bio__extract__list span {
          display: inline;
          font-style: normal;
          font-weight: normal;
        }

        .bio__extract__list {
          padding-left: 1.25rem;
        }

        .bio__pic {
          border: solid 2px black;
          border-radius: 50%;
          height: 100px;
          width: 100px;
        }

        .current {
          display: flex;
          justify-content: center;
          max-width: 768px;
        }
      `}</style>
    </>
  );
};

type languageParams = {
  lng: string;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { default: lngDict = {} } = await import(
    `../locales/${(params as languageParams).lng || defaultLanguage}.json`
  );

  return {
    props: { lng: (params as languageParams).lng || defaultLanguage, lngDict }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: languages.map(l => ({ params: { lng: l } })),
    fallback: false
  };
};

export default Home;
