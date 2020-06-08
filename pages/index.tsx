import { useMemo } from 'react';

import Card from '@components/Card';
import ExternalLink from '@components/ExternalLink';
import PageHeader from '@components/PageHeader';
import { GithubRepo } from '@utils/github';

import { AppPageProps } from './_app';

function Home({ loading, githubRepos }: AppPageProps): JSX.Element {
  const currentProject: GithubRepo | false | undefined = useMemo(
    () => Boolean(githubRepos?.length) && (githubRepos as GithubRepo[])[0],
    [githubRepos]
  );
  return (
    <>
      <PageHeader page="Home" title="Hi, welcome!" />
      <section>
        <Card className="bio">
          <img
            alt="A drawing of me made by a friend"
            className="bio__pic"
            src="/me.jpeg"
          />
          <div className="bio__extract">
            <p>
              I'm Roy!{' '}
              <span aria-label="smiley-face" role="img">
                😁️
              </span>
            </p>
            <ul className="bio__extract__list">
              <li>
                Sometimes Front-End Programmer{' '}
                <span aria-label="laptop" role="img">
                  💻️
                </span>
              </li>
              <li>
                Sometimes doing audiovisual arts{' '}
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
                Sometimes learning about something new{' '}
                <span aria-label="books" role="img">
                  📚️
                </span>
              </li>
              <li>
                Sometimes sharing some knowledge{' '}
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
          <i>This site is still under construction</i>
        </p>
      </section>
      <section className="current">
        <header>
          <h1>I'm currently working on this:</h1>
          {loading ? (
            <Card loading />
          ) : currentProject ? (
            <Card
              aria-label={`View the Github page last project that I've been working on: ${currentProject.name}`}
              href={currentProject.html_url}
            >
              <h1>{currentProject.name.toUpperCase()}</h1>
              {currentProject.description && (
                <p>{currentProject.description}</p>
              )}
              <p style={{ textAlign: 'center' }}>
                Check it out by clicking here
                <span aria-label="This element" role="img">
                  ☝️
                </span>
              </p>
            </Card>
          ) : (
            <Card>
              <h1 style={{ textAlign: 'center' }}>
                This couldn't load, I'm sorry!{' '}
                <span aria-label="Surprised face" role="img">
                  😮️
                </span>
              </h1>
            </Card>
          )}
          <p>
            For now I don't have a showcase, but you can check my github to{' '}
            <ExternalLink
              aria-label="View my projects in Github"
              href="https://github.com/royeden"
            >
              view all my projects
            </ExternalLink>
          </p>
        </header>
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
        }
      `}</style>
    </>
  );
}

export default Home;
