import Layout from '../../components/Layout';
import { getAllProjectIds, getProjectData } from '../../lib/project';
import { GetStaticPaths, GetStaticProps } from 'next';

type ProjectPage = {
  projectData: {
    contentHtml: string;
  };
};

function ProjectPage({ projectData }: ProjectPage): JSX.Element {
  return (
    <Layout page="Project" title="Project">
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

export const getStaticProps: GetStaticProps = async ({
  params = { id: '' }
}) => {
  const projecData = await getProjectData(params.id as string);
  return {
    props: {
      projecData
    }
  };
};
