'use client';
import { EventHandlersMap } from '@/src/@packages/pub-sub/type';
import React from 'react';
import { MyEvent } from './domain';
import { PubSubManager } from '@/src/@packages/pub-sub/core';

const pubSubManager = new PubSubManager<MyEvent>();

interface PubSubProps extends React.PropsWithChildren {
  handler: EventHandlersMap<MyEvent>;
}

export const PubSubProvider = ({ children, handler }: PubSubProps) => {
  React.useEffect(() => {
    pubSubManager.initiate(handler);
  }, [handler]);
  return <>{children}</>;
};
