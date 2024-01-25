'use client';

import { useRootStore } from '@/src/@infrastructure/store/client/client-store';
import React from 'react';
import { publishLogEvent } from '@/src/@infrastructure/logger/domain';
import { pubSubManager } from '@/src/@infrastructure/pub-sub-example/provider';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {}
export const Button = (prop: ButtonProps) => {
  return (
    <button
      onClick={() => {
        pubSubManager.publish({ type: 'CREATE_USER', userName: 'helloworld' });
      }}
      {...prop}
    >
      {prop.children}
    </button>
  );
};
