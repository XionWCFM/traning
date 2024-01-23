import {
  LogEventCreator,
  LogEventDetailCreator,
} from '@/src/@packages/logger/core/type';
import { MyAtom } from '../atom/atom';
import { MyEventEnvironment } from './event-environment';
import { MyEventProperty } from './event-property';
import { MyEventUser } from './event-user';

type EventVariable = 'CREATE_USER' | 'UPDATE_USER';

export type CreateUserLogEvent = LogEventCreator<
  LogEventDetailCreator<
    EventVariable,
    MyEventUser,
    MyEventProperty,
    MyEventEnvironment
  >,
  MyAtom,
  '_'
>;
