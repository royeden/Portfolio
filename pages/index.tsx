import Layout from '../components/Layout';
import ProjectsDisplay from '../components/ProjectsDisplay';
import {
  GithubRepo,
  JSONSafeWebsite,
  getGithubRepos,
  getWebsites
} from '../utils/api';

type HomeProps = {
  error: boolean;
  scrapped: JSONSafeWebsite[];
  repos: GithubRepo[];
};

export default function Home({ scrapped, error, repos }: HomeProps) {
  console.log({ repos, scrapped })
  const [current, ...projects] = repos.map(
    ({ id, name, html_url, description }) => ({
      id,
      title: name,
      description,
      html_url
    })
  );
  return (
    <Layout page="Home" title="Welcome to my portfolio!">
      {/* TODO add brief BIO, expand in about */}
      <ProjectsDisplay current={current} projects={projects} />
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const allRepos = await getGithubRepos('royeden');

    const repos = allRepos
      .filter(({ archived, fork }) => Boolean(!(archived || fork)))
      .sort((repo1, repo2) => {
        return Date.parse(repo2.updated_at) - Date.parse(repo1.updated_at);
      });

    const urls = repos.map(({ homepage }) => homepage || '').filter(Boolean);

    const scrapped = await getWebsites(urls);

    return {
      props: {
        scrapped,
        repos,
        error: false
      }
    };
  } catch (error) {
    return {
      props: {
        repos: [],
        error
      }
    };
  }
}

// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
//   const res = await getGithubRepos("royeden");
//   console.log(res)

//   // const paths = posts.map(post => `/posts/${post.id}`)

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   // return { paths, fallback: false }
//   return {};
// }
