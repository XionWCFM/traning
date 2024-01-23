import { LogEventDetailCreator } from '@/src/@packages/logger/@types/creator/log-event-detail-creator';
import { LogEventCreator } from '@/src/@packages/logger/@types/creator/log-event-creator';
import { MyAtom } from '../atom/atom';
import {
  LogEventEnvironment,
  LogEventProperty,
} from '@/src/@packages/logger/@types/type';

type EventVariable = 'CREATE_USER' | 'UPDATE_USER';

export type MyEventEnvironment = LogEventEnvironment;

export type MyEventUser = {
  age: number;
  isLogin: boolean;
};
export type MyEventProperty = LogEventProperty;

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
