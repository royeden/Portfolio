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
  console.log(scrapped, repos);
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

    const dateSort = (repo1: GithubRepo, repo2: GithubRepo) =>
      Date.parse(repo2.updated_at) - Date.parse(repo1.updated_at);

    const filterUnwantedRepos = ({ archived, fork }: GithubRepo) =>
      Boolean(!(archived || fork));

    const filterHomepages = (exists: boolean) => ({ homepage }: GithubRepo) =>
      Boolean(exists ? homepage : !homepage);

    const repos = allRepos.filter(filterUnwantedRepos).sort(dateSort);

    const urls = repos.filter(filterHomepages(true));
    const reposUrls = repos.filter(filterHomepages(false));

    const scrapped = await getWebsites(urls.map(({ homepage }) => homepage || ''));

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
        scrapped: [],
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
