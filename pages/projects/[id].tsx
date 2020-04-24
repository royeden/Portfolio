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
    <Layout page={`Projects:${projectData.name}`} title={projectData.name}>
      <div
        className="markdown"
        dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}
      />
      <style jsx>
        {`
          .markdown {
            max-width: 800px;
            overflow-wrap: break-word;
            overflow-x: auto;
            padding: 0 0.5rem;
            word-wrap: break-word;
          }
          :global(.markdown [data-link]) {
            align-items: center;
            color: black;
            display: inline-flex;
            padding-right: 1rem;
            text-decoration: none;
          }
          :global(.markdown [data-link]:after) {
            background-image: url('/link.svg');
            content: '';
            display: inline-block;
            height: 1rem;
            margin-left: 0.5rem;
            opacity: 0;
            transition: opacity 0.4s ease;
            width: 1rem;
          }
          :global(.markdown [data-link]:focus[data-link]:after),
          :global(.markdown [data-link]:hover[data-link]:after) {
            opacity: 1;
          }
        `}
      </style>
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
