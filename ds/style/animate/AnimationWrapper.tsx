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
  type: 'slide';
  direction: 'left' | 'right' | 'top' | 'bottom';
  duration: number;
  children?: React.ReactNode;
  isOpen: boolean;
  className?: string;
}

const AnimationWrapper = (
  { type, direction, duration, isOpen, children, className }: PopAnimationProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  let varaint;
  switch (type) {
    case 'slide':
  }
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className={className}
          initial={{
            x: '-100%',
          }}
          animate={{
            x: 0,
          }}
          exit={{
            x: '-100%',
          }}
          ref={ref}
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default React.forwardRef(AnimationWrapper);
