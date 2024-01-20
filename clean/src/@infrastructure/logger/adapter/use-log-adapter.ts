import { UserTrackerPort } from '../application/ports/user-tracker';
import { ENV } from '../../environment/env';
import { useLogRepository } from '../infrastructure/repository';

export const useLogAdapter = (): UserTrackerPort => {
  const api = useLogRepository();

  return {
    track: (logEvent) => {
      api.create.mutate(logEvent);
    },
    createLogEvent: (eventName, eventPath, eventProperty) => {
      return {
        eventName,
        eventPath,
        eventProperty,
        eventTime: new Date().toISOString(),
        eventUser: {},
        eventEnvironment: {
          device: 'iphone',
          environment: ENV.environemnt,
        },
      };
    },
  };
};
