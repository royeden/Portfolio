import { GetStaticProps } from 'next';
import { useMemo } from 'react';

import Layout from '../components/Layout';
import ProjectsDisplay from '../components/ProjectsDisplay';
import { GithubRepo } from '../utils/api';
import { InternalProject, getAllProjects } from '../lib/project';

type HomeProps = {
  internalProjects: InternalProject[];
  githubRepos: GithubRepo[];
  loading: boolean;
};

export type MergedProject = {
  project: InternalProject;
  github: GithubRepo | undefined;
};

function repoId(repo: GithubRepo | undefined): number | undefined {
  return (repo as GithubRepo).id || undefined;
}

function Home(
  {
    // internalProjects,
    // loading,
    // githubRepos
  } /*: HomeProps*/
): JSX.Element {
  // const mergedProjects: MergedProject[] = useMemo(
  //   () =>
  //     Boolean(
  //       githubRepos &&
  //         githubRepos.length &&
  //         internalProjects &&
  //         internalProjects.length
  //     )
  //       ? internalProjects.map(project => ({
  //           github: githubRepos.find(repo => repo.html_url === project.github),
  //           project
  //         }))
  //       : [],
  //   [githubRepos, internalProjects]
  // );

  // const [current, ...projects] = loading
  //   ? Array(5).fill({ loading: true })
  //   : [
  //       ...mergedProjects,
  //       ...githubRepos.filter(
  //         ({ id }) =>
  //           !mergedProjects.map(({ github }) => repoId(github)).includes(id)
  //       )
  //     ];
  return (
    <Layout page="Home" title="Welcome to my portfolio!">
      {/* <ProjectsDisplay current={current} projects={projects} /> */}
    </Layout>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const internalProjects = getAllProjects();
//   return {
//     props: {
//       internalProjects
//     }
//   };
// };

export default Home;
