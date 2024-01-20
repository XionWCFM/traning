import { LoggerService } from '../../domain/service/logger-service';
import { UserTracker } from '../ports/user-tracker';

export const useLogger = (): UserTracker => {
  return {
    track: (eventNameTuple, eventPathTuple, eventProperty) => {
      const service = new LoggerService();
      const eventName = service.tupleToStringName(eventNameTuple);
      const eventPath = service.tupleToStringPath(eventPathTuple);
      
    },
  };
};
