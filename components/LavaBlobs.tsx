import React from 'react';
import { motion } from 'framer-motion';

import Fade from './Fade';

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
                ></feGaussianBlur>
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9"
                  result="cm"
                ></feColorMatrix>
                <feBlend></feBlend>
              </filter>
              <radialGradient
                id="blob3Grad"
                cx="291.9382"
                cy="167.4587"
                r="41.0767"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1, 0, 0, 1, -50.022641, -312.762573)"
              >
                <stop offset="0.0102" style={{ stopColor: '#FF9C12' }}></stop>
                <stop offset="0.1922" style={{ stopColor: '#FA9712' }}></stop>
                <stop offset="0.3992" style={{ stopColor: '#ED8A14' }}></stop>
                <stop offset="0.6186" style={{ stopColor: '#D67316' }}></stop>
                <stop offset="0.8449" style={{ stopColor: '#B65419' }}></stop>
                <stop offset="1" style={{ stopColor: '#9C3A1C' }}></stop>
              </radialGradient>
              <radialGradient
                id="botBlob"
                cx="284.5"
                cy="421.5"
                r="53.521"
                gradientTransform="matrix(-0.131098, -0.9996, 28.054829, -0.1682, -11538.335608, 776.766907)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0102" style={{ stopColor: '#FF9C12' }}></stop>
                <stop offset="0.1922" style={{ stopColor: '#FA9712' }}></stop>
                <stop offset="0.3992" style={{ stopColor: '#ED8A14' }}></stop>
                <stop offset="0.6186" style={{ stopColor: '#D67316' }}></stop>
                <stop offset="0.8449" style={{ stopColor: '#B65419' }}></stop>
                <stop offset="1" style={{ stopColor: '#9C3A1C' }}></stop>
              </radialGradient>
              <radialGradient
                id="blob2_2_"
                cx="294"
                cy="157"
                r="23"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1, 0, 0, 1, -50.022641, -312.762573)"
              >
                <stop offset="0.0102" style={{ stopColor: '#FF9C12' }}></stop>
                <stop offset="0.1922" style={{ stopColor: '#FA9712' }}></stop>
                <stop offset="0.3992" style={{ stopColor: '#ED8A14' }}></stop>
                <stop offset="0.6186" style={{ stopColor: '#D67316' }}></stop>
                <stop offset="0.8449" style={{ stopColor: '#B65419' }}></stop>
                <stop offset="1" style={{ stopColor: '#9C3A1C' }}></stop>
              </radialGradient>
              <radialGradient
                id="blob1_2_"
                cx="297"
                cy="167.5"
                r="37.2156"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1, 0, 0, 1, -50.022641, -312.762573)"
              >
                <stop offset="0.0102" style={{ stopColor: '#FF9C12' }}></stop>
                <stop offset="0.1922" style={{ stopColor: '#FA9712' }}></stop>
                <stop offset="0.3992" style={{ stopColor: '#ED8A14' }}></stop>
                <stop offset="0.6186" style={{ stopColor: '#D67316' }}></stop>
                <stop offset="0.8449" style={{ stopColor: '#B65419' }}></stop>
                <stop offset="1" style={{ stopColor: '#9C3A1C' }}></stop>
              </radialGradient>
              <radialGradient
                id="blob0_2_"
                cx="292"
                cy="171.5"
                r="56.5354"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1, 0, 0, 1, -50.022641, -312.762573)"
              >
                <stop offset="0.0102" style={{ stopColor: '#FF9C12' }}></stop>
                <stop offset="0.1922" style={{ stopColor: '#FA9712' }}></stop>
                <stop offset="0.3992" style={{ stopColor: '#ED8A14' }}></stop>
                <stop offset="0.6186" style={{ stopColor: '#D67316' }}></stop>
                <stop offset="0.8449" style={{ stopColor: '#B65419' }}></stop>
                <stop offset="1" style={{ stopColor: '#9C3A1C' }}></stop>
              </radialGradient>
              <radialGradient
                id="blob4_2_"
                cx="306.5"
                cy="155"
                r="14.109"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1, 0, 0, 1, -50.022641, -312.762573)"
              >
                <stop offset="0.0102" style={{ stopColor: '#FF9C12' }}></stop>
                <stop offset="0.1922" style={{ stopColor: '#FA9712' }}></stop>
                <stop offset="0.3992" style={{ stopColor: '#ED8A14' }}></stop>
                <stop offset="0.6186" style={{ stopColor: '#D67316' }}></stop>
                <stop offset="0.8449" style={{ stopColor: '#B65419' }}></stop>
                <stop offset="1" style={{ stopColor: '#9C3A1C' }}></stop>
              </radialGradient>
              <radialGradient
                id="gradient-1"
                cx="292"
                cy="171.5"
                r="56.5354"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1, 0, 0, 1, -150.021985, -312.762512)"
              >
                <stop offset="0.0102" style={{ stopColor: '#FF9C12' }}></stop>
                <stop offset="0.1922" style={{ stopColor: '#FA9712' }}></stop>
                <stop offset="0.3992" style={{ stopColor: '#ED8A14' }}></stop>
                <stop offset="0.6186" style={{ stopColor: '#D67316' }}></stop>
                <stop offset="0.8449" style={{ stopColor: '#B65419' }}></stop>
                <stop offset="1" style={{ stopColor: '#9C3A1C' }}></stop>
              </radialGradient>
              <radialGradient
                id="gradient-2"
                cx="297"
                cy="167.5"
                r="37.2156"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1, 0, 0, 1, -150.021985, -312.762512)"
              >
                <stop offset="0.0102" style={{ stopColor: '#FF9C12' }}></stop>
                <stop offset="0.1922" style={{ stopColor: '#FA9712' }}></stop>
                <stop offset="0.3992" style={{ stopColor: '#ED8A14' }}></stop>
                <stop offset="0.6186" style={{ stopColor: '#D67316' }}></stop>
                <stop offset="0.8449" style={{ stopColor: '#B65419' }}></stop>
                <stop offset="1" style={{ stopColor: '#9C3A1C' }}></stop>
              </radialGradient>
              <radialGradient
                id="gradient-3"
                cx="294"
                cy="157"
                r="23"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1, 0, 0, 1, -150.021985, -312.762512)"
              >
                <stop offset="0.0102" style={{ stopColor: '#FF9C12' }}></stop>
                <stop offset="0.1922" style={{ stopColor: '#FA9712' }}></stop>
                <stop offset="0.3992" style={{ stopColor: '#ED8A14' }}></stop>
                <stop offset="0.6186" style={{ stopColor: '#D67316' }}></stop>
                <stop offset="0.8449" style={{ stopColor: '#B65419' }}></stop>
                <stop offset="1" style={{ stopColor: '#9C3A1C' }}></stop>
              </radialGradient>
              <radialGradient
                id="gradient-4"
                cx="291.9382"
                cy="167.4587"
                r="41.0767"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1, 0, 0, 1, -150.021985, -312.762512)"
              >
                <stop offset="0.0102" style={{ stopColor: '#FF9C12' }}></stop>
                <stop offset="0.1922" style={{ stopColor: '#FA9712' }}></stop>
                <stop offset="0.3992" style={{ stopColor: '#ED8A14' }}></stop>
                <stop offset="0.6186" style={{ stopColor: '#D67316' }}></stop>
                <stop offset="0.8449" style={{ stopColor: '#B65419' }}></stop>
                <stop offset="1" style={{ stopColor: '#9C3A1C' }}></stop>
              </radialGradient>
              <radialGradient
                id="gradient-5"
                cx="306.5"
                cy="155"
                r="14.109"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1, 0, 0, 1, -150.021985, -312.762512)"
              >
                <stop offset="0.0102" style={{ stopColor: '#FF9C12' }}></stop>
                <stop offset="0.1922" style={{ stopColor: '#FA9712' }}></stop>
                <stop offset="0.3992" style={{ stopColor: '#ED8A14' }}></stop>
                <stop offset="0.6186" style={{ stopColor: '#D67316' }}></stop>
                <stop offset="0.8449" style={{ stopColor: '#B65419' }}></stop>
                <stop offset="1" style={{ stopColor: '#9C3A1C' }}></stop>
              </radialGradient>
              <radialGradient
                id="gradient-6"
                cx="292"
                cy="171.5"
                r="56.5354"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1, 0, 0, 1, 59.441513, -312.762665)"
              >
                <stop offset="0.0102" style={{ stopColor: '#FF9C12' }}></stop>
                <stop offset="0.1922" style={{ stopColor: '#FA9712' }}></stop>
                <stop offset="0.3992" style={{ stopColor: '#ED8A14' }}></stop>
                <stop offset="0.6186" style={{ stopColor: '#D67316' }}></stop>
                <stop offset="0.8449" style={{ stopColor: '#B65419' }}></stop>
                <stop offset="1" style={{ stopColor: '#9C3A1C' }}></stop>
              </radialGradient>
              <radialGradient
                id="gradient-7"
                cx="297"
                cy="167.5"
                r="37.2156"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1, 0, 0, 1, 59.441513, -312.762665)"
              >
                <stop offset="0.0102" style={{ stopColor: '#FF9C12' }}></stop>
                <stop offset="0.1922" style={{ stopColor: '#FA9712' }}></stop>
                <stop offset="0.3992" style={{ stopColor: '#ED8A14' }}></stop>
                <stop offset="0.6186" style={{ stopColor: '#D67316' }}></stop>
                <stop offset="0.8449" style={{ stopColor: '#B65419' }}></stop>
                <stop offset="1" style={{ stopColor: '#9C3A1C' }}></stop>
              </radialGradient>
              <radialGradient
                id="gradient-8"
                cx="294"
                cy="157"
                r="23"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1, 0, 0, 1, 59.441513, -312.762665)"
              >
                <stop offset="0.0102" style={{ stopColor: '#FF9C12' }}></stop>
                <stop offset="0.1922" style={{ stopColor: '#FA9712' }}></stop>
                <stop offset="0.3992" style={{ stopColor: '#ED8A14' }}></stop>
                <stop offset="0.6186" style={{ stopColor: '#D67316' }}></stop>
                <stop offset="0.8449" style={{ stopColor: '#B65419' }}></stop>
                <stop offset="1" style={{ stopColor: '#9C3A1C' }}></stop>
              </radialGradient>
              <radialGradient
                id="gradient-9"
                cx="291.9382"
                cy="167.4587"
                r="41.0767"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1, 0, 0, 1, 59.441513, -312.762665)"
              >
                <stop offset="0.0102" style={{ stopColor: '#FF9C12' }}></stop>
                <stop offset="0.1922" style={{ stopColor: '#FA9712' }}></stop>
                <stop offset="0.3992" style={{ stopColor: '#ED8A14' }}></stop>
                <stop offset="0.6186" style={{ stopColor: '#D67316' }}></stop>
                <stop offset="0.8449" style={{ stopColor: '#B65419' }}></stop>
                <stop offset="1" style={{ stopColor: '#9C3A1C' }}></stop>
              </radialGradient>
              <radialGradient
                id="gradient-10"
                cx="306.5"
                cy="155"
                r="14.109"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1, 0, 0, 1, 59.441513, -312.762665)"
              >
                <stop offset="0.0102" style={{ stopColor: '#FF9C12' }}></stop>
                <stop offset="0.1922" style={{ stopColor: '#FA9712' }}></stop>
                <stop offset="0.3992" style={{ stopColor: '#ED8A14' }}></stop>
                <stop offset="0.6186" style={{ stopColor: '#D67316' }}></stop>
                <stop offset="0.8449" style={{ stopColor: '#B65419' }}></stop>
                <stop offset="1" style={{ stopColor: '#9C3A1C' }}></stop>
              </radialGradient>
              <radialGradient
                id="gradient-11"
                cx="292"
                cy="171.5"
                r="56.5354"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1, 0, 0, 1, 160.162235, -312.762268)"
              >
                <stop offset="0.0102" style={{ stopColor: '#FF9C12' }}></stop>
                <stop offset="0.1922" style={{ stopColor: '#FA9712' }}></stop>
                <stop offset="0.3992" style={{ stopColor: '#ED8A14' }}></stop>
                <stop offset="0.6186" style={{ stopColor: '#D67316' }}></stop>
                <stop offset="0.8449" style={{ stopColor: '#B65419' }}></stop>
                <stop offset="1" style={{ stopColor: '#9C3A1C' }}></stop>
              </radialGradient>
              <radialGradient
                id="gradient-12"
                cx="297"
                cy="167.5"
                r="37.2156"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1, 0, 0, 1, 160.162235, -312.762268)"
              >
                <stop offset="0.0102" style={{ stopColor: '#FF9C12' }}></stop>
                <stop offset="0.1922" style={{ stopColor: '#FA9712' }}></stop>
                <stop offset="0.3992" style={{ stopColor: '#ED8A14' }}></stop>
                <stop offset="0.6186" style={{ stopColor: '#D67316' }}></stop>
                <stop offset="0.8449" style={{ stopColor: '#B65419' }}></stop>
                <stop offset="1" style={{ stopColor: '#9C3A1C' }}></stop>
              </radialGradient>
              <radialGradient
                id="gradient-13"
                cx="294"
                cy="157"
                r="23"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1, 0, 0, 1, 160.162235, -312.762268)"
              >
                <stop offset="0.0102" style={{ stopColor: '#FF9C12' }}></stop>
                <stop offset="0.1922" style={{ stopColor: '#FA9712' }}></stop>
                <stop offset="0.3992" style={{ stopColor: '#ED8A14' }}></stop>
                <stop offset="0.6186" style={{ stopColor: '#D67316' }}></stop>
                <stop offset="0.8449" style={{ stopColor: '#B65419' }}></stop>
                <stop offset="1" style={{ stopColor: '#9C3A1C' }}></stop>
              </radialGradient>
              <radialGradient
                id="gradient-14"
                cx="291.9382"
                cy="167.4587"
                r="41.0767"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1, 0, 0, 1, 160.162235, -312.762268)"
              >
                <stop offset="0.0102" style={{ stopColor: '#FF9C12' }}></stop>
                <stop offset="0.1922" style={{ stopColor: '#FA9712' }}></stop>
                <stop offset="0.3992" style={{ stopColor: '#ED8A14' }}></stop>
                <stop offset="0.6186" style={{ stopColor: '#D67316' }}></stop>
                <stop offset="0.8449" style={{ stopColor: '#B65419' }}></stop>
                <stop offset="1" style={{ stopColor: '#9C3A1C' }}></stop>
              </radialGradient>
              <radialGradient
                id="gradient-15"
                cx="306.5"
                cy="155"
                r="14.109"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1, 0, 0, 1, 160.162235, -312.762268)"
              >
                <stop offset="0.0102" style={{ stopColor: '#FF9C12' }}></stop>
                <stop offset="0.1922" style={{ stopColor: '#FA9712' }}></stop>
                <stop offset="0.3992" style={{ stopColor: '#ED8A14' }}></stop>
                <stop offset="0.6186" style={{ stopColor: '#D67316' }}></stop>
                <stop offset="0.8449" style={{ stopColor: '#B65419' }}></stop>
                <stop offset="1" style={{ stopColor: '#9C3A1C' }}></stop>
              </radialGradient>
            </defs>

            <g
              className="blobGroup"
              filter="url(#goo)"
              clip-path="url(#glassMask)"
              transform="matrix(1, 0, 0, 1, 6.000008, 198.444458)"
            >
              <motion.path
                animate={{
                  y: '100%'
                }}
                transition={{
                  duration: 4
                }}
                className="blob0 blob"
                fill="url(#blob0_2_)"
                d="M 276.178 -163.264 C 271.178 -144.064 254.778 -134.064 238.378 -136.664 C 221.878 -139.564 204.978 -149.564 201.278 -163.264 C 197.478 -176.864 213.778 -195.364 239.078 -198.164 C 264.378 -200.964 281.278 -182.364 276.178 -163.264 Z"
              ></motion.path>
              <motion.path
                animate={{
                  y: '100%'
                }}
                transition={{
                  duration: 4
                }}
                className="blob1 blob"
                fill="url(#blob1_2_)"
                d="M 270.478 -166.364 C 266.078 -156.264 254.078 -146.164 243.678 -141.064 C 233.278 -135.864 221.278 -143.964 216.878 -156.264 C 212.478 -167.864 224.478 -176.664 243.678 -181.564 C 262.878 -186.464 274.878 -177.164 270.478 -166.364 Z"
              ></motion.path>
              <motion.path
                animate={{
                  y: '100%'
                }}
                transition={{
                  duration: 4
                }}
                className="blob2 blob"
                fill="url(#blob2_2_)"
                d="M 227.978 -165.064 C 230.678 -172.164 237.378 -180.764 243.378 -181.464 C 249.278 -181.864 255.978 -172.964 258.778 -164.564 C 261.478 -156.164 254.578 -149.664 243.378 -150.364 C 232.178 -151.264 225.278 -157.964 227.978 -165.064 Z"
              ></motion.path>
              <motion.path
                animate={{
                  y: '100%'
                }}
                transition={{
                  duration: 4
                }}
                className="blob3 blob"
                fill="url(#blob3Grad)"
                d="M 262.678 -165.464 C 260.578 -149.064 247.378 -138.264 239.478 -140.164 C 231.378 -141.964 226.878 -153.164 224.678 -165.064 C 222.778 -176.864 227.378 -187.764 239.478 -190.364 C 251.478 -193.164 264.678 -181.964 262.678 -165.464 Z"
              ></motion.path>
              <motion.path
                animate={{
                  y: '100%'
                }}
                transition={{
                  duration: 4
                }}
                className="blob4 blob"
                fill="url(#blob4_2_)"
                d="M 267.778 -165.364 C 266.778 -157.164 257.978 -155.064 253.978 -156.064 C 249.978 -156.964 247.478 -159.064 246.378 -164.964 C 245.378 -170.864 248.678 -173.464 254.778 -174.764 C 260.778 -176.164 268.778 -173.664 267.778 -165.364 Z"
              ></motion.path>
              <motion.path
                animate={{
                  y: '100%'
                }}
                transition={{
                  duration: 4
                }}
                className="blob0 blob"
                fill="url(#gradient-1)"
                d="M 176.178 -163.264 C 171.178 -144.064 154.778 -134.064 138.378 -136.664 C 121.878 -139.564 104.978 -149.564 101.278 -163.264 C 97.478 -176.864 113.778 -195.364 139.078 -198.164 C 164.378 -200.964 181.278 -182.364 176.178 -163.264 Z"
              ></motion.path>
              <motion.path
                animate={{
                  y: '100%'
                }}
                transition={{
                  duration: 4
                }}
                className="blob1 blob"
                fill="url(#gradient-2)"
                d="M 170.478 -166.364 C 166.078 -156.264 154.078 -146.164 143.678 -141.064 C 133.278 -135.864 121.278 -143.964 116.878 -156.264 C 112.478 -167.864 124.478 -176.664 143.678 -181.564 C 162.878 -186.464 174.878 -177.164 170.478 -166.364 Z"
              ></motion.path>
              <motion.path
                animate={{
                  y: '100%'
                }}
                transition={{
                  duration: 4
                }}
                className="blob2 blob"
                fill="url(#gradient-3)"
                d="M 127.978 -165.064 C 130.678 -172.164 137.378 -180.764 143.378 -181.464 C 149.278 -181.864 155.978 -172.964 158.778 -164.564 C 161.478 -156.164 154.578 -149.664 143.378 -150.364 C 132.178 -151.264 125.278 -157.964 127.978 -165.064 Z"
              ></motion.path>
              <motion.path
                animate={{
                  y: '100%'
                }}
                transition={{
                  duration: 4
                }}
                className="blob3 blob"
                fill="url(#gradient-4)"
                d="M 162.678 -165.464 C 160.578 -149.064 147.378 -138.264 139.478 -140.164 C 131.378 -141.964 126.878 -153.164 124.678 -165.064 C 122.778 -176.864 127.378 -187.764 139.478 -190.364 C 151.478 -193.164 164.678 -181.964 162.678 -165.464 Z"
              ></motion.path>
              <motion.path
                animate={{
                  y: '100%'
                }}
                transition={{
                  duration: 4
                }}
                className="blob4 blob"
                fill="url(#gradient-5)"
                d="M 167.778 -165.364 C 166.778 -157.164 157.978 -155.064 153.978 -156.064 C 149.978 -156.964 147.478 -159.064 146.378 -164.964 C 145.378 -170.864 148.678 -173.464 154.778 -174.764 C 160.778 -176.164 168.778 -173.664 167.778 -165.364 Z"
              ></motion.path>
              <motion.path
                animate={{
                  y: '100%'
                }}
                transition={{
                  duration: 4
                }}
                className="blob0 blob"
                fill="url(#gradient-6)"
                d="M 385.641 -163.264 C 380.641 -144.064 364.241 -134.064 347.841 -136.664 C 331.341 -139.564 314.441 -149.564 310.741 -163.264 C 306.941 -176.864 323.241 -195.364 348.541 -198.164 C 373.841 -200.964 390.741 -182.364 385.641 -163.264 Z"
              ></motion.path>
              <motion.path
                animate={{
                  y: '100%'
                }}
                transition={{
                  duration: 4
                }}
                className="blob1 blob"
                fill="url(#gradient-7)"
                d="M 379.941 -166.364 C 375.541 -156.264 363.541 -146.164 353.141 -141.064 C 342.741 -135.864 330.741 -143.964 326.341 -156.264 C 321.941 -167.864 333.941 -176.664 353.141 -181.564 C 372.341 -186.464 384.341 -177.164 379.941 -166.364 Z"
              ></motion.path>
              <motion.path
                animate={{
                  y: '100%'
                }}
                transition={{
                  duration: 4
                }}
                className="blob2 blob"
                fill="url(#gradient-8)"
                d="M 337.441 -165.064 C 340.141 -172.164 346.841 -180.764 352.841 -181.464 C 358.741 -181.864 365.441 -172.964 368.241 -164.564 C 370.941 -156.164 364.041 -149.664 352.841 -150.364 C 341.641 -151.264 334.741 -157.964 337.441 -165.064 Z"
              ></motion.path>
              <motion.path
                animate={{
                  y: '100%'
                }}
                transition={{
                  duration: 4
                }}
                className="blob3 blob"
                fill="url(#gradient-9)"
                d="M 372.141 -165.464 C 370.041 -149.064 356.841 -138.264 348.941 -140.164 C 340.841 -141.964 336.341 -153.164 334.141 -165.064 C 332.241 -176.864 336.841 -187.764 348.941 -190.364 C 360.941 -193.164 374.141 -181.964 372.141 -165.464 Z"
              ></motion.path>
              <motion.path
                animate={{
                  y: '100%'
                }}
                transition={{
                  duration: 4
                }}
                className="blob4 blob"
                fill="url(#gradient-10)"
                d="M 377.241 -165.364 C 376.241 -157.164 367.441 -155.064 363.441 -156.064 C 359.441 -156.964 356.941 -159.064 355.841 -164.964 C 354.841 -170.864 358.141 -173.464 364.241 -174.764 C 370.241 -176.164 378.241 -173.664 377.241 -165.364 Z"
              ></motion.path>
              <motion.path
                animate={{
                  y: '100%'
                }}
                transition={{
                  duration: 4
                }}
                className="blob0 blob"
                fill="url(#gradient-11)"
                d="M 486.362 -163.264 C 481.362 -144.064 464.962 -134.064 448.562 -136.664 C 432.062 -139.564 415.162 -149.564 411.462 -163.264 C 407.662 -176.864 423.962 -195.364 449.262 -198.164 C 474.562 -200.964 491.462 -182.364 486.362 -163.264 Z"
              ></motion.path>
              <motion.path
                animate={{
                  y: '100%'
                }}
                transition={{
                  duration: 4
                }}
                className="blob1 blob"
                fill="url(#gradient-12)"
                d="M 480.662 -166.364 C 476.262 -156.264 464.262 -146.164 453.862 -141.064 C 443.462 -135.864 431.462 -143.964 427.062 -156.264 C 422.662 -167.864 434.662 -176.664 453.862 -181.564 C 473.062 -186.464 485.062 -177.164 480.662 -166.364 Z"
              ></motion.path>
              <motion.path
                animate={{
                  y: '100%'
                }}
                transition={{
                  duration: 4
                }}
                className="blob2 blob"
                fill="url(#gradient-13)"
                d="M 438.162 -165.064 C 440.862 -172.164 447.562 -180.764 453.562 -181.464 C 459.462 -181.864 466.162 -172.964 468.962 -164.564 C 471.662 -156.164 464.762 -149.664 453.562 -150.364 C 442.362 -151.264 435.462 -157.964 438.162 -165.064 Z"
              ></motion.path>
              <motion.path
                animate={{
                  y: '100%'
                }}
                transition={{
                  duration: 4
                }}
                className="blob3 blob"
                fill="url(#gradient-14)"
                d="M 472.862 -165.464 C 470.762 -149.064 457.562 -138.264 449.662 -140.164 C 441.562 -141.964 437.062 -153.164 434.862 -165.064 C 432.962 -176.864 437.562 -187.764 449.662 -190.364 C 461.662 -193.164 474.862 -181.964 472.862 -165.464 Z"
              ></motion.path>
              <motion.path
                animate={{
                  y: '100%'
                }}
                transition={{
                  duration: 4
                }}
                className="blob4 blob"
                fill="url(#gradient-15)"
                d="M 477.962 -165.364 C 476.962 -157.164 468.162 -155.064 464.162 -156.064 C 460.162 -156.964 457.662 -159.064 456.562 -164.964 C 455.562 -170.864 458.862 -173.464 464.962 -174.764 C 470.962 -176.164 478.962 -173.664 477.962 -165.364 Z"
              ></motion.path>
              <motion.path
                className="botBlob"
                fill="url(#botBlob)"
                d="M 574.66 381.2 C 606.468 384.6 599.92 388.6 548.466 391.6 C 498.414 394.7 402.99 396.7 294 400 C 185.01 403.3 89.586 400.8 39.535 397.6 C -11.92 394.2 -18.469 390 13.34 383.8 C 45.148 376.8 101.748 369.2 151.799 366.4 C 203.253 363.1 248.159 364.6 294 365 C 339.841 365.4 384.747 370.1 436.202 373.3 C 486.252 376.8 542.852 378.6 574.66 381.2 Z"
              ></motion.path>
            </g>
          </svg>
        </div>
      </Fade>
      <style jsx>{`
        .blobs {
          bottom: 0rem;
          padding: 0 0 4.5rem 0;
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
