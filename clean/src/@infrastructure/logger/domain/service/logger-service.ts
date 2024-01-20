import { EventNameTuple, UserEventName } from '../event/event-name';
import { EventPathTuple, UserEventPath } from '../event/event-path';

interface ILoggerService {
  tupleToStringName: (event: EventNameTuple) => UserEventName;
  tupleToStringPath: (event: EventPathTuple) => UserEventPath;
  stringToTupleName: (event: UserEventName) => EventNameTuple;
  stringToTuplePath: (event: UserEventPath) => EventPathTuple;
}

export class LoggerService implements ILoggerService {
  constructor() {}
  tupleToStringName(event: EventNameTuple) {
    return event.join('_') as UserEventName;
  }
  tupleToStringPath(event: EventPathTuple) {
    return event.join('_') as UserEventPath;
  }
  stringToTupleName(event: UserEventName) {
    return event.split('_') as EventNameTuple;
  }
  stringToTuplePath(event: UserEventPath) {
    return event.split('_') as EventPathTuple;
  }
}
