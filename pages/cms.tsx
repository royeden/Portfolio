import { getAllProjectsForHome } from '../lib/api';

export default function Index({
  allProjects,
  preview
}: {
  allProjects: any;
  preview: boolean | null;
}) {
  console.log(allProjects);
  const heroPost = allProjects[0];
  const morePosts = allProjects.slice(1);
  return <>TEST</>;
}

export async function getStaticProps({ preview = null }) {
  const allProjects = await getAllProjectsForHome(preview);
  return {
    props: { allProjects, preview }
  };
}
