import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getImageUrl } from 'takeshape-routing';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import Head from 'next/head';
import md2HTML from '../../lib/md2HTML';

export default function Post({
  post,
  morePosts,
  preview
}: {
  post: any;
  morePosts: any;
  preview: any;
}) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return <>TEST</>;
}

export async function getStaticProps({
  params,
  preview = null
}: {
  params: { slug: string };
  preview: boolean | null;
}) {
  const data = await getPostAndMorePosts(params.slug, preview);
  const content = await md2HTML((data?.post?.items || [])[0]?.content || '');

  return {
    props: {
      preview,
      post: {
        ...(data?.post?.items || [])[0],
        content
      },
      morePosts: data?.morePosts.items
    }
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post: { slug: string }) => `/posts/${post.slug}`) || [],
    fallback: true
  };
}
