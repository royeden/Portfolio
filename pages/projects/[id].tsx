import { GetStaticPaths, GetStaticProps } from 'next';

import Layout from '../../components/Layout';
import { AppPageProps } from '../_app';
import {
  InternalProjectData,
  getAllProjectIds,
  getProjectData
} from '../../lib/project';

type ProjectPage = AppPageProps & {
  projectData: InternalProjectData;
};

function ProjectPage({ projectData }: ProjectPage): JSX.Element {
  return (
    <Layout page={`Projects: ${projectData.name}`} title={projectData.name}>
      <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
    </Layout>
  );
}

export default ProjectPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false
  };
};

type ProjectParams = {
  id: string;
};

function getParamsId(
  params:
    | ProjectParams
    | {
        [key: string]: unknown;
      }
    | undefined
): string {
  return (params as ProjectParams).id || '';
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projectData = await getProjectData(getParamsId(params));
  return {
    props: {
      projectData
    }
  };
};
