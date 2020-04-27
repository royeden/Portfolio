import React, { ReactNode } from 'react';
import Head from 'next/head';
import ActiveLink from './ActiveLink';
import ExternalLink from './ExternalLink';
import Wave from './Wave';

type LayoutType = {
  children: ReactNode;
  darkModeEnabled: boolean;
  toggleDarkModeEnabled: () => void;
};

function Layout({ children }: LayoutType): JSX.Element {
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
        </nav>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff"></meta>
          <link rel="icon" href="/favicon.ico" />
        </Head>
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
