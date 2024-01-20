import { UserEventName } from './event-name';
import { UserEventPath } from './event-path';
import { EventProperty } from './event-property';

export type LogEvent<EventUser extends Record<string, any> = {}> = {
  eventUser: EventUser;
  eventProperty: EventProperty;
  eventName: UserEventName;
  eventPath: UserEventPath;
  eventTime: ISODate;
};
