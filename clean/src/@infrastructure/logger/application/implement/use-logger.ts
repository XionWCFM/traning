import { useLogAdapter } from '../../adapter/use-log-adapter';
import { LoggerService } from '../../domain/service/logger-service';
import { UserTracker } from '../ports/user-tracker';

// logger implement
export const useLogger = (): UserTracker => {
  const { track, createLogEvent } = useLogAdapter();
  return {
    track: (eventNameTuple, eventPathTuple, injectEventProperty) => {
      const service = new LoggerService();
      const eventName = service.tupleToStringName(eventNameTuple);
      const eventPath = service.tupleToStringPath(eventPathTuple);
      const eventProperty = service.createEventProperty(injectEventProperty);
      const logEvent = createLogEvent(eventName, eventPath, eventProperty);
      track(logEvent);
      console.log('is side effect 😍 we success to logging');
    },
  };
};
