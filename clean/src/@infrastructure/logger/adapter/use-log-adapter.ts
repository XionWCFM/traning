import { DeviceHelper } from '../../device-helper/device-helper';
import { UserTrackerPort } from '../application/ports/user-tracker';
import { useLogRepository } from '../infrastructure/repository';

export const useLogAdapter = (): UserTrackerPort => {
  const api = useLogRepository();

  return {
    track: (logEvent) => {
      api.create(logEvent);
    },
    createLogEvent: (eventName, eventPath, eventProperty) => {
      const deviceHelper = new DeviceHelper();
      return {
        eventName,
        eventPath,
        eventProperty,
        eventTime: new Date().toISOString(),
        eventUser: {},
        eventEnvironment: {
          device: deviceHelper.getDevice(),
          environment: process.env.NODE_ENV,
        },
      };
    },
  };
};
