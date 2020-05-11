import React, { ReactNode, useMemo } from 'react';
import { Variants, Transition, motion } from 'framer-motion';

const fadeVariants = {
  visible: { opacity: 1 },
  invisible: { opacity: 0 }
};

type FadeProps = {
  animate?: string[];
  children: ReactNode;
  component?: 'a' | 'button' | 'div';
  initial?: string[];
  initialVisible?: boolean;
  transition?: Transition;
  variants?: Variants;
  visible?: boolean;
};

function Fade({
  animate = [],
  children,
  component = 'div',
  initial = [],
  initialVisible = false,
  transition = { duration: 0.4, ease: 'easeInOut' },
  variants = {},
  visible = true
}: FadeProps): JSX.Element {
  const Component = motion[component];
  const initialVisibility = useMemo(
    () => (initialVisible ? 'visible' : 'invisible'),
    [initialVisible]
  );
  const visibility = useMemo(() => (visible ? 'visible' : 'invisible'), [
    visible
  ]);
  return (
    <Component
      animate={[...animate, visibility]}
      initial={[...initial, initialVisibility]}
      style={{
        height: '100%',
        width: '100%'
      }}
      transition={transition}
      variants={{ ...variants, ...fadeVariants }}
    >
      {children}
    </Component>
  );
}

export default Fade;
