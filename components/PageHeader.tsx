import React, { ReactNode } from 'react';
import Head from 'next/head';

type PageHeaderProps = {
  page: string;
  title: ReactNode | string;
};

function PageHeader({ page, title }: PageHeaderProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Roy Eden - {page}</title>
      </Head>
      <h1 className="title">{title}</h1>
      <style jsx>{`
        .title {
          font-size: 4rem;
          line-height: 1.15;
          margin: 0;
          margin-bottom: 2rem;
          text-align: center;
        }
        @media (max-width: 600px) {
          .title {
            text-align: left;
            font-size: 3rem;
          }
        }
      `}</style>
    </>
  );
}

export default PageHeader;
