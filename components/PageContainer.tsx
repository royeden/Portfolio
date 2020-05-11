import React, { ReactNode } from 'react';

import Fade from './Fade';

type PageContainerProps = {
  children: ReactNode;
};

const slideUpVariants = {
  in: {
    y: 0
  },
  out: {
    y: '5%'
  }
};

function PageContainer({ children }: PageContainerProps): JSX.Element {
  return (
    <Fade animate={['in']} initial={['out']} variants={slideUpVariants}>
      {children}
    </Fade>
  );
}

export default PageContainer;
