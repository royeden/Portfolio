import React, { ReactNode } from 'react';

import wrapClassName from '../utils/wrapClassName';

type ExternalLinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
};

function ExternalLink({
  children,
  className,
  href,
  ...props
}: ExternalLinkProps): JSX.Element {
  return (
    <a
      {...props}
      href={href}
      className={wrapClassName('link', className)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <style jsx>{`
        .link {
          color: #0070f3;
          font-weight: bold;
          text-decoration: none;
        }
      `}</style>
    </a>
  );
}

export default ExternalLink;
