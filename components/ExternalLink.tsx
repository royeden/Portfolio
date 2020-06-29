import React, { ReactNode } from 'react';
import wrapClassName from '@utils/wrapClassName';

import Anchor from './Anchor';

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
    <Anchor
      {...props}
      href={href}
      className={wrapClassName('link', className)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Anchor>
  );
}

export default ExternalLink;
