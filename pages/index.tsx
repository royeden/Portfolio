import { GetStaticProps } from 'next';
import { useMemo } from 'react';

import Card from '../components/Card';
import { GithubRepo } from '../utils/github';
import { InternalProject, getAllProjects } from '../lib/project';

import { AppPageProps } from './_app';
import PageHeader from '../components/PageHeader';
import PageContainer from '../components/PageContainer';

type HomeProps = AppPageProps & {
  internalProjects: InternalProject[];
};

export type MergedProject = {
  project: InternalProject;
  github: GithubRepo | undefined;
};

function Home({
  internalProjects,
  loading,
  githubRepos
}: HomeProps): JSX.Element {
  const currentProject: InternalProject | false | undefined = useMemo(() => {
    return !loading && githubRepos?.length
      ? internalProjects.find(({ github }) =>
          githubRepos.find(({ html_url: githubUrl }) => githubUrl === github)
        )
      : false;
  }, [githubRepos, internalProjects, loading]);
  return (
    <PageContainer>
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
              {/* <li>
                Always using They / Them pronouns{' '}
                <span aria-label="rainbow" role="img">
                  🌈️
                </span>
              </li> */}
            </ul>
          </div>
        </Card>
      </section>
      <section className="current">
        <header>
          <h1>I'm currently working on this:</h1>
          {loading ? (
            <Card loading />
          ) : currentProject ? (
            <Card
              link={{
                href: 'projects/[id]',
                as: `projects/${currentProject.id}`
              }}
            >
              <h1>{currentProject.title}</h1>
              <p>{currentProject.description}</p>
            </Card>
          ) : (
            ''
          )}
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
          font-weight: bold;
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
    </PageContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const internalProjects = getAllProjects();
  return {
    props: {
      internalProjects
    }
  };
};

export default Home;
