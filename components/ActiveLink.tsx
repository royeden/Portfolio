import { ReactNode, useMemo } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

type ActiveLinkProps = LinkProps & {
  children: ReactNode;
  className: string;
};

export function ActiveLink({
  children,
  className,
  href,
  ...props
}: ActiveLinkProps): JSX.Element {
  const router = useRouter();

  const isActiveLink = useMemo(() => router.pathname === href, [
    href,
    router.pathname
  ]);

  return (
    <Link href={href} {...props}>
      <a
        className={`${className}${isActiveLink ? ` ${className}--active` : ''}`}
        href={`${href}`}
      >
        {children}
      </a>
    </Link>
  );
}
