import React from 'react';
import { motion } from 'framer-motion';

import Fade from './Fade';

const blobs = [
  {
    fill: 'url(#blob0_2_)',
    d:
      'M 357.453 -138.548 C 348.941 -105.86 321.019 -88.835 293.098 -93.261 C 265.006 -98.199 236.232 -115.223 229.934 -138.548 C 223.465 -161.703 251.216 -193.198 294.289 -197.966 C 337.363 -202.733 366.135 -171.067 357.453 -138.548 Z'
  },
  {
    fill: 'url(#blob1_2_)',
    d:
      'M 347.748 -143.825 C 340.258 -126.631 319.827 -109.434 302.12 -100.752 C 284.415 -91.898 263.984 -105.69 256.493 -126.631 C 249.003 -146.38 269.432 -161.361 302.12 -169.704 C 334.809 -178.046 355.239 -162.213 347.748 -143.825 Z'
  },
  {
    fill: 'url(#blob2_2_)',
    d:
      'M 275.392 -141.611 C 279.989 -153.7 291.395 -168.343 301.609 -169.534 C 311.655 -170.215 323.062 -155.061 327.828 -140.761 C 332.426 -126.46 320.678 -115.393 301.609 -116.585 C 282.542 -118.118 270.794 -129.524 275.392 -141.611 Z'
  },
  {
    fill: 'url(#blob3Grad)',
    d:
      'M 334.468 -142.293 C 330.894 -114.372 308.421 -95.985 294.97 -99.221 C 281.18 -102.284 273.518 -121.353 269.772 -141.611 C 266.539 -161.703 274.37 -180.26 294.97 -184.686 C 315.401 -189.453 337.873 -170.385 334.468 -142.293 Z'
  },
  {
    fill: 'url(#blob4_2_)',
    d:
      'M 343.151 -142.123 C 341.447 -128.162 326.468 -124.586 319.656 -126.29 C 312.847 -127.822 308.591 -131.398 306.718 -141.442 C 305.015 -151.486 310.633 -155.912 321.019 -158.127 C 331.234 -160.51 344.854 -156.254 343.151 -142.123 Z'
  }
];

function random(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function LavaBlobs(): JSX.Element {
  return (
    <>
      <Fade>
        <div className="blobs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 600 600"
          >
            <defs>
              <filter id="goo" color-interpolation-filters="sRGB">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="8"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9"
                  result="cm"
                />
                <feBlend />
              </filter>

              <radialGradient
                id="blob3Grad"
                cx="291.9382"
                cy="167.4587"
                r="41.0767"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="1.020408e-002" style={{ stopColor: '#FF9C12' }} />
                <stop offset="0.1922" style={{ stopColor: '#FA9712' }} />
                <stop offset="0.3992" style={{ stopColor: '#ED8A14' }} />
                <stop offset="0.6186" style={{ stopColor: '#D67316' }} />
                <stop offset="0.8449" style={{ stopColor: '#B65419' }} />
                <stop offset="1" style={{ stopColor: '#9C3A1C' }} />
              </radialGradient>
              <radialGradient
                id="botBlob"
                cx="284.5"
                cy="421.5"
                r="53.521"
                gradientTransform="matrix(-2.802637e-002 -0.9996 5.9976 -0.1682 -2235.533 776.7669)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="1.020408e-002" style={{ stopColor: '#FF9C12' }} />
                <stop offset="0.1922" style={{ stopColor: '#FA9712' }} />
                <stop offset="0.3992" style={{ stopColor: '#ED8A14' }} />
                <stop offset="0.6186" style={{ stopColor: '#D67316' }} />
                <stop offset="0.8449" style={{ stopColor: '#B65419' }} />
                <stop offset="1" style={{ stopColor: '#9C3A1C' }} />
              </radialGradient>
              <radialGradient
                id="blob2_2_"
                cx="294"
                cy="157"
                r="23"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="1.020408e-002" style={{ stopColor: '#FF9C12' }} />
                <stop offset="0.1922" style={{ stopColor: '#FA9712' }} />
                <stop offset="0.3992" style={{ stopColor: '#ED8A14' }} />
                <stop offset="0.6186" style={{ stopColor: '#D67316' }} />
                <stop offset="0.8449" style={{ stopColor: '#B65419' }} />
                <stop offset="1" style={{ stopColor: '#9C3A1C' }} />
              </radialGradient>
              <radialGradient
                id="blob1_2_"
                cx="297"
                cy="167.5"
                r="37.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="1.020408e-002" style={{ stopColor: '#FF9C12' }} />
                <stop offset="0.1922" style={{ stopColor: '#FA9712' }} />
                <stop offset="0.3992" style={{ stopColor: '#ED8A14' }} />
                <stop offset="0.6186" style={{ stopColor: '#D67316' }} />
                <stop offset="0.8449" style={{ stopColor: '#B65419' }} />
                <stop offset="1" style={{ stopColor: '#9C3A1C' }} />
              </radialGradient>
              <radialGradient
                id="blob0_2_"
                cx="292"
                cy="171.5"
                r="56.5354"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="1.020408e-002" style={{ stopColor: '#FF9C12' }} />
                <stop offset="0.1922" style={{ stopColor: '#FA9712' }} />
                <stop offset="0.3992" style={{ stopColor: '#ED8A14' }} />
                <stop offset="0.6186" style={{ stopColor: '#D67316' }} />
                <stop offset="0.8449" style={{ stopColor: '#B65419' }} />
                <stop offset="1" style={{ stopColor: '#9C3A1C' }} />
              </radialGradient>
              <radialGradient
                id="blob4_2_"
                cx="306.5"
                cy="155"
                r="14.109"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="1.020408e-002" style={{ stopColor: '#FF9C12' }} />
                <stop offset="0.1922" style={{ stopColor: '#FA9712' }} />
                <stop offset="0.3992" style={{ stopColor: '#ED8A14' }} />
                <stop offset="0.6186" style={{ stopColor: '#D67316' }} />
                <stop offset="0.8449" style={{ stopColor: '#B65419' }} />
                <stop offset="1" style={{ stopColor: '#9C3A1C' }} />
              </radialGradient>
            </defs>
            <g
              className="blobGroup"
              filter="url(#goo)"
              clip-path="url(#glassMask)"
              transform="matrix(1, 0, 0, 1, 6.000008, 198.444473)"
            >
              {blobs.map((blob, index) => (
                <motion.path
                  animate={{
                    y: '100%'
                  }}
                  initial={{
                    y: '20%'
                  }}
                  transition={{
                    duration: random(14, 50),
                    repeatDelay: random(1, 3),
                    ease: 'linear',
                    yoyo: Infinity
                  }}
                  key={blob.d}
                  d={blob.d}
                  fill={blob.fill}
                />
              ))}
              <motion.path
                fill="url(#botBlob)"
                d="M 574.661 381.2 C 606.469 384.6 599.92 388.6 548.466 391.6 C 498.414 394.7 402.99 396.7 294 400 C 185.01 403.3 89.586 400.8 39.534 397.6 C -11.92 394.2 -18.469 390 13.339 383.8 C 45.148 376.8 101.747 369.2 151.799 366.4 C 203.253 363.1 248.159 364.6 294 365 C 339.841 365.4 384.747 370.1 436.201 373.3 C 486.252 376.8 542.852 378.6 574.661 381.2 Z"
              />
            </g>
          </svg>
        </div>
      </Fade>
      <style jsx>{`
        .blobs {
          bottom: 0rem;
          padding: 0 0 2rem 0;
          //display: flex;
          //flex-wrap: wrap;
          //height: 100%;
          //justify-content: center;
          min-height: 100vh;
          position: absolute;
          width: 100vw;
          z-index: 0;
        }
      `}</style>
    </>
  );
}

export default LavaBlobs;
