'use client';
import { EventHandlersMap } from '@/src/@packages/pub-sub/core/type';
import React from 'react';
import { MyEvent } from './domain';
import { PubSubManager } from '@/src/@packages/pub-sub/core/core';

export const pubSubManager = new PubSubManager<MyEvent>();

interface PubSubProps extends React.PropsWithChildren {
  handler: EventHandlersMap<MyEvent>;
}

const PubSubWrapper = ({ children, handler }: PubSubProps) => {
  React.useEffect(() => {
    pubSubManager.initiate(handler);
  }, [handler]);
  return <>{children}</>;
};

export const PubSubProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <PubSubWrapper
      handler={{
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
      }}
    >
      {children}
    </PubSubWrapper>
  );
};
