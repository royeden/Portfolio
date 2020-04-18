import React from 'react';

import Card from './Card';

export type ProjectProps = {
  description: string;
  id: string;
  image: string;
  subtitle?: string;
  title: string;
  url: string;
};

function Project({
  description,
  id,
  image,
  subtitle,
  title,
  url,
}: ProjectProps) {
  return (
    <Card
      className="project"
      link={{
        href: `/projects/[name]`,
        as: `/projects/${title}`,
      }}
    >
      <h1 className="tilte">{title}</h1>
      {subtitle && <h2 className="subtilte">{subtitle}</h2>}
      <p>{description}</p>
      <style jsx>{`
        :global(.card.project):hover,
        :global(.card.project):focus {
          border-color: black;
        }
      `}</style>
    </Card>
  );
}

export default Project;
