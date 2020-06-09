import React, { ReactNode } from 'react';
import wrapClassName from '@utils/wrapClassName';

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
          color: var(--link);
          font-weight: bold;
          text-decoration: none;
          transition: background-color 0.4s ease, border-color 0.4s ease,
            box-shadow 0.4s ease, color 0.4s ease;
        }
        .link:focus,
        .link:hover {
          color: var(--link-hover);
        }
      `}</style>
    </a>
  );
}

export default ExternalLink;
