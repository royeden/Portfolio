import React, { ReactNode, useMemo } from 'react';
import Link, { LinkProps } from 'next/link';

import ExternalLink from './ExternalLink';
import Loading, { LoadingProps, isLoading } from './Loading';
import wrapClassName from '../utils/wrapClassName';

type CardBodyProps = {
  children: ReactNode;
  className?: string;
  link?: LinkProps;
  href?: string;
};

function CardBody({
  children,
  className,
  href,
  link,
  ...props
}: CardBodyProps): JSX.Element {
  const cardProps = useMemo(
    () => ({
      ...props,
      className: wrapClassName('card', className)
    }),
    [className, props]
  );

  return (
    <>
      {href ? (
        <ExternalLink {...cardProps} href={href}>
          {children}
        </ExternalLink>
      ) : link ? (
        <Link {...link}>
          <a {...cardProps}>{children}</a>
        </Link>
      ) : (
        <div {...cardProps}>{children}</div>
      )}
      <style jsx>{`
        .card,
        :global(.link__card) {
          background-color: var(--card-background);
          border: 2px solid var(--card-border);
          border-radius: 10px;
          box-shadow: 0 1px 1px #00000033;
          color: var(--color);
          display: flex;
          flex-direction: column;
          flex-basis: 45%;
          margin: 1rem;
          max-height: 20rem;
          overflow: hidden;
          padding: 1.5rem;
          text-align: left;
          text-decoration: none;
          transition: background-color 0.4s ease, border-color 0.4s ease,
            box-shadow 0.4s ease, color 0.15s ease;
        }
        .card:focus,
        :global(.link__card):focus,
        .card:hover,
        :global(.link__card):hover {
          ${href || link ? 'border-color: var(--link)' : ''};
        }
        .card:focus,
        :global(.link__card):focus {
          ${href || link ? 'background-color: var(--card-focus)' : ''};
        }
        .card:hover,
        :global(.link__card):hover {
          ${href || link ? 'background-color: var(--card-hover)' : ''};
        }
      `}</style>
    </>
  );
}

type CardProps = LoadingProps | CardBodyProps;

function Card(props: CardProps): JSX.Element {
  return isLoading(props) ? (
    <CardBody className="loading">
      <Loading />
      <style jsx>
        {`
          :global(.card__loading) {
            align-items: center;
          }
        `}
      </style>
    </CardBody>
  ) : (
    <CardBody {...props} />
  );
}

export default Card;
