import React from 'react';

type WaveProps = {
  color?: string;
  height: string | number;
  type: 'top' | 'bottom';
  width: string | number;
};

function Wave({
  color = '#000000',
  height,
  type,
  width
}: WaveProps): JSX.Element {
  return (
    <svg
      height={height}
      preserveAspectRatio="none"
      width={width}
      viewBox="0 0 1440 320"
      xmlns="http://www.w3.org/2000/svg"
      style={{ zIndex: 2 }}
    >
      <path
        fill={color}
        fillOpacity="0.7"
        transform={`translate(0 ${
          type === 'bottom' ? -20 : type === 'top' ? 20 : 0
        }) scale (-1, 1)`}
        transform-origin="center"
        d={
          type === 'bottom'
            ? 'M0,192L40,213.3C80,235,160,277,240,250.7C320,224,400,128,480,117.3C560,107,640,181,720,218.7C800,256,880,256,960,224C1040,192,1120,128,1200,96C1280,64,1360,64,1400,64L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'
            : type === 'top'
            ? 'M0,128L30,149.3C60,171,120,213,180,234.7C240,256,300,256,360,224C420,192,480,128,540,117.3C600,107,660,149,720,176C780,203,840,213,900,224C960,235,1020,245,1080,229.3C1140,213,1200,171,1260,176C1320,181,1380,235,1410,261.3L1440,288L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z'
            : ''
        }
      ></path>
      <path
        fill={color}
        fillOpacity="1"
        d={
          type === 'bottom'
            ? 'M0,192L40,213.3C80,235,160,277,240,250.7C320,224,400,128,480,117.3C560,107,640,181,720,218.7C800,256,880,256,960,224C1040,192,1120,128,1200,96C1280,64,1360,64,1400,64L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'
            : type === 'top'
            ? 'M0,128L30,149.3C60,171,120,213,180,234.7C240,256,300,256,360,224C420,192,480,128,540,117.3C600,107,660,149,720,176C780,203,840,213,900,224C960,235,1020,245,1080,229.3C1140,213,1200,171,1260,176C1320,181,1380,235,1410,261.3L1440,288L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z'
            : ''
        }
      ></path>
    </svg>
  );
}

export default Wave;
