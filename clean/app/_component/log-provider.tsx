'use client';

import { loggerPubSub } from '@/src/@infrastructure/logger/domain';
import React from 'react';

export const LogProvider = ({ children }: React.PropsWithChildren) => {
  React.useEffect(() => {
    loggerPubSub.initiate({
      CREATE_USER: [
        (event) => {
          console.group('logger event pubsub');
          console.log('😌 여기서 api 요청 날려버리면 됨 😉');
          console.log('로그이벤트내용', event);
          console.groupEnd();
        },
      ],
      UPDATE_USER: [
        (event) => {
          console.group('logger event pubsub');
          console.log('😌 여기서 api 요청 날려버리면 됨 😉');
          console.log('로그이벤트내용', event);
          console.groupEnd();
        },
      ],
    });
    return () => loggerPubSub.initialize();
  }, []);
  return children;
};
