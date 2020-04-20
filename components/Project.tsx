import React from 'react';

import Card from './Card';

export type ProjectProps = {
  description: string;
  id: number;
  title: string;
  html_url: string;
};

function Project({
  description,
  id,
  title,
  html_url
}: ProjectProps): JSX.Element {
  return (
    <Card
      className="project"
      link={{
        href: `/projects/[name]`,
        as: `/projects/${title}`
      }}
    >
      <h1 className="title">{title}</h1>
      <span>{description}</span>
      <style jsx>{`
        :global(.card.project):hover,
        :global(.card.project):focus {
          border-color: black;
          box-shadow: 0 2px 2px #00000033;
          word-break: break-all;
        }

        h1,
        span {
          word-break: break-word;
          overflow: hidden;
        }
      `}</style>
    </Card>
  );
}

export default Project;
