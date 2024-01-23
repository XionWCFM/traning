import { LogEventDetailCreator } from '@/src/@packages/logger/@types/creator/log-event-detail-creator';
import { LogEventCreator } from '@/src/@packages/logger/@types/creator/log-event-creator';
import { MyAtom } from '../atom/atom';
import { MyEventEnvironment } from './event-environment';
import { MyEventProperty } from './event-property';
import { MyEventUser } from './event-user';

type EventVariable = 'CREATE_USER' | 'UPDATE_USER';

export type UserLogEvent = LogEventCreator<
  LogEventDetailCreator<
    EventVariable,
    MyEventUser,
    MyEventProperty,
    MyEventEnvironment
  >,
  MyAtom,
  '_'
>;
