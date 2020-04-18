import Link from 'next/link';

import Layout from '../components/Layout';
import Card from '../components/Card';
import Grid from '../components/Grid';
import ProjectsDisplay from '../components/ProjectsDisplay';

const mockProject = () => {
  const id = `${Math.round(Math.random() * 1000 + Date.now())}`;
  return {
  id,
  description: "string",
  image: "string",
  subtitle: "string",
  title: `Mock ${id}`,
  url: "string",
}};

const PROJECTS = [...Array(5)].map(mockProject);

export default function Home() {
  const [current, ...projects] = PROJECTS;
  return (
    <Layout page="Home" title="Welcome to my portfolio!">
      {/* TODO add brief BIO, expand in about */}
      <ProjectsDisplay current={current} projects={projects} />
    </Layout>
  );
}
