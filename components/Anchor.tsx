import React, { ReactNode, forwardRef, HTMLProps, Ref } from 'react';
import wrapClassName from '@utils/wrapClassName';

type AnchorProps = HTMLProps<HTMLAnchorElement> & {
  children: ReactNode;
  className?: string;
};

function Anchor(
  { children, className, ...props }: AnchorProps,
  ref: Ref<HTMLAnchorElement>
): JSX.Element {
  return (
    <a ref={ref} {...props} className={wrapClassName('link', className)}>
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

export default forwardRef<HTMLAnchorElement, AnchorProps>(Anchor);
