import React, { ReactNode, useMemo } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

type ActiveLinkProps = LinkProps & {
  children: ReactNode;
  className: string;
};

function ActiveLink({ children, className, href, ...props }: ActiveLinkProps) {
  const router = useRouter();

  const isActiveLink = useMemo(() => router.pathname === href, [
    href,
    router.pathname,
  ]);

  return (
    <Link href={href} {...props}>
      <a
        className={`${className}${isActiveLink ? ` ${className}-active` : ''}`}
      >
        {children}
      </a>
    </Link>
  );
}

export default ActiveLink;
