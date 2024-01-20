import { EventNameTuple, UserEventName } from '../../domain/event/event-name';
import { EventPathTuple, UserEventPath } from '../../domain/event/event-path';
import { EventProperty } from '../../domain/event/event-property';
import { LogEvent } from '../../domain/event/log-event';

export type UserTrackerPort = {
  track(log: LogEvent): void;

  createLogEvent(
    eventName: UserEventName,
    eventPath: UserEventPath,
    properties: EventProperty,
  ): LogEvent;
};

export type UserTracker = {
  track(
    eventName: EventNameTuple,
    eventPath: EventPathTuple,
    properties?: EventProperty,
  ): void;
};
