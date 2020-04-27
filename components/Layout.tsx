import React, { ReactNode } from 'react';

import ActiveLink from './ActiveLink';
import ExternalLink from './ExternalLink';
import HeadData from './HeadData';
import Wave from './Wave';

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
        @keyframes appear {
          from {
            opacity: 0;
            transform: translateY(5%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .page__main {
          animation: appear 0.4s ease;
          flex: 1;
          margin-bottom: 2rem;
          padding: 1rem 0.75rem;
        }

        .page {
          align-items: center;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          padding-top: 4rem;
          max-width: 100%;
          width: 100vw;
        }

        .page__nav {
          align-items: center;
          background-color: #000000;
          box-shadow: 0 1px 2px 2px #00000044;
          display: flex;
          height: 4rem;
          justify-content: center;
          padding: 0.75rem 2rem;
          position: fixed;
          top: 0;
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
          background-color: #000000;
          color: #fff;
          display: flex;
          flex-direction: column;
          height: 100px;
          justify-content: center;
          width: 100%;
        }

        @media (max-width: 600px) {
          .page__nav > :global(.page__nav__link) {
            font-size: 1rem;
            margin: 0;
          }

          .page__main__title {
            text-align: left;
            font-size: 3rem;
          }
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}

export default Layout;
