import { LogEventCreator } from '@/src/@packages/logger/core/type';
import { MyEventEnvironment } from './event-environment';
import { MyEventProperty } from './event-property';
import { MyEventUser } from './event-user';

export type MyLogEvent = LogEventCreator<
  'logger_event_publish',
  MyEventUser,
  MyEventProperty,
  MyEventEnvironment
>;
