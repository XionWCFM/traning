import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { fetcher } from '@/src/@shared/effect/fetcher/fetcher';
import { UserTrackerPort } from '../application/ports/user-tracker';

export const useLogAdapter = (): UserTrackerPort => {
  const logMutation = useMutation({
    mutationFn: async (logEvent: Record<string, any>) =>
      fetcher.post('/log', {
        body: JSON.stringify(logEvent),
      }),
  });

  return {
    track: (logEvent) => {
      logMutation.mutate(logEvent);
    },
    createLogEvent: (eventName, eventPath, eventProperty) => {
      return {
        eventName: 'traning_cta-button_click',
        eventPath: 'traning_cart_bottom-sheet_login-button',
        eventTime: new Date().toISOString(),
        eventUser: {},
        eventProperty: {},
      };
    },
  };
};
