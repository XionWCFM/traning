import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { UserTrackerPort } from '../application/ports/user-tracker';
import { delay } from '@/src/@shared/utils/promise/delay';

export const useLogAdapter = (): UserTrackerPort => {
  const logMutation = useMutation({
    mutationFn: async (logEvent: Record<string, any>) => await delay(1000),
  });

  return {
    track: (logEvent) => {
      logMutation.mutate(logEvent);
    },
    createLogEvent: (eventName, eventPath, eventProperty) => {
      return {
        eventName,
        eventPath,
        eventProperty,
        eventTime: new Date().toISOString(),
        eventUser: {},
      };
    },
  };
};