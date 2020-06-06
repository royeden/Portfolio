import fetch from 'isomorphic-unfetch';

const API_URL = `https://api.takeshape.io/project/${process.env.TAKESHAPE_PROJECT_ID}/graphql`;
const API_KEY = process.env.TAKESHAPE_API_KEY;

export type Color = {
  hex: string;
};

export type Tag = {
  _id: string;
  name: string;
  colors: {
    primary: Color;
    background: Color;
  };
};

export type TagListQuery = {
  getTagList: {
    items: (Tag & { status: string })[];
  };
};

export type TagQuery = {
  getTag: Tag;
};

export type Project = {
  _id: string;
  content: string;
  date: string;
  excerpt: string;
  githubUrl: string;
  homepageUrl: string;
  image: {
    path: string;
  };
  slug: string;
  tags: Tag[];
};

async function fetchAPI(
  query: string,
  { variables }: { variables?: object } = {}
): Promise<object | TagListQuery | TagQuery | never> {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      query,
      variables
    })
  });

  const json = await res.json();

  console.log(json);

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getTagsList(preview: boolean): Promise<Tag[]> {
  const data: TagListQuery = (await fetchAPI(
    `
    query Tags {
      getTagList(onlyEnabled: ${preview}) {
        items {
          _id
          _status
          name
          colors {
            primary {
              hex
            }
            background {
              hex
            }
          }
        }
      }
    }`
  )) as TagListQuery;
  return data.getTagList.items;
}

export async function getTag(id: string): Promise<Tag> {
  const data: TagQuery = (await fetchAPI(
    `
    query Tag {
      getTag(_id: ${id}) {
        name,
        colors {
          primary {
            hex
          },
          background {
            hex
          }
        }
      }
    }
    `
  )) as TagQuery;
  return data.getTag;
}

export async function getPreviewPostBySlug(slug: string) {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: String) {
      post: getPostList(filter: {term: {slug: $slug}}, size: 1, onlyEnabled: false) {
        items {
          slug
        }
      }
    }`,
    {
      variables: {
        slug
      }
    }
  );
  return data;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      allPosts: getProjectList {
        items {
          slug
        }
      }
    }
  `);
  return data;
}

export async function getAllProjectsForHome(preview: boolean | null) {
  const data = await fetchAPI(
    `
    query AllProjects($onlyEnabled: Boolean) {
      allProjectsList: getProjectList(sort: { field: "date", order: "desc" }, size: 20, onlyEnabled: $onlyEnabled) {
        items {
          _id
          slug
          content
          title
          excerpt
          date
          githubUrl,
          homepageUrl
          image {
            path
          }
          tags {
            name
            colors {
              primary {
                hex
              }
              background {
                hex
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview
      }
    }
  );
  return data?.allProjects?.items;
}

export async function getAllTags(preview: boolean) {
  const data = await fetchAPI(`
  query AllTags($onlyEnabled: Boolean) {
    allTags: getTagList(onlyEnabled: $onlyEnabled) {
      items {
        _id
        _enabled
        _status
        searchSummary
      }
    }
  }
  `);
  console.debug(data);
  return data;
}

export async function getPostAndMorePosts(
  slug: string,
  preview: boolean | null
) {
  const data = await fetchAPI(
    `
  query PostBySlug($slug: String, $onlyEnabled: Boolean) {
    post: getPostList(filter: { term: {slug: $slug}}, ${
      preview ? '' : 'where: { _status: { eq: "enabled" } },'
    } size: 1, onlyEnabled: $onlyEnabled) {
      items {
        title
        slug
        content
        date
        coverImage {
          path
        }
        author {
          name
          picture {
            path
          }
        }
      }
    }
    morePosts: getPostList(
      filter: { bool: { must_not: { term: {slug: $slug}}}}, , ${
        preview ? '' : 'where: { _status: { eq: "enabled" } },'
      }
      sort: { field: "date", order: "desc" }, size: 2, onlyEnabled: $onlyEnabled) {
      items {
        title
        slug
        excerpt
        date
        coverImage {
          path
        }
        author {
          name
          picture {
            path
          }
        }
      }
    }
  }
  `,
    {
      variables: {
        slug,
        onlyEnabled: !preview
      }
    }
  );
  return data;
}
