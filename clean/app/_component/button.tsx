'use client';

import {
  loggerCreator,
  loggerPubSubManager,
} from '@/src/@infrastructure/logger/hi';
import { MyEvent } from '@/src/@infrastructure/pub-sub-example/domain';
import { pubSubManager } from '@/src/@infrastructure/pub-sub-example/provider';
import { useRootStore } from '@/src/@infrastructure/store/client/client-store';
import { EventHandler } from '@/src/@packages/pub-sub/core/type';
import React from 'react';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {}
export const Button = (prop: ButtonProps) => {
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
        const logEvent = loggerCreator.createLogEvent('logger_event_publish', {
          eventUser: {},
          eventName: ['dsa', 'd', 'fd'],
          eventPath: ['asd', 'ds', 'sd', 'fd'],
        });
        loggerPubSubManager.publish(logEvent);

        console.group('이벤트를 봅시다');
        pubSubManager.publish({ type: 'CREATE_USER', userName: 'moonjae' });

        console.groupEnd();
      }}
      {...prop}
    >
      {prop.children}
    </button>
  );
};
