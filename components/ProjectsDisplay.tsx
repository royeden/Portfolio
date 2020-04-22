import React from 'react';
import Project, { ProjectProps } from './Project';
import Grid from './Grid';
import { isLoading } from './Loading';

type ProjectsDisplayProps = {
  current: ProjectProps;
  projects: ProjectProps[];
};

function ProjectsDisplay({
  current,
  projects
}: ProjectsDisplayProps): JSX.Element {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>I'm currently working on this:</h1>
      <Project {...current} />
      <h1>Other stuff that I've made:</h1>
      <Grid>
        {projects.map((project, index) =>
          isLoading(project) ? (
            <Project key={`${index}`} loading />
          ) : (
            <Project key={project.id} {...project} />
          )
        )}
      </Grid>
    </div>
  );
}

export default ProjectsDisplay;
