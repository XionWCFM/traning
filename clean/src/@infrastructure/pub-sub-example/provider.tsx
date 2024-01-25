'use client';
import { EventHandlersMap } from '@/src/@packages/pub-sub/core/type';
import React from 'react';
import { MyEvent } from './domain';
import { PubSubManager } from '@/src/@packages/pub-sub/core/core';

export const pubSubManager = new PubSubManager<MyEvent>();

export const PubSubProvider = ({ children }: React.PropsWithChildren) => {
  React.useEffect(() => {
    const handlers: EventHandlersMap<MyEvent> = {
      CREATE_USER: [
        (e) => {
          console.group(' 😉 pub-sub example start');
          console.log(e);
          console.log('여기서 뭔가를 하면 되겠네용');
          console.groupEnd();
        },
      ],
    };
    pubSubManager.initiate(handlers);
    return () => pubSubManager.initialize();
  }, []);
  return children;
};
