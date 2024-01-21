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
        (event) => {
          console.log('생성하기 유저', event);
        },
      ],
      DELETE_USER: [
        (event) => {
          console.log('지우기 유저', event);
        },
      ],
    };
    pubSubManager.initiate(handlers);
  }, []);
  return children;
};
