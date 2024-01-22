import { EventNameTuple, UserEventName } from '../event/event-name';
import { EventPathTuple, UserEventPath } from '../event/event-path';
import { EventProperty } from '../event/event-property';

interface ILoggerService {
  tupleToStringName: (event: EventNameTuple) => UserEventName;
  tupleToStringPath: (event: EventPathTuple) => UserEventPath;
  stringToTupleName: (event: UserEventName) => EventNameTuple;
  stringToTuplePath: (event: UserEventPath) => EventPathTuple;
  createEventProperty: (property: unknown) => EventProperty;
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
  createEventProperty(property: unknown) {
    if (property === null) return {};
    if (typeof property !== 'object') return {};
    return property;
  }
}
