'use client';

import React from 'react';
import { logger } from './logger';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {}
export const Button = (prop: ButtonProps) => {
  return (
    <button
      onClick={() => {
        logger.publishLogEvent({
          type: 'LOGGING_EVENT',
          eventName: ['hello', 'button', 'click'],
          eventPath: ['hello', 'main', 'popular-content', 'button'],
          eventUser: {
            age: 23,
            isLogin: true,
            userName: 'umjoonsikc',
          },
        });
      }}
      {...prop}
    >
      {prop.children}
    </button>
  );
};
