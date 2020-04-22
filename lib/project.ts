import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

type MatterResult = {
  github: string;
  homepage?: string;
  name: string;
  tags?: string;
};

export type InternalProject = {
  id: string;
} & MatterResult;

const projectsDirectory = path.join(process.cwd(), 'projects');

export function getAllProjects(): InternalProject[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(projectsDirectory);
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as MatterResult)
    };
  });
  // Sort posts by date
  return allPostsData;
}

export type InternalProjectRoute = {
  params: {
    id: string;
  };
};

export function getAllProjectIds(): InternalProjectRoute[] {
  const fileNames = fs.readdirSync(projectsDirectory);

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    };
  });
}

type MarkdownFile = {
  id: string;
  contentHtml: string;
};

export type InternalProjectData = MarkdownFile & MatterResult;

export async function getProjectData(id: string): Promise<InternalProjectData> {
  const fullPath = path.join(projectsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as MatterResult)
  };
}
