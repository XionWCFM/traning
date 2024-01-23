'use client';

import { useRootStore } from '@/src/@infrastructure/store/client/client-store';
import React from 'react';
import { publishLogEvent } from '@/src/@infrastructure/logger/domain';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {}
export const Button = (prop: ButtonProps) => {
  const store = useRootStore();

  return (
    <button
      onClick={() => {
        publishLogEvent({
          type: 'CREATE_USER',
          eventName: ['traning', 'cta-button', 'click'],
          eventPath: ['traning', 'cart', 'bottom-sheet', 'cta-button'],
          eventUser: {
            age: 20,
            isLogin: true,
          },
        });
      }}
      {...prop}
    >
      {prop.children}
    </button>
  );
};
