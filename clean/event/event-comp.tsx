'use client';
import { objectEntries } from '@/src/@shared/utils/object/object-entries';
import { Handlers } from './domain';
import { PubSubManager } from './service';
import React from 'react';

export const pubSubManager = new PubSubManager();

interface PubSubProps extends React.PropsWithChildren {
  handler: Handlers;
}
export const PubSubProvider = ({ children, handler }: PubSubProps) => {
  React.useEffect(() => {
    const entries = objectEntries(handler);
    entries.forEach(([type, handlers]) => {
      handlers?.forEach((handler) => {
        pubSubManager.subscribe(type, handler);
      });
    });
  }, [handler]);
  return <>{children}</>;
};
