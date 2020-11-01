import { Card } from './Card';
import { LoadingProps, isLoading } from './Loading';

export type ProjectProps =
  | LoadingProps
  | {
      description: string;
      id: number;
      title: string;
      html_url: string;
    };

export function Project(props: ProjectProps): JSX.Element {
  return isLoading(props) ? (
    <Card {...props} />
  ) : (
    <Card
      className="project"
      link={{
        href: `/projects/[id]`,
        as: `/projects/${props.title}`
      }}
    >
      <h1 className="title">{props.title}</h1>
      <span>{props.description}</span>
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
