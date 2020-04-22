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

function ProjectPage(props: ProjectPage): JSX.Element {
  return (
    <Layout
      page={props.projectData && props.projectData.name}
      title={props.projectData && props.projectData.name}
    >
      test
      {props.projectData && props.projectData.contentHtml && (
        <div
          dangerouslySetInnerHTML={{ __html: props.projectData.contentHtml }}
        />
      )}
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projecData = await getProjectData(params.id as string);
  return {
    props: {
      projecData
    }
  };
};
