import React, { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';

import wrapClassName from '../utils/wrapClassName';

type CardProps = {
  children: ReactNode;
  className?: string;
  link?: LinkProps;
};

function Card({ children, className, link, ...props }: CardProps) {
  const card = (
    <a {...props} className={wrapClassName('card', className)}>
      {children}
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
          transition: color 0.15s ease, border-color 0.4s ease, box-shadow 0.4s ease;
        }
      `}</style>
    </a>
  );
  return link ? <Link {...link}>{card}</Link> : card;
}

export default Card;
