import React from 'react';

const paths = [
  'M124.5,-133.1C169.3,-110.8,219.1,-79.1,219.2,-43.8C219.4,-8.4,169.9,30.5,135.9,68.3C102,106.2,83.7,142.8,54,157.5C24.4,172.3,-16.5,165.1,-66.5,157.7C-116.5,150.4,-175.6,143,-182.9,113.7C-190.3,84.4,-145.9,33.2,-125.9,-12.2C-106,-57.6,-110.5,-97.4,-93.6,-124.6C-76.7,-151.7,-38.4,-166.4,0.7,-167.3C39.9,-168.2,79.7,-155.3,124.5,-133.1Z'
];

type BlobProps = {
  color: string;
  order: number;
};

function Blob({ color, order }: BlobProps): JSX.Element {
  return (
    <div className="blob">
      <svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(300,300)">
          <path
            d={paths[Math.floor(Math.random() * paths.length)]}
            fill={`${color}33`}
          />
        </g>
      </svg>
      <style jsx>{`
        @keyframes float {
          0% {
            transform: scale(1) translate(10px, -30px);
          }
          38% {
            transform: scale(0.8, 1) translate(80vw, 30%) rotate(160deg);
          }
          40% {
            transform: scale(0.8, 1) translate(80vw, , 30%) rotate(160deg);
          }
          78% {
            transform: scale(1.3) translate(0vw, 70%) rotate(-20deg);
          }
          80% {
            transform: scale(1.3) translate(0vw, 70%) rotate(-20deg);
          }
          100% {
            transform: scale(1) translate(10px, -30px);
          }
        }

        .blob {
          animation: float 60s ${order}s ease-in-out infinite;
          left: 0;
          position: absolute;
          top: 0;
          transform-origin: 50% 50%;
          width: 50vmax;
          z-index: 0;
        }
      `}</style>
    </div>
  );
}

export default Blob;
