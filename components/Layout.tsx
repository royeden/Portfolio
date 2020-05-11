import React, { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import ActiveLink from './ActiveLink';
import ExternalLink from './ExternalLink';
import HeadData from './HeadData';
import Wave from './Wave';
import LavaBlobs from './LavaBlobs';

const Blobs = dynamic(() => import('./Blobs'));

type LayoutType = {
  children: ReactNode;
  darkModeEnabled: boolean;
  toggleDarkModeEnabled: () => void;
};

function Layout({
  children,
  darkModeEnabled,
  toggleDarkModeEnabled
}: LayoutType): JSX.Element {
  return (
    <>
      <div className="page">
        {/* <LavaBlobs /> */}
        {/* <Blobs color={darkModeEnabled ? '#cccccc' : '#bbbbbb'} /> */}
        <Wave height="4rem" width="100%" type="top" />
        <nav className="page__nav">
          <ActiveLink className="page__nav__link" href="/">
            Home
          </ActiveLink>
          <ActiveLink className="page__nav__link" href="/projects">
            Projects
          </ActiveLink>
          <ActiveLink className="page__nav__link" href="/blog">
            Blogs
          </ActiveLink>
          <button onClick={toggleDarkModeEnabled}>
            Test {darkModeEnabled ? 'dark' : 'light'}
          </button>
        </nav>
        <HeadData />
        <main className="page__main">{children}</main>
        <Wave height="4rem" width="100%" type="bottom" />
        <footer className="page__footer">
          <p>
            Made with{' '}
            <span aria-label="love" role="img">
              ❤️
            </span>{' '}
            by{' '}
            <ExternalLink href="https://github.com/royeden">
              Roy Eden
            </ExternalLink>
            .
          </p>
        </footer>
      </div>
      <style jsx>{`
        .page__main {
          flex: 1;
          margin-bottom: 2rem;
          padding: 1rem 0.75rem;
          z-index: 1;
        }

        .page {
          align-items: center;
          display: flex;
          flex-direction: column;
          max-width: 100%;
          min-height: 100vh;
          overflow: hidden;
          padding-top: 4rem;
          position: relative;
          width: 100vw;
          z-index: 0;
        }

        .page__nav {
          align-items: center;
          background-color: var(--nav);
          box-shadow: 0 1px 2px 2px var(--nav-shadow);
          display: flex;
          height: 4rem;
          justify-content: center;
          padding: 0.75rem 2rem;
          position: fixed;
          top: 0;
          transition: background-color 0.4s ease, box-shadow 0.4s ease;
          width: 100%;
          z-index: 3;
        }

        .page__nav > :global(.page__nav__link) {
          border-bottom: 3px solid transparent;
          border-radius: 4px 4px 0px 0px;
          color: white;
          font-size: 1.25rem;
          font-weight: bold;
          margin: 0 2rem;
          padding: 0.5rem 2rem;
          text-decoration: none;
          transition: border 0.4s ease, font-weight 0.4s ease,
            text-decoration 0.4s ease, background-color 0.4s ease;
        }

        .page__nav > :global(.page__nav__link:active),
        .page__nav > :global(.page__nav__link:focus),
        .page__nav > :global(.page__nav__link:hover) {
          background-color: #ffffff44;
        }

        .page__nav > :global(.page__nav__link--active) {
          border-bottom-color: #fff;
        }

        .page__footer {
          align-items: center;
          background-color: var(--nav);
          color: #fff;
          display: flex;
          flex-direction: column;
          height: 6rem;
          justify-content: center;
          transition: background-color 0.4s ease;
          width: 100%;
          z-index: 2;
        }

        @media (max-width: 600px) {
          .page__nav > :global(.page__nav__link) {
            font-size: 1rem;
            margin: 0;
          }
        }
      `}</style>
    </>
  );
}

export default Layout;
