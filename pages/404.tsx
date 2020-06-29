export default function Custom404(): JSX.Element {
  return (
    <div className="container">
      <h1>404 - Page Not Found</h1>
      <style jsx>{`
        .container {
          align-items: center;
          display: flex;
          min-height: calc(100vh - 24rem);
          justify-content: center;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
