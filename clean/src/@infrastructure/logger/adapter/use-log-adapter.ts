import { DeviceHelper } from '../../../@packages/device-helper/device-helper';
import { useUserQuery } from '../../store/server/api/user/use-user-query';
import { UserTrackerPort } from '../application/ports/user-tracker';
import { useLogRepository } from '../infrastructure/repository';

export const useLogAdapter = (): UserTrackerPort => {
  const api = useLogRepository();
  const user = useUserQuery();

  return {
    track: (logEvent) => {
      api.create(logEvent);
    },
    createLogEvent: (eventName, eventPath, eventProperty) => {
      const deviceHelper = new DeviceHelper();
      const eventUser = user.data ?? {};
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
