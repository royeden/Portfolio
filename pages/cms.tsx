import { getAllPostsForHome } from '../lib/api';

export default function Index({
  allPosts,
  preview
}: {
  allPosts: any;
  preview: boolean | null;
}) {
  console.log(allPosts);
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return <>TEST</>;
}

export async function getStaticProps({ preview = null }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview }
  };
}
