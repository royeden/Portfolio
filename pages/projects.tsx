import PageContainer from '../components/PageContainer';
import PageHeader from '../components/PageHeader';
import { getAllPostsForHome, getAllTags } from '../lib/api';

type ProjectsProps = {
  allPosts: any;
  preview: any;
};

function Projects({ allPosts, preview }: ProjectsProps): JSX.Element {
  console.log(allPosts);
  return (
    <PageContainer>
      <PageHeader page="Projects" title="My projects" />
      Projects
    </PageContainer>
  );
}

export default Projects;

export async function getStaticProps({ preview = null }) {
  const allPosts = await Promise.all([getAllPostsForHome(preview), getAllTags()]);
  return {
    props: { allPosts, preview }
  };
}
