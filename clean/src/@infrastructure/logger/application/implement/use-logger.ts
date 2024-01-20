import { UserTracker } from '../ports/user-tracker';

export const useLogger = (): UserTracker => {
  return {
    track: (eventNameTuple, eventPathTuple, eventProperty) => {},
  };
};
