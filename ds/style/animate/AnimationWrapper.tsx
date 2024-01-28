'use client';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const directionToValue = (direction: 'left' | 'right' | 'top' | 'bottom') => {
  switch (direction) {
    case 'left':
      return -50;
    case 'right':
      return 50;
    case 'top':
      return -50;
    case 'bottom':
      return 50;
    default:
      return 0;
  }
};

interface FadeAnimationProps {
  type: 'fade' | 'pop';
  duration: number;
  children?: React.ReactNode;
  direction?: never;
  isOpen: boolean;
}

interface PopAnimationProps {
  type: 'pop';
  direction: 'left' | 'right' | 'top' | 'bottom';
  duration: number;
  children?: React.ReactNode;
  isOpen: boolean;
}

const AnimationWrapper = (
  {
    type,
    direction,
    duration,
    isOpen,
    children,
  }: FadeAnimationProps | PopAnimationProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{
            x: 0,
          }}
          animate={{
            x: 50,
          }}
          exit={{
            x: 0,
          }}
          ref={ref}
        >
          <div className=" h-64 w-64 bg-primary"></div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default React.forwardRef(AnimationWrapper);
