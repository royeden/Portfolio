import React, { ReactNode, useMemo } from 'react';
import Link, { LinkProps } from 'next/link';

import wrapClassName from '../utils/wrapClassName';
import ExternalLink from './ExternalLink';
import Loading, { LoadingProps, isLoading } from './Loading';

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
        .card {
          border: 1px solid #eaeaea;
          border-radius: 10px;
          box-shadow: 0 1px 1px #00000033;
          color: inherit;
          display: flex;
          flex-direction: column;
          flex-basis: 45%;
          margin: 1rem;
          max-height: 20rem;
          overflow: hidden;
          padding: 1.5rem;
          text-align: left;
          text-decoration: none;
          transition: color 0.15s ease, border-color 0.4s ease,
            box-shadow 0.4s ease;
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
          :global(.card.loading) {
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
