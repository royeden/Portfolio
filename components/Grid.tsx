import { ReactNode } from 'react';

import wrapClassName from '../utils/wrapClassName';

type GridProps = {
  children: ReactNode;
  className?: string;
  width?: number;
};

export function Grid({
  children,
  className,
  width = 800
}: GridProps): JSX.Element {
  return (
    <>
      <div
        style={{ maxWidth: width }}
        className={wrapClassName('grid', className)}
      >
        {children}
      </div>
      <style jsx>{`
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 3rem;
        }

        @media (max-width: 600px) {
          .grid {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}
