import { GetStaticProps } from 'next';

import Layout from '../components/Layout';
import ProjectsDisplay from '../components/ProjectsDisplay';
import { GithubRepo } from '../utils/api';
import { InternalProject, getAllProjects } from '../lib/project';
import { useMemo } from 'react';

type HomeProps = {
  internalProjects: InternalProject[];
  githubRepos: GithubRepo[];
  loading: boolean;
};

type MergedProject = {
  project: InternalProject;
  github: GithubRepo;
};

function Home({
  internalProjects,
  loading,
  githubRepos
}: HomeProps): JSX.Element {
  const mergedProjects = useMemo(
    () =>
      Boolean(
        githubRepos &&
          githubRepos.length &&
          internalProjects &&
          internalProjects.length
      )
        ? internalProjects.map(project => ({
            github: githubRepos.find(repo => repo.html_url === project.github),
            project
          }))
        : [],
    [githubRepos, internalProjects]
  );

  const [current, ...projects] = loading
    ? Array(5).fill({ loading: true })
    : githubRepos;
  return (
    <Layout page="Home" title="Welcome to my portfolio!">
      <ProjectsDisplay current={current} projects={projects} />
    </Layout>
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
