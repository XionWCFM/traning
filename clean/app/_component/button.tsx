'use client';

import { useLogger } from '@/src/@packages/logger/application/implement/use-logger';
import { MyEvent } from '@/src/@infrastructure/pub-sub-example/domain';
import { pubSubManager } from '@/src/@infrastructure/pub-sub-example/provider';
import { useRootStore } from '@/src/@infrastructure/store/client/client-store';
import { EventHandler } from '@/src/@packages/pub-sub/core/type';
import React from 'react';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {}
export const Button = (prop: ButtonProps) => {
  const { track } = useLogger();
  const store = useRootStore();

  React.useEffect(() => {
    const handler: EventHandler<MyEvent> = (event) => {
      console.log('handler event');
    };
    pubSubManager.subscribe('CREATE_USER', handler);
    return () => pubSubManager.unsubscribe('CREATE_USER', handler);
  }, []);

  return (
    <button
      onClick={() => {
        console.group('이벤트를 봅시다');
        pubSubManager.publish({ type: 'CREATE_USER', userName: 'moonjae' });

        console.groupEnd();
        track(
          ['traning', 'cta-button', 'click'],
          ['traning', 'cart', 'bottom-sheet', 'cta-button'],
        );
      }}
      {...prop}
    >
      {prop.children}
    </button>
  );
};
