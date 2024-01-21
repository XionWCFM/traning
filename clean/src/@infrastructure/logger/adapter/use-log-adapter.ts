'use client';
import { DeviceHelper } from '../../../@packages/device-helper/device-helper';
import { useLogMutation } from '../../store/server/api/log/use-log-mutation';
import { useUserQuery } from '../../store/server/api/user/use-user-query';
import { UserTrackerPort } from '../application/ports/user-tracker';
import { EventUser } from '../domain/event/event-user';

export const useLogAdapter = (): UserTrackerPort => {
  const user = useUserQuery();
  const log = useLogMutation();
  return {
    track: async (logEvent) => {
      return log.mutateAsync(logEvent);
    },
    createLogEvent: (eventName, eventPath, eventProperty) => {
      const isLogin = user.data !== null;
      const deviceHelper = new DeviceHelper();
      const eventUser: EventUser = isLogin
        ? { type: 'login-user', isLogin, ...user.data }
        : { type: 'anonymous', isLogin };
      return {
        eventName,
        eventPath,
        eventProperty,
        eventUser,
        eventTime: new Date().toISOString(),
        eventEnvironment: {
          device: deviceHelper.getDevice(),
          environment: process.env.NODE_ENV,
        },
      };
    },
  };
};
