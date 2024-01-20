import { EventNameTuple } from '../../domain/event/event-name';
import { EventPathTuple } from '../../domain/event/event-path';

export type UserTracker = {
  track(
    eventName: EventNameTuple,
    evnetPath: EventPathTuple,
    properties?: Record<string, any>,
  ): void;
};
