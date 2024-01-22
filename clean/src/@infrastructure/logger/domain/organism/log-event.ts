import { LogEvent } from '@/src/@packages/log/core/type';
import { MyEventEnvironment } from './event-environment';
import { MyEventProperty } from './event-property';
import { MyEventUser } from './event-user';

export type MyLogEvent = { type: 'logger_event_publish' } & LogEvent<
  MyEventUser,
  MyEventProperty,
  MyEventEnvironment
>;
