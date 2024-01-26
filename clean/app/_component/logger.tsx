'use client';
import { MyLogEvent } from '@/src/@infrastructure/logger';
import { Logger } from '@/src/@packages/logger/core/logger';
import React from 'react';

export const logger = new Logger<MyLogEvent>();

export const LoggerProvider = () => {
  React.useEffect(() => {
    const handler = (event: MyLogEvent['logEvent']) => {
      console.log('hi');
    };

    logger.subscribe('LOGGING_EVENT', handler);
    return () => logger.unsubscribe('LOGGING_EVENT', handler);
  }, []);
  return null;
};
